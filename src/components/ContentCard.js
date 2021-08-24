import React from "react"
import { CardWrapper, P, H2 } from "../elements"
import { Button } from "../components"

export const ContentCard = ({ date, title, excerpt, slug }) => {
  return (
    <CardWrapper>
      <H2 textAlign="left" margin="0 0 1rem 0">
        {title}
      </H2>
      <P size="xSmall" textAlign="left" margin="0 0 0.5rem 0" color="dark2">
        {date}
      </P>
      <P size="small" color="dark2" textAlign="left" margin="0 0 1.5rem 0">
        {excerpt}
      </P>
      <Button href={slug}>Read More</Button>
    </CardWrapper>
  )
}
