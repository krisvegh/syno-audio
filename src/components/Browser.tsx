import * as React from 'react';
import BrowserFile from 'src/components/BrowserFile';
import BrowserFolder from 'src/components/BrowserFolder';
import { IBrowserProps } from 'src/interfaces/browser.interfaces';
import styled from 'styled-components';

const ListWrapper = styled.div`
  overflow: scroll;
`;

class Browser extends React.Component<IBrowserProps> {
  public componentWillMount() {
    this.props.fetchFolders(this.props);
  }
  public render() {
    return (
      <ListWrapper>
        {this.props.list.map(item => {
          if (item.type === 'folder') {
            return <BrowserFolder key={item.id} {...item} />;
          } else if (item.type === 'file') {
            return <BrowserFile key={item.id} {...item} />;
          } else {
            return null;
          }
        })}
      </ListWrapper>
    );
  }
}

export default Browser;
