import React, { useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Admin() {
  const [data, setData] = useState({
    id: "",
    name: "",
    description: "", 
    price: "",
  });
  const selectedtypes = ["jewellery", "necklace", "earrings", "ring", "bracelet"];

  const [selectedType, setSelectedType] = useState("");

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };
  
  const navigatetypes={
    jewellery: "/alljewellery",
    necklace: "/necklace",
    earrings: "/earrings",
    ring: "/rings",
    bracelet: "/bracelets",}

  const navigateTo=navigatetypes[selectedType]

  const navigate = useNavigate();

  const handleAdd = () => {
    if (
      !data.id ||
      !data.name ||
      !data.discription ||
      !data.price ||
      !selectedType
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please fill the form completely!",
      });
      return;
    }

    const api = `http://localhost:3003/${selectedType}`; 

    fetch(api, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {return res.json()})
      .then(
        navigate(navigateTo)
      )

  };

  return (
    <div className="main">
      <div className="container-fluid w-50 p-2 lh-4" id="form">
        {/* Type Selection */}
        <div className="row mb-3">
          <div className="col-6 fs-4">Type</div>
          <div className="col">
            <select
              value={selectedType}
              onChange={handleChange}
              className="form-select">
              <option value="" disabled>
                Select type...
              </option>
              {selectedtypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6 fs-4">ID:</div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={data.id}
              onChange={(e) =>
                setData({ ...data, id: e.target.value })
              }
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6 fs-4">IMAGE:</div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={data.image}
              onChange={(e) =>
                setData({ ...data, image: e.target.value })
              }
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6 fs-4">Name:</div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={data.name}
              onChange={(e) =>
                setData({ ...data, name: e.target.value })
              }
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6 fs-4">Discription:</div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={data.discription}
              onChange={(e) =>
                setData({ ...data, discription: e.target.value })
              }
            />
          </div>
        </div>

        {/* Price Input */}
        <div className="row mb-3">
          <div className="col-6 fs-4">Price:</div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              value={data.price}
              onChange={(e) =>
                setData({ ...data, price: e.target.value })
              }
              min="0"
              step="0.01"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="row">
          <div className="col-3">
            <button
              className="btn btn-success fs-5 fw-bolder w-100"
              onClick={() => navigate("/homepage")}
            >
              BACK
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-warning fs-5 fw-bolder w-100"
              onClick={handleAdd} // Moved logic to a separate function
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
