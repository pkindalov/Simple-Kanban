import { TextField, FormControl, Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
// import {AdapterDateFns} from '@mui/x-date-pickers';
// import {LocalizationProvider} from '@mui/x-date-pickers';


const Form = () => {
  return (
    
    <form>
      <FormControl>
        <Box mt={2}>
        <DatePicker
          label="Select Date"
        //   value={selectedDate}
        //   onChange={handleDateChange}
        //   renderInput={(params) => <TextField {...params} className={classes.textField} />}
        />
        </Box>
        <Box mt={2}>
          <TextField
            id="title"
            label="task title"
            fullWidth
            // value={title}
            // onChange={handleNameChange}
          />
        </Box>
        <Box mt={2}>
          <TextField
            multiline
            minRows={4}
            maxRows={10}
            // value={text}
            // onChange={handleTextChange}
            label="task description"
            variant="outlined"
            fullWidth
            // style={{ marginBottom: 16 }}
          />
        </Box>
      </FormControl>
    </form>
    
  );
};

export default Form;
