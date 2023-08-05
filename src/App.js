import { Container } from '@mui/material';
import BasicAccordion from './components/accordion/BasicAccordion';
import './App.css';


function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
      <BasicAccordion />
      </Container>  

    </div>
  );
}

export default App;
