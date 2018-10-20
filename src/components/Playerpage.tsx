import * as React from 'react';
import { IPlayerProps } from 'src/interfaces/player.interfaces';
import styled from 'styled-components';
import colors from '../style/color-variables';

const PageWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  padding: 0px 10px;
`;

const Header = styled.div`
  height: 70px;
  width: 100%;
  background-color: ${colors.$GREY3};
`;

class Player extends React.Component<IPlayerProps> {
  public componentWillMount() {
    this.props.fetchFolders(this.props);
  }
  public render() {
    return (
      <PageWrapper>
        <Header />
      </PageWrapper>
    );
  }
}

export default Player;
