import { styled } from '@linaria/react'

export const ShareStyled = styled.aside`
  min-width: 0;
  &.share-compact {
    width: min(100%, 32rem);
    margin: 2rem auto 0;
    padding: 0.4rem 0.5rem;
  }
  .share-note {
    margin: 0 0 1.15rem;
    max-width: none;
    color: #74695d;
    font:
      italic 1.15rem Georgia,
      serif;
    transform: rotate(-3deg);
  }
  .share-primary {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    min-height: 4.5rem;
    padding: 0.8rem 1rem 0.8rem 1.3rem;
    border: 1px solid #ce3023;
    border-radius: 0;
    background: #ce3023;
    color: #fffaf0;
    box-shadow: 5px 5px 0 #292724;
    font:
      700 1.05rem/1.2 Arial,
      Helvetica,
      sans-serif;
    letter-spacing: -0.035em;
    text-align: left;
    cursor: pointer;
    transition:
      transform 180ms,
      box-shadow 180ms,
      background 180ms;
  }
  &.share-compact .share-primary {
    width: min(100%, 24rem);
    transform: rotate(-2deg);
  }
  .share-arrow {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid #fffaf080;
    border-radius: 50%;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1;
  }
  .share-primary:hover {
    background: #b3261c;
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0 #292724;
  }
  &.share-compact .share-primary:hover {
    transform: rotate(0deg) translateY(-2px);
  }
  .share-primary:active,
  &.share-compact .share-primary:active {
    transform: translate(4px, 4px);
    box-shadow: 1px 1px 0 #292724;
  }
  .share-options {
    margin-top: 1.6rem;
    padding: 1rem;
    border: 1px dashed #b9b0a3;
    background: #f8f5ee;
    text-align: left;
  }
  .share-options-caption {
    margin: 0 0 0.8rem;
    font: 0.62rem monospace;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #74695d;
  }
  .share-buttons {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem;
  }
  .share-network,
  .share-copy {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    min-height: 44px;
    min-width: 0;
    padding: 0.6rem 0.25rem;
    border: 1px solid #d0c8bc;
    border-radius: 0;
    background: transparent;
    color: #292724;
    font:
      0.72rem/1.35 Arial,
      Helvetica,
      sans-serif;
    cursor: pointer;
  }
  .share-network svg {
    flex-shrink: 0;
  }
  .share-network svg circle {
    fill: transparent;
  }
  .share-network svg path {
    fill: currentColor;
  }
  .share-copy > span {
    font-size: 1.5rem;
    line-height: 1;
  }
  .share-network:hover,
  .share-copy:hover {
    border-color: #ce3023;
    color: #b3261c;
    background: #fffaf0;
  }
  .share-status {
    margin: 0.8rem 0 0;
    font-size: 0.8rem;
    color: #62584e;
  }
  .share-status:empty {
    margin: 0;
  }
  input {
    width: 100%;
    min-width: 0;
    margin-top: 0.5rem;
    padding: 0.65rem;
    border: 1px solid #b9b0a3;
    border-radius: 0;
    background: #fffaf0;
    color: #292724;
    font: 0.8rem/1.5 monospace;
  }
  @media (min-width: 40rem) {
    .share-primary {
      min-height: 5rem;
      font-size: 1.2rem;
    }
    &.share-compact .share-primary {
      font-size: 1.4rem;
    }
    .share-note {
      font-size: 1.3rem;
    }
    .share-arrow {
      width: 3rem;
      height: 3rem;
      font-size: 2rem;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .share-primary {
      transition: none;
    }
  }
`
