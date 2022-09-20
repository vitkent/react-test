import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import RouterConrtroller from "./pages/RouterController/RouterController";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Layout>
          <RouterConrtroller />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
