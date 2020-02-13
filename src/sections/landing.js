import React, { Fragment } from 'react';
// import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass';
import Section from '../components/section';
import Particles from 'react-particles-js';
import Image from '../components/imagelanding'
import { Jumbotron, Container } from 'reactstrap';

const LandingPage = () => (
   <>
    <Jumbotron fluid>
      <Container fluid>
        <Image />
      </Container>
    </Jumbotron>
  </>
);

export default LandingPage;