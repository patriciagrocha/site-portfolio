import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"
import { SectionAboutStyled, ImgAboutStyled, MainAboutStyled, SectionExpStyled, DivStyled } from "./AboutMe.styled"

function AboutMe() {
  return(
    <>
      <Header />
      <MainAboutStyled>

        <SectionAboutStyled>
          <DivStyled>
            <h2>Sobre mim</h2>
            <p>
        Desenvolvedora Frontend em transição de carreira desde 2022, com habilidades em HTML, CSS, JavaScript e React. Cursando Tecnologia em Análise e Desenvolvimento de Sistemas e participando de Qualificação Profissional em Programação de Sistemas de Informação no SENAI/SC. Busco combinar paixão por tecnologia com desafios estimulantes, enfatizando aprendizado contínuo e atualização. Adquiri também habilidades interpessoais, liderança e resolução de conflitos. Procuro aplicar conhecimento técnico e interpessoal para criar soluções inovadoras, especialmente em desenvolvimento de interfaces intuitivas e envolventes.       
            </p>
          </DivStyled>             
    
          <ImgAboutStyled> 
            <img src="https://avatars.githubusercontent.com/u/106890502?v=4" alt="foto Pati Rocha" />
          </ImgAboutStyled>
        </SectionAboutStyled> 

        <SectionExpStyled>
          <h2>Background</h2>
          <p>Em breve...</p>
        </SectionExpStyled>
   

      </MainAboutStyled>
      <Footer />
    </>
  )
}
export { AboutMe}