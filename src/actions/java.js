

import instance from '../utils/instance';

const receiveList = response =>({
    type:'RECEIVE_LIST',
    listMain:response.data
})

export const getList =()=> async dispatch=>{
    try{
        let response = await instance.get('/user/list')
        console.log(response);
        await dispatch(receiveList(response.data))
    } catch(error) {
        console.log('error: ', error)
    }
}