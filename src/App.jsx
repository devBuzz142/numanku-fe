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
    if (location.pathname !== '/') {
      navigate('/');
    }

    const timer = setTimeout(() => {
      setFirstEnter(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [firstEnter]);

  useEffect(() => {
    if (firstEnter && !authState.userId) {
      if (location.pathname !== '/login') {
        navigate('/login');
      }
    }
  }, [authState.userId]);

  if (!firstEnter) {
    console.log('first enter phase');

    return (
      <PageTemplate>
        <Routes>
          <Route path="*" element={<ViewIntroPage />} />
        </Routes>
      </PageTemplate>
    );
  }

  if (!channelState.channelId) {
    console.log('channel phase');

    return (
      <PageTemplate>
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </PageTemplate>
    );
  }

  if (!authState.userId) {
    console.log('login phase');

    return (
      <PageTemplate>
        <Routes>
          <Route path="*" element={<ViewLoginPage />} />
        </Routes>
      </PageTemplate>
    );
  }

  console.log('main phase');

  return (
    <PageTemplate>
      <Routes>
        <Route path="/view" element={<ViewMainPage />} />
        <Route path="/kuki/*" element={<ViewKukiPage />} />
        <Route path="/design" element={<ViewDesignPage />} />
        <Route path="/write" element={<ViewWritePage />} />
        <Route path="/complete" element={<ViewCompletePage />} />
        <Route path="/*" element={<ViewMainPage />} />
        {/* 
        <Route path="/make" element={<MakeIntroPage />} />
        <Route path="/make/intro" element={<MakeIntroPage />} />
        <Route path="/make/info" element={<MakeInfoPage />} />
        <Route path="/make/type" element={<MakeKukiTypePage />} />
        <Route path="/make/design" element={<MakeDesignPage />} />
        <Route path="/make/complete" element={<MakeCompletePage />} />
         */}
      </Routes>
    </PageTemplate>
  );
}

export default App;
