import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes></Routes>
    </Router>
  );
}

export default App;
