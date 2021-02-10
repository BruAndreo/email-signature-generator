import './App.css';
import { Container, Typography } from '@material-ui/core';
import InfoForm from './components/InfoForm';
import Signature from './components/Signature';

function App() {
  return (
    <Container maxWidth="sm">

      <Typography
        variant="h4"
        component="h1"
        align="center"> E-mail Signature Generator </Typography>

      <br />

      <InfoForm />

      <br />

      <Signature />

    </Container>
  );
}

export default App;
