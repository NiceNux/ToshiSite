import React from 'react';
import Layout from '../components/layout';
import Landing from '../sections/landing';
import Build from '../sections/build';
import Explore from '../sections/explore';
import Quest from '../sections/quest';
import Vault from '../sections/vault';
// import Display from '../sections/display';
// import Info from '../sections/info';
import Header from '../components/header';
import Footer from '../components/footer';
// import '../styles/index.scss'

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <Build />
    <Explore />
    <Quest />
    <Vault />
    {/* <Display /> */}
    {/* <Info /> */}
    <Footer /> 
  </Layout>
);

export default IndexPage;
