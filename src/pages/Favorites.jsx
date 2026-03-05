const toggleFavorite=()=>{
    let favorites=JSON.parse(localStorage.getItem("favorites")) || []

    if(favorites.includes(confirm.id)){
        favorites=favorites.filter(f=f!==confirm.id)
    }else{
        favorites.push(confirm.id)
    }
    localStorage.setItem("favorites",JSON.stringify(favorites))
}