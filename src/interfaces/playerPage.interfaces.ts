import { RouteComponentProps } from 'react-router';

export interface IPlayerPageState {
  isFolderListLoading: boolean;
}

export interface IPlayerPageProps extends RouteComponentProps<any> {
  isFolderListLoading: boolean;
  fetchFolders: (props: IPlayerPageProps) => void;
}
