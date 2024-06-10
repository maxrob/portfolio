import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './projects.module.scss';

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <p className={styles.projects_title}>A few developed projects.</p>
      <div className={styles.projects_list}>
        <div className={styles.project}>
          <p className={styles.project_title}>Abacus</p>
          <p className={styles.project_content}>
            Manage, optimize, and improve your daily expenses, either alone or
            as part of a group, to achieve your goals.
          </p>
          <div
            className={`${styles.project_status} ${styles.status_in_progress}`}
          >
            <FontAwesomeIcon icon={faSpinner} />
            <p>In progress</p>
          </div>
        </div>
        <div className={styles.project}>
          <p className={styles.project_title}>Alfred</p>
          <p className={styles.project_content}>
            Manage every daily tasks in one app.
          </p>
          <div
            className={`${styles.project_status} ${styles.status_in_progress}`}
          >
            <FontAwesomeIcon icon={faSpinner} />
            <p>In progress</p>
          </div>
        </div>
      </div>
    </div>
  );
};
