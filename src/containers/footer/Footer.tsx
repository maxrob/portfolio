import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './footer.module.scss';

type IFooterProps = {
  openModal: () => void;
};

export const Footer = ({ openModal }: IFooterProps) => {
  const onDownloadPdf = () => {
    const pdfUrl = 'maxime_robin_resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'maxime_robin_resume.pdf'; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footer_mail}>
        <div className={styles.footer_mail_content}>
          <p className={styles.footer_mail_title}>
            Interested in collaborating with me?
          </p>
          <p className={styles.footer_mail_subtitle}>
            {"Let's"} talk about your project
          </p>
        </div>
        <button onClick={openModal} className={styles.footer_mail_button}>
          Send me an email !
        </button>
      </div>
      <div className={styles.footer_links}>
        <a href="https://github.com/maxrob" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/maxime-robin-93a37298/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <button onClick={onDownloadPdf}>
          <FontAwesomeIcon icon={faFile} />
        </button>
      </div>
    </div>
  );
};
