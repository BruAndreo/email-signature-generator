import './App.css';
import { Container, Typography } from '@material-ui/core';
import InfoForm from './components/InfoForm';

function App() {
  return (
    <Container maxWidth="sm">

      <Typography
        variant="h4"
        component="h1"
        align="center"> E-mail Signature Generator </Typography>

      <InfoForm />

    </Container>
  );
}

export default App;
