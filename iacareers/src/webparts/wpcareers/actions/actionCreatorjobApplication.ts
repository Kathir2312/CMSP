import {enumjobApplicationactions, CMActionJobapplicationNavigate} from './actiontypes'
import {Dispatch} from 'redux'
import { CMWizardSteps } from '../../../cmcommon/objmodelIACareers';


export const initcurrentstep=(pcurStep:CMWizardSteps,  pnextStep: CMWizardSteps, pprevStep:CMWizardSteps, actionType: enumjobApplicationactions): CMActionJobapplicationNavigate=>
({type:actionType, currentView:pcurStep, nextView: pnextStep, prevView:pprevStep, currentViewvalid: false});



export const navigatesteps=(pcurStep:CMWizardSteps,  pnextStep: CMWizardSteps, pprevStep:CMWizardSteps, actionType: enumjobApplicationactions, isValid:boolean): CMActionJobapplicationNavigate=>
({type:actionType, currentView:pcurStep, nextView: pnextStep, prevView:pprevStep, currentViewvalid: isValid });

export function navigateSteps(pcurStep:CMWizardSteps,  pnextStep: CMWizardSteps, pprevStep:CMWizardSteps, actionType: enumjobApplicationactions, isValid:boolean)
{
    try {
        return(cmdispatch:Dispatch<any>) =>{
            cmdispatch(navigatesteps(pcurStep, pnextStep, pprevStep,  actionType, isValid));
        }
    } catch (error) {
        
    }
}

export function initviewState(pcurStep:CMWizardSteps,  pnextStep: CMWizardSteps, pprevStep:CMWizardSteps, actionType: enumjobApplicationactions)
{
    try {
        return(cmdispatch:Dispatch<any>) =>{
            cmdispatch(initcurrentstep(pcurStep, pnextStep, pprevStep, actionType));
        }
    } catch (error) {
        
    }
}


