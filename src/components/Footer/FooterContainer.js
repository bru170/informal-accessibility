import React from "react"
import Footer from "./Footer"

const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Site Map</Footer.Title>
            <Footer.Link href="/">Homepage</Footer.Link>
            <Footer.Link href="/people/">People</Footer.Link>
            <Footer.Link href="/engagements/all-posts/">Engagements</Footer.Link>
            <Footer.Link href="/contact/">Contact</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">Facebook</Footer.Link>
            <Footer.Link href="#">Twitter</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Accessibility</Footer.Title>
            <Footer.Text>Privacy</Footer.Text>
            <Footer.Text>Statement</Footer.Text>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  )
}

export default FooterContainer
