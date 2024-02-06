import "./Add.scss";
import { ReactComponent as ArrowBack } from "../../Assets/Icons/arrow_back-24px.svg";
import React from "react";

function Add() {
  return (
    <>
      <h1 className="add__title">
        <ArrowBack />
        Add New Warehouse
      </h1>
    </>
  );
}

export default Add;
