import React from "react"
import {useAboutQuery} from "../../hooks/useAboutQuery"
import {AboutWrapper} from "./About.styles"

const About = () => {
  const data = useAboutQuery()
  const content = data.wpPage.content
  return (
    <AboutWrapper>
      <div
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
    </AboutWrapper>
  )
}

export default About
