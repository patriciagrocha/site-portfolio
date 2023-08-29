import styled from "styled-components"

export const MainPortStyled  = styled.main`
  padding: 2rem 1rem 4rem;
  width: 100% ; 

  & h2 {
    text-align: center;
  }

  & ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-top: 2rem;
    }

  @media( min-width:769px ) {
    padding: 4rem 2rem;
    
     & ul {
      padding-top: 4rem;
    } 
  } 
`
export const ArticleStyled = styled.article`
  width: 20rem;
  height: 8rem;
  border: 1px solid gray;
  margin: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 1rem;

`