import React from "react";
import { Icon } from "./Icon";

export const IconBox = ({ data, ...rest }) => (
  <div className="box-icon" {...rest}>
    <div className="d-flex">
      <div className="icon-wrap">
        <Icon name={data.icon} />
      </div>
      <div className="box-content mx-3">
        <h5 className="box-title m-0">{data.title}</h5>
        {data.description && (
          <p className="box-description">{data.description}</p>
        )}
      </div>
    </div>
  </div>
);
