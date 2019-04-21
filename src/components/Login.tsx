import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { SetLoginFieldPayload } from '../actions/loginActions';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const InputArea = styled.div`
  padding: 10px;
  align-self: center;
  justify-self: center;
  width: 320px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 1px 1px 15px #232121;
`;

const InputField = styled.input`
  width: 80%;
  height: 30px;
  margin: 10px;
`;

const Button = styled.button`
  width: 80%;
  height: 30px;
  background-color: #055fee;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export interface ILoginProps extends RouteComponentProps<any> {
  username: string;
  serverURL: string;
  password: string;
  loading: boolean;
  setInputVal: (e: SetLoginFieldPayload) => void;
  login: (e: React.MouseEvent) => void;
}

class Login extends React.Component<ILoginProps> {
  public render() {
    return (
      <Wrapper>
        <InputArea>
          <form>
            <InputField
              value={this.props.serverURL}
              onChange={this.setInputVal}
              name="serverURL"
            />
            <InputField
              value={this.props.username}
              onChange={this.setInputVal}
              name="username"
            />
            <InputField
              value={this.props.password}
              onChange={this.setInputVal}
              name="password"
              type="password"
            />
            <Button disabled={this.props.loading} onClick={this.props.login}>
              Log inn
            </Button>
          </form>
        </InputArea>
      </Wrapper>
    );
  }
  private setInputVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.setInputVal({ name: e.target.name, value: e.target.value });
  };
}

export default Login;
