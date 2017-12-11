import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'WpcareersWebPartStrings';
import Wpcareers from './components/Wpcareers';
import { IWpcareersProps } from './components/IWpcareersProps';
import { IDataProvider } from '../../cmcommon/IDataProvider';
import mockDataProvider from '../../../lib/cmcommon/mockDataProvider';
import careersStore from './stores/careersStore';
import { Provider } from 'react-redux';
import sharepointDataProvider from '../../cmcommon/sharepointDataProvider';

const mystore = careersStore();

export interface IWpcareersWebPartProps {
  description: string;
}

export default class WpcareersWebPart extends BaseClientSideWebPart<IWpcareersWebPartProps> {
  private _dataProvider: IDataProvider;
  
     protected onInit(): Promise<void> {
       //debugger;
      //  //if (DEBUG && Environment.type === EnvironmentType.Local) {
      //    this._dataProvider = new mockDataProvider();  
      //  //} else {
      //    //  this._dataProvider = new sharepointDataProvider();
      //  //}
    // if (Environment.type== EnvironmentType.ClassicSharePoint || EnvironmentType.SharePoint) {
    //     this._dataProvider = new sharepointDataProvider();
    // }
    // else {
      this._dataProvider = new mockDataProvider();  
    //}


       return super.onInit();
     }
  public render(): void {
    const provider: React.ReactElement<Provider> = React.createElement(Provider, {store : mystore}, React.createElement(
      Wpcareers,
      {
        description: this.properties.description,
        pageContext: this.context.pageContext,
        dataProvider: this._dataProvider,
      })
    );
    ReactDom.render(provider, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
