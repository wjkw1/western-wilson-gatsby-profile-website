import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/blog/">Go to blog</Link>
    <Link to="/card-game/">Go to Card Game</Link>
    <h1>Hi people</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>Something great soon to come...</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
