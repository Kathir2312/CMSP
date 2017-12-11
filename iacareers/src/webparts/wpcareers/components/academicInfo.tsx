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


export interface IAcademicInfoProps {
       }

export interface IAcademicInfoEvents{
    performinitView:() =>void;
}
function mapStateToProps(state: any, ownProps: {}): userInfoState {
    return state.jobapplicationstate;
    }
const mapDispatchToProps = (dispatch: Dispatch<userInfoState>) : IAcademicInfoEvents => ({
        performinitView:() =>{
            dispatch(initviewState(CMWizardSteps.WIZARD_Step3, CMWizardSteps.WIZARD_Step4, CMWizardSteps.WIZARD_Step2, enumjobApplicationactions.WIZARD_Init_Current));
         }
        });
    
class CMAcademicInfoComponent extends React.Component<userInfoState &  IAcademicInfoEvents, {}> {
      constructor (props){
        super(props);
        this.props.performinitView();
      }
      public render(){
            console.log('%c' +'Next:' + this.props.nextView,'color:red;font-weight:bold');
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
  export default connect(mapStateToProps, mapDispatchToProps)(CMAcademicInfoComponent);


  