import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
    <div>
      <Header/>
      <h1>
        About Me
      </h1>
      <p> I'm currently working on Front end developemnt </p>
      <p><Link to="/contact">Contact with Me</Link></p>
      <Footer/>
    </div>
    </Layout>
  )
}

export default AboutPage