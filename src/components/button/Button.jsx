import { ButtonStyled } from "./Button.styled"

// eslint-disable-next-line react/prop-types
function Button({text}){
  return(
    <ButtonStyled>
      {text}      
    </ButtonStyled>
  )
}
export { Button }