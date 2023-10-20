import { Route, Routes } from 'react-router-dom';
import MakeDesignPage from './pages/MakeDesignPage/MakeDesignPage';
import MakeInfoPage from './pages/MakeInfoPage/MakeInfoPage';
import PageTemplate from './pages/PageTemplate/PageTemplate';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <PageTemplate>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/make" element={<MakeInfoPage />} />
        <Route path="/make/info" element={<MakeInfoPage />} />
        <Route path="/make/design" element={<MakeDesignPage />} />
      </Routes>
    </PageTemplate>
  );
}

export default App;
