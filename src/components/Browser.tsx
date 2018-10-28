import * as React from 'react';
import { IBrowserProps } from 'src/interfaces/browser.interfaces';

class Browser extends React.Component<IBrowserProps> {
  public componentWillMount() {
    this.props.fetchFolders(this.props);
  }
  public render() {
    return <p>This is the Browser</p>;
  }
}

export default Browser;
