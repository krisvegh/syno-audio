import { IFolder } from 'src/interfaces/folders.interfaces';

export interface IBrowserProps {
  fetchFolders: (props: IBrowserProps) => void;
}

export interface IBrowserState {
  state: 'loading' | 'ready';
  path: string[];
  list: IFolder[];
}
