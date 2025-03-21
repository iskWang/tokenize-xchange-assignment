import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContainer from "./containers/App";

const Home = React.lazy(() => import("./scenes/Home"));
const DetailScene = React.lazy(() => import("./scenes/Detail"));

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:symbol" element={<DetailScene />} />
          </Routes>
        </Suspense>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
