import {
  TextField,
  FormControl,
  Box,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
// import { format } from "date-fns";

const Form = ({ id, date, title, description, status, addTask, editTask }) => {
  const [task, setTask] = useState({
    id: id ? id : "",
    date: date ? date : "",
    title: title ? title : "",
    description: description ? description : "",
    status: status ? status : "pending",
  });
  const isEditMode = id;

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO make validations here
    if (isEditMode) {
      // console.log("must edit");
      editTask(task);
      return;
    }

    if (task.title.trim() !== "") {
      task.id = window.crypto.randomUUID();
      // if (!task.date) task.date = format(new Date(), "dd/MM/yyyy");
      addTask(task);
      setTask({
        id: "",
        date: "",
        title: "",
        description: "",
        status: "pending",
      });
    }
  };

  const handleDateChange = (date) => {
    // console.log(date);
    // const formattedDate = date
    //   ? format(date, "dd/MM/yyyy")
    //   : format(new Date(), "dd/MM/yyyy");
    setTask({ ...task, date: date });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Box mt={2}>
          <DatePicker
            label="Select Date"
            name="date"
            value={task.date ? task.date : new Date()}
            onChange={handleDateChange}
          />
        </Box>
        <Box mt={2}>
          <TextField
            id="title"
            label="task title"
            name="title"
            fullWidth
            value={task.title}
            onChange={handleInputChange}
          />
        </Box>

        <Box mt={2}>
          <Select
            label="Status"
            value={task.status}
            // onChange={handleStatusChange}
            name="status"
            onChange={handleInputChange}
            fullWidth
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="executing">Executing</MenuItem>
            <MenuItem value="finished">Finished</MenuItem>
          </Select>
        </Box>

        <Box mt={2}>
          <TextField
            multiline
            minRows={4}
            maxRows={10}
            value={task.description}
            onChange={handleInputChange}
            label="task description"
            variant="outlined"
            fullWidth
            name="description"
          />
        </Box>
        <Box mt={2}>
          <Button
            icon={isEditMode ? <EditIcon /> : <SaveIcon />}
            type="submit"
            variant="contained"
          >
            {isEditMode ? <SaveIcon /> : <EditIcon />}
            {isEditMode ? "Save Changes" : "Create"}
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default Form;
