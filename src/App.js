import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./pages/posts";
function App() {

  // console.log("hello");
  // fetch

  return (
      <Router>
        <Routes>
          <Route path="posts" element={<Posts/>} />
        </Routes>
      </Router>
  );
};

export default App;
