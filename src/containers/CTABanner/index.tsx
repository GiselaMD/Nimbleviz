import React, { FC } from 'react';
import NimbleVizLogo from '../../assets/LogoBlack.png';

import { Wrapper, Card, Title, SubTitle, Email, Logo, Desc } from './styles';

const CTABanner: FC<{}> = () => (
  <Wrapper>
    <Card>
      <Logo src={NimbleVizLogo} />
      <Title>More details coming soon!</Title>
      <Desc>
        <SubTitle>Get in touch at</SubTitle>
        <Email href="mailto:contact@nimbleviz.com">contact@nimbleviz.com</Email>
      </Desc>
    </Card>
  </Wrapper>
);
export default CTABanner;
