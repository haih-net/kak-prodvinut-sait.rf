import { styled } from '@linaria/react'

export const JournalStyled = styled.div`
  color: #242424;
  background: #fff;
  .journal-inner {
    width: min(100% - 2.5rem, 68rem);
    margin-inline: auto;
  }
  .page-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 2rem;
    padding: 1rem 7rem 1rem 0;
    border-bottom: 1px solid #d9dcde;
    font-size: 0.85rem;
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
    padding-block: 3rem;
  }
  .eyebrow {
    color: #b82d22;
    font:
      600 0.75rem/1.6 Arial,
      sans-serif;
    text-transform: uppercase;
    margin: 0 0 1rem;
  }
  h1 {
    font:
      800 clamp(2.8rem, 7vw, 5.5rem)/1.04 'Promotion Poster',
      'Arial Narrow',
      Arial,
      sans-serif;
    margin: 0 0 1.5rem;
    max-width: 20ch;
  }
  h1 span {
    color: #ce3023;
  }
  h1:focus,
  [tabindex='-1']:focus {
    outline: none;
  }
  h2 {
    font-size: clamp(1.65rem, 3vw, 2.5rem);
    line-height: 1.2;
    margin: 0 0 1.5rem;
    text-wrap: balance;
  }
  p {
    font-size: 1rem;
    line-height: 1.8;
    margin: 0 0 1.25rem;
  }
  .lead {
    max-width: 38rem;
    font-size: 1.3rem;
    line-height: 1.5;
  }
  .intro {
    max-width: 40rem;
    color: #555b60;
  }
  .section-heading {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.5rem;
    border-bottom: 1px solid #d9dcde;
    padding-bottom: 1rem;
  }
  .section-heading h2 {
    margin: 0;
    font-size: 1.25rem;
  }
  .section-heading > span {
    color: #555b60;
    font-size: 0.8rem;
  }
  .entries {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .entries > li {
    display: grid;
    gap: 1rem;
    padding-block: 2rem;
    border-bottom: 1px solid #d9dcde;
  }
  .entry-number {
    color: #b82d22;
    font:
      800 3rem/1 'Promotion Poster',
      Arial,
      sans-serif;
  }
  .entries h3 {
    font-size: clamp(1.65rem, 3vw, 2.5rem);
    line-height: 1.2;
    margin: 0 0 1rem;
    max-width: 26ch;
  }
  .entries h3 a {
    text-decoration: none;
  }
  .entries h3 a:hover {
    text-decoration: underline;
  }
  .entries p {
    max-width: 42rem;
  }
  .text-link {
    color: #b82d22;
    font-size: 0.95rem;
    font-weight: 600;
  }
  .journal-note {
    margin-block: 3rem;
    padding: 1.5rem;
    background: #f0f2f3;
  }
  .journal-note p {
    max-width: 44rem;
  }
  .byline {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.5rem;
    font-size: 0.85rem;
    color: #555b60;
    padding-top: 1rem;
  }
  .article-header {
    border-bottom: 1px solid #d9dcde;
  }
  .article-copy {
    max-width: 44rem;
    margin-inline: auto;
    padding-top: 2rem;
  }
  .opening {
    font-size: 1.2rem;
  }
  .article-copy section {
    padding-block: 2rem;
    border-bottom: 1px solid #d9dcde;
    scroll-margin-top: 4.5rem;
  }
  .evidence-list {
    list-style: none;
    margin: 2rem 0;
    padding: 0 0 0 1.25rem;
    border-left: 2px solid #ce3023;
  }
  .evidence-list li + li {
    margin-top: 2rem;
  }
  .evidence-list time {
    font-size: 0.9rem;
    font-weight: 700;
    color: #b82d22;
  }
  .evidence-list p {
    margin: 0.5rem 0;
  }
  .evidence-list a {
    font-size: 0.85rem;
  }
  .measurement-note {
    color: #555b60;
    font-size: 0.875rem;
  }
  .calculation {
    background: #f0f2f3;
    padding: 1.25rem;
    margin-block: 2rem;
  }
  .calculation p:last-child {
    margin-bottom: 0;
  }
  .statement {
    border-left: 3px solid #ce3023;
    padding-left: 1.25rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
  .article-end {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: space-between;
    padding-block: 2rem 3rem;
    font-size: 0.9rem;
  }
  @media (min-width: 40rem) {
    .journal-inner {
      width: min(100% - 4rem, 68rem);
    }
    .masthead {
      padding-block: 4rem;
    }
    .entries > li {
      grid-template-columns: 5rem minmax(0, 1fr);
      gap: 2rem;
      padding-block: 3rem;
    }
    .journal-note {
      padding: 2.5rem;
    }
    .article-copy section {
      padding-block: 3rem;
    }
    .article-copy p {
      font-size: 1.1rem;
    }
    .article-copy .measurement-note {
      font-size: 0.9rem;
    }
  }
  @media (min-width: 68rem) {
    margin-left: 14.5rem;
    .page-nav {
      padding-right: 0;
    }
    .article-copy section {
      scroll-margin-top: 1.5rem;
    }
  }
`
