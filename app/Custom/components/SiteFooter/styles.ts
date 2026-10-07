import { styled } from '@linaria/react'

export const FooterStyled = styled.footer`
  position: relative;
  background: #e8e4dc;
  color: #292724;
  border-top: 1px solid #c9c3b8;
  .footer-inner {
    max-width: 78rem;
    margin: auto;
    padding: 2.5rem 1.25rem 1rem;
  }
  .footer-kicker {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    font: 0.65rem monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #b22c20;
  }
  .footer-kicker > span {
    font:
      2rem Arial,
      sans-serif;
  }
  .footer-conversation {
    display: grid;
    gap: 2rem;
    padding-block: 2rem 3rem;
  }
  h2 {
    margin: 0;
    font:
      800 clamp(2.7rem, 9.1vw, 5.4rem)/0.98 'Promotion Poster',
      'Arial Narrow',
      Arial,
      sans-serif;
    letter-spacing: -0.045em;
  }
  h2 > span {
    color: #ce3023;
  }
  .footer-sharing {
    min-width: 0;
  }
  .footer-sharing > p {
    margin: 0 0 1.4rem;
    font-size: 0.9rem;
    line-height: 1.6;
  }
  .footer-colophon {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-top: 1px solid #c2bbb0;
    padding-block: 1.5rem;
  }
  .footer-author {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    font-size: 0.85rem;
  }
  .footer-author > span + span {
    color: #6f685e;
    font-size: 0.75rem;
  }
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem 1.5rem;
  }
  nav a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    min-height: 44px;
    font-size: 0.8rem;
    text-decoration: none;
  }
  nav a:hover {
    color: #b22c20;
    text-decoration: underline;
  }
  nav a span {
    color: #b22c20;
  }
  .footer-signature {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border-top: 1px solid #c2bbb0;
    padding-top: 1rem;
  }
  .footer-signature > span {
    max-width: 24ch;
    color: #6f685e;
    font-size: 0.65rem;
  }
  .footer-signature > a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    min-height: 44px;
    white-space: nowrap;
    font:
      italic 1rem Georgia,
      serif;
    text-decoration: none;
  }
  .footer-signature > a span {
    color: #ce3023;
    font-size: 2rem;
    line-height: 1;
    transition: transform 180ms;
  }
  .footer-signature > a:hover span {
    transform: rotate(-12deg);
  }
  @media (min-width: 40rem) {
    .footer-inner {
      padding: 3.5rem 3rem 1.2rem;
    }
    .footer-colophon {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .footer-signature > span {
      max-width: none;
    }
  }
  @media (min-width: 68rem) {
    z-index: 11;
    &[data-with-sidebar='true'] .footer-inner {
      margin-left: 16.5rem;
      margin-right: 3.5rem;
      padding-inline: 0;
    }
    .footer-conversation {
      padding-block: 2rem 4rem;
    }
  }
  @media (min-width: 80rem) {
    .footer-conversation {
      grid-template-columns: minmax(0, 1fr) 21rem;
      align-items: center;
      gap: 3rem;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .footer-signature > a span {
      transition: none;
    }
  }
`
