const API_URL = "https://rest.coincap.io/v3"

export const getCoins = async () => {

  const res = await fetch(`${API_URL}/assets`)
  const data = await res.json()

  return data.data
}

export const getCoin = async (id) => {

  const res = await fetch(`${API_URL}/assets/${id}`)
  const data = await res.json()

  return data.data
}