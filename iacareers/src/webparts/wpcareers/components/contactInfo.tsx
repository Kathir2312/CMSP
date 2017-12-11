import { IColumn, Spinner, SpinnerSize, DetailsList, DetailsListLayoutMode, Selection, ISelection,  CompoundButton, Button, PrimaryButton } from 'office-ui-fabric-react'
import * as React from "react";
import { IOpening } from "../../../cmcommon/objmodelOpening";
import styles from './Wpcareers.module.scss'
import { CareerappState, userInfoState } from "../types/index";
import { Dispatch } from "redux";
import { IDataProvider } from "../../../cmcommon/IDataProvider";
import { navigateSteps, initviewState} from "../actions/actionCreatorjobApplication";
import { connect } from 'react-redux';
import { CMWizardSteps } from '../../../cmcommon/objmodelIACareers';
import { enumjobApplicationactions } from '../actions/actiontypes';


export interface IContactInfoProps {
       }

export interface IContactInfoEvents{
    performinitView:() =>void;
}
//Store ===> Component(import/decouple state object in to component specific state props)
function mapStateToProps(state: any, ownProps: {}): userInfoState {
    return state.jobapplicationstate;
    }
// Component ===>  Store  sending events to store from components
const mapDispatchToProps = (dispatch: Dispatch<userInfoState>) : IContactInfoEvents => ({
        performinitView:() =>{
            dispatch(initviewState(CMWizardSteps.WIZARD_Step2, CMWizardSteps.WIZARD_Step3, CMWizardSteps.WIZARD_Step1, enumjobApplicationactions.WIZARD_Init_Current));
         }
        });
    
class CMContactInfoComponent extends React.Component<userInfoState &  IContactInfoEvents, {}> {
      constructor (props){
        super(props);
        this.props.performinitView();
      }
      public render(){
            //let { items, isLoading, columns, isCompactMode  } = this.state;
            return (
              <div className={ styles.wpcareers}>
                <h5>TS: {this.props.currentView}</h5>
              </div>
              
            );      
      }

      public componentDidMount() {
         //this.props.performinitView();
      }


  }
  export default connect(mapStateToProps, mapDispatchToProps)(CMContactInfoComponent);


  