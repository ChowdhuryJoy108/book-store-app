import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Publish from './Publish';


const URL = "http://localhost:5000/books";

const fetchHandler = async () =>{
    return  await axios.get(URL).then((res) =>res.data)
}

const NewPublish = () => {
    const [publish ,setPublish] = useState()
    useEffect(()=>{
        fetchHandler().then((data)=> setPublish(data.books))
    },[])
    console.log(publish);
    return (
        <div className='container'>
           <h2 style={{textAlign:'center',
                       marginTop:'25px',
                       color:'black',
                       fontWeight:'bold'
                }}>Upcoming Collections</h2>
           <ul>
            {publish && publish.map((publication,i)=>{
               return <li  key={i}>
                    <Publish publication={publication} />
                </li>
            })}
           </ul>
        </div>
    );
};

export default NewPublish;