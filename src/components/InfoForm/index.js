import React from 'react';
import { Button, TextField } from '@material-ui/core';

function InfoForm() {
  return (
    <form>
      <Button
        variant="contained"
        component="label"
        margin="normal"
      >
        Upload
        <input type="file" hidden />
      </Button>

      <TextField
        id="name"
        name="name"
        label="Your Name"
        required
        variant="outlined"
        fullWidth
        size="small"
        margin="normal"
      />

      <TextField
        id="position"
        name="position"
        label="Your Position"
        variant="outlined"
        fullWidth
        size="small"
        margin="normal"
      />

    <TextField
        id="phone"
        name="phone"
        label="Phone Number"
        type="number"
        variant="outlined"
        fullWidth
        size="small"
        margin="normal"
      />

    <TextField
      id="phase"
      name="phase"
      label="Phase"
      variant="outlined"
      fullWidth
      size="small"
      margin="normal"
    />
  </form>
  );
};

export default InfoForm;
