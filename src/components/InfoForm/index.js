import React from 'react';
import { TextField } from '@material-ui/core';

function InfoForm() {
  return (
    <form>
    <TextField
      id="name"
      name="name"
      label="Your Name"
      required
      variant="outlined"
      fullWidth
      size="small"
    />

    <TextField
    id="position"
    name="position"
    label="Your Position"
    variant="outlined"
    fullWidth
    size="small"
  />

  <TextField
    id="phone"
    name="phone"
    label="Phone Number"
    type="number"
    variant="outlined"
    fullWidth
    size="small"
  />

  <TextField
    id="phase"
    name="phase"
    label="pahse"
    variant="outlined"
    fullWidth
    size="small"
  />
  </form>
  );
};

export default InfoForm;
