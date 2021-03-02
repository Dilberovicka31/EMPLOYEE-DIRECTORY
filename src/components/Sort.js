/* eslint-disable no-undef */
function Sort ({sortUsersAsc,sortUsersDesc}){
   
      
      return (
        <div className="input-group w-25 mb-3 float-left">
  <select className="custom-select" id="inputGroupSelect04">
    <option>Sort employees</option>
    <option value="1" onClick={sortUsersAsc}>Sort by ascending order</option>
    <option value="2" onClick={sortUsersDesc}>Sort by descending order</option>
  </select>
  <div className="input-group-append">
    <button className="btn btn-outline-primary" type="button">Sort</button>
  </div>
</div>
    )}



export default Sort;