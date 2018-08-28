import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface IPlayerPageProps extends RouteComponentProps<any> {
  isFolderListLoading: boolean;
  fetchFolders: (props: IPlayerPageProps) => void;
}

class PlayerPage extends React.Component<IPlayerPageProps> {
  public componentWillMount() {
    this.props.fetchFolders(this.props);
  }
  public render() {
    return <p> This is the Playerpage</p>;
  }
}

export default PlayerPage;
