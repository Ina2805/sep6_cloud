// import React, { useEffect } from "react";
// import "./Filter.css"

// function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {
//     useEffect(() => {
//         if (activeGenre === 0) {
//             setFiltered(popular)
//             return
//         }
//         const filtered = popular?.filter((movies) =>
//             movies.genre_ids.includes(activeGenre));
//         setFiltered(filtered);
//     }, [activeGenre])
//     return (
//         <div className="filter-container">
//             <button
//                 className={activeGenre === 0 ? "active" : " "}
//                 onClick={() => setActiveGenre((0))}>All</button>
//             <button
//                 className={activeGenre === 28 ? "active" : " "}
//                 onClick={() => setActiveGenre((28))}>Action</button>
//             <button
//                 className={activeGenre === 35 ? "active" : " "}
//                 onClick={() => setActiveGenre((35))}>Comedy</button>
//             <button
//                 className={activeGenre === 12 ? "active" : " "}
//                 onClick={() => setActiveGenre((12))}>Adventure</button>
//             <button
//                 className={activeGenre === 16 ? "active" : " "}
//                 onClick={() => setActiveGenre((16))}>Animation</button>

//         </div>
//     )
// }
// export default Filter;