/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-undef */
import React from "react";

function Card({ users }) {
  return (
    <div className="container">
      <div className="row mt-5">
        
            {users
              ? users.map((user, index) => {
                  return (<div className="col-4">
        <div className="card mx-auto shadow p-3 mb-5 bg-white rounded">
          <div className="card-body">
                    <ul className="list-group" key={index}>
                      <img
                        className="card-img-top"
                        src={user.picture.large}
                        alt="user-profile"
                      />
                      <div className="card-header">
                        Name: {user.name.title}
                        {""} {user.name.first} {""}
                        {user.name.last}
                      </div>

                      <li className="list-group-item">Email: {user.email}</li>
                      <li className="list-group-item"> Phone: {user.phone}</li>
                      <li className="list-group-item">
                        Location: {user.location.city}
                      </li>
                    </ul>  </div>
      </div>{" "}
      </div>
                  );
                })
            : null}
          </div>
      
    </div>

    // </div>
  );
}

export default Card;
//check if search is in the first or last name true or false
