function course(state={
    data:[]
},action) {
    switch(action.type){
        case"COURSE_UPDATE":
            return{
                data:state.date
            }
        case"COURSE_UPDATE_SUCCESS":
            return{
                data:action.data
            }
        case"COURSE_UPDATE_ERROR":
            return{
                data:[]
            }
        default:
            return state;
    }
}

export default course;