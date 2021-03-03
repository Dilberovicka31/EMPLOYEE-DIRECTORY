/* eslint-disable no-undef */
function Filters({ search, handleInputChange, handleFormSubmit }) {
  return (
    <form className="search w-25 float-right ">
      <div className="input-group">
        {/* <label htmlFor="search"> Search Employees</label> */}
        <input
          onChange={handleInputChange}
          value={search}
          name="search"
          type="search"
          className="form-control"
          placeholder="Search Employees"
          id="search"
        />
        <br />
        <div className="input-group-append">
          <button onClick={handleFormSubmit} className="btn btn-primary" style={{backgroundColor: "#DCEEE4", color: "black"}}>
            Search
          </button>
        </div>{" "}
      </div>
    </form>
  );
}
export default Filters;
