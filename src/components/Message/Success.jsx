import { useContext } from 'react';
import { UserContext } from '../../userContext';
import styles from './Success.module.css';
function Success() {
  const { success } = useContext(UserContext);
  return <>{success && <span className={styles.success}>{success}</span>}</>;
}

export default Success;
