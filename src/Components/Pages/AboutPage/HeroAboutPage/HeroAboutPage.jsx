import React from 'react'
import './HeroAboutPage.css'
import team from '../../../../assets/Team.png'
import background from '../../../../assets/Background-Full.png'
import icon_1 from '../../../../assets/Vector-1.png'
import icon_2 from '../../../../assets/Vector-2.png'
import icon_3 from '../../../../assets/Vector-3.png'
import icon_4 from '../../../../assets/Vector-4.png'
import icon_5 from '../../../../assets/Vector-5.png'
import icon_6 from '../../../../assets/Vector-6.png'
import icon_7 from '../../../../assets/Vector-7.png'
import icon_8 from '../../../../assets/Vector-8.png'
import icon_9 from '../../../../assets/Vector-9.png'

function Hero() {
  return (
    <div className='about-us-container container font-inter-sans-serif'>
      <div className='background-wrapper'>
        <img src={background} alt="" />
      </div>
      <div className='background-icons'>
        <img src={icon_1} className="icon icon-1" alt="" />
        <img src={icon_2} className="icon icon-2" alt="" />
        <img src={icon_3} className="icon icon-3" alt="" />
        <img src={icon_4} className="icon icon-4" alt="" />
        <img src={icon_5} className="icon icon-5" alt="" />
        <img src={icon_6} className="icon icon-6" alt="" />
        <img src={icon_7} className="icon icon-7" alt="" />
        <img src={icon_8} className="icon icon-8" alt="" />
        <img src={icon_9} className="icon icon-9" alt="" />
      </div>
    <section className='about-us-section'>
      <div className='about-us-text color-secondary'>
        <h2 className='sub-title font-size-20 font-semi-bold'>Sobre Nós</h2>
        <h1 className='main-title font-size-32 font-black'>Bem-vindo ao nosso site de Estatística!</h1>
        <p className='text-box-1 font-size-20 font-regular'>
          Somos apaixonados por dados, análises e pela busca por respostas objetivas para perguntas complexas.
          Nosso objetivo é tornar a Estatística acessível, compreensível e aplicável a todos — desde estudantes
          iniciantes até profissionais que utilizam a análise de dados em suas áreas de atuação.
        </p>
      </div>

      <section className='about-us-team color-primary'>
        <div className='about-us-team-text'>
          <h3 className='sub-title font-size-20 font-semi-bold'>Nossa Equipe</h3>
          <h2 className='main-title font-size-32 font-black'>Especialista em Estatística</h2>
          <p className='text-box-2 font-size-20 font-regular'>
            Por trás do nosso trabalho está uma equipe multidisciplinar formada por estatísticos, analistas de dados,
            cientistas, professores e profissionais com ampla experiência em diversos setores que utilizam a Estatística
            como ferramenta essencial.
          </p>
          <p className='text-box-3 font-size-20 font-regular'>
            Nossos especialistas são apaixonados por transformar dados em soluções. Com formações sólidas em Estatística,
            Matemática, Ciência de Dados e áreas correlatas, eles unem conhecimento técnico e visão prática para entregar
            análises precisas, conteúdo de qualidade e suporte confiável.
          </p>
        </div>
      </section>
    </section>
      <div className='about-us-image'>
        <img src={team} alt="Imagem indisponível" />
      </div>
      <div className='book-mark-wrapper'>
        <div className='book-mark'></div>
        <div className='book-mark-back'></div>
      </div>
    </div>
  )
}

export default Hero