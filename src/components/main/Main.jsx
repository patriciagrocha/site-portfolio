import { MainStyled } from "./Main.styled"

// eslint-disable-next-line react/prop-types
function Main({children}){
  return(
    <MainStyled>    
      {children}
    </MainStyled>
  )
}
export { Main }