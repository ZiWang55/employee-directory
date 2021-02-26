import React, { Component } from "react";
import Employees from "./Employees.js";
import Search from "./Search.js";
import API from "../utils/API";
import "../styles/Directory.css";

class Directory extends Component {
    state = {
        employees: [],
        empSort: [],
        search: "",
        sorted: false,
    };

    // Check that the component redered at least once, and pull in our data
    // wait for the information to come back
    componentDidMount = () => {
        API.getUsers().then((results) => {
            this.setState({
                employees: results.data.results,
            })
        })
    }

    // sort through employees based on search term
    // check if there is a match and set that to empSort for rendering
    sortEmp = () => {
        let { employees, search } = this.state;
        let empSort = employees.filter((sorted) {
            return (
                sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
                sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
                sorted.email.toLowerCase().includes(search.toLowerCase)
            )
        })
        this.setState({ empSort })
    }
}