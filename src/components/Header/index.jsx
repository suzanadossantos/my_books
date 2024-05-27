import Logo from '../../assets/logo.png'

import styles from './header.module.css'

function Header() {
  return (
    <>
    <div className={styles.header}>
      <img src={Logo} alt="logo" />
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/discover">Discover</a>
        <a href="/login">Login</a>
      </nav>
    </div>
    </>
  );
}

export {Header}