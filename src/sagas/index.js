import notesSaga from './notes';

function* rootSaga() {
    return yield [
        ...notesSaga
    ];
}

export default rootSaga;
