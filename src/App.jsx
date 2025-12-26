import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import OldRegistrationForm from './OldRegistrationForm';

function App() {
  return (
    <BrowserRouter basename="/regis-app-deploy">
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/old" element={<OldRegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;