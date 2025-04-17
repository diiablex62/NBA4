import { useContext } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Team from "./pages/Teams/Team";
import Users from "./pages/Users/Users";
import Favorites from "./pages/Favorites/Favorites";
import Login from "./pages/Login";
import { AppContext } from "./context/AppContextInstance";

function App() {
  const location = useLocation(); 
  const navigate = useNavigate(); 
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

  return (
    <div className={`d-flex align-items-center flex-column ${styles.main}`}>
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
      )}
    </div>
  );
}

export default App;
