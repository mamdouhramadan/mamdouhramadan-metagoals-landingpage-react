import React from "react";
import { MDBInput } from "mdbreact";

export const InputField = ({ type, id, label }) => {
  return (
    <div className="form-group input-field ">
      <div className="form-outline">
        <MDBInput label={label} type={type} id={id} />
      </div>
    </div>
  );
};
