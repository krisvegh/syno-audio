import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { fetchFolders } from 'src/actions/playerPageActions';
import { IPlayerPageProps } from 'src/interfaces/playerPage.interfaces';
import PlayerPage from '../components/Playerpage';
import { IAppstate } from '../store/IAppstate.interface';

export interface IPlayerPageContainerProps
  extends RouteComponentProps<any>,
    IPlayerPageProps {}

const playerPageContainer = (props: IPlayerPageContainerProps) => (
  <PlayerPage {...props} />
);

const mapStateToProps = (state: IAppstate) => ({
  isFolderListLoading: state.playerPage.isFolderListLoading
});

export default connect(
  mapStateToProps,
  { fetchFolders }
)(playerPageContainer);
