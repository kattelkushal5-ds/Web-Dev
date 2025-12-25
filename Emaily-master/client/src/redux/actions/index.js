import axios from "axios"
import { FETCH_USER } from "./Type"

export default function fetchUser(){
    return function(dispatch){
        axios.get('/api/current_user')
            .then(res=>dispatch({type:FETCH_USER,payload:res}))
    }
}
