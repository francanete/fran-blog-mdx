import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonWrapper = styled(props => <Link {...props} />)`
  padding: 0.35rem 0.75rem;
  background-color: ${props => props.theme.colors.main1};
  border-radius: 5px;
  color: ${props => props.theme.colors.dark1};
  font-weight: 300;
  font-size: 0.8rem;
  width: fit-content;
  transition: filter 0.3s ease;
  text-decoration: none;

  &:hover,
  &:focus {
    filter: brightness(110%);
    background-color: ${props => props.theme.colors.dark2};
    color: ${props => props.theme.colors.light1};
  }
`
