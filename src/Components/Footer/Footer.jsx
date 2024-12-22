import React from 'react';

/* <----- CSS -----> */
import styles from './Style/Footer.module.css';

/* <----- ASSETS -----> */
import IconSales from '../../Assets/Icons/S..png';

function Footer() {

    return (
        <footer>
            <section className={styles.Information}>
                 <div className={styles.Direitos}>
                <h1>© Todos os direitos reservados - AlphaDev's</h1>
            </div>
            <a href="https://www.instagram.com/_sxlles/" target="_blank">
                 <div className={styles.Dev}>
                <h1>
                    Desenvolvido por
                </h1>
                <img src={IconSales} />
                <h2>
                    Emerson <span>Sales</span>
                </h2>
            </div>
            </a>
           
            </section>
            
        </footer >
    );
}

export default Footer;
