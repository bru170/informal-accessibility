import React from "react"
import {useAboutQuery} from "../../hooks/useAboutQuery"
import {AboutWrapper} from "./About.styles"

const About = () => {
  const data = useAboutQuery()
  const content2 = data.wpPage.content
  return (
    <AboutWrapper>
      <div
        dangerouslySetInnerHTML={{
          __html: content2
        }}
      />
    </AboutWrapper>
  )
}

export default About
