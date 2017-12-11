import { IDataProvider } from './IDataProvider';
import { IODataListItem } from '@microsoft/sp-odata-types/lib/IODataListItem';
import { IOpenings, IOpening } from './objmodelOpening';
import pnp from "sp-pnp-js";
import { Web } from "sp-pnp-js/lib/sharepoint/webs";
import { Promise } from 'es6-promise';

export default class sharepointDataProvider implements IDataProvider
{

    public readOpenings(weburl: string):Promise<IOpening[]>
    {

        //const web: Web = new Web();//this.props.pageContext.web.absoluteUrl);

        // web.lists.getByTitle("Listing").items.getAs<IOpening[]>().then((items: IOpening[]) => {
        //         return items
        // });
        
            // return new Promise<IOpening[]>((resolve) => {
            //     pnp.sp.web.lists.getByTitle("Listing").items.getAs<IOpening[]>().then(items => {
            //         console.log(items);
            //         return items;
            // });
                return(pnp.sp.web.lists.getByTitle("Listing").items.getAs<IOpening[]>().then((items:IOpening[]) => {
                                 return items;
                }));
            

            // let retItem: IOpening[]=[
            //     {
            //     ID: 1,
            //     Title:'test1',
            //     Opening: 'Opening',
            //     Qualification:'Graduate',
            //     StartDate: new Date(2017,11,29).toDateString(),
            //     EndDate: new Date(2017,12,20).toDateString(),
            //     } ,
            //     {
            //         ID: 1,
            //         Title:'test1',
            //         Opening: 'Opening 1',
            //         Qualification:'Graduate',
            //         StartDate: new Date(2017,11,29).toDateString(),
            //         EndDate: new Date(2017,12,20).toDateString(),
            //     } ,
            //     {
            //         ID: 2,
            //         Title:'test2',
            //         Opening: 'Opening 2',
            //         Qualification:'Post Graduate',
            //         StartDate: new Date(2017,10,2).toDateString(),
            //         EndDate: new Date(2017,11,2).toDateString(),
            //     }                 ,
            //     {
            //         ID: 3,
            //         Title:'test3',
            //         Opening: 'Opening 3',
            //         Qualification:'School Graduate',
            //         StartDate: new Date(2017,1,1).toDateString(),
            //         EndDate: new Date(2018,12,20).toDateString(),
            //     } ,
            //     {
            //         ID: 4,
            //         Title:'test4',
            //         Opening: 'Opening 4',
            //         Qualification:'Graduate',
            //         StartDate: new Date(2017,11,9).toDateString(),
            //         EndDate: new Date(2017,12,10).toDateString(),
            //     },
                                                                   
            //     ];

            // return new Promise<IOpening[]>((resolve) => {
            //     setTimeout(() => {
            //         resolve(retItem);
            //     }, 2000);
            // });

    }

}