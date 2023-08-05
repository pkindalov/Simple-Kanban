import { Container } from '@mui/material';
import BasicAccordion from './components/accordion/BasicAccordion';
import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
      <Container maxWidth="xl">
      <BasicAccordion />
      </Container>  

    </div>
    </LocalizationProvider>
  );
}

export default App;
