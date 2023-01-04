import { Button } from "@mui/material";
import React from "react";
import "./Book.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };
  return (
    <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" style={{width:"100%", height:"250px"}} src={image} alt=""/>
    <div className="card-body">
      <h5 className="card-title" style={{fontSize:"1rem"}}>{name}</h5>
      <p className="author"><bold>By {author}</bold></p>
      <p className="card-text">{description}</p>
      <p><small>MRP: {price}</small></p>
      <div className="btns">
        <div className="btn-Edit">
        <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
            Edit
          </Button>
        </div>
        <div className="btn-delete">
        <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Book;
