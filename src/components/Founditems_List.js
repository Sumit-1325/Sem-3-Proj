import React, { useEffect , useState} from 'react'
import Details from './Details'
import './styles/Details.css'
import api from '../api'

export default function Founditems_List() {
  const [data, setdata] = useState([])
  useEffect(()=>{
    getdata()
  },[])
  const getdata= ()=>{
    api.get('api/found-item/').then((res)=>res.data).then((data)=>{setdata(data);console.log(data)}).catch((error)=>alert(error))
    
  }
  return (
    <>
      <h1 className='heading'>FOUND ITEMS</h1>
      <div className="box">
        {
                data.map((element) => {
                  console.log(element);
                  return (
                    <div key={element.id}>
                      <Details discription={element.description} src={element.img} name={element.name} address={element.address} phone={element.phone_no} />
                    </div>
                  );
                })}
      </div>
    </>
  )
}
