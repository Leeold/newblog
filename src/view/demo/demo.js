import React, {useState,useEffect} from "react";
import  "../../mock/mock";
import http from "../../utils/http";
function Example() {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(()=>{
        http.get("/course/url").then((res)=>{
            console.log(res);
            setData(res.data.user)
        })
    },[]);
    return (
        <div>
           <ul>
               {
                   data.map((item,index)=>{
                       return <li key={index}>{item.name}</li>
                   })
               }
           </ul>
        </div>
    );
}
export default Example;