import * as React from "react";

import { useEffect } from 'react';

import Aos from 'aos';

import "aos/dist/aos.css";

export default function Content(props: any) {
    useEffect(() => {
        Aos.init({duration: 1500})
    }, []);
    return (
        <div className="container-xxl">

            <div className="content">

                <p className="text-dark txt">Conforme abrimos nossas lojas, permanecemos no compromisso com a saúde e bem-estar de nossos partners e consumidores.</p>

                <button className="btn border border-1 border-dark">Saiba Mais</button>

            </div>

            <div className="cards mt-4 mb-4">

                <div className="card-single" data-aos="fade-left" style={{'flexDirection': 'row-reverse'}}>

                    <div className="box-text" >


                        <h2>Voltando ao que amamos juntos</h2>

                        <p>Queridos clientes, partners e amigos, estamos acompanhando a situação atual do Brasil em relação ao COVID-19, focados na segurança e bem estar dos nossos partners (como chamamos os nossos colaboradores) e clientes. Seguimos os critérios de quarentena de cada munícipo que temos lojas. As lojas abertas ou com entrega via delivery, através do nosso parceiro Rappi, estão seguindo as orientações das autoridades de saúde.</p>
                        <button className="btn border-border-1 border-dark">Baixe nosso App e verifique as lojas em funcionamento</button>

                    </div>

                    <img src="https://github.com/Luan16p/data/blob/main/sb-dia-do-fotografo.jpg?raw=true" alt="" />

                </div>

                <div className="card-single" data-aos="fade-right">

                    <div className="box-text container-xxl">


                        <h2>Saboreie uma pausa</h2>

                        <p>Saboreie uma pausa com uma de nossas bebidas</p>
                        <button className="btn border-border-1 border-dark">Saiba Mais</button>

                    </div>

                    <img src="https://github.com/Luan16p/data/blob/main/featured-drinks.jpg?raw=true" alt="" />

                </div>

                <div className="card-single"  data-aos="fade-left" style={{'flexDirection': 'row-reverse'}}>

                    <div className="box-text">


                        <h2>Esperança e união</h2>

                        <p>Em parceria com ONGs, Partners da Starbucks se mobilizam para entregar café às comunidades..</p>
                        <button className="btn border-border-1 border-dark">Saiba mais</button>

                    </div>

                    <img src="https://github.com/Luan16p/data/blob/main/donate.jpg?raw=true" alt="" />

                </div>

                <div className="card-single" data-aos="fade-right">

                    <div className="box-text">


                        <h2>Coisas boas estão acontecendo</h2>
                        <p>Um gesto de carinho àqueles que estão na linha de frente todos os dias.</p>
                        <button className="btn border-border-1 border-dark">Saiba mais</button>

                    </div>

                    <img src="https://github.com/Luan16p/data/blob/main/partners.jpg?raw=true" alt="" />

                </div>

            </div>



        </div>
    )
}