import React from "react"
import Footer from "./Footer"

const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="/">Homepage</Footer.Link>
            <Footer.Link href="/people/">People</Footer.Link>
            <Footer.Link href="/engagements/all-posts/">Engagements</Footer.Link>
            <Footer.Link href="/contact/">Contact</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Accessibility Statement</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Text href="#">Design and Development</Footer.Text>
            <Footer.Text href="#">Barbara Nino and Antonia Bruno</Footer.Text>
            <Footer.Text href="#">&#169; 2021</Footer.Text>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  )
}

export default FooterContainer
