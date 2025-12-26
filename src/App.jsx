import { HashRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import OldRegistrationForm from './OldRegistrationForm';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/old" element={<OldRegistrationForm />} />
      </Routes>
    </HashRouter>
  );
}

export default App;