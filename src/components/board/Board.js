import React from "react";
import { Grid } from "@mui/material";

const Board = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} style={{ backgroundColor: "#ff8080" }}>
        {/* Content of the first column */}
        <h4>Pending</h4>
      </Grid>
      <Grid item xs={12} sm={4} style={{ backgroundColor: "#80ff80" }}>
        {/* Content of the second column */}
        <h4>Executing</h4>
      </Grid>
      <Grid item xs={12} sm={4} style={{ backgroundColor: "#8080ff" }}>
        {/* Content of the third column */}
        <h4>Finished</h4>
      </Grid>
    </Grid>
  );
};

export default Board;
