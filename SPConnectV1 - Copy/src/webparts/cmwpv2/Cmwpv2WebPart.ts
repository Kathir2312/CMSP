import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'Cmwpv2WebPartStrings';
import Cmwpv2 from './components/Cmwpv2';
import { ICmwpv2Props } from './components/ICmwpv2Props';
import Environment from '@microsoft/sp-core-library/lib/Environment';


export interface ICmwpv2WebPartProps {
  description: string;
}

export default class Cmwpv2WebPart extends BaseClientSideWebPart<ICmwpv2WebPartProps> {
  
  protected onInit(): Promise<void> {
    debugger;
    return super.onInit();
  }

  
  public render(): void {
    const element: React.ReactElement<ICmwpv2Props > = React.createElement(
      Cmwpv2,
      {
        description: this.properties.description,
        pageContext: this.context.pageContext
      }
    );

    ReactDom.render(element, this.domElement);
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
