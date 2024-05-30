import { Epic, combineEpics } from 'redux-observable';
import fetchDataEpic from '../epics/fetchDataEpic';

import { ActionType } from 'typesafe-actions';
import * as actions from '../../actions/actionTypes' // Import all action creators from your actions file
import { RootState } from '../../store/store';

type RootAction = ActionType<typeof actions>;

const rootEpic = combineEpics(fetchDataEpic);

export default rootEpic as Epic<RootAction, RootAction, RootState>;
