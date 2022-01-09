

function FavList({weatherListProp, fastClick}){

    const handler = function(arg){
         fastClick(arg)
    }

     const weatherList = weatherListProp.map((w) => {

        

         return(
            <li key={w.id} onClick={() => handler(w.name)}>★ {w.name}</li>
         )
     })

    return (
        <div className="list">
            <h4 id="star">Starred: </h4>
            {weatherList}
        </div>
    )
}

// we can introduce client side routing with the buttons on each of our favorited cities
// don't forget to include a button to remove from list

export default FavList;