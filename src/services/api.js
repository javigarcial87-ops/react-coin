const API_URL="https://rest.coincap.io/v3"
const API_KEY=import.meta.env.VITE_API_KEY

export const getCoins=async()=>{
    const res=await fetch(`${API_URL}/assets?apiKey=${API_KEY}`)
    const data=await res.json()
    return data.data
}

export const getCoin=async(id)=>{
    const res=await fetch(`${API_URL}/assets/${id}?apiKey=${API_KEY}`)
    const data= await res.json()
    return data.data
}