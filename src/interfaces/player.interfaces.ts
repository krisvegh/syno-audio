import { RouteComponentProps } from 'react-router';

export interface IPlayerProps extends RouteComponentProps<any> {
  isFolderListLoading: boolean;
  fetchFolders: (props: IPlayerProps) => void;
}
