import React, {Component} from "react";
class Header extends React.Component{

    render() {
        console.log(this.props);
        return (
            <h1>Hello My Name is {this.props.title}</h1>
        )
    }
}

export default Header;
