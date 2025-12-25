import { ADD_USER, FETCH_USER} from "./Types"

const initialState ={
    newUser: undefined,
    Users: []
}

export default function UserReducer(state =initialState, action){
    switch(action.type){
        case ADD_USER:
            return {
                ...state, newUser: action.payload
            }
        case FETCH_USER:
            return {
                ...state, Users: action.payload
            }
        default:
            return state
    }
}