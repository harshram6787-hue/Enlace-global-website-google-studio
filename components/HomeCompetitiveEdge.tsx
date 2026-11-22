import Link from 'next/link';
import { ArrowRight, Headset, SlidersHorizontal, UsersRound, Handshake } from 'lucide-react';
import styles from './HomeCompetitiveEdge.module.css';

const benefits = [
  {
    key: 'support',
    theme: 'mint',
    icon: Headset,
    title: 'Better Customer Support. A Stronger Competitive Edge.',
    description:
      'Give customers prompt, helpful answers across phone, live chat, and email. When customers can get their questions answered without repeating themselves or chasing an update, they have more reason to choose your business again.',
  },
  {
    key: 'flexibility',
    theme: 'blue',
    icon: SlidersHorizontal,
    title: 'Gain an Edge with Outsourcing Built Around Your Business',
    description:
      'Enlace Global adapts to the way you work, from the tools your team uses to how you prioritize requests and handle escalations. Set the coverage you need for everyday demand and adjust it as your business grows or enters a busy season.',
  },
  {
    key: 'team',
    theme: 'lavender',
    icon: UsersRound,
    title: 'Stand Out with Support That Feels Like Your Own Team',
    description:
      'Your dedicated support team learns your products, policies, and brand voice. Whether a customer asks about an order or needs help with a return, they get a response that sounds like it came from someone who knows your business.',
  },
  {
    key: 'trust',
    theme: 'peach',
    icon: Handshake,
    title: 'Make Customer Support Your Competitive Advantage.',
    description:
      'Every support conversation is a chance to earn trust. Follow through on open issues, keep customers informed, and use recurring questions to spot where your business can make the experience easier.',
  },
] as const;

export function HomeCompetitiveEdge() {
  return (
    <section
      id="competitive-edge"
      className={styles.section}
      aria-labelledby="competitive-edge-heading"
    >
      <div className={styles.container}>
        <h2 id="competitive-edge-heading" className={styles.heading}>
          Give Your Business a Competitive Edge{' '}
          <span>with Enlace Global</span>
        </h2>

        <div className={styles.grid}>
          {benefits.map(({ key, theme, icon: Icon, title, description }) => (
            <article
              key={key}
              className={`${styles.card} ${styles[theme]}`}
              aria-labelledby={`competitive-edge-${key}`}
            >
              <div className={styles.iconTile}>
                <Icon className={styles.icon} aria-hidden="true" />
              </div>
              <h3 id={`competitive-edge-${key}`} className={styles.cardTitle}>
                {title}
              </h3>
              <p className={styles.description}>{description}</p>
            </article>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/advantages" className={styles.cta}>
            <span>Explore more</span>
            <ArrowRight className={styles.arrow} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
