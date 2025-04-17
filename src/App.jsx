import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import AppRoutes from "./routes"; 
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
        <AppRoutes
          teams={teams}
          licensed={licensed}
          login={login}
          view={view}
          filter={filter}
          handleTogglePages={handleTogglePages}
          toggleLiked={toggleLiked}
          handleClick={handleClick}
          handleInputUser={handleInputUser}
          user={user}
          allUsers={allUsers}
          handleClickDelete={handleClickDelete}
        />
      )}
    </div>
  );
}

export default App;
