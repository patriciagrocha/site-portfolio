import { Button } from "../button/Button"
import { HeaderStyled, ListStyled } from "./Header.styled"


function Header() {

  const pages = [
    {
      route:"/",
      description:"Home"
    },
    {
      route:"/abouteMe",
      description:"Sobre"
    },
    {
      route:"/portfolio",
      description:"Portfólio"
    }
  ]

  return(
    <HeaderStyled>     
      <nav>
        <ListStyled>
          {
            pages.map(({route, description}) => {
              return(
                <li key={route}>{description}</li> 
              )         
            })
          }
        </ListStyled>    
      </nav>  
      <Button text={"Clica aqui"}/>

    </HeaderStyled>
  )
}
export { Header }