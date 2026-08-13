import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Enlace Global | AI-Enabled BPO & Business Process Services',
  description: 'Combining human expertise, intelligent AI technology, and operational excellence for global enterprise business process solutions.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="bg-white text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

