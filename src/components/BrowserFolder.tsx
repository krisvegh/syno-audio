import * as React from 'react';
import { BroswerRow } from 'src/components/styled-components';
import { IFolder } from 'src/interfaces/folders.interfaces';

class BrowserFolder extends React.Component<IFolder> {
  public render() {
    return (
      <BroswerRow>
        <p>{this.props.title}</p>
      </BroswerRow>
    );
  }
}

export default BrowserFolder;
