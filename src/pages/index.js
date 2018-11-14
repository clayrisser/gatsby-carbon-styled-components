import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Button } from '../components'
import { Link } from 'gatsby'
import '../styles'
import Image from '../components/image'
import Layout from '../components/layout'

const IndexPage = () => (
  <ThemeProvider theme={{}}>
    <Layout>
      <Button>Hello</Button>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
