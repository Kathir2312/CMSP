declare interface IWp1WebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  CustomLabel :string
}

declare module 'Wp1WebPartStrings' {
  const strings: IWp1WebPartStrings;
  export = strings;
}
