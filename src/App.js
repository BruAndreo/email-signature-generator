import './App.css';
import { Container, Typography } from '@material-ui/core';
import InfoForm from './components/InfoForm';
import Logo from './assets/img/google.png';

function App() {
  return (
    <Container maxWidth="sm">

      <Typography
        variant="h4"
        component="h1"
        align="center"> E-mail Signature Generator </Typography>

      <InfoForm />

      <br />

      <div>
        <img
          src={Logo}
          width="140px"
          height="100px"
          alt="Logo" />

        <div>
          <h3>Bruno Lino Andreo</h3>
          <p>Desenvolvedor de Sistemas</p>
          <p>XX XXXX-XXXX</p>
          <p>Mares calmos não formam bons marinheiros</p>
        </div>
      </div>

    </Container>
  );
}

export default App;
