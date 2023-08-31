import * as React from "react";
// import Box from '@mui/material/Box';
// import Button from "@mui/material/Button";
// import Typography from '@mui/material/Typography';
import Modal from "@mui/material/Modal";
import { Chip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TasksModal({mode, children }) {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const mode = 'edit';
  // const handleDelete = () => {};
  return (
    <div>
      {/* <Button onClick={handleOpen}>Edit</Button> */}
      <Chip
        label={mode}
        variant="outlined"
        onClick={handleOpen}
        icon={mode === "edit" ? <EditIcon /> : <DeleteIcon />}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {children}
      </Modal>
    </div>
  );
}
