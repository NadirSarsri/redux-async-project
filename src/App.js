import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Posts from "./components/posts";
import AddPost from "./components/addPost";
import UpdatePost from "./components/updatePost";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container pt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="addPost" element={<AddPost />} />
          <Route path="updatePost/:id" element={<UpdatePost />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
