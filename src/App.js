import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route path="/sign-in" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
