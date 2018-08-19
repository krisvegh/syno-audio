import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Dispatch } from 'redux';
import PlayerPage from '../components/Playerpage';
import { IAppstate } from '../store/IAppstate.interface';

export interface IPlayerPageContainerProps extends RouteComponentProps<any> {}

const playerPageContainer = (props: IPlayerPageContainerProps) => (
  <PlayerPage {...props} />
);

const mapStateToProps = (state: IAppstate) => ({});

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: IPlayerPageContainerProps
) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(playerPageContainer);
