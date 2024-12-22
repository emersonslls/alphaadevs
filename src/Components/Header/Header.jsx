/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";

/* <--- CSS'S ---> */
import styles from './Style/Header.module.css';

/* <--- ASSETS ---> */
import Logo from '../../Assets/Logo.png';
/* <--- MENU ---> */
import Menu from '../../Assets/VectorMenu.svg';
import Close from '../../Assets/VectorClose.svg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para o menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Fecha o menu quando um item é clicado
        }
    };

    return (
        <header className={styles.header}>
            <img src={Logo} onClick={() => scrollToSection('home')} alt="Logo" className={styles.logo} />
            <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                <ul>
                    <li onClick={() => scrollToSection('service')}>Serviços</li>
                    <li onClick={() => scrollToSection('equipe')}>Time</li>
                    <li onClick={() => scrollToSection('cliente')}>Clientes</li>
                    <li onClick={() => scrollToSection('contato')}>Contato</li>
                </ul>
            </nav>
            <button className={styles.hamburger} onClick={toggleMenu}>
                {isMenuOpen ? (
                    <img src={Close} className={styles.closeIcon} /> // Exibe "X" quando o menu está aberto
                ) : (
                    <img src={Menu} alt="Menu Icon" className={styles.menuIcon} />
                )}
            </button>
        </header>
    );
};

export default Header;