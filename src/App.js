import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store/store";

import AppRoute from "./routes/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRoute />
      </div>
    </Provider>
  );
}

export default App;
