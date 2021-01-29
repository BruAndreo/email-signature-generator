import './App.css';
import { Container, Typography } from '@material-ui/core';
import InfoForm from './components/InfoForm';

function App() {
  return (
    <Container maxWidth="md">

      <Typography
        variant="h3"
        component="h1"
        align="center"> E-mail Signature Generator </Typography>

      <InfoForm />

    </Container>
  );
}

export default App;
