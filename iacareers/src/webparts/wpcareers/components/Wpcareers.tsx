import * as React from 'react';
import styles from './Wpcareers.module.scss';
import { IWpcareersProps } from './IWpcareersProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { JoblistingState, CareerappState } from '../types/index';
import { Dispatch } from 'redux';
import CMUserInfoForm from './userForm'

import {
  Link, MarqueeSelection, DetailsList, DetailsListLayoutMode, Selection, Image, ImageFit,
  SelectionMode, Spinner, SpinnerSize, Fabric, ColumnActionsMode, IColumn, CheckboxVisibility,
  Callout, Panel, PanelType, IContextualMenuItem, autobind, ContextualMenu, IContextualMenuProps, DirectionalHint,
  css,
  CompoundButton,
  MessageBar,
  MessageBarButton,
  MessageBarType
} from 'office-ui-fabric-react';
import { connect } from 'react-redux';
import CMjobListingComponent from './JobListing';
import * as ReactDOM from 'react-dom';

function mapStateToProps(state: CareerappState, ownProps: {}): CareerappState {
  return state;
}
// Component ===>  Store  sending events to store from components
const mapDispatchToProps = (dispatch: Dispatch<CareerappState>) => ({
  //nextstep:(current)
});

class Wpcarreers extends React.Component<IWpcareersProps & CareerappState, {}> {
  public render(): React.ReactElement<IWpcareersProps> {
    let allowednext :boolean= (this.props.jobOpeningState.selection.length>0); 
  // console.log('%c'+ (this.props.jobOpeningState.selection.length>0), 'colo:red;font-weight:bold');
  let selectionindex:Number = this.props.jobOpeningState.selection[0];
    return (
      <div className={styles.wpcareers}>
        <CMjobListingComponent dataProvider={this.props.dataProvider} />
        <CompoundButton
          primary={true}
          checked={true}
          disabled ={!(this.props.jobOpeningState.selection.length>0)}>
          Apply for selected job
          </CompoundButton>

          <CMUserInfoForm />
          {/* <MessageBar
          actions={
            <div>
              <MessageBarButton>Yes</MessageBarButton>
              <MessageBarButton>No</MessageBarButton>
            </div>
          }
          messageBarType={MessageBarType.success}
          isMultiline={false}
        >
          Selected Job <Link href='www.bing.com'>Visit our website</Link>
        </MessageBar> */}

      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Wpcarreers);
// export default class Wpcareers extends React.Component<IWpcareersProps, {}> {
//   public render(): React.ReactElement<IWpcareersProps> {
//     return (
//       <div className={ styles.wpcareers }>
//         <div className={ styles.container }>
//           <div className={ styles.row }>
//             <div className={ styles.column }>
//               <span className={ styles.title }>Welcome to SharePoint!</span>
//               <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
//               <p className={ styles.description }>{escape(this.props.description)}</p>
//               <a href="https://aka.ms/spfx" className={ styles.button }>
//                 <span className={ styles.label }>Learn more</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
