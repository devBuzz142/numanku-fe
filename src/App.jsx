import { Route, Routes } from 'react-router-dom';

import PageTemplate from './pages/PageTemplate/PageTemplate';
import ViewDesignPage from './pages/ViewDesignPage/ViewDesignPage';
import ViewMainPage from './pages/ViewMainPage/ViewMainPage';
import MakeDesignPage from './pages/MakeDesignPage/MakeDesignPage';
import MakeInfoPage from './pages/MakeInfoPage/MakeInfoPage';
import HomePage from './pages/HomePage/HomePage';
import MakeIntroPage from './pages/MakeIntroPage/MakeIntroPage';
import MakeKukiTypePage from './pages/MakeKukiTypePage/MakeKukiTypePage';
import MakeCompletePage from './pages/MakeCompletePage/MakeCompletePage';
import MakeQRPage from './pages/MakeQRPage/MakeQRPage';
import ViewLoginPage from './pages/ViewLoginPage/ViewLoginPage';
import ViewWritePage from './pages/ViewWritePage/ViewWritePage';

function App() {

  return (
    <PageTemplate>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view" element={<ViewMainPage />} />
        <Route path="/view/login" element={<ViewLoginPage />} />
        <Route path="/view/design" element={<ViewDesignPage />} />
        <Route path="/view/write" element={<ViewWritePage />} />
        <Route path="/make" element={<MakeIntroPage />} />
        <Route path="/make/intro" element={<MakeIntroPage />} />
        <Route path="/make/info" element={<MakeInfoPage />} />
        <Route path="/make/type" element={<MakeKukiTypePage />} />
        <Route path="/make/complete" element={<MakeCompletePage />} />
        <Route path="/make/design" element={<MakeDesignPage />} />
        <Route path="/make/qr" element={<MakeQRPage />} />
      </Routes>
    </PageTemplate>
  );
}

export default App;
