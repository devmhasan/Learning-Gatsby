import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {

  return(
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Mahmudul Hasan, a Front End 
        developer living in beautiful Faridganj
      </h2>
      <p>Need a developer? <Link to="/contact">Contact with Me</Link> </p>
    </Layout>
  )
}

export default IndexPage
