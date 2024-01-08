import React, { useContext } from "react";
import Data from "../../data/DataProvider";
import "./Topbox.scss";
export default function Topbox() {
    const { users ,setUsers} = useContext(Data);
    console.log(users);
  return (
    <div className="topbox">
      <h2>Top Deals</h2>
          <div className="users">
              {users.map(user => {
                  return (
                    <div id={user.id} className="user">
                      <div className="profile">
                        <img src={user.img} alt={user.firstName} />
                        <div className="info">
                          <h3>
                            {user.firstName} {user.lastName}
                          </h3>
                          <small>{user.email}</small>
                        </div>
                      </div>
                      <h2>${user.id * 5}</h2>
                    </div>
                  );
              })}
          </div>
    </div>
  );
}
