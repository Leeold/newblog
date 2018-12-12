function java(state={data:[],loading:true},action) {
    switch (action.type){
        case "JAVA_UPDATA_SUCC":
            return {
                data: action.data,
                loading:false
            }
        default:
            return state;
    }
}
export default java;