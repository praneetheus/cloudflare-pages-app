import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./pages/posts";
import { Button } from '@material-ui/core';

function App() {

  // return <Button variant="contained" color="primary">Hello World</Button>;
  // console.log("hello");
  return (
    <Router>
        <Routes>
          {/* <Button variant="contained" color="primary">Hello World</Button>; */}
          <Route path="posts" element={<Posts/>} />
        </Routes>
      </Router>
  );
};

export default App;
