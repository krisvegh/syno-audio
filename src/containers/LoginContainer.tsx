import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { loginAction, setInputVal } from '../actions/loginActions';
import Login, { ILoginProps } from '../components/Login';
import { IAppstate } from '../store/IAppstate.interface';

export interface ILoginContainerProps extends RouteComponentProps<any> {}

const LoginContainer = (props: ILoginProps) => <Login {...props} />;

const mapStateToProps = (state: IAppstate) => ({
  loading: state.login.loading,
  password: state.login.password,
  serverURL: state.login.serverURL,
  username: state.login.username
});

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: ILoginContainerProps
) =>
  bindActionCreators(
    {
      login() {
        return loginAction(ownProps);
      },
      setInputVal
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
