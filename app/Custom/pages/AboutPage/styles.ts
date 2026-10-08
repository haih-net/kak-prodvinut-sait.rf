import { styled } from '@linaria/react'

export const AboutStyled = styled.article`
  background: #fff;
  color: #242424;
  letter-spacing: 0;
  .about-inner {
    width: min(100% - 2.5rem, 72rem);
    margin-inline: auto;
  }
  .page-nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem 1.5rem;
    padding-block: 1rem;
    padding-right: 7rem;
    border-bottom: 1px solid #d9dcde;
    font-size: 0.8rem;
  }
  .page-nav a,
  .text-link {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
  }
  .page-nav a {
    text-decoration: none;
  }
  a:hover {
    color: #b82d22;
  }
  .masthead {
    padding-block: 2rem 1.75rem;
  }
  .eyebrow {
    margin: 0 0 1rem;
    color: #b82d22;
    font:
      600 0.75rem/1.5 Arial,
      sans-serif;
    text-transform: uppercase;
  }
  h1 {
    margin: 0;
    font:
      800 3.25rem/1.02 'Promotion Poster',
      'Arial Narrow',
      Arial,
      sans-serif;
  }
  h1 span {
    color: #ce3023;
  }
  h1:focus,
  [tabindex='-1']:focus {
    outline: none;
  }
  .profession {
    max-width: 40rem;
    margin: 1rem 0 0;
    font-size: 1rem;
    color: #555b60;
  }
  .profile {
    display: grid;
    grid-template-columns: 100px minmax(0, 1fr);
    align-items: start;
    gap: 1.25rem;
    padding-bottom: 2rem;
  }
  .profile-copy {
    display: contents;
  }
  .profile-copy h2 {
    margin: 0;
    font-size: 1.375rem;
  }
  .profile-copy p,
  .profile-copy > a {
    grid-column: 1 / -1;
    margin-bottom: 0;
  }
  .portrait {
    width: 100px;
    max-width: 100%;
    margin: 0;
  }
  .portrait img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 80 / 93;
    background: #eef0f1;
  }
  figcaption {
    display: none;
    margin-top: 0.75rem;
    max-width: 30ch;
    font-size: 0.75rem;
    line-height: 1.5;
    color: #555b60;
  }
  h2 {
    margin: 0 0 1.5rem;
    font-size: 1.85rem;
    line-height: 1.18;
    font-weight: 700;
    text-wrap: balance;
  }
  h3 {
    margin: 2rem 0 0.75rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  p {
    margin: 0 0 1.25rem;
    font-size: 1rem;
    line-height: 1.7;
  }
  .lead {
    font-size: 1.15rem;
    line-height: 1.6;
  }
  .text-link {
    font-size: 0.95rem;
    font-weight: 600;
  }
  .facts {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin: 0;
    padding-block: 1.5rem;
    border-block: 1px solid #d9dcde;
  }
  .facts dt {
    color: #b82d22;
    font:
      800 1.75rem/1.2 'Promotion Poster',
      'Arial Narrow',
      Arial,
      sans-serif;
  }
  .facts dd {
    margin: 0.5rem 0 0;
    font-size: 0.75rem;
    line-height: 1.5;
    color: #555b60;
  }
  .research-directions {
    margin-block: 2rem;
  }
  .research-directions section {
    padding-block: 1.5rem;
    border-top: 1px solid #d9dcde;
  }
  .research-directions h3 {
    margin-top: 0;
  }
  .research-directions a {
    font-size: 0.9rem;
    color: #b82d22;
  }
  .chapter-grid {
    display: grid;
    gap: 1rem;
  }
  .chapter,
  .now-band {
    padding-block: 3rem;
    scroll-margin-top: 1rem;
  }
  .now-band {
    background: #f0f2f3;
    border-block: 1px solid #d9dcde;
  }
  .chapter {
    border-bottom: 1px solid #d9dcde;
  }
  .date-note,
  .side-note {
    display: none;
  }
  .chapter-copy {
    min-width: 0;
    max-width: 46rem;
  }
  .chapter-copy > :last-child,
  .detail-copy > :last-child {
    margin-bottom: 0;
  }
  .statement {
    margin-block: 2rem;
    padding-left: 1.25rem;
    border-left: 3px solid #ce3023;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5;
  }
  details {
    margin-top: 2rem;
    border-block: 1px solid #c9cdd0;
  }
  summary {
    padding: 1rem 0;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 600;
  }
  summary::marker {
    color: #b82d22;
  }
  .detail-copy,
  .source-list {
    padding-block: 0.5rem 1.5rem;
  }
  .source-list {
    margin: 0;
    padding-left: 1.25rem;
  }
  .source-list li + li {
    margin-top: 1.25rem;
  }
  .source-list a {
    font-size: 0.95rem;
  }
  .source-list span {
    display: block;
    margin-top: 0.3rem;
    color: #555b60;
    font-size: 0.85rem;
  }
  .timeline {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .timeline li {
    position: relative;
    padding: 0 0 2rem 1.5rem;
    border-left: 1px solid #c9cdd0;
  }
  .timeline li:last-child {
    padding-bottom: 0;
  }
  .timeline li::before {
    position: absolute;
    top: 0.45rem;
    left: -4px;
    width: 7px;
    height: 7px;
    background: #ce3023;
    content: '';
  }
  .timeline-date {
    color: #b82d22;
    font: 600 0.85rem/1.5 monospace;
  }
  .timeline h3 {
    margin-top: 0.5rem;
  }
  .timeline p {
    margin-bottom: 0.5rem;
  }
  .timeline a {
    font-size: 0.9rem;
  }
  .closing {
    padding-block: 3.5rem;
  }
  .closing h2 {
    max-width: 25ch;
  }
  .closing-copy {
    max-width: 46rem;
  }
  .closing-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 2rem;
    margin-top: 1.5rem;
    color: #b82d22;
  }
  @media (min-width: 22.5rem) {
    .profile {
      gap: 1.75rem;
    }
    .profile-copy h2 {
      font-size: 1.6rem;
    }
  }
  @media (min-width: 40rem) {
    .about-inner {
      width: min(100% - 4rem, 72rem);
    }
    .masthead {
      padding-block: 2.5rem;
    }
    h1 {
      font-size: 4.5rem;
    }
    .profile {
      grid-template-columns: 240px minmax(0, 1fr);
      gap: 2rem;
    }
    .profile-copy {
      display: block;
    }
    .profile-copy h2 {
      margin-bottom: 1.5rem;
      font-size: 1.85rem;
    }
    .profile-copy p {
      margin-bottom: 1.25rem;
    }
    figcaption {
      display: block;
    }
    .portrait {
      width: 240px;
    }
    .facts dt {
      font-size: 2.5rem;
    }
    .facts dd {
      font-size: 0.9rem;
    }
  }
  @media (min-width: 60rem) {
    .about-inner {
      width: min(100% - 6rem, 72rem);
    }
    h1 {
      font-size: 5.5rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    .profession {
      font-size: 1.1rem;
    }
    .profile {
      grid-template-columns: 320px minmax(0, 1fr);
      gap: 4rem;
      padding-bottom: 2.5rem;
    }
    .portrait {
      width: 320px;
    }
    .profile-copy {
      align-self: center;
      max-width: 43rem;
    }
    .profile-copy h2 {
      font-size: 2.5rem;
    }
    .lead {
      font-size: 1.25rem;
    }
    .facts {
      padding-block: 2rem;
    }
    .chapter-grid {
      grid-template-columns: 11rem minmax(0, 1fr);
      gap: 2.5rem;
    }
    .chapter,
    .now-band {
      padding-block: 4.5rem;
    }
    .date-note,
    .side-note {
      display: block;
      margin: 1.5rem 0 0;
      color: #555b60;
      font-size: 0.9rem;
    }
    .date-note {
      font-size: 1.5rem;
      line-height: 1.4;
    }
    .statement {
      font-size: 1.4rem;
    }
    .timeline li {
      display: grid;
      grid-template-columns: 5rem minmax(0, 1fr);
      gap: 1rem;
    }
    .timeline h3 {
      margin-top: 0;
    }
    .closing {
      padding-block: 4.5rem;
    }
    .closing-copy {
      margin-left: 13.5rem;
    }
  }
  @media (min-width: 68rem) {
    margin-left: 14.5rem;
    .about-inner {
      width: min(100% - 4rem, 72rem);
    }
    .page-nav {
      padding-right: 0;
    }
    .profile {
      grid-template-columns: 240px minmax(0, 1fr);
      gap: 2.5rem;
    }
    .portrait {
      width: 240px;
    }
  }
  @media (min-width: 90rem) {
    .profile {
      grid-template-columns: 280px minmax(0, 1fr);
    }
    .portrait {
      width: 280px;
    }
  }
`
