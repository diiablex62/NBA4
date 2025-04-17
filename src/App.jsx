import { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; // Importez useNavigate
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Team from "./pages/Teams/Team";
import Users from "./pages/Users/Users";
import Favorites from "./pages/Favorites/Favorites";
import Login from "./pages/Login"; // Importez Login
import { AppContext } from "./context/AppContextInstance";

function App() {
  const navigate = useNavigate(); // Initialisez useNavigate
  const {
    teams,
    isLoading,
    licensed,
    view,
    filter,
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
      {location.pathname !== "/login" && (
        <Header
          changeView={changeView}
          handleInput={handleInput}
          licensed={licensed}
          login={login}
          handleTogglePages={(page) => {
            handleTogglePages(page);
            navigate(`/${page}`); 
          }}
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
      )}
    </div>
  );
}

export default App;
