import { TextField, FormControl, Box, Button, Select, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React, { useState } from 'react';
import { format } from 'date-fns'; 

const Form = ({ addTask }) => {
  const [task, setTask] = useState({
    date: '',
    title: '',
    description: '',
    status: 'pending'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO make validations here
    if (task.title.trim() !== '') {
      if(!task.date) task.date = format(new Date(), 'dd-MM-yyyy')
      addTask(task); // Call the addTask function from props to add the new task
      setTask({
        date: '', // Set date back to an empty string after adding the task
        title: '',
        description: '',
        status: 'pending'
      }); // Clear the input fields after adding the task
    }

  }

  const handleDateChange = (date) => {
    console.log(date);
    const formattedDate = date ? format(date, 'dd-MM-yyyy') : format(new Date(), 'dd-MM-yyyy');
    setTask({...task, date: formattedDate});
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setTask({...task, [name]: value});
    // console.log(e.target);
  }

  // const handleStatusChange = (e) => {
  //   console.log(e.target);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Box mt={2}>
        <DatePicker
          label="Select Date"
          name="date"
          value={(task.date ? new Date(task.date) : new Date())}
          onChange={handleDateChange}
          // format="dd-MM-yyyy"
        //   renderInput={(params) => <TextField {...params} className={classes.textField} />}
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
            // style={{ marginBottom: 16 }}
          />
        </Box>
        <Box mt={2}>
            <Button  type="submit" variant="contained">Create</Button>
        </Box>
      </FormControl>
    </form>
    
  );
};

export default Form;