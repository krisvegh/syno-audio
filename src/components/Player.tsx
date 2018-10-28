import * as React from 'react';
import BrowserContainer from 'src/containers/BrowserContainer';
import { IPlayerProps } from 'src/interfaces/player.interfaces';
import styled from 'styled-components';
import colors from '../style/color-variables';

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 10px;
  flex-direction: column;
`;

const Header = styled.div`
  height: 70px;
  width: 100%;
  background-color: ${colors.$GREY3};
`;

class Player extends React.Component<IPlayerProps> {
  public render() {
    return (
      <PageWrapper>
        <Header />
        <BrowserContainer />
      </PageWrapper>
    );
  }
}

export default Player;
