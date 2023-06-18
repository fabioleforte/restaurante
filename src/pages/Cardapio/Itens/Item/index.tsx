import styles from './Item.module.scss';

import classNames from 'classnames';
import cardapio from '../itens.json';

type Props = (typeof cardapio)[0];
const Item = (props: Props) => {
  const { title, category, description, price, serving, size, photo } = props;
  return (
    <div className={styles.item}>
      <img src={photo} alt={title} className={styles.item__imagem} />
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__tipo]: true,
              [styles[`item__tipo__${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__porcao}>{size}</div>
          <div className={styles.item__qtdepessoas}>
            {serving} pessoa{serving === 1 ? '' : 's'}{' '}
          </div>
          <div className={styles.item__valor}>R${price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
