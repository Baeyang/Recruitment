function loginReducer(state = false,actions){
    console.log(actions)
    switch (actions.type) {
        case `CHECK_LOGIN`:
            return actions.status
        default:
            return state
    }
}
export default loginReducer