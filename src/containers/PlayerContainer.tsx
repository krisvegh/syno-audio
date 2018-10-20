import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { fetchFolders } from 'src/actions/playerPageActions';
import { IPlayerProps } from 'src/interfaces/player.interfaces';
import Player from '../components/Player';
import { IAppstate } from '../store/IAppstate.interface';

export interface IPlayerContainerProps
  extends RouteComponentProps<any>,
    IPlayerProps {}

const playerContainer = (props: IPlayerContainerProps) => <Player {...props} />;

const mapStateToProps = (state: IAppstate) => ({});

export default connect(
  mapStateToProps,
  { fetchFolders }
)(playerContainer);
