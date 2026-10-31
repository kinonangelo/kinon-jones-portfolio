"use client";

import { useEffect, useId, useRef, useState } from "react";
import styles from "./project-film.module.css";

const base = "/media/teams-dissertation/teams-model";
const formatTime = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

export function ProjectFilm({ teaser = false }: { teaser?: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const userPaused = useRef(false);
  const finished = useRef(false);
  const inView = useRef(false);
  const manualPlayback = useRef(false);
  const syncPlayback = useRef<() => void>(() => {});
  const [load, setLoad] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(teaser ? 12 : 72.6);
  const [error, setError] = useState("");
  const descriptionId = useId();
  const name = teaser ? "teaser" : "web";

  useEffect(() => {
    const element = video.current;
    const container = wrapper.current;
    if (!element || !container) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    const allowed = () => inView.current && !document.hidden && !userPaused.current && !finished.current && (!reduced.matches || manualPlayback.current);
    const sync = () => {
      if (!inView.current || document.hidden) manualPlayback.current = false;
      if (!allowed()) {
        element.pause();
        return;
      }
      if (element.readyState >= 2) {
        void element.play().then(() => {
          // An offscreen event can arrive while play() is still pending.
          if (disposed || !allowed()) element.pause();
        }).catch(() => { /* Autoplay denied: the manual Play control stays available. */ });
      }
    };
    syncPlayback.current = sync;
    const preferenceChanged = () => { manualPlayback.current = false; sync(); };
    const loader = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setLoad(true); loader.disconnect(); }
    }, { rootMargin: "300px" });
    const visibility = new IntersectionObserver(([entry]) => {
      inView.current = entry.isIntersecting && entry.intersectionRatio >= 0.5;
      sync();
    }, { threshold: [0, 0.5, 1] });
    loader.observe(container);
    visibility.observe(element);
    document.addEventListener("visibilitychange", sync);
    reduced.addEventListener("change", preferenceChanged);
    return () => {
      disposed = true;
      element.pause();
      loader.disconnect();
      visibility.disconnect();
      document.removeEventListener("visibilitychange", sync);
      reduced.removeEventListener("change", preferenceChanged);
      syncPlayback.current = () => {};
    };
  }, []);

  useEffect(() => { if (load) video.current?.load(); }, [load]);

  const togglePlayback = async () => {
    const element = video.current;
    if (!element) return;
    if (!element.paused) {
      userPaused.current = true;
      manualPlayback.current = false;
      element.pause();
      return;
    }
    userPaused.current = false;
    manualPlayback.current = true;
    finished.current = false;
    setLoad(true);
    if (!load) return; // onLoadedData honours this explicit play request.
    if (element.ended) element.currentTime = 0;
    try {
      await element.play();
      if (video.current !== element || !inView.current || document.hidden || userPaused.current) element.pause();
    } catch {
      setError("Playback could not start. Please try Play again.");
    }
  };

  const toggleSound = () => {
    const element = video.current;
    if (!element) return;
    element.muted = !element.muted;
    setMuted(element.muted);
  };

  const fullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (wrapper.current?.requestFullscreen) await wrapper.current.requestFullscreen();
      else {
        const native = video.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
        native?.webkitEnterFullscreen?.();
      }
    } catch { setError("Fullscreen is unavailable in this browser."); }
  };

  return <figure className={styles.film} aria-label="Microsoft Teams dissertation showcase">
    <div ref={wrapper} className={styles.player}>
      <video ref={video} width={1920} height={1080} muted playsInline preload={load ? "metadata" : "none"}
        poster={`${base}-poster.jpg`} aria-label={`${teaser ? "12-second preview" : "73-second film"}: a proposed integrated Microsoft Teams model`}
        aria-describedby={descriptionId}
        onLoadedData={() => syncPlayback.current()}
        onLoadedMetadata={() => { if (video.current && Number.isFinite(video.current.duration)) setDuration(video.current.duration); }}
        onPlay={() => { setPlaying(true); setError(""); }} onPause={() => setPlaying(false)}
        onVolumeChange={() => setMuted(video.current?.muted ?? true)}
        onTimeUpdate={() => setTime(video.current?.currentTime ?? 0)}
        onEnded={() => { finished.current = true; setPlaying(false); }}
        onError={() => setError("The film could not be loaded. You can open the MP4 below.")}
      >
        {load && <><source src={`${base}-${name}.webm`} type="video/webm" /><source src={`${base}-${name}.mp4`} type="video/mp4" /></>}
        <track kind="captions" src={`${base}-${teaser ? "teaser" : "captions"}.vtt`} srcLang="en" label="English on-screen text" />
        Your browser does not support embedded video.
      </video>
      <div className={styles.controls} role="group" aria-label="Film playback controls">
        <button type="button" onClick={togglePlayback} aria-label={playing ? "Pause film" : "Play film"}>
          <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span><span>{playing ? "Pause" : "Play"}</span>
        </button>
        <label className={styles.seek}><span className="sr-only">Seek through film</span><input type="range" min={0} max={duration} step={0.1} value={Math.min(time, duration)}
          aria-valuetext={`${formatTime(time)} of ${formatTime(duration)}`}
          onChange={(event) => { if (video.current) { video.current.currentTime = Number(event.target.value); setTime(Number(event.target.value)); finished.current = false; } }} /></label>
        <span className={styles.time}>{formatTime(time)} / {formatTime(duration)}</span>
        <button type="button" onClick={toggleSound} aria-label={muted ? "Enable film sound" : "Mute film sound"} aria-pressed={!muted}>{muted ? "Sound off" : "Sound on"}</button>
        <button type="button" onClick={fullscreen} aria-label="Toggle film fullscreen"><span aria-hidden="true">⛶</span><span className={styles.fullscreenText}>Fullscreen</span></button>
      </div>
    </div>
    <figcaption id={descriptionId} className={styles.description}>
      {teaser ? "12-second preview from the dissertation film." : "73-second research film · A proposed integrated learning and collaboration model."}
      <span> Music: <a href="https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100058">Style Funk — Kevin MacLeod</a> (<a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>). Starts muted.</span>
    </figcaption>
    {error && <p role="status" className={styles.error}>{error} <a href={`${base}-${name}.mp4`}>Open MP4</a></p>}
    <details className={styles.transcript}>
      <summary>Film text & description</summary>
      <p>{teaser
        ? "One Team, One Module. General for lecturers and all students; private group channels for project teams. A guided module homepage tour shows module information, learning resources, class schedule, assignments, recent files and lecturer information. This preview is taken directly from the full dissertation film."
        : "Optimising Microsoft Teams — Kinon A. Southerton Jones. Teams was already part of university life, but quick conversations often moved elsewhere. The research included 63 questionnaire responses, five interviews and an observed six-member project including the researcher. 36 of 54 answers reported no formal Teams training. Implementation, familiarity and guidance mattered. The proposed model uses one Team per module, with General for lecturers and all students and private channels for project groups. A guided homepage tour leads into Class Notebook, assignment creation, the attached brief, student view and assessment rubric. Later views show Reflect, announcements, resources, shared reports and presentations, Planner, minutes, Whiteboard, risks and chat. One connected academic workspace. A proposed model for undergraduate learning, not a claim of validated educational outcomes. The soundtrack is instrumental, with no speech."}</p>
      <p>Music: “Style Funk” by <a href="https://incompetech.com/">Kevin MacLeod (incompetech.com)</a>, from the <a href="https://commons.wikimedia.org/wiki/File:Style_Funk_(ISRC_USUAN1100058).mp3">Wikimedia Commons recording</a>, licensed under <a href="https://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported</a>. Synchronised to this film; excerpted with fades and loudness adjustment. No endorsement is implied. <a href="/media/teams-dissertation/music-attribution.txt">Full attribution for reuse</a>.</p>
    </details>
  </figure>;
}
