import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Headset, TrendingUp, Workflow } from 'lucide-react';
import agentPortrait from '@/src/assets/images/home-services-agent.png';
import styles from './HomeServicesOverview.module.css';

const serviceGroups = [
  {
    key: 'customer',
    id: 'home-customer-services',
    title: 'Customer Experience',
    icon: Headset,
    services: ['Voice Support', 'Live Chat Support'],
  },
  {
    key: 'revenue',
    id: 'home-revenue-services',
    title: 'Revenue Growth',
    icon: TrendingUp,
    services: ['Lead Generation', 'Appointment Setting'],
  },
  {
    key: 'backoffice',
    id: 'home-backoffice-services',
    title: 'Back Office Operations',
    icon: Workflow,
    services: ['Virtual Assistance', 'Data Entry'],
  },
] as const;

export function HomeServicesOverview() {
  return (
    <section
      id="services-overview"
      className={styles.section}
      aria-labelledby="home-services-heading"
    >
      <h2 id="home-services-heading" className={styles.heading}>
        Everything you need to keep your customers happy and satisfied.{' '}
        <span>All in one place.</span>
      </h2>

      <div className={styles.orbit}>
        <svg
          className={styles.connections}
          viewBox="0 0 1240 542"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M347 217H468M772 217H893M620 371V418" />
        </svg>

        <div className={styles.portrait}>
          <div className={styles.portraitInner}>
            <Image
              src={agentPortrait}
              alt="Illustrative customer support agent wearing a headset"
              fill
              sizes="(max-width: 640px) 236px, (max-width: 1000px) 264px, 288px"
              className={styles.portraitImage}
              placeholder="blur"
            />
          </div>
        </div>

        {serviceGroups.map(({ key, id, title, icon: Icon, services }) => (
          <section
            key={key}
            className={`${styles.group} ${styles[key]}`}
            aria-labelledby={id}
          >
            <h3 id={id} className={styles.groupTitle}>
              <Icon className={styles.icon} aria-hidden="true" />
              {title}
            </h3>
            <ul className={styles.list}>
              {services.map((service) => (
                <li key={service} className={`tile-hover ${styles.item}`}>
                  {service}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className={styles.ctaWrapper}>
        <Link href="/services" className={styles.ctaLink}>
          <span>Explore Our Services</span>
          <ArrowRight className={styles.ctaArrow} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
