import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCoin } from "../services/api"

export default function Coin(){
    const {id} = useParams()
    const [coin, setCoin] = useState(null)

    useEffect(()=>{
        const fetchCoin = async ()=>{
            const data = await getCoin(id)
            setCoin(data)
        }
        fetchCoin()
    },[id])

    const toggleFavorite = () => {

        let favorites=JSON.parse(localStorage.getItem("favorites")) || []
        if(favorites.includes(coin.id)) {
            favorites= favorites.filter(f=> f !== coin.id)
        }else{
            favorites.push(coin.id)
        }
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }
    if(!coin) return <p>Loading...</p>
    return(
        <div>

<h1>{coin.name}</h1>

<p>Symbol: {coin.symbol}</p>

<p>Price: ${coin.priceUsd}</p>

<button onClick={toggleFavorite}>
Favorite
</button>

</div>
    )
}