import { useEffect, useState } from "react"
import { getCoins } from "../services/api"
import { Link } from "react-router-dom"

export default function Favorites() {

  const [coins, setCoins] = useState([])

  useEffect(() => {

    const favorites = JSON.parse(localStorage.getItem("favorites")) || []

    const fetchCoins = async () => {

      const data = await getCoins()

      const filteredCoins = data.filter((coin) =>
        favorites.includes(coin.id)
      )

      setCoins(filteredCoins)
    }

    fetchCoins()

  }, [])

  if (coins.length === 0) {
    return <p>No favorite cryptocurrencies</p>
  }

  return (
    <div>

      <h1>Favorites</h1>

      <ul>
        {coins.map((coin) => (
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