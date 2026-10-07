import { styled } from '@linaria/react'
import posterFont from './assets/roboto-condensed.ttf'

export const DocumentStyled = styled.html`
  @font-face {
    font-family: 'Promotion Poster';
    src: url(${posterFont}) format('truetype');
    font-style: normal;
    font-weight: 800;
    font-display: swap;
  }
  color: #24221f;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.65;
  body {
    margin: 0;
  }
`
export const SiteStyled = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
  overflow-wrap: anywhere;
  a {
    color: inherit;
    text-underline-offset: 0.25em;
  }
  :focus-visible {
    outline: 3px solid #aa331b;
    outline-offset: 5px;
  }
  .skip-link {
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
    z-index: 20;
    padding: 0.75rem 1rem;
    background: #fff;
    color: #171717;
    transform: translateY(-160%);
    border: 0;
    font: inherit;
  }
  .skip-link:focus {
    transform: translateY(0);
  }
`
