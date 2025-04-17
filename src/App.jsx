import { useContext } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Team from "./pages/Teams/Team";
import Users from "./pages/Users/Users";
import Favorites from "./pages/Favorites/Favorites";
import { AppContext } from "./context/AppContext";

function App() {
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

  const person = { name: "John", age: 20 };

  return (
    <div className={`d-flex align-items-center flex-column  ${styles.main}`}>
      {showPage === "users" ? (
        <Users
          showUsers={handleTogglePages}
          handleClick={handleClick}
          handleInputUser={handleInputUser}
          user={user}
          allUsers={allUsers}
          handleClickDelete={handleClickDelete}
        />
      ) : showPage === "teams" ? (
        <>
          <Header
            changeView={changeView}
            handleInput={handleInput}
            licensed={licensed}
            login={login}
            handleTogglePages={handleTogglePages}
          />
          {isLoading ? (
            <Loading />
          ) : (
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
          )}
        </>
      ) : showPage === "favorites" ? (
        <Favorites
          showUsers={handleTogglePages}
          teams={teams}
          toggleLiked={toggleLiked}
        />
      ) : null}
    </div>
  );
}

export default App;
