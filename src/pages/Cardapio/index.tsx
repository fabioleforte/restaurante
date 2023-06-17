import { ReactComponent as Logo } from 'assets/logo.svg';
import style from './Cardapio.module.scss';

const Cardapio = () => {
  return (
    <main>
      <nav className={style.menu}>
        <Logo />
      </nav>
    </main>
  );
};

export default Cardapio;
