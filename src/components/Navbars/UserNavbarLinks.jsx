/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import Button from "../CustomButton/CustomButton";

class UserNavbarLinks extends Component {
    render() {
        const notification = (
            <div>

            </div>
        );
        return (
            <div>
                <Button bsStyle="error" pullRight fill type="submit" href={"/"}>
                    Se déconnecter
                </Button>

            </div>
        );
    }
}

export default UserNavbarLinks;
