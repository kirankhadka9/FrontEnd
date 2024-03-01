import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReadAllUsers = () => {
  let [users, setUser] = useState([]);

  let navigate = useNavigate();
  let token = localStorage.getItem("token");

  let getAllUser = async (e) => {
    let result = await axios({
      url: `http://localhost:8000/web-users`,
      method: `GET`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //     console.log(result)
    //     console.log(result.data.result)
    setUser(result.data.result);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div>
      {users.map((item, i) => {
        return (
          <div key={i}>
            <p style={{ border: "solid black 2px", marginTop: "3px" }} key={i}>
              user full name : {item.fullName}
              <br />
              user gender is : {item.gender}
              <br />
              {/* user dob : {new Date(item.dob).toLocaleDateString()}<br/> */}
              user email : {item.email}
              <br />
              {/* user role : {item.role}<br/> */}
              <button
                style={{ marginRight: "30px" }}
                onClick={() => {
                  navigate(`/admin/${item._id}`);
                }}
              >
                View
              </button>
              <button
                style={{ marginRight: "30px" }}
                onClick={(e) => {
                  navigate(`/admin/update/${item._id}`);
                }}
              >
                Edit
              </button>
              
              {/* delete */}
              <button
                style={{ marginRight: "30px" }}
                onClick={async () => {
                  try {
                    const result = await axios({
                      url: `http://localhost:8000/web-users/${item._id}`,
                      method: "DELETE",
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    });
                    getAllUser();
                  } catch (error) {
                    console.log("error");
                  }
                }}
              >
                Delete
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllUsers;
