import nossaCasa from 'assets/nossa_casa.png';
import cardapio from 'data/cardapio.json';
import { useNavigate } from 'react-router-dom';
import styleTema from 'styles/Tema.module.scss';
import { Prato } from 'types/prato';
import styles from './Inicio.module.scss';
const Inicio = () => {
  let pratosRecomendados = [...cardapio];

  const navigate = useNavigate();

  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const redirecionarParaDetalles = (prato: Prato) => {
    navigate(`/prato/${prato.id}`, { state: { prato }, replace: true });
  };

  return (
    <section>
      <h3 className={styleTema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
              <button
                className={styles.recomendado__botao}
                onClick={() => redirecionarParaDetalles(item)}
              >
                Ver mais
              </button>
            </div>
          </div>
        ))}
      </div>
      <h3 className={styleTema.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro,385 <br />
          <br />
          Vila Mariana -SP
        </div>
      </div>
    </section>
  );
};

export default Inicio;
