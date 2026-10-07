import { styled } from '@linaria/react'

export const BlogStyled = styled.article`
  max-width: 52rem;
  margin: auto;
  padding: 1.25rem;
  header {
    min-height: 85svh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-block: 3rem;
  }
  nav a {
    display: inline-block;
    padding-block: 0.75rem;
  }
  h1 {
    font-size: clamp(2.5rem, 8vw, 5rem);
    line-height: 1.05;
    letter-spacing: -0.04em;
  }
  p {
    font-size: 1.15rem;
    max-width: 65ch;
  }
  @media (min-width: 48rem) {
    padding: 2rem;
  }
`
