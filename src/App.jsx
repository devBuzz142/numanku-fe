import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import PageTemplate from './pages/PageTemplate/PageTemplate';
import HomePage from './pages/HomePage/HomePage';

import ViewIntroPage from './pages/ViewIntroPage/ViewIntroPage';
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
import { useChannelContext } from './contexts/ChannelProvider';
import { useAuthContext } from './contexts/AuthProvider';
import { useEffect, useState } from 'react';

function App() {
  // channel context
  const { channelState } = useChannelContext();
  const { authState } = useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();

  // for firstEnter, route to intropage
  const [firstEnter, setFirstEnter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstEnter(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!firstEnter) {
    console.log('first enter phase', firstEnter);
    return (
      <PageTemplate>
        <Routes>
          <Route
            path="/*"
            element={
              <ViewIntroPage
                firstEnter={firstEnter}
                setFirstEnter={setFirstEnter}
              />
            }
          />
        </Routes>
      </PageTemplate>
    );
  }

  if (!authState.userId) {
    console.log('login phase', location.pathname);

    if (location.pathname !== '/view/login') {
      navigate('/view/login');
    }

    return (
      <PageTemplate>
        <Routes>
          <Route path="/*" element={<ViewLoginPage />} />
        </Routes>
      </PageTemplate>
    );
  }

  console.log('main phase');

  return (
    <PageTemplate>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/channel" element={<HomePage />} />

        <Route path="/view" element={<HomePage />} />
        <Route path="/view/login" element={<ViewLoginPage />} />
        <Route path="/view/kuki/*" element={<ViewKukiPage />} />
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
