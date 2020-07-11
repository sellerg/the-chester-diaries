import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://insta-like-viewer.com/instagram/chesters_home/QVFCOFFTNFdSZEdvZGxVQ2twQm1pWUFrMTZTdDF6aHhHVWNGNW91T21UaDhXS29ib01Qek16YTNkbHUtMXhqbmU5VjZiQy0xYUJ4SXhWNEp1c3h2VTJRZw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="instagram logo" />
          </a>
        </FooterSocialIcons>
        <p>2020, Chester's home</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
