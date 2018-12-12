function front(state={data:[],loading:true},action) {
    switch (action.type){
        case "FRONT_UPDATA_SUCC":
            return {
                data: action.data,
                loading:false
            }
        default:
            return state;
    }
}
export default front;