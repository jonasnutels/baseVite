import styles from './Header.module.css';
import React, { useContext } from 'react';
import { UserContext } from '../../userContext';

function Header() {
  const { handleLogout, usuario } = useContext(UserContext);
  return (
    <div className={styles.myHeader}>
      <ul>
        <li>Início</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
        {usuario && <li onClick={handleLogout}>Logout</li>}
      </ul>
    </div>
  );
}

export default Header;
