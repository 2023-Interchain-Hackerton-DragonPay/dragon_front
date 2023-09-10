import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global/globalStyle";
import ScrollToTop from "./components/actions/ScrollTop";
import TestPage from "./pages/TestPage";
import NotFound from "./pages/NotFound";
import RootUIProvider from "./components/providers/RootUIProvider";
import SignInPage from "pages/SignInPage";
import { Auth } from "components/actions/Auth";
import ProfilePage from "pages/ProfilePage";
import MakeQRPage from "pages/MakeQRPage";
import ScanQRPage from "pages/ScanQRPage";
import Header from "components/global/Header";

function App() {
  return (
    <BrowserRouter>
      {/* my init settings */}
      <GlobalStyle />
      {/* this component be always to scroll to top */}
      <ScrollToTop />
      {/* my init UI Provider for hooks / modal, snackbar, toast, darkMode */}
      <RootUIProvider>
        <Header />
        <Routes>
          <Route path="/" element={<SignInPage />} />
          {/* Auth function will return component when token is valid */}
          <Route path="/profile" element={Auth(<ProfilePage />)} />
          <Route path="/makeqr/:id" element={Auth(<MakeQRPage />)} />
          <Route path="/scanqr" element={Auth(<ScanQRPage />)} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RootUIProvider>
    </BrowserRouter>
  );
}

export default App;
