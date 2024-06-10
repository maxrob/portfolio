import styles from './about_me.module.scss';

export const AboutMe = () => {
  return (
    <div className={styles.about_me}>
      <p className={styles.about_title}>Welcome ! {"I'm"} Maxime.</p>
      <p className={styles.about_content}>
        As a developer for 7 years, I have specialized in full-stack development
        with NodeJS and React the last 3 years. I used to work with early
        startups in order to take part in the project from the very beginning. I
        mainly thrive during these types of experiences, but I am open to any
        type of project.
      </p>
    </div>
  );
};
