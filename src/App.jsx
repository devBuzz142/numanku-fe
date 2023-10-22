import React from "react";

import PageTemplate from "./pages/PageTemplate/PageTemplate";
import ViewDesignPage from "./pages/PageTemplate/ViewDesignPage/ViewDesignPage";
import ViewMainPage from "./pages/PageTemplate/ViewMainPage/ViewMainPage";

import {Routes, Route } from "react-router-dom";



function App() {
  return (
    <PageTemplate>
        <Routes>
          <Route path="/view" element={<ViewMainPage />} />
          <Route path="/view/design" element={<ViewDesignPage />} />
        </Routes>
    </PageTemplate>
  );
}

export default App;
