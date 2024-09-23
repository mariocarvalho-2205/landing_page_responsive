import style from './Section_Transform.module.css'
import Photo from  '../../assets/photo.png'


const Section_Transform = () => {
  return (
    <div className={style.container}>
        <div className={style.left}>
            <div className={style.left_contains}>
                <h1>Transforming Technology</h1>
                <p>Pioneer with us today.</p>
                <a href="">Learn More</a>
            </div>
        </div>
        <div className={style.right}>
            <div className={style.photo}>
              <img src={Photo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section_Transform