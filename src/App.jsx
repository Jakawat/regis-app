import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <BrowserRouter basename="/regis-app-deploy">
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;