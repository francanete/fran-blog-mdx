import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FeatureImageWrapper, H1, P } from "../elements"

export const FeatureImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "office.jpg" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  return (
    <FeatureImageWrapper>
      <H1 textAlign="left" margin="0 0 2rem 0">
          Hi, I'm Fran!
        </H1>
        <P color="dark2" textAlign="left" line-height="large">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          volutpat risus quis lorem pulvinar et pulvinar sit dictum. Eget orci,
          orci in congue cursus nulla tincidunt facilisi.
        </P>
    </FeatureImageWrapper>
  )
}
