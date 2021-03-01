import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const { info, stack, title, image } = nodes[0]
  return (
    <Layout>
      {/* <SEO title="About Me" description="about webdev" /> */}
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
      <section class="section timeline">
        <div class="section-title">
          <h2>timeline</h2>
          <div class="underline"></div>
        </div>
        <div class="section-center timeline-center">
          <article class="timeline-item">
            <h4>2020</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              consequuntur voluptates tempore numquam? Quidem incidunt fugit
              quasi autem, ea excepturi.
            </p>
            <span class="number">1</span>
          </article>

          <article class="timeline-item">
            <h4>2019</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              consequuntur voluptates tempore numquam? Quidem incidunt fugit
              quasi autem, ea excepturi.
            </p>
            <span class="number">2</span>
          </article>

          <article class="timeline-item">
            <h4>2018</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              consequuntur voluptates tempore numquam? Quidem incidunt fugit
              quasi autem, ea excepturi.
            </p>
            <span class="number">3</span>
          </article>

          <article class="timeline-item">
            <h4>2017</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              consequuntur voluptates tempore numquam? Quidem incidunt fugit
              quasi autem, ea excepturi.
            </p>
            <span class="number">4</span>
          </article>

          <article class="timeline-item">
            <h4>2016</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              consequuntur voluptates tempore numquam? Quidem incidunt fugit
              quasi autem, ea excepturi.
            </p>
            <span class="number">5</span>
          </article>

          <article class="timeline-item">
            <h4>2015</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              consequuntur voluptates tempore numquam? Quidem incidunt fugit
              quasi autem, ea excepturi.
            </p>
            <span class="number">6</span>
          </article>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        stack {
          title
          id
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
export default About
