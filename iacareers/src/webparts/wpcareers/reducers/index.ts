import {reducerListingJobs} from './reducerListingJobs'
import { Reducer } from 'redux';
import { CareerappState } from '../types/index';
import { combineReducers } from 'redux';
import { reducerJobApplication } from './reduceruserinfo';

const reducerIndex: Reducer<CareerappState> = combineReducers<CareerappState>({
    //setting:CMCareersSetting,
    jobOpeningState: reducerListingJobs,
    jobapplicationstate: reducerJobApplication
});


export default reducerIndex;