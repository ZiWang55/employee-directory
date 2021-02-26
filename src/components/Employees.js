import React from "react";

const Employees = (props) => {
    // Formate date to make it readable
    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
        
    }

  // dateOfBirth variable allows me to cleanly call formatDate on the props in the below JSX
  let dateOfBirth = formatDate(props.dob);

  return (
    <tr className="tr">
      <td>
        <img alt={props.firstName} src={props.icon} />
      </td>
      <td>
        {props.firstName} {props.lastName}
      </td>
      <td>{props.email}</td>
      <td>{props.phone} </td>
      <td>{dateOfBirth}</td>
      <td>{props.address}</td>
    </tr>
  );
}

export default Employees