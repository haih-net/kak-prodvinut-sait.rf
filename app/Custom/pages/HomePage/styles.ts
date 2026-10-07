import { styled } from '@linaria/react'

export const HomeStyled = styled.article`
  background: #f5f2eb;
  > section:focus,
  section:focus,
  h1:focus {
    outline: none;
  }
  section:focus-visible {
    outline: 2px solid #ce3023;
    outline-offset: -4px;
  }
  .reading {
    max-width: 72rem;
    margin: auto;
    padding: 0 1.25rem;
  }
  .reading > section {
    padding: 3.5rem 0;
    border-bottom: 1px solid #cec9bf;
  }
  h2 {
    max-width: 25ch;
    margin: 0 0 1.75rem;
    font-size: clamp(1.9rem, 4.5vw, 3.4rem);
    line-height: 1.12;
    letter-spacing: -0.035em;
    font-weight: 650;
  }
  p,
  li {
    max-width: 65ch;
    font-size: 1.08rem;
  }
  p {
    margin: 0 0 1.25rem;
  }
  .eyebrow {
    margin-bottom: 1.5rem;
    font-size: 0.8rem;
    font-weight: 650;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: #62584e;
  }
  .lead {
    font-size: 1.3rem;
    line-height: 1.55;
  }
  .participants {
    padding-left: 1.5rem;
    margin-block: 2rem;
  }
  li {
    margin-bottom: 1rem;
    padding-left: 0.5rem;
  }
  .journal-link {
    display: inline-flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 0;
    font-weight: 650;
    font-size: 1.15rem;
  }
  @media (min-width: 68rem) {
    .reading {
      margin-left: 16.5rem;
      margin-right: 3.5rem;
      padding-inline: 0;
    }
  }
  @media (min-width: 48rem) {
    .reading {
      padding-inline: 2rem;
    }
    .reading > section {
      padding-block: 5rem;
    }
    p,
    li {
      font-size: 1.18rem;
    }
    .lead {
      font-size: 1.5rem;
    }
  }
`
