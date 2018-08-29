import { call, put } from 'redux-saga/effects'

export const GET_TALKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TALKS_FAIL = 'GET_TASKS_FAIL';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function fetchTalksApi(tag: string) {
    let headers = { 'If-None-Match': tag, 'Prefer': 'wait=90' }
    return fetch('http://192.168.1.102:8000/talks', { headers })
        .then(async response => ({
            talks: await response.json(),
            tag: response.headers.get('ETag')
        }))
        .catch(error => ({ error }))
}

export function* fetchTalks() {
    let previoustag = ''
    while (true) {
        const { talks, tag, error } = yield call(fetchTalksApi, previoustag)
        previoustag = tag
        if (talks) yield put({ type: GET_TALKS_SUCCESS, talks })
        else {
            yield put({ type: GET_TALKS_FAIL, error })
            yield delay(5000)
        }
    }
}
