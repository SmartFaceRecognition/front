import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Header from "./component/Header";
import Enroll from "./component/Enroll";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Header />}>
            <Route index element={<Header />} />
            <Route path="/enroll" element={<Enroll />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
