import React from "react";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { fireAuth } from "./firebase";
import { Contents } from "./components/Contents";
import { LoginForm } from "./components/LoginForm";
import { Test } from "./components/Test";
import { UserPage } from "./components/User";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export const App = () => {
  const [loginUser, setLoginUser] = useState(fireAuth.currentUser);

  onAuthStateChanged(fireAuth, user => {
    setLoginUser(user);
  });


  const Home: React.FC = () => {
    return (
        <div>
          {loginUser ? <Contents /> : <LoginForm />}
        </div>
    );
  };
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path=":id" element={<UserPage />}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </>
  );
};