import React from "react";
function SearchForm(props) {
    return (
      
      <form>
        <div className="form-group">
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for Employee"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Search
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;
  