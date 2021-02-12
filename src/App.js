import React, { useState } from 'react';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import InfoForm from './components/InfoForm';
import Signature from './components/Signature';

function App() {
  const [signature, setSignature] = useState({});

  return (
    <Container maxWidth="sm">

      <br />

      <Typography
        variant="h4"
        component="h1"
        align="center"> E-mail Signature Generator </Typography>

      <br />

      <InfoForm onGenerate={setSignature} />

      <br />

      {signature.name && (<Signature data={signature} />)}

    </Container>
  );
}

export default App;
