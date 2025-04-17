import React, { useState } from "react";
import { AppContext } from "./AppContextInstance";
import { datas } from "../data";

export const AppProvider = ({ children }) => {
  const [teams, setTeams] = useState(datas);
  const [isLoading] = useState(false);
  const [licensed, setLicensed] = useState(false);
  const [view, setView] = useState("all");
  const [filter, setFilter] = useState("");
  const [showPage, setShowPage] = useState("teams");
  const [user, setUser] = useState({ name: "", age: "" });
  const [allUsers, setAllUsers] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setAllUsers([...allUsers, { ...user }]);
    resetForm();
  };

  const toggleLiked = (i) => {
    setTeams(
      teams.map((t, index) => (index + 1 === i ? { ...t, liked: !t.liked } : t))
    );
  };

  const resetForm = () => {
    setUser({ name: "", player: "" });
  };

  const handleInputUser = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    setLicensed(!licensed);
  };

  const changeView = (value) => {
    setView(value);
  };

  const handleInput = (e) => {
    setFilter(e.target.value.trim().toLowerCase());
  };

  const handleTogglePages = (value) => {
    setShowPage(value);
  };

  const handleClickDelete = (i) => {
    const newUserList = allUsers.filter((_, index) => index !== i);
    setAllUsers(newUserList);
  };

  return (
    <AppContext.Provider
      value={{
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
        resetForm,
        handleInputUser,
        login,
        changeView,
        handleInput,
        handleTogglePages,
        handleClickDelete,
      }}>
      {children}
    </AppContext.Provider>
  );
};
