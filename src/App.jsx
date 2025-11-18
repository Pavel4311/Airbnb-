import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Headers/Headers";
import Main from "./components/Main/main1";
import Form from "./components/Form/Form";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<Main />} />

          {/* Страница формы */}
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
