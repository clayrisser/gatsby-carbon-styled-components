import '../styles';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../components';
import Layout from '../components/layout';

const IndexPage = () => (
  <ThemeProvider theme={{}}>
    <Layout>
      <Button>Hello</Button>
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
