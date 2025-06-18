import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaTumblr} from 'react-icons/fa'
import buildId from '../../../../buildId'

const Footer = () => {
  return (
    <footer className='footer color-footer font-inria-serif'>
        <div className='footer-content container'>
            <div className='footer-column'>
                <h4 className='footer-title color-third font-bold'>Serviços</h4>
                <div className='footer-links color-primary font-size-15'>
                    <ul>
                        <li><a href="#">Consultoria em Dados</a></li>
                        <li><a href="#">Análises Estatísticas</a></li>
                        <li><a href="#">Visualização de Dados</a></li>
                        <li><a href="#">Modelos Preditivos</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-column'>
                <h4 className='footer-title color-third font-bold'>Clientes e Projetos</h4>
                <div className='footer-links color-primary font-size-15'>
                    <ul>
                        <li><a href="#">Nossos Cases</a></li>
                        <li><a href="#">Depoimentos</a></li>
                        <li><a href="#">Solicitar Proposta</a></li>
                    </ul> 
                </div>
            </div>
            <div className='footer-column'>
                <h4 className='footer-title color-third font-bold'>Sobre Nós</h4>
                <div className='footer-links color-primary font-size-15'>
                    <ul>
                        <li><a href="#">Quem Somos</a></li>
                        <li><a href="#">Nossa Equipe</a></li>
                        <li><a href="#">Trabalhe Conosco</a></li>
                        <li><a href="#">Blog e Artigos</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-column'>
                <h4 className='footer-title color-third font-bold'>Contato</h4>
                <div className='footer-links color-primary font-size-15'>
                    <ul>
                        <li><a href="#">Fale Conosco</a></li>
                        <li><a href="#">Suporte Técnico</a></li>
                        <li><a href="#">Perguntas Frequentes</a></li>
                        <li><a href="#">Agende uma Reunião</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-social color-primary font-size-24'>
                <FaFacebookF aria-label='Facebook' />
                <FaTwitter aria-label='Twitter' />
                <FaInstagram aria-label='Instagram' />
                <FaTumblr aria-label='Tumblr' />
            </div>
        </div>

        <div className='footer-bottom'>
                <div className='country color-primary font-size-15'><img src="https://flagcdn.com/w40/br.png" alt="Brasil" width="15" height="10" /> Brasil</div>
            <div className='footer-link'>
                <p className='footer-copyright color-third font-size-13'>© 2025 StaticsPlus</p>
                <a href="#" className='footer-terms color-primary font-size-15 font-bold'>Terms and Conditions</a>
                <a href="#" className='footer-privacy color-primary font-size-15 font-bold'>Privacy Policy</a>
            </div>
            <div className='build-id color-primary font-size-15'>
                <p>Build ID: {buildId}</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer