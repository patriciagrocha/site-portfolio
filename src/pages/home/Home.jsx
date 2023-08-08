import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { 
  DescriptionStyled, 
  ImgStyled, 
  MainHomeStyled, 
  SectionIntro, 
  SectionProjectStyled } from "./Home.styled";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return(
    <>
    <Header />
    <MainHomeStyled>
      <SectionIntro>

      <ImgStyled>     
        <img src="https://avatars.githubusercontent.com/u/106890502?v=4" alt="foto Pati Rocha" />
      </ImgStyled>

      <DescriptionStyled>
        <h1>Olá,</h1>
        <TypeAnimation
            sequence = {[
              "  ", 1000,
              "sou a Pati Rocha, Desenvolvedora de Software",5000
             ]}
             wrapper = "extensão" 
             velocidade ={ 20 } 
             style = { {  fontSize : '2em' ,  display : 'inline-block', height:'8rem'  } } 
             repeat = { Infinity }                        
        />           

        <p>Desenvolvedora Frontend com formação nas tecnologias HTML, CSS, JavaScript, React e versionamento com GIT. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas e também participo da Qualificação Profissional na área de Programador de Sistemas de Informação no SENAI/SC.</p>       
      </DescriptionStyled>
      </SectionIntro>

      <SectionProjectStyled>
        <h2>Projetos recentes</h2>
        <p>Em breve...</p>   
      
      </SectionProjectStyled>      
    </MainHomeStyled>
    <Footer />
    </>
  )
}
export { Home }