import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ForthPage = () => (
  <Layout>
    <SEO title="Page 4" />
    <h1>Hi from the 4th page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ForthPage
