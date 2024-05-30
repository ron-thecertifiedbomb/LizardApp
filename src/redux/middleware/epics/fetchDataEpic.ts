import { Epic } from 'redux-observable';
import { ofType } from 'redux-observable';
import { map, catchError, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { fetchData } from '../../../utilities/function/useFetchProductFunction';
import { RootState } from '../../store/store';
import { buttonClick, fetchDataFailure, fetchDataSuccess } from '../../actions/actionTypes';

// Define the Actions type
type Actions = ReturnType<typeof buttonClick | typeof fetchDataSuccess | typeof fetchDataFailure>;

const fetchDataEpic: Epic<Actions, Actions, RootState> = (action$, state$) =>
  action$.pipe(
    ofType(buttonClick.type),
    switchMap(() =>
      from(fetchData()).pipe(
        map((response) => fetchDataSuccess(response)),
        catchError((error) => of(fetchDataFailure(error.message)))
      )
    )
  );

export default fetchDataEpic;
