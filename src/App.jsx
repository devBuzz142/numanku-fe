import { Route, Routes } from 'react-router-dom';
import MakeDesignPage from './pages/MakeDesignPage/MakeDesignPage';
import MakeInfoPage from './pages/MakeInfoPage/MakeInfoPage';
import PageTemplate from './pages/PageTemplate/PageTemplate';

function App() {
  return (
    <PageTemplate>
      <Routes>
        <Route path="/make/info" element={<MakeInfoPage />} />
        <Route path="/make/design" element={<MakeDesignPage />} />
      </Routes>
    </PageTemplate>
  );
}

export default App;
