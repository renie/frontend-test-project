import * as actions from '../actions/actions';
import initialState from './initialState';


export default function appReducer(state = initialState.app, action) {
    switch (action.type) {
        case actions.GET_USERS_REQUEST:
            return action.users

        default:
            return state;
    }
}