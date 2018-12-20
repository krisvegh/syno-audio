import { IFolder } from 'src/interfaces/folders.interfaces';

export interface IBrowserProps {
  fetchFolders: (props: IBrowserProps) => void;
  list: IFolder[];
}

export interface IBrowserState {
  state: 'loading' | 'ready';
  path: string[];
  list: IFolder[];
}
