import { useContext } from 'react';
import alert from '../../assets/astronauta-alert.png';
import { UserContext } from '../../userContext';
import styles from './Error.module.css';
function Error() {
  const { error } = useContext(UserContext);
  return (
    <div className={styles.App}>
      {error && (
        <>
          <span className={styles.error}>Erro:{error}</span>
          <img src={alert} alt="" width={60} />
        </>
      )}
    </div>
  );
}

export default Error;
