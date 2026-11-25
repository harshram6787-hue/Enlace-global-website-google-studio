import Image from 'next/image';
import { Compass } from 'lucide-react';
import teamImage from '@/src/assets/images/why-we-exist-team.png';
import styles from './WhyWeExist.module.css';

export function WhyWeExist() {
  return (
    <section id="why-we-exist" className={styles.section} aria-labelledby="why-we-exist-heading">
      <div className={styles.container}>
        <div className={styles.story}>
          <div className={styles.copy}>
            <h2 id="why-we-exist-heading" className={styles.heading}>
              Why We <span>Exist</span>
            </h2>

            <p>
              <strong>Growth changes how a business works.</strong> A routine approval that once
              took a quick conversation starts taking three follow-ups. The same exception lands
              on the founder’s desk every week. And a process everyone used to know by heart
              begins to depend on who happens to be available.
            </p>

            <p>
              <strong>We built Enlace Global for that stage of growth.</strong> When we take on a
              process, we look at where work gets stuck, who needs to make each decision, and
              which problems keep coming back. Those details show us what can be improved so
              the same issues are easier to handle the next time.
            </p>
          </div>

          <div className={styles.visual}>
            <div className={styles.imageFrame}>
              <div className={styles.imageInner}>
                <Image
                  src={teamImage}
                  alt="Illustrative operations team reviewing a business process together"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1000px) 360px, 400px"
                  className={styles.image}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`tile-hover ${styles.purpose}`}>
          <span className={styles.purposeIcon} aria-hidden="true">
            <Compass />
          </span>
          <p>
            We exist to give businesses a steadier way to run their day-to-day operations,
            so leaders have more time for the decisions that shape what comes next.
          </p>
        </div>
      </div>
    </section>
  );
}
