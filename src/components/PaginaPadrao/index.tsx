import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.scss';

import styleTema from 'styles/Tema.module.scss';
const PaginaPadrao = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={styleTema.container}>
        <Outlet />
      </div>
    </>
  );
};

export default PaginaPadrao;
