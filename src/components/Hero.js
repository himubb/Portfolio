import React, { useEffect } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import Typed from "typed.js"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  useEffect(() => {
    const options = {
      strings: [" I'm Himavanth Boddu ", " I'm Himu  "],
      typeSpeed: 50,
      smartBackspace: true,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
    }

    // New Typed instance
    const typed = new Typed("#instruction", options)

    // Destroy Typed instance on unmounting the component to prevent memory leaks
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div-- className="underline"></div-->
            <div>
              <span className="nameTitle" id="instruction"></span>
            </div>
            <h4>Graduate Student at University of Florida</h4>
            <Link to="/contact" className="btn">
              Contact Me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
