import { jwtDecode } from "jwt-decode";

export const authToken = () => {
  const token = localStorage.getItem("token");
  console.log("seu token", token);
  if (!token) {
    console.log("nao tem token");
    return false;
  }
  try {
    const { exp } = jwtDecode(token);
    if (exp != null) {
      if (Date.now() >= exp * 1000) {
        localStorage.removeItem("token");
        console.log("o tempo ta diferente");
        return false;
      }
    }
    return true;
  } catch (error) {
    console.log("deu erro", error);
    return false;
  }
};
