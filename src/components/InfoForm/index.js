import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function InfoForm({ onGenerate }) {
  const [name, setName] = useState();
  const [position, setPosition] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [phase, setPhase] = useState();

  return (
    <form onSubmit={e => {
      e.preventDefault();
      onGenerate(name, position, phoneNumber, phase);
    }}>
      <TextField
        id="name"
        name="name"
        label="Your Name"
        required
        variant="outlined"
        fullWidth
        size="small"
        margin="normal"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <TextField
        id="position"
        name="position"
        label="Your Position"
        variant="outlined"
        fullWidth
        size="small"
        margin="normal"
        required
        value={position}
        onChange={e => setPosition(e.target.value)}
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
        required
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />

    <TextField
      id="phase"
      name="phase"
      label="Phase"
      variant="outlined"
      fullWidth
      size="small"
      margin="normal"
      value={phase}
      onChange={e => setPhase(e.target.value)}
    />

    <Button
      type="submit"
      variant="contained"
      color="primary">Generate</Button>
  </form>
  );
};

export default InfoForm;
