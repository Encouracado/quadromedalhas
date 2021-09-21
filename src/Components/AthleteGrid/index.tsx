import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import api from "../../services/api";

import { Athlets, MedalsBox } from "../MedalsBox";

export default function AthleteGrind() {
  const [medalistsRepositorie, setMedalistsRepositorie] = useState([]);

  useEffect(() => {
    async function LoadMedalists() {
      const response = await api.get("medalists");

      setMedalistsRepositorie(response.data);
    }

    LoadMedalists();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          {medalistsRepositorie.map((medalist) => {
            console.log(medalist);
            return <MedalsBox Athelet={medalist} />;
          })}
        </Typography>
      </Container>
    </React.Fragment>
  );
}
