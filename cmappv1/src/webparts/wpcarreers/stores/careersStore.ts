import {Store, createStore, applyMiddleware} from "redux";
import reducerIndex from '../reducers'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {IOpening} from '../../../cmcommon/objmodelOpening'
import { Environment, EnvironmentType } from "@microsoft/sp-core-library";

const loggerMiddleware = createLogger();

export default function careersStore(){
     //if (Environment.type== EnvironmentType.ClassicSharePoint || EnvironmentType.SharePoint) {
         //return createStore(reducerIndex,applyMiddleware(thunkMiddleware, loggerMiddleware ));
     //}
     //else {
       return createStore(reducerIndex,applyMiddleware(thunkMiddleware,loggerMiddleware ));
    //}
}