import styled from "styled-components"

export const MainAboutStyled = styled.main`
  padding: 2rem 1rem 4rem;
  width: 100% ;
  display: flex;
  flex-direction: column;
  gap: 2rem; 
  
  @media( min-width:769px ) {
    width: 80%;
    margin: auto;
    padding: 4rem 2rem;
  } 
`
export const SectionAboutStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  

  @media( min-width:769px ) {
    flex-direction: row;
    gap: 2rem;
  
  }

`
export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & p{
    text-indent: 1rem;
    text-align: justify;
  }

  @media( min-width:769px ) {
    width: 70%;
  }
`
export const ImgAboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & img {
    max-width: 12rem;
    width: 100%;
    border-radius: 100px 0;
   
  } 
  @media( min-width:769px ) {
   flex-direction: row;
   align-items: center;
   justify-content: center;
   width: 20rem;

   & img {
    max-width: 14rem;
    width: 100%;
    border-radius: 120px 0;
    }
  } 
`
export const SectionExpStyled = styled.section`
  padding-top: 2rem;

`