import React from "react"
import Section from '../components/section';
import Image from '../components/imagevault'
import Fade from 'react-reveal/Fade';
import { Text, Flex, Box } from 'rebass';
import styled from 'styled-components';
import { CardContainer, Card } from '../components/card';


const CARD_HEIGHT = '800px';
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
  <Section.Container id="vault" >
    <Section.Header name="Vault" icon="" label="vault" />
      <Fade right>
        <Card p={2} style={{borderRadius: "30px", height: CARD_HEIGHT , width: '800px'}}>
          <Flex style={{ height: CARD_HEIGHT}}>
            <ImageContainer>
              <ProjectImage style={{borderRadius: "30px"}}  />
            </ImageContainer>

            <TextContainer>
              <span>
                <Title my={2} pb={1}>
                  VAULT
                </Title>
              </span>
              <Text width={[1]} style={{ overflow: 'auto' }}>
              Trained Toshi can be sent on quests to find or rescue more Toshis. Different themes and difficulties of quest will correspond to different groupings and risk levels of ETFs. Sending Toshi on these quests will let users ease into the concept of trading stocks as the harder/riskier quests will be gated off until players demonstrate that they have learned the ins and outs of stock trading. 
              </Text>
            </TextContainer>
          </Flex>
        </Card>
      </Fade>
  </Section.Container>
)

export default VaultSection