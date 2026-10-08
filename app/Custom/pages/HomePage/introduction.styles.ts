import { styled } from '@linaria/react'

export const IntroductionStyled = styled.div`
  .intro-screen {
    position: relative;
    min-height: 100svh;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: clip;
    background: #f5f2eb;
    color: #292724;
  }
  .question-screen {
    justify-content: space-between;
    align-items: stretch;
    background-image: radial-gradient(#51443417 0.6px, transparent 0.6px);
    background-size: 5px 5px;
  }
  .poster-header {
    min-height: 3rem;
    display: flex;
    align-items: center;
    padding-right: 6rem;
  }
  .wordmark {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  .asterisk {
    font-size: 2rem;
    color: #d33425;
    line-height: 1;
  }
  .author-line {
    display: none;
    /* Имя намеренно нейтрально: это подпись, а не привлекающий внимание CTA.
       Акцент темы появляется только при наведении или клавиатурном фокусе. */
    text-decoration: none;
  }
  .author-line:hover,
  .author-line:focus-visible {
    color: #ce3023;
  }
  .question-composition {
    position: relative;
    width: 100%;
    margin-block: 2.5rem 2rem;
    padding-bottom: 8rem;
  }
  .screen-text {
    max-width: none;
    margin: 0;
    font-family: 'Promotion Poster', 'Arial Narrow', Arial, sans-serif;
    font-size: clamp(3.6rem, 19.5vw, 10.75rem);
    font-weight: 800;
    letter-spacing: -0.06em;
    line-height: 0.96;
    transform: translateY(var(--parallax-offset, 0px));
  }
  h1.screen-text {
    position: relative;
    z-index: 1;
  }
  h1 > span {
    display: block;
  }
  .last-line {
    color: #d33425;
  }
  .question-mark {
    display: inline-block;
    transform: rotate(9deg);
    margin-left: 0.01em;
  }
  .detour-arrow {
    position: absolute;
    right: 0;
    bottom: 4.8rem;
    width: 30%;
    height: 6rem;
    stroke: #d33425;
    stroke-width: 7;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform: translateY(calc(var(--parallax-offset, 0px) * -0.3));
  }
  .answer-link {
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 0;
    min-height: 4.5rem;
    width: 12.2rem;
    padding: 0.7rem 0.8rem 0.7rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    border: 1px solid #ce3023;
    border-radius: 0;
    background: #ce3023;
    color: #fffaf0;
    text-decoration: none;
    font-size: 1.7rem;
    font-weight: 700;
    letter-spacing: -0.05em;
    box-shadow: 5px 5px 0 #292724;
    transition:
      transform 180ms,
      box-shadow 180ms,
      background 180ms;
  }
  .answer-arrow {
    display: grid;
    place-items: center;
    width: 2.7rem;
    height: 2.7rem;
    border: 1px solid #fffaf070;
    border-radius: 50%;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1;
  }
  .answer-link:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 #292724;
    background: #b3261c;
  }
  .answer-link:active {
    transform: translate(4px, 4px);
    box-shadow: 1px 1px 0 #292724;
  }
  .poster-footer {
    display: flex;
    align-items: center;
    gap: 1rem;
    font: 0.6rem monospace;
    color: #716d65;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .footer-rule {
    flex: 1;
    height: 1px;
    background: #c9c5bc;
  }
  .answer-screen {
    background: #e8e4dc;
    text-align: center;
  }
  .answer-screen .answer {
    color: #d33425;
  }
  .panel-index {
    position: absolute;
    left: 1.25rem;
    top: 2rem;
    font: 0.65rem monospace;
    color: #716d65;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .next-screen {
    position: absolute;
    bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    text-decoration: none;
    border-bottom: 1px solid #bcb6ab;
    padding-block: 0.7rem;
    font-size: 0.85rem;
  }
  .next-screen span {
    font-size: 1.4rem;
    color: #ce3023;
  }
  .confirmation-content {
    text-align: center;
    transform: translateY(var(--parallax-offset, 0px));
  }
  .intro-screen.confirmation-screen {
    padding-block: 6rem 8rem;
  }
  .confirmation-content .screen-text {
    transform: none;
    max-width: 9ch;
  }
  @media (min-width: 40rem) {
    .screen-text {
      font-size: clamp(6rem, 14.3vw, 10.75rem);
    }
    .intro-screen {
      padding: 2rem 3rem;
    }
    .poster-header {
      min-height: 3.5rem;
    }
    .wordmark {
      font-size: 0.8rem;
      gap: 0.65rem;
    }
    .asterisk {
      font-size: 2.7rem;
    }
    .question-composition {
      padding-bottom: 3rem;
    }
    .detour-arrow {
      height: 18rem;
      bottom: 6rem;
      right: 1rem;
      width: 30%;
    }
    .answer-link {
      width: 15rem;
      min-height: 5.5rem;
      font-size: 2rem;
    }
    .answer-arrow {
      width: 3.3rem;
      height: 3.3rem;
    }
    .poster-footer {
      font-size: 0.65rem;
    }
    .panel-index {
      left: 3rem;
    }
  }
  @media (min-width: 68rem) {
    .intro-screen {
      padding: 1.7rem 3.5rem 1.7rem 16.5rem;
    }
    .poster-header {
      padding-right: 0;
      justify-content: space-between;
      gap: 2rem;
    }
    .author-line {
      display: block;
      font: 0.58rem monospace;
      color: #716d65;
      text-align: right;
    }
    .author-line span {
      color: #ce3023;
      margin-inline: 0.5rem;
    }
    .screen-text {
      font-size: clamp(7rem, 12.3vw, 12rem);
    }
    .question-composition {
      max-width: 78rem;
      margin: 2rem auto;
      padding-bottom: 0.5rem;
    }
    .detour-arrow {
      width: 28%;
      height: 25rem;
      right: 0;
      bottom: 5.5rem;
    }
    .answer-link {
      right: 0;
      bottom: 0.6rem;
      width: 16rem;
    }
    .panel-index {
      left: 16.5rem;
    }
    .confirmation-content .screen-text {
      max-width: 10ch;
    }
  }
  @media (min-width: 68rem) and (max-height: 760px) {
    .screen-text {
      font-size: min(11vw, 21vh);
    }
    .detour-arrow {
      height: 19rem;
    }
    .question-composition {
      margin-block: 1rem;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .screen-text,
    .confirmation-content,
    .detour-arrow {
      transform: none;
    }
    .answer-link {
      transition: none;
    }
  }
`
