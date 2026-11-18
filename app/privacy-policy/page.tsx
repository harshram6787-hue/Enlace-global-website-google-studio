import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Enlace Global',
  description: 'Privacy Policy for Enlace Global.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={'Enlace Global ("we," "our," or "us") is committed to protecting the privacy and security of your personal and business information. This Privacy Policy explains how we collect, use, and safeguard data when you visit our website (enlaceglobalservices.com) or inquire about our business process outsourcing (BPO) services.'}
      sections={[
        {
          heading: '1. Information We Collect:',
          body: 'We collect business contact information that you voluntarily provide when filling out forms, booking a consultation, or requesting a 30-day pilot. This includes your name, work email address, phone number, company name, and project requirements. We may also automatically collect basic technical data such as your IP address, browser type, and pages visited to improve website performance.',
        },
        {
          heading: '2. How We Use Your Information:',
          body: 'We use the information we collect strictly to: respond to your inquiries and schedule executive consultations; set up and manage your 30-day pilot or ongoing BPO services; communicate important service updates; and maintain the security and functionality of our website.',
        },
        {
          heading: '3. Client Operational Data vs. Website Data (AI Guarantee):',
          body: 'When you hire Enlace Global for customer support, sales, or back-office services, we act strictly as a Data Processor. Any customer data we access on your behalf is governed by a separate, binding Master Services Agreement (MSA) and Non-Disclosure Agreement (NDA). We never sell, rent, or use your customer data to train public AI models.',
        },
        {
          heading: '4. Data Security & International Compliance:',
          body: 'We implement industry-standard technical and organizational safeguards—including encrypted VPNs, multi-factor authentication (MFA), role-based access controls, and strict NDAs—to protect your data. Our practices are designed to align with India’s Digital Personal Data Protection (DPDP) Act, the Australian Privacy Principles (APPs), and global frameworks like GDPR.',
        },
        {
          heading: '5. Third-Party Tools:',
          body: 'We may use trusted third-party tools (such as CRM software, scheduling links, or website analytics) to operate our business. These providers are contractually obligated to keep your data confidential and secure.',
        },
        {
          heading: '6. Your Privacy Rights:',
          body: 'Depending on your location, you have the right to request access to, correction of, or deletion of the personal contact information we hold about you. To make a request, contact us at info@enlaceglobalservices.com.',
        },
        {
          heading: '7. Contact Us:',
          body: 'If you have questions about this Privacy Policy, please contact our Data Protection Officer at Email: info@enlaceglobalservices.com or Phone: +91 8697593683.',
        },
      ]}
    />
  );
}
