import { IColumn, Spinner, SpinnerSize, DetailsList, DetailsListLayoutMode, Selection, ISelection,  CompoundButton, PrimaryButton } from 'office-ui-fabric-react'
import * as React from "react";
import { IOpening } from "../../../cmcommon/objmodelOpening";
import styles from './Wpcareers.module.scss'
import { JoblistingState, CareerappState, userInfoState } from "../types/index";
import { Dispatch } from "redux";
import { IDataProvider } from "../../../cmcommon/IDataProvider";
import { navigateSteps, initcurrentstep} from "../actions/actionCreatorjobApplication";
import { connect } from 'react-redux';
import CMPersonalInfoComponent from './personalInfo'
import CMContactInfoComponent from './contactInfo'
import CMAcademicInfoComponent from './academicInfo'
import CMExperienceInfoComponent from './experienceInfo'
import { CMWizardSteps } from '../../../cmcommon/objmodelIACareers';
import { enumjobApplicationactions } from '../actions/actiontypes';



export interface IUserFormEvents{
  performnextStep:(pcurStep:CMWizardSteps, pnextStep:CMWizardSteps, pprevStep: CMWizardSteps) => void;
  //performinitView:() =>void;
  performprevStep:(pcurStep:CMWizardSteps, pnextStep:CMWizardSteps, pprevStep: CMWizardSteps) => void;
}

function mapStateToProps(state: CareerappState, ownProps: {}): CareerappState {
  return state;
}
// Component ===>  Store  sending events to store from components
    
const mapDispatchToProps = (dispatch: Dispatch<userInfoState>) : IUserFormEvents => ({
  performnextStep:(pcurStep:CMWizardSteps, pnextStep:CMWizardSteps, pprevStep: CMWizardSteps) => {
          dispatch(navigateSteps(pcurStep, pnextStep, pprevStep, enumjobApplicationactions.WIZARD_Show_Next, false));
      },
  performprevStep:(pcurStep:CMWizardSteps, pnextStep:CMWizardSteps, pprevStep: CMWizardSteps) => {
    dispatch(navigateSteps(pcurStep, pnextStep, pprevStep, enumjobApplicationactions.WIZARD_Show_Prev, false));
      }
  });
    
      
class CMUserInfoForm extends React.Component<CareerappState & IUserFormEvents,  {}> {
      constructor (props){
        super(props);
      }

      public render(){
            //let { items, isLoading, columns, isCompactMode  } = this.state;

            return (
              <div className={ styles.wpcareers}>
              {this.props.jobapplicationstate.currentView==CMWizardSteps.WIZARD_Step1 ?<CMPersonalInfoComponent   />:null}
              {this.props.jobapplicationstate.currentView==CMWizardSteps.WIZARD_Step2 ?<CMContactInfoComponent  />:null}
              {this.props.jobapplicationstate.currentView==CMWizardSteps.WIZARD_Step3 ?<CMAcademicInfoComponent  />:null}
              {this.props.jobapplicationstate.currentView==CMWizardSteps.WIZARD_Step4 ?<CMExperienceInfoComponent  />:null}  
              
              <PrimaryButton
                    primary={true} 
                    checked={true}
                    disabled ={this.props.jobapplicationstate.prevView ==null}
                    onClick={this._onPrevClick}
                    >
                    Prev : {this.props.jobapplicationstate.prevView}
                </PrimaryButton>                
                <PrimaryButton
                    primary= {true}
                    checked= {true}
                    disabled = {this.props.jobapplicationstate.nextView==null}
                    onClick = {this._onNextClick}
                    >
                    Next : {this.props.jobapplicationstate.nextView}
                </PrimaryButton>                
                <PrimaryButton
                    primary={true}
                    checked={true}
                    disabled ={this.props.jobapplicationstate.isvalidState==false}>
                    Submit
                </PrimaryButton>                 
              </div>
              
            );      
      }

      _onPrevClick =(): void => {
        this.props.performprevStep(this.props.jobapplicationstate.currentView, this.props.jobapplicationstate.nextView, this.props.jobapplicationstate.prevView);
      }

      _onNextClick = () : void => {
        this.props.performnextStep(this.props.jobapplicationstate.currentView, this.props.jobapplicationstate.nextView, this.props.jobapplicationstate.prevView);
      };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CMUserInfoForm);