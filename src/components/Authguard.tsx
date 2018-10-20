import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { checkToken } from 'src/utils/apiUtils';
import styled from 'styled-components';

const Loading = styled.p`
  color: black;
`;

class Authguard extends React.Component<IAuthguardProps> {
  public state = {
    loading: false,
    success: false
  };

  public async componentWillMount() {
    this.setState({ ...this.state, loading: true });
    const { success, SynoToken } = await checkToken();
    console.log(success, SynoToken);
    if (!success) {
      this.setState({
        ...this.state,
        loading: false
      });
    }
    if (SynoToken) {
      this.setState({
        ...this.state,
        loading: false,
        success: true
      });
    }

    return false;
  }

  public render() {
    const { component, ...rest } = this.props;

    const handleRender = (props: IAuthguardProps) => {
      return this.state.success ? (
        React.createElement(
          component as React.ComponentClass<RouteProps>,
          props
        )
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      );
    };

    if (this.state.loading) {
      return <Loading>Loading...</Loading>;
    }

    return <Route {...rest} render={handleRender} />;
  }
}

export interface IAuthguardProps extends RouteProps {
  onSuccessfulLogin?: () => void;
}

export default Authguard;
