import React from "react";
import TopNav from "./TopNav";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Candidate from "./Candidate";
import Profile from "./Profile";
import ChatRoomList from "./ChatRoomList";
import MessageScreen from "./MessageScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// chat
import Chat from "./Chat/Chat";
import { SocketProvider } from "../socketContext";
import { MainProvider } from "../mainContext";
import { UsersProvider } from "../usersContext";
// import DefaultPage from './components/DefaultPage'

const profile = {
  id: 1,
  imageUrl: "https://tinyurl.com/kb7dhhck",
  name: "Bigboi",
  breed: "Maltese",
  location: "Vancouver",
  gender: "male",
  age: 3,
  size: "small",
  owner: "BigBoiOwner",
  email: "a@a.com",
  password: "a",
  description: "actually very smol",
};

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/messages/:candidate">
            <TopNav />
            <MessageScreen />
          </Route>

          <Route path="/profile">
            <TopNav />
            <Profile profile={profile} />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/Candidate">
            <TopNav />
            <Candidate />
          </Route>

          <MainProvider>
            <UsersProvider>
              <SocketProvider>
                <Route path="/messages">
                  <TopNav />
                  <ChatRoomList profile={profile} />
                </Route>

                <Route path="/message">
                  <Chat />
                </Route>

              </SocketProvider>
            </UsersProvider>
          </MainProvider>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
