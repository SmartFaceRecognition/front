import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Enroll from "./component/Enroll";
import styles from "./App.module.css";
import Management from "./component/Management";
import Control from "./component/Control";
import Present from "./component/Present";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/enroll" element={<Enroll />}/>
          <Route path="/management" element={<Management />}/>
          <Route path="/present" element={<Present />}/>
          <Route path="/control" element={<Control />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
