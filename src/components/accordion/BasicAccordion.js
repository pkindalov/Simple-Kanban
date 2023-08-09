import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Board from "../board/Board";
import Form from "../tasks/Form";

export default function BasicAccordion({
  tasks,
  addTask,
  editTask,
  deleteTask,
  onStatusChange,
}) {
  const pendings = tasks.filter((taks) => taks.status === "pending");
  const executings = tasks.filter((task) => task.status === "executing");
  const finisheds = tasks.filter((task) => task.status === "finished");

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Add Task</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Create a task from here:</Typography>
          <Form
            id={""}
            date={new Date()}
            title={""}
            description={""}
            status={""}
            addTask={addTask}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Kenban Board</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Board
            pendings={pendings}
            executings={executings}
            finisheds={finisheds}
            onStatusChange={onStatusChange}
            addTask={addTask}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
