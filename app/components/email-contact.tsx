"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { profile } from "../data/profile";
import styles from "./email-contact.module.css";

const subscribe = () => () => {};
const clipboardAvailable = () => typeof navigator.clipboard?.writeText === "function";
const noClipboardOnServer = () => false;
const gmailComposeUrl = `https://mail.google.com/mail/?${new URLSearchParams({ view: "cm", fs: "1", to: profile.email })}`;
const outlookComposeUrl = `https://outlook.live.com/mail/0/deeplink/compose?${new URLSearchParams({ to: profile.email })}`;

export function EmailContact({ children, className }: { children: ReactNode; className: string }) {
  const id = useId();
  const popover = useRef<HTMLDivElement>(null);
  const composeChoices = useRef<HTMLDetailsElement>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const canCopy = useSyncExternalStore(subscribe, clipboardAvailable, noClipboardOnServer);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  function reset() {
    if (composeChoices.current) composeChoices.current.open = false;
    if (resetTimer.current) clearTimeout(resetTimer.current);
    setStatus("idle");
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      if (!popover.current?.matches(":popover-open")) return;
      if (resetTimer.current) clearTimeout(resetTimer.current);
      setStatus("copied");
      resetTimer.current = setTimeout(() => setStatus("idle"), 2200);
    } catch {
      if (popover.current?.matches(":popover-open")) setStatus("error");
    }
  }

  return <>
    <button type="button" className={className} style={{ textAlign: "inherit", cursor: "pointer" }}
      popoverTarget={id} aria-haspopup="dialog">
      {children}
    </button>
    <div id={id} ref={popover} popover="auto" role="dialog" aria-labelledby={`${id}-title`}
      className={styles.popover} onToggle={() => {
        if (!popover.current?.matches(":popover-open")) reset();
      }}>
      <div className={styles.heading}>
        <h2 id={`${id}-title`}>Email me</h2>
        <button type="button" popoverTarget={id} popoverTargetAction="hide"
          className={styles.close} aria-label="Close email options" autoFocus>×</button>
      </div>
      <p className={styles.address}>{profile.email}</p>
      <div className={styles.actions}>
        <details ref={composeChoices} className={styles.compose}>
          <summary className="button button-primary">Compose email</summary>
          <div className={styles.providers}>
            <a className="button button-secondary" href={gmailComposeUrl}
              target="_blank" rel="noopener noreferrer" aria-label="Gmail (opens in a new tab)">Gmail</a>
            <a className="button button-secondary" href={outlookComposeUrl}
              target="_blank" rel="noopener noreferrer" aria-label="Outlook (opens in a new tab)">Outlook</a>
            <a className={`button button-secondary ${styles.defaultApp}`}
              href={`mailto:${profile.email}`}>Default email app</a>
          </div>
        </details>
        <button type="button" className="button button-secondary" disabled={!canCopy} onClick={copyEmail}>
          {status === "copied" ? "Email copied" : "Copy email address"}
        </button>
      </div>
      <p role="status" aria-live="polite" className={styles.status}>
        {status === "copied" ? "Email address copied to clipboard." :
          status === "error" || !canCopy ? "Select the email address above to copy it." : ""}
      </p>
    </div>
  </>;
}
