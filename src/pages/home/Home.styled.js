import styled from "styled-components"

export const MainHomeStyled = styled.main`
  padding: 2rem 1rem 4rem;
  width: 100% ;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem; 
  
 
  @media( min-width:769px ) {
    width: 90%;
    margin: auto;
    padding: 6rem 2rem;
  }  
`
export const SectionIntro = styled.section`
  width: 100% ;
  display: flex;
  flex-direction: column;
  gap: 2rem; 
 
 & h1{
    font-size: 2rem;
    text-align: center;
  }
  & p{
    text-align: justify;
    text-indent: 1rem;
  }
  @media( min-width:769px ) {
    flex-direction: row-reverse;
    padding-bottom: 4rem ;
  }  
`
export const ImgStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & img {
    max-width: 12rem;
    width: 100%;
    border-radius: 50%;
   
  } 
  @media( min-width:769px ) {
   flex-direction: row;
   align-items: center;
   justify-content: center;
   animation: floatX 5s linear infinite alternate ;

   & img {
    max-width: 14rem;
    width: 100%;
    border-radius: 50%;
    transform: translateY(0px);
    animation: float 8s linear infinite alternate;
   }

    @keyframes float {
    50% {
      transform: translateY(-150px);
    }
    100% {
      transform: translateY(150px);
    }
  }
    @keyframes floatX {
      50% {
      transform: translateX(200px);
    } 
  }     
}  
`
export const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap:2rem;

`
export const SectionProjectStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;

`