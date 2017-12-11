import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-webpart-base';

import * as strings from 'Wp1WebPartStrings';
import Wp1 from './components/Wp1';
import { IWp1Props } from './components/IWp1Props';
import { PropertyPaneToggle } from '@microsoft/sp-webpart-base/lib/propertyPane/propertyPaneFields/propertyPaneToggle/PropertyPaneToggle';
import { PropertyPaneCheckbox } from '@microsoft/sp-webpart-base/lib/propertyPane/propertyPaneFields/propertyPaneCheckBox/PropertyPaneCheckbox';

export interface IWp1WebPartProps {
  description: string;
  teststr : string;
}

export default class Wp1WebPart extends BaseClientSideWebPart<IWp1WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IWp1Props> = React.createElement(
      Wp1,
      {
        description: this.properties.description,
        teststr:this.properties.teststr
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
                }),
                PropertyPaneTextField('teststr', {
                  label: strings.CustomLabel
                })  ,
                PropertyPaneCheckbox('ddd',{})            ,
                PropertyPaneToggle('tojf',{label:'Subscribe Me For NewsLetter'}),
              ]
            }
          ]
        }
      ]
    };
  }
}
