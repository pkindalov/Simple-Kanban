import React from "react";
import { Grid } from "@mui/material";
import ActionCard from "../tasks/ActionCard";

const Board = ({ pendings, executings, finisheds, onStatusChange }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={4} style={{ backgroundColor: "#ff8080" }}>
        {/* Content of the first column */}
        <h4>Pending</h4>
        {pendings.length > 0 &&
          pendings.map(({ id, title, description , status}) => {
            return (
              <ActionCard
                imgSrc={"/imgs/pending.jpg"}
                key={id}
                taskId={id}
                title={title}
                description={description}
                style={{margin: "3rem auto"}}
                status={status}
                onStatusChange = {onStatusChange}
              />
            );
          })}
      </Grid>
      <Grid item xs={12} sm={4} style={{ backgroundColor: "#80ff80" }}>
        {/* Content of the second column */}
        <h4>Executing</h4>
        {executings.length > 0 &&
          executings.map(({ id, title, description, status }) => {
            return (
              <ActionCard
                imgSrc={"/imgs/executing.jpg"}
                key={id}
                taskId={id}
                title={title}
                description={description}
                style={{margin: "3rem auto"}}
                status={status}
                onStatusChange = {onStatusChange}
              />
            );
          })}
      </Grid>
      <Grid item xs={12} sm={4} style={{ backgroundColor: "#8080ff" }}>
        {/* Content of the third column */}
        <h4>Finished</h4>
        {finisheds.length > 0 &&
          finisheds.map(({ id, title, description, status }) => {
            return (
              <ActionCard
                imgSrc={"/imgs/finished.jpg"}
                key={id}
                taskId={id}
                title={title}
                description={description}
                status={status}
                style={{margin: "3rem auto"}}
                onStatusChange={onStatusChange}
              />
            );
          })}
      </Grid>
    </Grid>
  );
};

export default Board;
