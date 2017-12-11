import {IColumn, Spinner, SpinnerSize, DetailsList, DetailsListLayoutMode, Selection, ISelection,  CompoundButton, Button, PrimaryButton, ComboBox, IComboBoxOption, SelectableOptionMenuItemType } from 'office-ui-fabric-react'
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

import {
    autobind,
    BaseComponent,
    getNativeProps,
    divProperties
  } from 'office-ui-fabric-react/lib/Utilities';
import { assign } from '@microsoft/sp-lodash-subset';


export interface IPersonalInfoProps {
       }

export interface IPersonalInfoEvents{
    performinitView:() =>void;
}
//Store ===> Component(import/decouple state object in to component specific state props)
function mapStateToProps(state: any, ownProps: {}): userInfoState {
    return state.jobapplicationstate;
    }
// Component ===>  Store  sending events to store from components
const mapDispatchToProps = (dispatch: Dispatch<userInfoState>) : IPersonalInfoEvents => ({
        performinitView:() =>{
            dispatch(initviewState(CMWizardSteps.WIZARD_Step1, CMWizardSteps.WIZARD_Step2, null, enumjobApplicationactions.WIZARD_Init_Current));
         }
        });
    
class CMPersonalInfoComponent extends React.Component<userInfoState &  IPersonalInfoEvents, {}> {
      constructor (props){
        super(props);
        this.props.performinitView();
      }

		
      private _testOptions =
      [{ key: 'Header', text: 'Theme Fonts', itemType: SelectableOptionMenuItemType.Header },
      { key: 'A', text: 'Arial Black' },
      { key: 'B', text: 'Times New Roman' },
      { key: 'C', text: 'Comic Sans MS' },
      { key: 'divider_2', text: '-', itemType: SelectableOptionMenuItemType.Divider },
      { key: 'Header1', text: 'Other Options', itemType: SelectableOptionMenuItemType.Header },
      { key: 'D', text: 'Option d' },
      { key: 'E', text: 'Option e' },
      { key: 'F', text: 'Option f' },
      { key: 'G', text: 'Option g' },
      { key: 'H', text: 'Option h' },
      { key: 'I', text: 'Option i' },
      { key: 'J', text: 'Option j', disabled: true },
      ];

      private _fontMapping: { [key: string]: string } = {
        ['Arial Black']: '"Arial Black", "Arial Black_MSFontService", sans-serif',
        ['Time New Roman']: '"Times New Roman", "Times New Roman_MSFontService", serif',
        ['Comic Sans MS']: '"Comic Sans MS", "Comic Sans MS_MSFontService", fantasy',
        ['Calibri']: 'Calibri, Calibri_MSFontService, sans-serif'
      };
      
  
      
      public render(){
            //let { items, isLoading, columns, isCompactMode  } = this.state;
            return (
              <div className={ styles.wpcareers}>
                {this.props.currentView}
                <ComboBox
          defaultSelectedKey='C'
          label='Basic uncontrolled example (allowFreeform: T, AutoComplete: T):'
          id='Basicdrop1'
          ariaLabel='Basic ComboBox example'
          allowFreeform={ true }
          autoComplete='on'
          options={ this._testOptions }
          onRenderOption={ this._onRenderFontOption }
          // tslint:disable:jsx-no-lambda
          onFocus={ () => console.log('onFocus called') }
          onBlur={ () => console.log('onBlur called') }
          onMenuOpen={ () => console.log('ComboBox menu opened') }
        // tslint:enable:jsx-no-lambda
        />               
              </div>
              
            );      
      }
      public componentDidMount() {
         //this.props.performinitView();
      }

      @autobind
      private _onRenderFontOption(item: IComboBoxOption): JSX.Element {
    
        if (item.itemType === SelectableOptionMenuItemType.Header ||
          item.itemType === SelectableOptionMenuItemType.Divider) {
          return <span className={ 'ms-ComboBox-optionText' }>{ item.text }</span>;
        }
    
        let fontFamily = this._fontMapping[item.text];
    
        if (fontFamily === null || fontFamily === undefined) {
          let newFontFamily: string = item.text;
          if (newFontFamily.indexOf(' ') > -1) {
            newFontFamily = '"' + newFontFamily + '"';
          }
    
          // add a default fallback font
          newFontFamily += ',"Segoe UI",Tahoma,Sans-Serif';
    
          this._fontMapping = assign({}, this._fontMapping, { [fontFamily as string]: newFontFamily });
          fontFamily = newFontFamily;
        }
    
        return <span className={ 'ms-ComboBox-optionText' } style={ { fontFamily: fontFamily && fontFamily } }>{ item.text }</span>;
      }

  }
  export default connect(mapStateToProps, mapDispatchToProps)(CMPersonalInfoComponent);


  