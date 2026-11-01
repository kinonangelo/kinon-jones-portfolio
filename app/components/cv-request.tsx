"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";

export function CvRequest() {
  const [isOpen, setIsOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    dialog.current?.showModal();
    const returnFocus = trigger.current;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
      returnFocus?.focus();
    };
  }, [isOpen]);

  useEffect(
    () => () => {
      if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    },
    [downloadUrl],
  );

  function close() {
    if (busy) return;
    setIsOpen(false);
    setDownloadUrl("");
    setError("");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/cv-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          company: data.get("company"),
          role: data.get("role"),
          consent: data.get("consent") === "on",
        }),
      });
      if (!response.ok) {
        const result = (await response.json()) as { error?: string };
        throw new Error(result.error || "Please try again shortly.");
      }
      const url = URL.createObjectURL(await response.blob());
      setDownloadUrl(url);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Kinon-Jones-Aerospace-Structural-Engineering-CV.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (reason) {
      setError(
        reason instanceof Error ? reason.message : "Please try again shortly.",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="button button-secondary"
        onClick={() => setIsOpen(true)}
      >
        Download my CV <span aria-hidden="true">↓</span>
      </button>
      {isOpen &&
        createPortal(
          <dialog
            ref={dialog}
            aria-labelledby="cv-title"
            onCancel={(event) => {
              event.preventDefault();
              close();
            }}
            className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto border border-neutral-300 bg-[#f8f8f6] p-6 text-neutral-900 backdrop:bg-black/40 sm:p-8"
          >
            <div className="flex items-start justify-between gap-5">
              <h2 id="cv-title" className="text-2xl font-medium tracking-tight">
                Download my CV
              </h2>
              <button
                type="button"
                onClick={close}
                disabled={busy}
                className="min-h-10 px-2 text-sm text-neutral-600 disabled:opacity-50"
              >
                Close
              </button>
            </div>
            {downloadUrl ? (
              <div className="mt-6 space-y-5 text-sm leading-7">
                <p role="status">
                  Thank you. Your request has been saved and your CV download
                  has started.
                </p>
                <a
                  href={downloadUrl}
                  download="Kinon-Jones-Aerospace-Structural-Engineering-CV.pdf"
                  className="underline underline-offset-4"
                >
                  Download again if needed
                </a>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-6" aria-busy={busy}>
                <fieldset disabled={busy} className="grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      name: "firstName",
                      label: "First name",
                      placeholder: "Enter your first name",
                      autoComplete: "given-name",
                      required: true,
                      max: 100,
                    },
                    {
                      name: "lastName",
                      label: "Last name",
                      placeholder: "Enter your last name",
                      autoComplete: "family-name",
                      required: true,
                      max: 100,
                    },
                    {
                      name: "email",
                      label: "Email address",
                      placeholder: "Enter your email address",
                      autoComplete: "email",
                      required: true,
                      max: 254,
                    },
                    {
                      name: "company",
                      label: "Company / organisation",
                      placeholder: "Company name (if applicable)",
                      autoComplete: "organization",
                      required: false,
                      max: 200,
                    },
                    {
                      name: "role",
                      label: "Job title / role",
                      placeholder: "Your role (optional)",
                      autoComplete: "organization-title",
                      required: false,
                      max: 200,
                    },
                  ].map((field) => (
                    <label
                      key={field.name}
                      className={`grid gap-2 text-sm ${field.name !== "firstName" && field.name !== "lastName" ? "sm:col-span-2" : ""}`}
                    >
                      <span>
                        {field.label}
                        {field.required && " *"}
                      </span>
                      <input
                        name={field.name}
                        type={field.name === "email" ? "email" : "text"}
                        required={field.required}
                        maxLength={field.max}
                        autoComplete={field.autoComplete}
                        placeholder={field.placeholder}
                        className="min-w-0 w-full border border-neutral-400 bg-transparent px-3 py-3 text-base placeholder:text-neutral-500"
                      />
                    </label>
                  ))}
                  <label className="flex items-start gap-3 text-sm leading-6 sm:col-span-2">
                    <input
                      type="checkbox"
                      name="consent"
                      className="mt-1 h-4 w-4 shrink-0 accent-neutral-900"
                    />
                    <span>
                      I’m happy for Kinon to contact me regarding relevant
                      opportunities or to follow up on my CV request.
                    </span>
                  </label>
                </fieldset>
                <p className="mt-5 text-xs leading-6 text-neutral-600">
                  Your details will only be used to provide access to my CV and,
                  where you have opted in, to follow up with you. Your
                  information will not be shared with third parties.
                </p>
                {error && (
                  <p role="alert" className="mt-4 text-sm leading-6">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={busy}
                  className="button button-primary mt-6 disabled:opacity-60"
                >
                  {busy ? "Preparing download…" : "Download CV"}
                </button>
              </form>
            )}
          </dialog>,
          document.body,
        )}
    </>
  );
}
