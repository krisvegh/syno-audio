import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { IPlayerProps } from 'src/interfaces/player.interfaces';
import Player from '../components/Player';
import { IAppstate } from '../store/IAppstate.interface';

export interface IPlayerContainerProps
  extends RouteComponentProps<IPlayerProps> {}

const playerContainer = (props: IPlayerContainerProps) => <Player {...props} />;

const mapStateToProps = (state: IAppstate) => ({});

export default connect(
  mapStateToProps,
  {}
)(playerContainer);
