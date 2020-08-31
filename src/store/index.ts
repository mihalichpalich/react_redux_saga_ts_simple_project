import {createStore, applyMiddleware, compose, Store} from "redux";
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";
import {RepositoriesState} from "./ducks/repositories/types";

export interface ApplicationState {
    repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(rootSaga);

export default store