
const initialState={
    name:"auth reducer"
}

const authReducer =(state=initialState,action)=>{
    console.log(action)
    switch(action.type){
        default:
            return state
    }
}

export default authReducer