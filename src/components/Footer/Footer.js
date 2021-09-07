import React from "react"
import {Container, Wrapper, Row, Text, Link, Column, Title} from "./Footer.styles"

const Footer = ({children, ...restProps}) => {
  return <Container {...restProps}>{children}</Container>
}

export default Footer

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({children, ...restProps}) {
  return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...restProps}) {
  return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooterGatsbyLink({children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Footer.Text = function FooterText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}
