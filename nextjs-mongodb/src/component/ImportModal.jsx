"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Stack, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalImport() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Import Data</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <form>
        <Box sx={{ ...style, width: 400}}>
          <h2 id="parent-modal-title">Please enter your information</h2>
          
          <Box display={'flex'} gap={2}>
          <TextField id="outlined-basic"name='name' type='text'
          label="Name" variant="outlined" margin={'normal'}/>
          <TextField id="outlined-basic" name='Phonen umber' type='text'
          label="Phonenumber" variant="outlined" margin={'normal'}/>
          </Box>
        
          <Box display={'flex'} gap={2}>
          <TextField id="outlined-basic" helperText='date Of Birth' name='dateOfBirth' type='date' variant="outlined" margin={'normal'}/>
          <TextField id="outlined-basic" name='email'type='text' label="email" variant="outlined" margin={'normal'}/>
          </Box>
        

            <Stack spacing={2} direction="row" justifyContent={'center'} >
             <Button variant="contained" onClick={handleClose}>Cancel</Button>
             <Button variant="contained">Submit Data</Button>
            </Stack>
        </Box>
        </form>
      </Modal>
    </div>
  );
}
