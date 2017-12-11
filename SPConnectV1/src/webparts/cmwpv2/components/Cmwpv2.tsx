import * as React from "react";
import * as ReactDOM from "react-dom";

import styles from './Cmwpv2.module.scss';
import { ICmwpv2Props } from './ICmwpv2Props';
import { escape } from '@microsoft/sp-lodash-subset';
import mockclienthttp  from './mockclienthttp';
import {ISPList, ISPLists} from  './SpList';
import { SPHttpClient, SPHttpClientResponse  } from '@microsoft/sp-http';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  Link, MarqueeSelection, DetailsList, Selection, Image, ImageFit,
  SelectionMode, Spinner, SpinnerSize, Fabric, ColumnActionsMode, IColumn, CheckboxVisibility,
  Callout, Panel, PanelType, IContextualMenuItem, autobind, ContextualMenu, IContextualMenuProps, DirectionalHint,
  css
} from 'office-ui-fabric-react';
import  ICmwpv2State  from './ICmwpv2State';
import pnp from "sp-pnp-js";
import { Web } from "sp-pnp-js/lib/sharepoint/webs";

export default class Cmwpv2 extends React.Component<ICmwpv2Props, ICmwpv2State> {

    constructor(props) {
      super(props);
      //this.state = { myItems: null };
      this.state = {
      myItems: [],
      isLoading:true
    };
 
    }

    public componentDidMount() {
      debugger;
    let myweb : Web;
    if (Environment.type === EnvironmentType.Local) {
      this._getMockListData().then((response) => {
        this.setState({myItems: response.value, isLoading:false});
      });
    }
    else if (Environment.type == EnvironmentType.SharePoint || 
              Environment.type == EnvironmentType.ClassicSharePoint) {
      const web: Web = new Web(this.props.pageContext.web.absoluteUrl);
      web.lists.getAs<ISPList[]>().then(ls=>{
        this.setState({myItems: ls, isLoading:false})
      });

    }
  }


  public render(): React.ReactElement<ICmwpv2Props> {
    return (
      <div className={ styles.cmwpv2 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
        {this.state.myItems.map((item)=>
           <ul className={styles.list}>
             <li className={styles.listItem}>
               <span className={css('ms-font-l')}>{item.Title} <h5>{item.Id}</h5></span>
               <span className={css('ms-font-l')}>{item.Description} <h5>Count : {item.ItemCount}</h5></span>
             </li>
           </ul>
           )}
      </div>
    );
  }

  

  private _getMockListData(): Promise<ISPLists> {
    return mockclienthttp.get()
      .then((data: ISPList[]) => {
        var listData: ISPLists = { value: data };
        return listData;
      }) as Promise<ISPLists>;  
  }

 
  // private  _getRenderVal(): JSX.Element
  // {
  //   return (
  //     <div>
  //     {this.state.myItems.map((item)=>{
  //       <ul className={styles.list}>
  //         <li className={styles.listItem}>
  //           <span className={css('ms-font-l')}>{item.Title}</span>
  //         </li>
  //       </ul>;
  //       })
  //     }
  //     </div>
  //   );
  // }
  // private _renderListAsync(): void {
  //   // Local environment
  //   if (Environment.type === EnvironmentType.Local) {
  //     this._getMockListData().then((response) => {
  //       //this._renderList(response.value);
  //       this.setState({myItems: response.value});
  //     });
  //   }
  //   else if (Environment.type == EnvironmentType.SharePoint || 
  //             Environment.type == EnvironmentType.ClassicSharePoint) {
  //               const web: Web = new Web(this.props.pageContext.web.absoluteUrl);
  //               web.lists.getAs<ISPList[]>().then(ls=>{
  //                 this.setState({myItems: ls})
  //               });
  //   }
  // }

  /*private _renderList1(items: ISPList[]): void {
    let html: string = '';
    items.forEach((item: ISPList) => {
      html += `
        <ul class="${styles.list}">
            <li class="${styles.listItem}">
                <span class="ms-font-l">${item.Title}</span>
            </li>
        </ul>`;
    });

    const listContainer: Element = this.domElement.querySelector('#spListContainer');
    listContainer.innerHTML = html;

  }*/
  

  // private _renderList(prmitems:ISPList[])
  // {
  //   //this.state.items=items;
  //   this.setState({myItems: prmitems});
  //     // return(items.map(item=>{
  //     //     <ul className={styles.list}>
  //     //       <li className={styles.listItem}>
  //     //         <span className={css('ms-font-l')}>{item.Title}</span>
  //     //       </li>
  //     //   </ul>
  //     // }));      
  // }
}
