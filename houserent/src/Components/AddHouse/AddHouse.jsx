import axios from "axios";
import { useState } from "react";

const initState={
  name:"",
  Ownersname:"",
  Address:"",
  Areacode:"",
  rent:"",
  preferredtenants:"",
  image:""
}

export const AddHouse = () => {
  const [data, setData]=useState(initState)
  const [house, setHouse]=useState([])

  const handleChange=(e)=>{
    const{name , value}=e.target;
    setData({...data,[name]:value})
  }

  const{name,Ownersname,Address, Areacode,rent,preferredtenants,image}=data

  const getdata=()=>{
    axios.get(`http://localhost:8080/houses`)
    .then(res=>{
      setHouse(res.data)
    })
  }

  return (
    <div className="addHouseContainer">
      <form>
        <label>name</label>
        <input type="text" className="name"  required 
        onChange={handleChange}/>
        <br />
        <label>ownerName</label>
        <input  type="text" className="ownerName" onChange={handleChange} required />
        <br />
        <label>address</label>
        <input  type="text" className="address" onChange={handleChange} required />
        <br />
        <label>areaCode</label>
        <input  type="text" className="areaCode" onChange={handleChange} required />
        <br />
        <label>rent</label>
        <input  type="text" className="rent" onChange={handleChange} required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox" className="bachelor" onChange={handleChange} />
        <br />
        <label>married</label>
        <input  type="checkbox" className="married"  onChange={handleChange} />
        <br />
        <label>image</label>
        <input  type="text" className="image" onChange={handleChange} required />
        <br />
        <input className="submitBtn" type="submit" 
        onClick={()=>{
          fetch("http://localhost:8080/houses",{
            method:"POST",
            body:JSON.stringify({ name:data.name,
            }),
            headers:{
              "content-type":"application/json",
            }
          }).then(()=>{
            getdata()
          })
        }}
        
        />
      </form>
    </div>
  );
};
