import React, { useEffect, useState } from "react";
import axios from "axios";
const AddUserFrm = ({ formData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [job, setJob] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // console.log(formData);
    setUserId(formData.id);
    setName(formData.name);
    setEmail(formData.email);
    setCity(formData.city);
    setCountry(formData.country);
    setJob(formData.job);
  }, [
    formData.id,
    formData.name,
    formData.email,
    formData.city,
    formData.country,
    formData.job,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    if (name === "" || name === undefined) {
      console.log("Please fill all fields");
      return false;
    }
    var userData = {
      id: userId,
      name: name,
      email: email,
      city: city,
      country: country,
      job: job,
    };

    axios({
      method: "post",
      url: "http://react.php.com/connect.php",
      data: userData,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Content-Type": "multipart/form-data",
        },
      },
    })
      .then(function(response) {
        //handle success
        if (response.data) {
          console.log("Data Added Successfully");
          window.location.reload(false);
        }
      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });
  };

  const backToList = () => {
    window.location.reload(false);
  };
  return (
    <div className="contqaqiner">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      ></link>
      <div className="row">
        <div className="col-sm-8">
          <h2>Add New User</h2>
        </div>
        <div className="col-sm-4">
          <button
            className="btn btn-primary float-right mb-2"
            onClick={backToList}
          >
            Back to Listing
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Country"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
        </div>
        <div className="form-group">
          <label>Job</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Job"
            onChange={(e) => setJob(e.target.value)}
            value={job}
          />
        </div>

        <input type="submit" className="btn btn-primary mt-2" value="Submit" />
      </form>
    </div>
  );
};

export default AddUserFrm;
