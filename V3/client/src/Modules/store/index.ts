import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSaga from 'redux-saga';
import rootSaga from '../saga';

const sagaMiddleware = createSaga();

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware
        )
    )
);

sagaMiddleware.run(rootSaga);

export default store;