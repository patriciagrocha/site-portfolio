import { FooterStyled, IconStyled } from "./Footer.styled.js"
import { FaLinkedinIn} from "react-icons/fa"
import { MdEmail} from "react-icons/md";


function Footer() {
  return(
   
     <FooterStyled>      
      <IconStyled>
      <FaLinkedinIn />
      <MdEmail />
      </IconStyled> 
      <p>&copy;Todos os direitos reservados.</p>   
    </FooterStyled>      
  )
}
export { Footer }