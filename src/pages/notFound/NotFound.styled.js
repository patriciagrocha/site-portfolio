import styled from "styled-components"

export const MainNotFoundStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 2rem;
  gap: 1rem;

  & img {
    max-width: 15rem;
    width: 100%;
  }
  @media( min-width:769px ) {
    gap: .5rem;

    & img {
    max-width: 18rem;
    width: 100%;
  }

  }

`