import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import { getCoins } from "../services/api"

export default function Home(){

const[coins,setCoins]=useState([])

useEffect(()=>{

const fetchCoins=async()=>{

const data=await getCoins()

setCoins(data)

}

fetchCoins()

},[])

return(

<div>

<h1>Cryptocurrencies</h1>

<ul>

{coins.map((coin)=>(

<li key={coin.id}>

<Link to={`/coin/${coin.id}`}>
{coin.name}
</Link>

</li>

))}

</ul>

</div>

)

}