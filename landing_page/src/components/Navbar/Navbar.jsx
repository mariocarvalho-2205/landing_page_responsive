import styles from './Navbar.module.css'
import logo from '../../../public/icon.svg'

const Navbar = () => {
  return (
    
    <nav className={styles.navbar}>
      <div className={styles.logo_title}>
        <a href="/">

          <img src={logo} alt="TechInnov" />
          <a href='#'>TechInnov</a>
        </a>
      </div>
      <div className={styles.nav_list}>
        <ul className={styles.nav_list_ul}>
          <li><a className={styles.item_nav} href='#'>Begin</a></li>
          <li><a className={styles.item_nav} href='#'>Perpective</a></li>
          <li><a className={styles.item_nav} href='#'>Inventors</a></li>
          <li><a className={styles.item_proceed} href='#'>Proceed</a></li>
          <li><a className={styles.item_register} href='#'>Register Today</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar