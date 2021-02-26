import React from "react";

const Employees = (props) => {
    // Formate date to make it readable
    function formateDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
        
    }

    // Cleanly call formatDate on the props in the below JSX
    // let dateOfBirth = formateDate(props.dob);

    // return

}