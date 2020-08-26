import React from 'react'
import Layout from '../components/layout'

const blogPage = () => {
  return (
    <Layout>
    <div>
      <Header/>
      <h1>
        Blog
      </h1>
      <p>post will show up here on.</p>
      <Footer/>
    </div>
    </Layout>
  )
}

export default blogPage