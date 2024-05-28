import sagaActions from "./sagaActions";
import Axios from "axios";

import { put, call, takeEvery } from "redux-saga/effects";
import { fetchData, fetchsData, testData } from "./store";

async function callApi({ url, method, data }) {
  return await Axios({ url, method, data });
}
export function* fetchDataSaga() {
  try {
    let result = yield call(() =>
      callApi({ url: "https://jsonplaceholder.typicode.com/todos" })
    );
    yield put(fetchData(result.data)); // not see truffle here
    // yield put(testData(result.data)); // will see truffle here since truffle propert is updated in its slice on receiving data
    //  yield put(fetchsData(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
