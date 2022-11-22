import { useEffect, useState } from "react";
// export const useIdLoggedIn = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   useEffect(() => {
//     fetch("http://localhost:3000/logged_in", {
//       method: "GET",
//       credentials: "include",
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         setLoggedIn(json.logged_in);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return loggedIn;
// };

export const about = (params) => {
  let token = localStorage.getItem("token");
  if (token) {
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json",  "Authorization": `Bearer ${token}`},
      body: JSON.stringify(params),
    };
    fetch("http://localhost:3000/setup", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
    });
  }
};
