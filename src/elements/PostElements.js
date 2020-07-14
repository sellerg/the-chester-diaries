import styled from "styled-components"

export const PostWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 3 / span 5;
  background-color: ${props => props.theme.colors.light1};
  padding: 4rem 6rem;
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.colors.dark1};
  }

  h1:not(:first-child),
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 400;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.85rem;
    font-weight: 400;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 400;
    color: ${props => props.theme.colors.dark2};
    margin-top: 2rem;
  }

  ul,
  ol {
    color: ${props => props.theme.colors.dark2};
    margin: 1rem 0 1rem 2rem;
  }

  li {
    margin: 0.25rem 0;
  }

  blockquote p {
    font-style: italic;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 2rem 3rem;
  }
`
