import { HeaderStyled, LinkStyled, NavStyled } from "./Header.styled";


function Header() {

  const pages = [
    {
      route:"/",
      description:"Home"
    },
    {
      route:"/aboutMe",
      description:"Sobre"
    },
    {
      route:"/portfolio",
      description:"Portfólio"
    }
  ]

  return(
    <HeaderStyled>     
      
        <NavStyled>
          {
            pages.map(({route, description}) => {
              return(
                <LinkStyled key={route} to={route} target="_blank">
                  {description}
                </LinkStyled> 
              )         
            })
          }
        </NavStyled>    
       

    </HeaderStyled>
  )
}
export { Header }
