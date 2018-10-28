import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { fetchFolders } from 'src/actions/browserActions';
import Browser from 'src/components/Browser';
import { IBrowserProps } from 'src/interfaces/browser.interfaces';
import { IAppstate } from 'src/store/IAppstate.interface';

export interface IBrowserContainerProps
  extends RouteComponentProps<IBrowserProps> {}

const BrowserContainer = (props: any) => <Browser {...props} />;

const mapStateToProps = (state: IAppstate) => ({});

export default connect(
  mapStateToProps,
  { fetchFolders }
)(BrowserContainer);
