import { FETCH_USER,  } from "./Types"


//Action Creators
//Post Request for login
const reqToken ="647061697361"

export const addUsers =postData => dispatch =>{
    //console.log(postData)
    fetch("https://stagingapi.icash.com.np/api/login", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
            'App-Authorizer': reqToken
        },
        body: JSON.stringify(postData)
    })
    .then(response => {
           // console.log("hi")
            return response.json()
       
        })
        .then((data) => {
           console.log(data)
            if (data.access_token) {

                console.log("hi")
                dispatch({type: FETCH_USER, payload: data})
                localStorage.setItem("user", JSON.stringify(data.user))
                localStorage.setItem("access_token", JSON.stringify(data.access_token))
                window.location.href='/'
            }
            else{
                console.log("error")
            }
        })
        .catch(() => {
            console.log("err")
        });
}


//Get Request for dashdoard
// export const fetchUsers =() =>dispatch =>{
//     fetch("https://stagingapi.icash.com.np/api/login")
//             .then(res => res.json())
//             .then(users => {dispatch({type: FETCH_USER, payload: users})
//                         console.log("users")
//                 })
    
// }