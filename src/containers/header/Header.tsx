import styles from './header.module.scss';

type IHeaderProps = {
  openModal: () => void;
};

export const Header = ({ openModal }: IHeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <img src={'/assets/logo.svg'} alt="logo" />
        </div>
        <div className={styles.links}>
          <a href="https://github.com/maxrob" target="_blank" rel="noreferrer">
            Github
          </a>
          <button onClick={openModal} className={styles.say_hello}>
            Say Hello !
          </button>
        </div>
      </div>
      <div className={styles.header_content}>
        <div className={styles.avatar}>
          <img src={'/assets/me.svg'} alt="me" />
        </div>
        <div className={styles.title}>
          <h1>Fullstack Developer.</h1>
          <p>
            I enjoy building and developing projects, from a single page to a
            whole startup product.
          </p>
        </div>
      </div>
    </div>
  );
};
