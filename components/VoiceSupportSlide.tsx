'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import styles from './VoiceSupportSlide.module.css';

interface VoiceSupportSlideProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VoiceSupportSlide({ isOpen, onClose }: VoiceSupportSlideProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousFocus = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const previousOverflow = document.body.style.overflow;

    dialog.showModal();
    document.body.style.overflow = 'hidden';
    headingRef.current?.focus({ preventScroll: true });

    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      id="voice-support-slide"
      className={styles.panel}
      aria-labelledby="voice-support-slide-heading"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right
          || event.clientY < bounds.top || event.clientY > bounds.bottom) {
          onClose();
        }
      }}
    >
      <header className={styles.header}>
        <h2 ref={headingRef} id="voice-support-slide-heading" tabIndex={-1} className={styles.title}>
          Voice Support That Feels Like Part of Your Team
        </h2>
        <button type="button" onClick={onClose} className={styles.close} aria-label="Close Voice Support details">
          <X aria-hidden="true" size={22} />
        </button>
      </header>

      <div className={styles.body}>
        <p>
          Give your customers a trained specialist to speak with when they need an answer. We handle inbound calls and outbound callbacks, learn your products and policies, and work in your existing tools. Every call ends with a clear next step, whether we resolve the issue, schedule a follow-up, or pass it to the right person on your team.
        </p>

        <section aria-labelledby="voice-support-handle-heading" className={styles.section}>
          <h3 id="voice-support-handle-heading">What We Handle</h3>
          <ul className={styles.list}>
            <li><strong>Orders, deliveries, and returns:</strong> Check order status, explain return policies, and help customers understand their options.</li>
            <li><strong>Billing and account questions:</strong> Clarify charges, assist with routine account requests, and escalate cases that need approval.</li>
            <li><strong>Callbacks and follow-ups:</strong> Contact customers when an update is available or when more information is needed to close a case.</li>
            <li><strong>Complex cases:</strong> Record what the customer reported, what we checked, and what your team needs to do next.</li>
          </ul>
        </section>

        <section aria-labelledby="voice-support-how-heading" className={styles.section}>
          <h3 id="voice-support-how-heading">How It Works</h3>
          <p>
            Before launch, we agree on your coverage hours, call guidelines, and which decisions our agents can make. For example, if a package is marked delivered but hasn’t arrived, the agent checks the tracking details, explains the next step, and arranges a callback if the carrier needs time to investigate.
          </p>
        </section>

        <section aria-labelledby="voice-support-track-heading" className={styles.section}>
          <h3 id="voice-support-track-heading">What You Can Track</h3>
          <p>
            See how many calls were answered, how long customers waited, and how often issues were resolved on the first call. We review calls against your agreed quality standards and use recurring questions to identify where training or clearer policies could help.
          </p>
        </section>

        <div className={styles.action}>
          <a href="/contact" className={styles.cta}>Request Callback</a>
        </div>
      </div>
    </dialog>
  );
}
