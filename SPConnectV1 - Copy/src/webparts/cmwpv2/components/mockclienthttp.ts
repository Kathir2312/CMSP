
import { ISPList } from './SpList';
import { Promise } from 'es6-promise';
export default class mockclienthttp{
    private static _Items = [{Title:'Mock List', Id:'1', Description: 'Descr1', ItemCount: 2},
                            {Title:'Mock List1', Id:'2', Description: 'Descr2', ItemCount: 4},
                            {Title:'Mock List2', Id:'3', Description: 'Descr3', ItemCount: 6},
                            {Title:'Mock List3', Id:'4', Description: 'Descr4', ItemCount: 8},
                            {Title:'Mock List488', Id:'5', Description: 'Descr5', ItemCount:10},
                            {Title:'Mock List4881', Id:'6', Description: 'Descr6', ItemCount: 12}
                        ];

    public static get(): Promise<ISPList[]>{
        return new Promise<ISPList[]>((resolve)=>{resolve(mockclienthttp._Items);});

    }

}