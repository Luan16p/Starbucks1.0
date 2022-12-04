import * as React from 'react';

import { Link } from 'react-router-dom'

import { MdLocalCafe } from 'react-icons/md';
 
import { AiOutlineMenu } from 'react-icons/ai';

export default function Header(props: any) {
    return (
        <div>

            <header className='header shadow'>
                
               <nav className='nav'>

                    <ul className='list-1'>

                            <li><Link to="/" ><img src="https://raw.githubusercontent.com/Luan16p/data/624a6409b17fd5822a1b9d19c447ddd617b9df01/starbucks-nav-logo.svg" className='logo' alt="Logo-sb" /></Link></li>
                            <li><Link to="/">Menu</Link></li>
                            <li><Link to="/">Rewards</Link></li>
                            <li><Link to="/">Nosso café</Link></li>
                            <li><Link to="/">Impacto Social</Link></li>

                    </ul>

                    <ul className="list-2">

                    <li><Link to="/" ><img src="https://raw.githubusercontent.com/Luan16p/data/8efa56a8b5e7356d4a968c645dae9e8191dc38a0/sb-historias-logo.svg" className='logo2' alt="Logo-sb" /></Link></li>
                        <li><Link to="/"><MdLocalCafe className='icon'></MdLocalCafe></Link></li>
                        <li><Link to="/">Encontre uma Loja</Link></li>
                        <li id='entrar'><Link to="/">Entrar</Link></li>
                        <li id='p_agora'><Link to="/">Participar Agora</Link></li>

                    </ul>


                    <div className="offCanvas">

                    <Link to="/" ><img src="https://raw.githubusercontent.com/Luan16p/data/624a6409b17fd5822a1b9d19c447ddd617b9df01/starbucks-nav-logo.svg" className='logo' alt="Logo-sb" /></Link>
                        
                        <AiOutlineMenu id='offCanvas_btn'/>

                    </div>

               </nav>

            </header>

            

        </div>
    )
}