import * as React from 'react';

import { Link } from 'react-router-dom'

import {
    BsSpotify,
    BsFacebook,
    BsLinkedin,
    BsInstagram,
    BsYoutube,
    BsTwitter
} from 'react-icons/bs'

export default function Footer(props: any) {
    return (
        <div>

            <footer>

                <div className="columns">

                    <div className="lines">

                        <p className="title">Sobre nós</p>

                        <div className="links">

                            <Link to='/' className='link-footer'>Nossa empresa</Link>
                            <Link to='/' className='link-footer'>Nosso café</Link>
                            <Link to='/' className='link-footer'>Atendimento ao cliente</Link>
                            <Link to='/' className='link-footer'>Compliance e Privacidade</Link>
                            <Link to='/' className='link-footer'>Código de Ética e Conduta SouthRock</Link>

                        </div>

                    </div>

                    <div className="lines">

                        <p className="title">Carreira</p>

                        <div className="links">

                            <Link to='/' className='link-footer'>Central de carreiras</Link>

                        </div>

                    </div>

                    <div className="lines">

                        <p className="title">Impacto Social</p>

                        <div className="links">

                            <Link to='/' className='link-footer'>Comunidade</Link>
                            <Link to='/' className='link-footer'>Meio Ambiente</Link>
                            <Link to='/' className='link-footer'>Fornecimento ético</Link>
                            <Link to='/' className='link-footer'>Histórias Starbucks</Link>

                        </div>

                    </div>

                    <div className="lines">

                        <p className="title">Starbucks Rewards</p>

                        <div className="links">

                            <Link to='/' className='link-footer'>Baixe o aplicativo</Link>
                            <Link to='/' className='link-footer'>Termos & Condições do Starbucks Card</Link>
                            <Link to='/' className='link-footer'>Termos & Condições do Starbucks Rewards</Link>
                            <Link to='/' className='link-footer'>Termos & Condições do Gift Card</Link>
                            <Link to='/' className='link-footer'>Termos & Condições de Promoções Starbucks</Link>
                            <Link to='/' className='link-footer'>Termos & Condições Peça e Pague pelo Celular e Retire na Loja</Link>

                        </div>
                    </div>

                    <div className="lines">

                        <Link to="/"><img src="https://raw.githubusercontent.com/Luan16p/data/8efa56a8b5e7356d4a968c645dae9e8191dc38a0/sb-historias-logo.svg" className='logo2' alt="Logo-sb" /></Link>

                    </div>
                </div>


                <div className="medias container">

                    <div className="1_line line__1">

                        <div className="icons">

                            <BsSpotify className="icon" />

                            <BsFacebook className="icon" />

                            <BsLinkedin className="icon" />

                            <BsInstagram className="icon" />

                            <BsYoutube className="icon" />

                            <BsTwitter className="icon" />


                        </div>

                    </div>

                    <div className="warnings">

                        <div className="warnings-warn">

                            <h3>Política de privacidade</h3>
                            <h3>Política de troca de produto</h3>
                            <h3>Termos de uso</h3>
                            <h3>Política de Cookies</h3>

                        </div>

                    </div>

                </div>
            </footer>

        </div>
    )
}