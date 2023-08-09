import * as React from "react";
// import Box from '@mui/material/Box';
// import Button from "@mui/material/Button";
// import Typography from '@mui/material/Typography';
import Modal from "@mui/material/Modal";
import { Chip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function TasksModal({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const handleDelete = () => {};
  return (
    <div>
      {/* <Button onClick={handleOpen}>Edit</Button> */}
      <Chip
        label="Edit"
        variant="outlined"
        onClick={handleOpen}
        // onDelete={handleDelete}
        icon={<EditIcon />}
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
