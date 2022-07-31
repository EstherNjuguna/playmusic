// import React, { useState, useEffect } from "react";

// const searchSongs="https://theaudiodb.com/api/v1/json/2/mvid.php?i=111522"
// export default function Search(){

//     const [searchItem, setSearchItem] = useState("")
//     const [counter, setCounter] = useState(0)
//     const [results, setResults] = useState(0)

//     const handleSearch = (event) => {
//         setSearchItem(event.target.value)
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         setCounter(counter + 1)
//     }

    

//     const searchInfo = () => {

//         const actualSearch = searchSongs + searchItem

//         fetch(actualSearch)
//         .then((response) => response.json())
//         .then((data) => {
//             setSearchItem("")
//             setResults(data.meals == null ? 0 : data.meals.length )
//             // data.forEach( (meal) => {
//             //     setTitle(meal.strMeal)
//             //     setCategory(meal.strCategory)
//             //     setInstructions(meal.strInstructions)
//             //     setImage(meal.strMealThumb)
//             // } ) 
//         })
//     }

//     useEffect(
//         searchInfo, [counter]
//     )


//     return(
//         <div className="container">
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="search" className="form-label">SEARCH MEAL</label>
//                     <input type="text" className="form-control" id="search" name="search" value={searchItem} onChange={handleSearch}/>
//                 </div>
//             </form>
//             <h3 className="mt-4">SEARCH RESULTS ({results})</h3>
//             <div className="row">
//                 {/* TODO: POPULATE RESULTS */}
//             </div>
//         </div>
//     )
// }