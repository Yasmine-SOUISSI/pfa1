import { useState,useEffect } from "react"
import Axios from 'axios'

export function Home(){
const [De,setDe]=useState('')
const [Dest,setDest]=useState('')
const [horaire,setHoraire]=useState('')
const [comp,setComp]=useState('')
const [prix,setprix]=useState('')
const [ref,setref]=useState('')

const [note,setnote]=useState(0)
const [listevols,setlistevols]=useState([])

  useEffect(()=>{
    Axios.get("http://localhost:3001/read").then((response)=>{
        console.log(response)
        setlistevols(response.data)
    })
},[])


const addtolist=()=>{
    console.log(De + Dest)
    Axios.post("http://localhost:3001/insert",{
        De:De,
        Destination:Dest,
        horaire:horaire,
        compagnie:comp,
        prix:prix,
        note:note,
        ref:ref
    })
}
    return <div>
       <h1>CRUD</h1> 
De:
<input type="text" onChange={(event)=>{setDe(event.target.value)}}/>
Destination:
<input type="text"onChange={(event)=>{setDest(event.target.value)}}/>
horaire:
<input type="text" onChange={(event)=>{setHoraire(event.target.value)}}/>
Compagnie:
<input type="text" onChange={(event)=>{setComp(event.target.value)}}/><br></br>
Prix:
<input type="text"onChange={(event)=>{setprix(event.target.value)}}/>
note:
<input type="Number"onChange={(event)=>{setnote(event.target.value)}}/> <br></br>
ref : 
<input type="Number"onChange={(event)=>{setref(event.target.value)}}/> <br></br>


<button onClick={addtolist}>Add</button>
<h1>Vols</h1>

{listevols.map((val,key)=>{
    return <ul><li> {val.ref} </li></ul>
})}



    </div>
}