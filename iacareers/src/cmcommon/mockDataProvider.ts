import { IDataProvider } from './IDataProvider';
import { IODataListItem } from '@microsoft/sp-odata-types/lib/IODataListItem';
import { IOpenings, IOpening } from './objmodelOpening';

export default class mockDataProvider implements IDataProvider
{
    public readOpenings(s: string):Promise<IOpening[]>
    {
            let retItem: IOpening[]=[
                {
                ID: 1,
                Title:'test1',
                Opening: 'Opening',
                Qualification:'Graduate',
                StartDate: new Date(2017,11,29).toDateString(),
                EndDate: new Date(2017,12,20).toDateString(),
                } ,
                {
                    ID: 1,
                    Title:'test1',
                    Opening: 'Opening 1',
                    Qualification:'Graduate',
                    StartDate: new Date(2017,11,29).toDateString(),
                    EndDate: new Date(2017,12,20).toDateString(),
                } ,
                {
                    ID: 2,
                    Title:'test2',
                    Opening: 'Opening 2',
                    Qualification:'Post Graduate',
                    StartDate: new Date(2017,10,2).toDateString(),
                    EndDate: new Date(2017,11,2).toDateString(),
                }                 ,
                {
                    ID: 3,
                    Title:'test3',
                    Opening: 'Opening 3',
                    Qualification:'School Graduate',
                    StartDate: new Date(2017,1,1).toDateString(),
                    EndDate: new Date(2018,12,20).toDateString(),
                } ,
                {
                    ID: 4,
                    Title:'test4',
                    Opening: 'Opening 4',
                    Qualification:'Graduate',
                    StartDate: new Date(2017,11,9).toDateString(),
                    EndDate: new Date(2017,12,10).toDateString(),
                },
                                                                   
                ];

            return new Promise<IOpening[]>((resolve) => {
                setTimeout(() => {
                    resolve(retItem);
                }, 2000);
            });

    }

}