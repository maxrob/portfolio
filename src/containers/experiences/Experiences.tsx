import styles from './experiences.module.scss';

export const Experiences = () => {
  return (
    <div className={styles.experiences}>
      <p className={styles.experiences_title}>My work over time.</p>
      <div className={styles.experience}>
        <div className={styles.experience_date}>
          <p>July 2020 - april 2023</p>
        </div>
        <div className={styles.experience_content}>
          <p className={styles.experience_title}>
            <span>fullstack developper</span> at{' '}
            <a href="https://bellman.immo/" target="_blank" rel="noreferrer">
              bellman
            </a>
          </p>
          <div className={styles.experience_skills}>
            <p className={styles.experience_skill}>NodeJs</p>
            <p className={styles.experience_skill}>ReactJs</p>
            <p className={styles.experience_skill}>ExpressJs</p>
            <p className={styles.experience_skill}>GraphQl</p>
            <p className={styles.experience_skill}>PostgreSql</p>
            <p className={styles.experience_skill}>Heroku</p>
            <p className={styles.experience_skill}>AWS</p>
          </div>
        </div>
      </div>
      <div className={styles.experience}>
        <div className={styles.experience_date}>
          <p>April 2018 - march 2020</p>
        </div>
        <div className={styles.experience_content}>
          <p className={styles.experience_title}>
            <span>backend developper</span> at{' '}
            <a
              href="https://www.liberkeys.com/"
              target="_blank"
              rel="noreferrer"
            >
              liberkeys
            </a>
          </p>
          <div className={styles.experience_skills}>
            <p className={styles.experience_skill}>Ruby on Rails</p>
            <p className={styles.experience_skill}>Go</p>
            <p className={styles.experience_skill}>VueJs</p>
            <p className={styles.experience_skill}>Rest Api</p>
          </div>
        </div>
      </div>
      <div className={styles.experience}>
        <div className={styles.experience_date}>
          <p>Before that</p>
        </div>
        <div className={styles.experience_content}>
          <p className={styles.experience_title}>
            <span>backend developper</span> at <span>yoopies</span>
          </p>
          <p className={styles.experience_title}>
            <span>backend developper</span> at <span>carvivo</span>
          </p>
          <p className={styles.experience_title}>
            <span>backend developper</span> at <span>adfab</span>
          </p>
          <p className={styles.experience_title}>
            <span>backend developper</span> at <span>mobypark</span>
          </p>
        </div>
      </div>
    </div>
  );
};
