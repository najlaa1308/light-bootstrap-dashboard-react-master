import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import Button from "../components/CustomButton/CustomButton";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import CloudUpload from "@material-ui/icons/CloudUpload";

class ListeSalles extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>

                        <Col md={12}>
                            <Card
                                plain
                                title="Liste des salles"
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <Table hover>
                                        <thead>
                                        <tr>
                                            <th>Numéro de la salle</th>
                                            <th>Emplacement de la salle</th>
                                            <th>Capacité de la salle</th>
                                            <th>Type de la salle</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><IconButton aria-label="Mise a jour" color={"primary"} href={"/Editsalle"}>
                                                <CloudUpload />
                                            </IconButton>  <IconButton aria-label="Supprimer" color={"primary"} size={"medium"} >
                                                <Delete />
                                            </IconButton></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit" href={"/Ajoutsalle"}>
                        Ajouter salle
                    </Button>
                </Grid>
            </div>
        );
    }
}

export default ListeSalles;
