'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import styles from './VoiceSupportSlide.module.css';

export type SupportChannel = 'email' | 'whatsapp' | 'virtual-assistance' | 'data-entry' | 'lead-generation' | 'lead-qualification' | 'sales-support' | 'appointment-setting';

interface SupportChannelContent {
  name: string;
  title: string;
  introduction: string;
  services: { label: string; description: string }[];
  howItWorks: string;
  tracking: string;
}

const content: Record<SupportChannel, SupportChannelContent> = {
  email: {
    name: 'Email Support',
    title: 'Clear Replies and Follow-Through for Every Request',
    introduction: 'We manage your customer support inbox, prioritise new requests, and write replies in your brand’s voice. When a case takes longer to resolve, we keep the customer informed and track who needs to take the next step.',
    services: [
      { label: 'Inbox triage', description: 'Categorise incoming emails and prioritise urgent or overdue cases.' },
      { label: 'Order and account enquiries', description: 'Answer questions about deliveries, cancellations, returns, and billing using your policies.' },
      { label: 'Complaints and escalations', description: 'Gather the relevant details and pass approval requests to the right person on your team.' },
      { label: 'Follow-ups', description: 'Track cases waiting for a customer reply or an internal update, then follow up when action is due.' },
    ],
    howItWorks: 'We work in your existing helpdesk or shared inbox and agree on response targets, reply templates, and escalation rules. If a customer emails about a refund, for example, our agent checks the order and refund status, explains what’s happening, and follows up in the same email thread when there’s an update.',
    tracking: 'See how quickly customers get a first reply, how long cases take to resolve, and how many requests are still open.',
  },
  whatsapp: {
    name: 'WhatsApp Support',
    title: 'Quick Answers and Updates on WhatsApp',
    introduction: 'Help customers get answers in the same conversation they started on their phone. Our team handles short, practical enquiries, shares updates as a case progresses, and passes the conversation history along when a specialist needs to step in.',
    services: [
      { label: 'Product and availability questions', description: 'Confirm stock, clarify product details, and share the right product link.' },
      { label: 'Order and delivery updates', description: 'Check order status, share tracking links, and explain what happens if a delivery is delayed.' },
      { label: 'Returns and exchanges', description: 'Explain the next step and share the relevant instructions or links.' },
      { label: 'Specialist handoffs', description: 'Pass along the conversation and what’s already been checked so customers don’t have to repeat themselves.' },
    ],
    howItWorks: 'We agree on coverage hours, approved messages, and which cases your team needs to handle directly. If a customer messages about a delayed delivery, for example, our agent checks the latest tracking update, shares it in WhatsApp, and follows up in the same conversation once there’s a confirmed next step.',
    tracking: 'See how quickly your team responds, how many conversations it resolves, and which requests most often need a handoff.',
  },
  'virtual-assistance': {
    name: 'Virtual Assistance',
    title: 'Virtual Assistance for Your Day-to-Day Operations',
    introduction: 'Give recurring admin work a clear owner. Our remote assistants work in your existing tools, follow your priorities, and keep you informed when something needs your input.',
    services: [
      { label: 'Inbox management', description: 'Sort incoming emails, flag urgent requests, and draft routine replies using your guidelines.' },
      { label: 'Calendar coordination', description: 'Schedule meetings, confirm availability, and send reminders.' },
      { label: 'Admin follow-ups', description: 'Track pending approvals, reminders, and deadlines so open tasks keep moving.' },
      { label: 'Document organisation', description: 'Update shared files, prepare meeting notes, and keep templates easy to find.' },
    ],
    howItWorks: 'We agree on what your assistant owns, how to prioritise requests, and when to ask for approval. For example, if a meeting needs to move, your assistant checks everyone’s availability, sends the updated invite, and flags any conflict that needs your decision.',
    tracking: 'See what’s completed, what’s due next, and which items are waiting for your input.',
  },
  'data-entry': {
    name: 'Data Entry',
    title: 'Accurate Data Entry for Records You Rely On',
    introduction: 'Our team enters and updates records using your field definitions and formatting rules. We check for missing details, duplicate entries, and inconsistent formats, and flag anything that needs clarification.',
    services: [
      { label: 'Record creation and updates', description: 'Enter customer, product, and order details into your systems.' },
      { label: 'Data transfer', description: 'Move information from forms, documents, and spreadsheets into the right fields.' },
      { label: 'Data formatting', description: 'Standardise dates, names, and reference numbers using your rules.' },
      { label: 'Quality checks', description: 'Review entries against the source and flag incomplete or conflicting records.' },
    ],
    howItWorks: 'We start with a sample batch to confirm which fields to enter, how to format them, and how to handle exceptions. For example, if a supplier spreadsheet is missing a product code, we flag that row for review and continue processing the complete records.',
    tracking: 'See how many records were processed, how many passed quality checks, and which entries still need clarification.',
  },
  'lead-generation': {
    name: 'Lead Generation',
    title: 'Find Relevant Prospects and Start the Right Conversations',
    introduction: 'Build a prospect pipeline around the businesses you want to serve. Our team researches potential customers, identifies relevant decision-makers, and supports outreach using your approved messaging.',
    services: [
      { label: 'Prospect research', description: 'Find businesses that match your target industries, locations, company sizes, and customer profiles.' },
      { label: 'Contact research', description: 'Identify relevant decision-makers and available business contact details.' },
      { label: 'Outreach coordination', description: 'Organise approved email and calling activities, record responses, and track follow-ups.' },
      { label: 'Prospect list maintenance', description: 'Remove duplicates, update contact records, and flag incomplete information.' },
    ],
    howItWorks: 'We first agree on your ideal customer profile and what makes a prospect relevant. For example, if you sell software to small retailers, we research suitable businesses, identify the people responsible for purchasing, and organise the findings in your CRM before outreach begins.',
    tracking: 'See how many relevant prospects were researched, how complete their records are, and which outreach activities lead to replies or further conversations.',
  },
  'lead-qualification': {
    name: 'Lead Qualification',
    title: 'Understand Which Enquiries Deserve Your Sales Team’s Attention',
    introduction: 'Help your sales team enter conversations with useful context. We speak with interested prospects, understand their requirements, and assess whether they match your agreed qualification criteria.',
    services: [
      { label: 'Initial enquiry follow-up', description: 'Respond to new leads and confirm what prompted their interest.' },
      { label: 'Requirements gathering', description: 'Ask about their current challenges, priorities, and the solution they need.' },
      { label: 'Fit and readiness checks', description: 'Confirm relevant details such as company profile, purchasing involvement, budget expectations, and timing.' },
      { label: 'Sales handoffs', description: 'Record the findings and route suitable prospects to the right salesperson.' },
    ],
    howItWorks: 'We build a qualification checklist with you and agree on when a lead is ready for a sales conversation. For example, when someone requests a demo, we confirm their use case, team size, and buying timeline so your salesperson can prepare a relevant discussion.',
    tracking: 'See how many leads were contacted, how many met your criteria, and why others need further follow-up.',
  },
  'sales-support': {
    name: 'Sales Support',
    title: 'Keep Sales Opportunities Moving Between Conversations',
    introduction: 'Give your sales team dependable help with the work surrounding each opportunity. We maintain CRM records, coordinate follow-ups, and prepare approved documents so your salespeople have the information they need for their next conversation.',
    services: [
      { label: 'CRM updates', description: 'Record call notes, update opportunity stages, and maintain contact details.' },
      { label: 'Sales follow-ups', description: 'Send approved information, confirm receipt of proposals, and track pending replies.' },
      { label: 'Quote and proposal coordination', description: 'Prepare documents using your templates and approved pricing, then route them for review.' },
      { label: 'Internal coordination', description: 'Track outstanding inputs and help organise the handoff from sales to delivery.' },
    ],
    howItWorks: 'We agree on responsibilities, approval requirements, and how each opportunity should be recorded. After a sales call, for example, our team updates the CRM, prepares the requested material, and schedules the agreed follow-up.',
    tracking: 'See which follow-ups are due, which documents are pending, and which opportunities need attention.',
  },
  'appointment-setting': {
    name: 'Appointment Setting',
    title: 'Turn Interest into Well-Coordinated Sales Meetings',
    introduction: 'Make it easier for interested prospects to meet your team. We coordinate availability, confirm the purpose of each meeting, and manage reminders so both sides know when to attend and what to expect.',
    services: [
      { label: 'Meeting invitations', description: 'Contact suitable prospects using your approved approach and explain the purpose of the conversation.' },
      { label: 'Calendar coordination', description: 'Match availability across time zones and book meetings with the right team member.' },
      { label: 'Confirmations and reminders', description: 'Share joining details, confirm attendance, and send timely reminders.' },
      { label: 'Rescheduling and missed meetings', description: 'Arrange another suitable time and keep calendar records updated.' },
    ],
    howItWorks: 'We agree on booking criteria, meeting length, and your team’s availability. When a prospect agrees to a conversation, we confirm their details, send the invitation, and include relevant notes so your salesperson can prepare.',
    tracking: 'See how many meetings were booked, confirmed, attended, or rescheduled, along with the reasons for missed appointments.',
  },
};

interface SupportChannelSlideProps {
  channel: SupportChannel | null;
  onClose: () => void;
}

export function SupportChannelSlide({ channel, onClose }: SupportChannelSlideProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!channel) return;

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
  }, [channel]);

  if (!channel) return null;

  const details = content[channel];
  const id = `${channel}-support`;

  return (
    <dialog
      ref={dialogRef}
      id={`${id}-slide`}
      className={styles.panel}
      aria-labelledby={`${id}-slide-heading`}
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
        <h2 ref={headingRef} id={`${id}-slide-heading`} tabIndex={-1} className={styles.title}>
          {details.title}
        </h2>
        <button type="button" onClick={onClose} className={styles.close} aria-label={`Close ${details.name} details`}>
          <X aria-hidden="true" size={22} />
        </button>
      </header>

      <div className={styles.body}>
        <p>{details.introduction}</p>

        <section aria-labelledby={`${id}-handle-heading`} className={styles.section}>
          <h3 id={`${id}-handle-heading`}>What We Handle</h3>
          <ul className={styles.list}>
            {details.services.map((service) => (
              <li key={service.label}><strong>{service.label}</strong> — {service.description}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby={`${id}-how-heading`} className={styles.section}>
          <h3 id={`${id}-how-heading`}>How It Works</h3>
          <p>{details.howItWorks}</p>
        </section>

        <section aria-labelledby={`${id}-track-heading`} className={styles.section}>
          <h3 id={`${id}-track-heading`}>What You Can Track</h3>
          <p>{details.tracking}</p>
        </section>

        <div className={styles.action}>
          <a href="/contact" className={styles.cta}>Request Callback</a>
        </div>
      </div>
    </dialog>
  );
}
