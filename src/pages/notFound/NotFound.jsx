import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { Button } from "../../components/button/Button"
import { Link} from "react-router-dom"
import { MainNotFoundStyled } from "./NotFound.styled"


function NotFound() {
  return(
    <>
      <Header />
        <MainNotFoundStyled>
          <img src="src/assets/imgs/8030430_3828535.svg" alt="imagem erro 404" />
          <p>Página não encontrada!</p>
          <Link to={-1}>
            <Button text={"Retornar a página anterior"}/>
          </Link>                    
        </MainNotFoundStyled>
      <Footer />
    </>
  )
}
export { NotFound }