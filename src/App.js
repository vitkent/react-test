import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import RouterConrtroller from "./pages/RouterController/RouterController";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Layout>
          <RouterConrtroller state={props.state} dispatch={props.dispatch}/>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
