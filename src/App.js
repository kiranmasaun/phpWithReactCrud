import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import User from "./components/User";
import AddUserFrm from "./components/AddUserFrm";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [phpData, setPhpData] = useState([]);
  const [formData, setformData] = useState("");
  const [isShowForm, isSetShowFrom] = useState(false);
  const [id, setData] = useState("");
  const [delUserId, setdelUserId] = useState("");

  const childToParent = (userId) => {
    setData(userId);
  };

  const deleteUser = (userId) => {
    setdelUserId(userId);
  };

  useEffect(() => {
    if (delUserId > 0) {
      deletePhpUser(delUserId);
    }
  }, [delUserId]);

  useEffect(() => {
    // console.log("App comp value:", id);
    if (id !== "") {
      getPhpData(id);
      isSetShowFrom(true);
    }
  }, [id]);

  useEffect(() => {
    getPhpData();
  }, []);

  useEffect(() => {
    setPhpData();
  }, []);

  const deletePhpUser = (id) => {
    let url = "http://react.php.com/connect.php";
    axios
      .delete(url, {
        crossdomain: true,
        params: {
          action: "delete",
          id: id,
        },
        // mode: "no-cors",
        config: {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Content-Type": "appication/json",
          },
        },
      })
      .then((response) => {
        // console.log(response.data);
        // setPhpData(response.data);
        console.log("Data Deleted Successfully");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  const getPhpData = (id = 0) => {
    let url = "http://react.php.com/connect.php";

    axios
      .get(url, {
        params: {
          id: id,
        },
        config: {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": "*",
            "Content-Type": "appication/json",
          },
        },
      })
      .then((response) => {
        console.log(response.data);
        setPhpData(response.data);
        if (id > 0) {
          setformData(response.data);
        }
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  const getFrom = () => {
    console.log("clicked here");
    isSetShowFrom(true);
  };

  return (
    <div className="container m-4">
      {!isShowForm && (
        <>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          ></link>
          <button className="btn btn-primary float-right m-2" onClick={getFrom}>
            Add New
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Country</th>
                <th>Job</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <User
                data={phpData}
                childToParent={childToParent}
                deleteUser={deleteUser}
              />
            </tbody>
          </table>
        </>
      )}
      {isShowForm && <AddUserFrm formData={formData} />}
    </div>
  );
};

export default App;
