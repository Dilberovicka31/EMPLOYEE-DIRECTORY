/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
function Sort ({sortAscending, sortDescending}){
   
      
      return (
 
<div className="btn-group" role="group" aria-label="Basic example">
  <button onClick={sortAscending} type="button"className="btn btn-secondary" style={{backgroundColor: "#DCEEE4",color: "black"}}>Sort Ascending</button> {""}
  <button onClick={sortDescending} type="button" className="btn btn-secondary" style={{backgroundColor: "#DCEEE4", color: "black"}}>Sort Descending</button>
  
</div>
    )}



export default Sort;