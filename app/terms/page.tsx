import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Enlace Global',
  description: 'Terms & Conditions for Enlace Global.',
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="Welcome to Enlace Global (enlaceglobalservices.com). By accessing or using our website, you agree to comply with and be bound by the following Terms & Conditions."
      sections={[
        {
          heading: '1. Use of Website:',
          body: 'This website provides general information about Enlace Global’s AI-enabled BPO, customer experience, revenue growth, and back-office services. You agree to use this website solely for lawful business purposes and not to disrupt its security or functionality.',
        },
        {
          heading: '2. Service Engagements & Pilot Programs:',
          body: 'Information on this website—including details regarding our 30-Day Pilot Program—does not constitute a binding legal offer. All formal BPO engagements, pilot programs, pricing, and service-level agreements (SLAs) are governed exclusively by a written Statement of Work (SOW) and Master Services Agreement (MSA) signed by both parties.',
        },
        {
          heading: '3. Intellectual Property:',
          body: 'All content on this website—including text, graphics, logos, service architecture diagrams, and software workflows—is the exclusive property of Enlace Global and is protected by applicable intellectual property laws. You may not copy, reproduce, or distribute our content without prior written permission.',
        },
        {
          heading: '4. Confidentiality:',
          body: 'Any business information shared with us during initial discovery calls or consultation requests is treated as strictly confidential and will not be disclosed to unauthorized third parties.',
        },
        {
          heading: '5. Limitation of Liability:',
          body: 'While we strive to keep all information on this website accurate and up to date, Enlace Global provides this site on an "as is" basis. To the fullest extent permitted by law, Enlace Global shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.',
        },
        {
          heading: '6. Governing Law & Jurisdiction:',
          body: 'These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the courts located in Kolkata, West Bengal, India.',
        },
        {
          heading: '7. Changes to These Terms:',
          body: 'We reserve the right to update these Terms & Conditions at any time. Continued use of the website after changes are posted constitutes your acceptance of the updated terms.',
        },
        {
          heading: '8. Contact Information:',
          body: 'For legal or contractual inquiries, please reach out to us at info@enlaceglobalservices.com.',
        },
      ]}
    />
  );
}
