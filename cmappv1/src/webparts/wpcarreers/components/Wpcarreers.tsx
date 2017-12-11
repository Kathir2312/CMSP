import * as React from 'react';
import styles from './Wpcarreers.module.scss';
import { IWpcarreersProps } from './IWpcarreersProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {
  Link, MarqueeSelection, DetailsList, DetailsListLayoutMode, Selection, Image, ImageFit,
  SelectionMode, Spinner, SpinnerSize, Fabric, ColumnActionsMode, IColumn, CheckboxVisibility,
  Callout, Panel, PanelType, IContextualMenuItem, autobind, ContextualMenu, IContextualMenuProps, DirectionalHint,
  css
} from 'office-ui-fabric-react';
import { connect } from 'react-redux';
import CMjobListingComponent  from './JobListing';
import { JoblistingState, CareerappState } from '../types/index';
import * as ReactDOM from 'react-dom';
import { Dispatch } from 'redux';


function mapStateToProps(state: CareerappState, ownProps: {}): CareerappState {
	return state;
    }
// Component ===>  Store  sending events to store from components
const mapDispatchToProps = (dispatch: Dispatch<CareerappState>)  => ({});

 class Wpcarreers extends React.Component<IWpcarreersProps,  {}> {
  public render(): React.ReactElement<IWpcarreersProps> {
    return (
      <div className={ styles.wpcarreers }>
         <CMjobListingComponent  dataProvider={this.props.dataProvider}/> 
      </div>
    )
  }
}

  export default connect(mapStateToProps, mapDispatchToProps)(Wpcarreers);

  // public render(): void {
  //   const element: React.ReactElement<IWpcarreersProps > = React.createElement(
  //     Wpcarreers,
  //     {
  //       description: this.properties.description
  //     }
  //   );

  //   ReactDom.render(element, this.domElement);
  // }


