import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      {/* <SEO title="Contact" /> */}
      <section className="contact-page">
        <article className="contact-form">
          <h3>Contact me</h3>
          <form action="https://submit-form.com/d6PonK1r" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
