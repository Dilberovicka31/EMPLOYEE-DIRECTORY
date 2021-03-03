/* eslint-disable jsx-a11y/anchor-is-valid */
import "./sort.css"
/* eslint-disable no-undef */
function Sort ({sortAscending, sortDescending}){
   
      
      return (
        // <div className="input-group w-25 mb-3 float-left">
  
//   <div className="card">
//     <button onClick={sortAscending} className="btn btn-outline-secondary w-25 float-left" type="button">Sort </button>
//     <p className="float-right">Sort Employees by ascending order</p>
//     <button onClick={sortDescending} className="btn btn-outline-secondary w-25 float-left" type="button">Descending</button>
//     <p>Sort Employees by descending order</p>
//   </div>
// </div>
<div className="btn-group" role="group" aria-label="Basic example">
  <button onClick={sortAscending} type="button"className="btn btn-secondary" style={{backgroundColor: "#DCEEE4",color: "black"}}>Sort Ascending</button> {""}
  <button onClick={sortDescending} type="button" className="btn btn-secondary" style={{backgroundColor: "#DCEEE4", color: "black"}}>Sort Descending</button>
  
</div>
    )}



export default Sort;