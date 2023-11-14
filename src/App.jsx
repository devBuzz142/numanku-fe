import { Route, Routes } from 'react-router-dom';

import PageTemplate from './pages/PageTemplate/PageTemplate';
import HomePage from './pages/HomePage/HomePage';

import ViewLoginPage from './pages/ViewLoginPage/ViewLoginPage';
import ViewMainPage from './pages/ViewMainPage/ViewMainPage';
import ViewKukiPage from './pages/ViewKukiPage/ViewKukiPage';
import ViewDesignPage from './pages/ViewDesignPage/ViewDesignPage';
import ViewWritePage from './pages/ViewWritePage/ViewWritePage';
import ViewCompletePage from './pages/ViewCompletePage/ViewCompletePage';

import MakeDesignPage from './pages/MakeDesignPage/MakeDesignPage';
import MakeInfoPage from './pages/MakeInfoPage/MakeInfoPage';
import MakeIntroPage from './pages/MakeIntroPage/MakeIntroPage';
import MakeKukiTypePage from './pages/MakeKukiTypePage/MakeKukiTypePage';
import MakeCompletePage from './pages/MakeCompletePage/MakeCompletePage';

function App() {
  return (
    <PageTemplate>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view" element={<ViewMainPage />} />
        <Route path="/view/login" element={<ViewLoginPage />} />
        <Route path="/view/kuki" element={<ViewKukiPage />} />
        <Route path="/view/design" element={<ViewDesignPage />} />
        <Route path="/view/write" element={<ViewWritePage />} />
        <Route path="/view/complete" element={<ViewCompletePage />} />

        <Route path="/make" element={<MakeIntroPage />} />
        <Route path="/make/intro" element={<MakeIntroPage />} />
        <Route path="/make/info" element={<MakeInfoPage />} />
        {/* <Route path="/make/type" element={<MakeKukiTypePage />} /> */}
        <Route path="/make/design" element={<MakeDesignPage />} />
        <Route path="/make/complete" element={<MakeCompletePage />} />
      </Routes>
    </PageTemplate>
  );
}

export default App;
