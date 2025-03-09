'use client';
import Image from "next/image";
import Counter from "./components/Counter";
import styles from './page.module.css';
import Link from "next/link";
import useCountdown from "./hooks/useCountdown";

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown();
  return (
    <main className={styles.main}>
      <div className={styles.starsBgContainer}></div>
      <div className={styles.hillsBgContainer}></div>
      <section className={styles.contentWrapper}>
        <header className={styles.header}>
          <h1>We're launching soon</h1>
        </header>
        <article className={styles.counterWrapper}>
          <Counter value={days} text="days" />
          <Counter value={hours} text="hours" />
          <Counter value={minutes} text="minutes" />
          <Counter value={seconds} text="seconds" />
        </article>
      </section>
      <footer className={styles.footer}>
        <Link href="#">
          <Image
            src={'/assets/icon-facebook.svg'}
            width={0}
            height={0}
            className={styles.footerIcon}
            alt="Facebook link icon which takes you to the facebook profile"
          />
        </Link>
        <Link href="#">
          <Image
            src={'/assets/icon-pinterest.svg'}
            width={0}
            height={0}
            className={styles.footerIcon}
            alt="Pinterest link icon which takes you to the pinterest profile"
          />
        </Link>
        <Link href="#">
          <Image
            src={'/assets/icon-instagram.svg'}
            width={0}
            height={0}
            className={styles.footerIcon}
            alt="Instagram link icon which takes you to the instagram profile"
          />
        </Link>
      </footer>
    </main>
  );
}
