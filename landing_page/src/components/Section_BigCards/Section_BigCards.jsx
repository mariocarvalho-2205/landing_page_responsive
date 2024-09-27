import styles from './Section_BigCards.module.css'
import Card1 from '../../assets/card1.png'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'

const Section_BigCards = () => {
    return (
      <>
        <section className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <img src={Card1} alt="Imagem 1" className={styles.image}/>
          <div className={styles.textOverlay}>
            <h2>Título Imagem 1</h2>
            <p>Parágrafo sobre a Imagem 1</p>
          </div>
        </div>
  
        <div className={styles.imageWrapper}>
          <img src={Card2} alt="Imagem 2" className={styles.image}/>
          <div className={styles.textOverlay}>
            <h2>Título Imagem 2</h2>
            <p>Parágrafo sobre a Imagem 2</p>
          </div>
        </div>
  
        <div className={styles.imageWrapper}>
          <img src={Card3} alt="Imagem 3" className={styles.image}/>
          <div className={styles.textOverlay}>
            <h2>Título Imagem 3</h2>
            <p>Parágrafo sobre a Imagem 3</p>
          </div>
        </div>
      </section>
      </>
    )
}

export default Section_BigCards