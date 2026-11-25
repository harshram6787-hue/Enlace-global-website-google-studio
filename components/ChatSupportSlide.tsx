'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import styles from './VoiceSupportSlide.module.css';

interface ChatSupportSlideProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatSupportSlide({ isOpen, onClose }: ChatSupportSlideProps) {
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
      id="chat-support-slide"
      className={styles.panel}
      aria-labelledby="chat-support-slide-heading"
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
        <h2 ref={headingRef} id="chat-support-slide-heading" tabIndex={-1} className={styles.title}>
          Live Chat Support That Helps Customers Take the Next Step
        </h2>
        <button type="button" onClick={onClose} className={styles.close} aria-label="Close Chat Support details">
          <X aria-hidden="true" size={22} />
        </button>
      </header>

      <div className={styles.body}>
        <p>
          When someone is comparing products, stuck at checkout, or looking for an order update, a timely answer can help them move forward. Our trained agents work in your existing live chat platform, using your product information, policies, and brand voice to give customers clear answers while they’re still on your site.
        </p>

        <section aria-labelledby="chat-support-handle-heading" className={styles.section}>
          <h3 id="chat-support-handle-heading">What We Handle</h3>
          <ul className={styles.list}>
            <li><strong>Product questions:</strong> Help shoppers compare options and check details such as sizing, availability, and delivery estimates.</li>
            <li><strong>Checkout assistance:</strong> Guide customers through common issues with discount codes, shipping options, or payment errors.</li>
            <li><strong>Order and account support:</strong> Check order status, explain return or cancellation options, and help with routine account questions.</li>
            <li><strong>Specialist handoffs:</strong> Pass along the chat history, what we’ve already checked, and what still needs to be resolved.</li>
          </ul>
        </section>

        <section aria-labelledby="chat-support-how-heading" className={styles.section}>
          <h3 id="chat-support-how-heading">How It Works</h3>
          <p>
            Before launch, we agree on coverage hours, response targets, and which issues your chat team can resolve directly. For example, if a shopper’s discount code fails at checkout, our agent checks the offer terms, explains why the code didn’t apply, and helps the shopper complete the order if they want to proceed.
          </p>
        </section>

        <section aria-labelledby="chat-support-track-heading" className={styles.section}>
          <h3 id="chat-support-track-heading">What You Can Track</h3>
          <p>
            See how quickly customers receive a first reply, how many chats the team resolves, and which issues are escalated most often. Recurring questions can also show where a product page or checkout instruction needs more clarity.
          </p>
        </section>

        <div className={styles.action}>
          <a href="/contact" className={styles.cta}>Request Callback</a>
        </div>
      </div>
    </dialog>
  );
}
