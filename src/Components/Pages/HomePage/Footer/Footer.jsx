import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaTumblr} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-content container'>
            <div className='footer-column'>
                <h4>Serviços</h4>
                <p><a href="#">Consultoria em Dados</a></p>
                <p><a href="#">Análises Estatísticas</a></p>
                <p><a href="#">Visualização de Dados</a></p>
                <p><a href="#">Modelos Preditivos</a></p>
            </div>
            <div className='footer-column'>
                <h4>Clientes e Projetos</h4>
                <p><a href="#">Nossos Cases</a></p>
                <p><a href="#">Depoimentos</a></p>
                <p><a href="#">Solicitar Proposta</a></p>
            </div>
            <div className='footer-column'>
                <h4>Sobre Nós</h4>
                <p><a href="#">Quem Somos</a></p>
                <p><a href="#">Nossa Equipe</a></p>
                <p><a href="#">Trabalhe Conosco</a></p>
                <p><a href="#">Blog e Artigos</a></p>
                <p><a href="#">Política de Privacidade</a></p>
            </div>
            <div className='footer-column'>
                <h4>Contato</h4>
                <p><a href="#">Fale Conosco</a></p>
                <p><a href="#">Suporte Técnico</a></p>
                <p><a href="#">Perguntas Frequentes</a></p>
                <p><a href="#">Agende uma Reunião</a></p>
            </div>
            <div className='footer-social'>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaTumblr />
            </div>
        </div>

        <div className='footer-bottom'>
            <select>
                <option>Brasil</option>
            </select>
            <div className='footer-link'>
                <p>@ 2025 StaticsPlus</p>
                <a href="#">Terms and Conditions</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    </footer>
  );
};

export default Footer