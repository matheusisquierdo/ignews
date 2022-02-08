import styles from './style.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SigninButton() {
  const isUserLogged = false;

  return isUserLogged ? (
    <button type="button" className={styles.signinButton}>
      <FaGithub color="#84d362" />
      Matheus Isquierdo
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signinButton}>
      <FaGithub color="#ebA417" />
      Sign in with Github
    </button>
  );
}
