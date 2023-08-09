import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TasksModal from "./TasksModal";
import {
  //   Button,
  CardActionArea,
  CardActions,
  Select,
  MenuItem,
  Box,
  // Button,
} from "@mui/material";

import Form from "./Form";

export default function ActionCard({
  imgSrc,
  taskId,
  date,
  title,
  description,
  status,
  onStatusChange,
  addTask,
  editTask,
  style,
}) {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Card sx={{ maxWidth: 345, ...style }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imgSrc} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Select
            label="Status"
            value={status}
            onChange={(newStatus) => onStatusChange(taskId, newStatus)}
            name="status"
            fullWidth
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="executing">Executing</MenuItem>
            <MenuItem value="finished">Finished</MenuItem>
          </Select>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <TasksModal>
          <Box sx={modalStyle}>
            <Form
              id={taskId}
              date={date}
              title={title}
              description={description}
              status={status}
              addTask={addTask}
              editTask={editTask}
            />

            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          </Box>
        </TasksModal>
        {/* <Button size="small" color="primary">
          Save
        </Button> */}
      </CardActions>
    </Card>
  );
}
