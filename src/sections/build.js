import React from "react"
import Section from '../components/section';
import Image from '../components/imagevault'
import Fade from 'react-reveal/Fade';
import { Text, Flex, Box } from 'rebass';
import styled from 'styled-components';
import { CardContainer, Card } from '../components/card';


const CARD_HEIGHT = '200px';
const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const VaultSection = () => (   
  <Section.Container id="build" >
    <Section.Header name="BUILD" icon="" label="build" />
      <Fade right>
        <Card p={2} style={{borderRadius: "30px", height: CARD_HEIGHT , width: '800px'}}>
          <Flex style={{ height: CARD_HEIGHT}}>
            <ImageContainer>
              <ProjectImage style={{borderRadius: "30px"}}  />
            </ImageContainer>

            <TextContainer>
              <span>
                <Title my={2} pb={1}>
                  BUILD
                </Title>
              </span>
              <Text width={[1]} style={{ overflow: 'auto' }}>
              You can direct Toshis to build your kingdom. New neighborhoods and sectors become available where you can have your Toshis reside. These neighborhoods become financial buckets as you build up an increasingly robust budgeting tool. Your kingdom also becomes a representation of your wealth as you watch your kingdom grow and thrive with more new Toshi each week and in turn 
              </Text>
            </TextContainer>
          </Flex>
        </Card>
      </Fade>
  </Section.Container>
)

export default VaultSection