import { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Importez useLocation
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Team from "./pages/Teams/Team";
import Users from "./pages/Users/Users";
import Favorites from "./pages/Favorites/Favorites";
import Login from "./pages/Login"; // Importez Login
import { AppContext } from "./context/AppContextInstance";

function App() {
  const location = useLocation(); // Obtenez l'emplacement actuel
  const {
    teams,
    isLoading,
    licensed,
    view,
    filter,
    showPage,
    user,
    allUsers,
    handleClick,
    toggleLiked,
    handleInputUser,
    login,
    changeView,
    handleInput,
    handleTogglePages,
    handleClickDelete,
  } = useContext(AppContext);

  const person = { name: "Alex", age: 31 };

  return (
    <div className={`d-flex align-items-center flex-column  ${styles.main}`}>
      {/* Affichez le Header uniquement si l'utilisateur n'est pas sur /login */}
      {location.pathname !== "/login" && (
        <Header
          changeView={changeView}
          handleInput={handleInput}
          licensed={licensed}
          login={login}
          handleTogglePages={handleTogglePages}
        />
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            path='/'
            element={
              <Team
                person={person}
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
          <Route
            path='/login'
            element={<Login />} // Route pour Login
          />
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
              />
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
