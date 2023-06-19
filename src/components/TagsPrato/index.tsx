import classNames from 'classnames';
import { Prato } from 'types/prato';
import styles from './TagsPrato.module.scss';
const TagsPrato = ({ category, size, serving, price }: Prato) => {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__tipo]: true,
          [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__porcao}>{size}</div>
      <div className={styles.tags__qtdepessoas}>
        {serving} pessoa{serving === 1 ? '' : 's'}{' '}
      </div>
      <div className={styles.tags__valor}>R${price.toFixed(2)}</div>
    </div>
  );
};

export default TagsPrato;
