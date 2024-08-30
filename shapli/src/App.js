import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyles/GlobalStyles";
import { HomePage } from "pages";
import MyPage from "pages/MyPage/MyPage";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />}></Route> 
        <Route path="/MyPage" element={<MyPage />}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
