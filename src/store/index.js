import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const devtools = window.devToolsExtension || (() => noop => noop);
const logger = createLogger();

export default function configureStore(notes) {
    const middlewares = [thunk, logger, sagaMiddleware];

    const enhancers = [
        applyMiddleware(...middlewares),
        devtools()
    ];

    const store = createStore(
        rootReducer(notes),
        fromJS({}),
        compose(...enhancers)
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
