import React from "react";
import moment from "moment";

export default function ProfileList(props) {
  return (
    <div>
      <li className="list-group-item shadow">
        <div className="row align-items-center">
          <div className="col-2">
            <img
              src={props.avatar}
              alt={props.name}
              className="border rounded-circle"
            />
          </div>
          <div className="col-10">
            <h4>{props.name}</h4>
            <p>
              {props.city} | {props.email}
            </p>
            <p>
              <small>{moment(props.birthday).format("DD-MM-YYYY")}</small>
            </p>
          </div>
        </div>
      </li>
    </div>
  );
}
