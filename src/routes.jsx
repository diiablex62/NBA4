import React from "react";
import { Routes, Route } from "react-router-dom";
import Team from "./pages/Teams/Team";
import Users from "./pages/Users/Users";
import Favorites from "./pages/Favorites/Favorites";
import Login from "./pages/Login";

export default function AppRoutes({
  teams,
  licensed,
  login,
  view,
  filter,
  handleTogglePages,
  toggleLiked,
  handleClick,
  handleInputUser,
  user,
  allUsers,
  handleClickDelete,
}) {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Team
            person={{ name: "Alex", age: 31 }}
            teams={teams}
            licensed={licensed}
            login={login}
            view={view}
            filter={filter}
            handleTogglePages={handleTogglePages}
            toggleLiked={toggleLiked}
          />
        }
      />
      <Route path='/login' element={<Login />} />
      <Route
        path='/users'
        element={
          <Users
            showUsers={handleTogglePages}
            handleClick={handleClick}
            handleInputUser={handleInputUser}
            user={user}
            allUsers={allUsers}
            handleClickDelete={handleClickDelete}
            licensed={licensed}
          />
        }
      />
      <Route
        path='/favorites'
        element={
          <Favorites
            showUsers={handleTogglePages}
            teams={teams}
            toggleLiked={toggleLiked}
            licensed={licensed}
          />
        }
      />
    </Routes>
  );
}
