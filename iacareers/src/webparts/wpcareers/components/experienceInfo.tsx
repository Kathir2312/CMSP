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


export interface IExperienceInfoProps {
       }

export interface IExperienceInfoEvents{
    performinitView:() =>void;
}
function mapStateToProps(state: any, ownProps: {}): userInfoState {
    return state.jobapplicationstate;
    }
const mapDispatchToProps = (dispatch: Dispatch<userInfoState>) : IExperienceInfoEvents => ({
        performinitView:() =>{
            dispatch(initviewState(CMWizardSteps.WIZARD_Step4, null, CMWizardSteps.WIZARD_Step3, enumjobApplicationactions.WIZARD_Init_Current));
         }
        });
    
class CMExperienceInfoComponent extends React.Component<userInfoState &  IExperienceInfoEvents, {}> {
      constructor (props){
        super(props);
        this.props.performinitView();
      }
      public render(){
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
  export default connect(mapStateToProps, mapDispatchToProps)(CMExperienceInfoComponent);


  