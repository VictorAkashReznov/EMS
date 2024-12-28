import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashBoard from "./components/dashboard/EmployeeDashBoard";
import AdminDashBoard from "./components/dashboard/AdminDashBoard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setuser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  // const authData = useContext(AuthContext);
  const [userData, setuserData] = useContext(AuthContext);

  useEffect(() => {
    if (userData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const ExistingUserData = JSON.parse(loggedInUser);
        setuser(ExistingUserData.role);
        setloggedInUserData(ExistingUserData.data);
      }
    }
  }, [userData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      setuser("admin");
    } else if (userData) {
      const employee = userData.employees.find((e) => {
        return email == e.email && e.password == password;
      });

      if (employee) {
        setuser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("invalid creadantial");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashBoard changeUser={setuser} />
      ) : user === "employee" ? (
        <EmployeeDashBoard changeUser={setuser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
