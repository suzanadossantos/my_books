import styles from './footer.module.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import qr from '../../assets/qr_code.png';

function Footer() {
  return (
    <>
    <div className={styles.footer}>
        <div className={styles.icons}>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
        </div>
        <div className={styles.website}>
            <p>contact@mybooks.com</p>
            <img src={qr} alt="qr my books" />
            
        </div>

        <hr/>

        <p>Suzana dos Santos - 2024</p>
    </div>
    </>
  );
}

export {Footer}