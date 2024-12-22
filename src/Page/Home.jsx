/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";

/* <--- CSS'S ---> */
import styles from './Styles/Home.module.css';
import stylesrespomsive from './Styles/HomeResponsive.module.css';

/* <--- COMPONENTES ---> */
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import FeedBacks from '../Components/FeedBacks/FeedBacks';
import Forms from '../Components/Forms/Forms';

/* <---- AOS AANIMATIONS ----> */
import AOS from 'aos';
import 'aos/dist/aos.css'; // Não se esqueça de importar o CSS

/* <---- ASSETS ----> */
import Rabisco from '../Assets/Vector.svg';
import RabiscoCircle from '../Assets/Circle.svg';
/* <---- BACKGROUNDS ----> */
import BackgroundBlack from '../Assets/Backgrounds/BackgroundBlack.svg';
import BackgroundWhite from '../Assets/Backgrounds/BackgroundWhite.svg';
/* <---- ICONS ----> */
import Database from '../Assets/Icons/Database.svg';
import LP from '../Assets/Icons/LP.svg';
import Ecommerce from '../Assets/Icons/E-Commerce.svg';

function Home() {

    useEffect(() => {
        // Inicializa o AOS
        AOS.init({
            duration: 2000, // Duração das animações
        });
    }, []);

    const equipe = useRef();
    function scrollTo(ref) {
        window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
    }

    return (
        <>
            <Header />
            {/* -- HOME -- */}
            <section className={`${styles.Home} ${stylesrespomsive.Home}`} id='home'>
                <div className={`${styles.Tittle} ${stylesrespomsive.Tittle}`} data-aos="fade-right">
                    <h1>
                        Inovação <span>e</span> Tecnologia <span>na Criação de</span> Soluções Digitais!
                    </h1>
                </div>
                <img src={Rabisco} className={`${styles.RabiscoTittle} ${stylesrespomsive.RabiscoTittle}`} data-aos="fade-left" data-aos-duration="3000" />
                <div className={`${styles.SubTitle} ${stylesrespomsive.SubTitle}`} data-aos="fade-right">
                    <h1>
                        Com a <span>AlphaDev’s Innovations,</span> suas ideias ganham vida através de soluções personalizadas que unem tecnologia de ponta e criatividade sem limites.
                    </h1>
                </div>
                <button onClick={() => scrollTo(equipe)} className={`${styles.BtnDescubra} ${stylesrespomsive.BtnDescubra}`} data-aos="fade-up"> Descubra quem somos</button>
            </section>
            {/* -- SERVIÇOS -- */}
            <section className={`${styles.Service} ${stylesrespomsive.Service}`} id='service'>
                <img src={BackgroundBlack} className={`${styles.Background} ${stylesrespomsive.Background}`} />
                <div className={`${styles.TittleService} ${stylesrespomsive.TittleService}`} data-aos="fade-right">
                    <h1>
                        Quais <span>serviços</span> nós da <span>AlphaDev's</span> oferecemos?
                    </h1>
                </div>
                <section className={`${styles.ContainerServicos} ${stylesrespomsive.ContainerServicos}`} >
                    <div className={`${styles.BancodeDados} ${stylesrespomsive.BancodeDados}`} data-aos="flip-right">
                        <img src={Database} />
                        <div className={`${styles.Informations} ${stylesrespomsive.Informations}`}>
                            <h1>
                                Banco de <span>dados:</span>
                            </h1>
                            <h2>
                                Na AlphaDev's, criamos e otimizamos Bancos de Dados para maximizar a eficiência do seu negócio.
                            </h2>
                        </div>
                    </div>
                    <div className={`${styles.LandingPages} ${stylesrespomsive.LandingPages}`} data-aos="flip-right">
                        <img src={LP} />
                        <div className={`${styles.Informations} ${stylesrespomsive.Informations}`}>
                            <h1>
                                Landing <span>Pages:</span>
                            </h1>
                            <h2>
                                Na AlphaDev's, criamos Landing Pages que convertem, atraindo clientes para seu e-commerce ou app.
                            </h2>
                        </div>
                    </div>
                    <div className={`${styles.Ecommerce} ${stylesrespomsive.Ecommerce}`} data-aos="flip-right">
                        <img src={Ecommerce} />
                        <div className={`${styles.Informations} ${stylesrespomsive.Informations}`}>
                            <h1>
                                E-<span>Commerce:</span>
                            </h1>
                            <h2>
                                Inicie seu e-commerce com a AlphaDev's. Transformamos sua visão em uma plataforma que encanta e vende.
                            </h2>
                        </div>
                    </div>
                </section>
                <h1 className={`${styles.DetailText} ${stylesrespomsive.DetailText}`}>
                    dev's
                </h1>
            </section>
            {/* -- TIME -- */}
            <section className={`${styles.Time} ${stylesrespomsive.Time}`} ref={equipe} id='equipe'>
                <img src={BackgroundWhite} className={`${styles.Background} ${stylesrespomsive.Background}`} />
                <div className={`${styles.InformationsTeam} ${stylesrespomsive.InformationsTeam}`}>
                    <img src={RabiscoCircle} />
                    <h1 data-aos="fade-right">
                        Conheça nossa <span>equipe!!</span>
                    </h1>
                    <h2 data-aos="fade-right">
                        Somos um grupo de seis jovens estudantes de <span>Análise e Desenvolvimento de Sistemas</span> da <span>UNIP</span> (Universidade Paulista) que decidiu formar uma <span>"empresa"</span> para oferecer nossos serviços.
                    </h2>
                </div>
                <section className={`${styles.Equipe} ${stylesrespomsive.Equipe}`}>
                    <div className={`${styles.Emerson} ${stylesrespomsive.Emerson}`} data-aos="fade">
                        <h1>
                            Emerson Sales
                        </h1>
                        <h2>
                            Gerenciador de ADS
                        </h2>
                    </div>
                    <div className={`${styles.Gustavo} ${stylesrespomsive.Gustavo}`} data-aos="fade">
                        <h1>
                            Gustavo Silva
                        </h1>
                        <h2>
                            Gerenciador de Sistemas
                        </h2>
                    </div>
                    <div className={`${styles.Joao} ${stylesrespomsive.Joao}`} data-aos="fade">
                        <h1>
                            João Augusto
                        </h1>
                        <h2>
                            Coordenador de Estatística
                        </h2>
                    </div>
                    <div className={`${styles.Kauan} ${stylesrespomsive.Kauan}`} data-aos="fade">
                        <h1>
                            Kauan Rodrigues
                        </h1>
                        <h2>
                            Coordenador de Processos
                        </h2>
                    </div>
                    <div className={`${styles.Otavio} ${stylesrespomsive.Otavio}`} data-aos="fade">
                        <h1>
                            Otavio Garcia
                        </h1>
                        <h2>
                            Coordenador do Dep. Pessoal
                        </h2>
                    </div>
                    <div className={`${styles.Samuel} ${stylesrespomsive.Samuel}`} data-aos="fade">
                        <h1>
                            Samuel Bispo
                        </h1>
                        <h2>
                            Ceo
                        </h2>
                    </div>
                </section>
            </section>
            {/* -- FEEDBACKS -- */}
            <section className={`${styles.Clientes} ${stylesrespomsive.Clientes}`} id='cliente'>
                <div className={`${styles.InformationsClientes} ${stylesrespomsive.InformationsClientes}`} data-aos="fade-left">
                    <h1>
                        Aqui estão alguns <span>depoimentos</span> de nossos clientes na <span className={styles.Degrade}>AlphaDev's.</span>
                    </h1>
                    <h2>
                        Aqui estão alguns dos principais comentários deixados por clientes satisfeitos após utilizarem nossos serviços.
                    </h2>
                </div>
                <div className={`${styles.ContainerManutencao} ${stylesrespomsive.ContainerManutencao}`}>
                    <h1>
                        ESTÁ ÁREA AINDA ESTÁ EM MANUTENÇÃO!!
                    </h1>
                </div>
                <h1 className={`${styles.DetailText2} ${stylesrespomsive.DetailText2}`}>
                    Alpha
                </h1>
            </section>
            {/* -- CONTATO -- */}
            <section className={`${styles.Contato} ${stylesrespomsive.Contato}`} id='contato'>
                <div className={`${styles.TittleContato} ${stylesrespomsive.TittleContato}`} data-aos="fade-left">
                    <h1>
                        Converse conosco e faça <span>parte</span> da <span className={styles.Degrade}>Nossa Jornada!</span>
                    </h1>
                    <h2>
                        Estamos prontos para ouvir você! Envie sua mensagem, e responderemos o mais breve possível.
                    </h2>
                </div>
                <section className={`${styles.ContainerForms} ${stylesrespomsive.ContainerForms}`} data-aos="fade-left">
                    <Forms />
                </section>
            </section>
            <Footer />
        </>
    );
};

export default Home;