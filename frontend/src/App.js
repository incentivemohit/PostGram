import Home from "./components/Layout/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import NewPost from "./components/Post/NewPost";
import UserProfile from "./components/User/UserProfile";
import PageNotFound from "./components/PageNotFound";
import ChatLayout from "./components/Layout/ChatLayout/ChatLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const savedItem = localStorage.getItem("user");
  const loggedIn = JSON.parse(savedItem);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/user/chats"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <ChatLayout />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/user/newpost"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <NewPost />
              </ProtectedRoute>
            }
          />

          <Route exact path="/user/profile" element={<UserProfile />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />

          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
