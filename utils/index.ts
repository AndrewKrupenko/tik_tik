import axios from "axios";
import jwtDecode from "jwt-decode";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const createOrGetUser = async (response: any, addUser: any) => {
  const decoded: { name: string; picture: string; sub: string } = jwtDecode(
    response.credential
  );

  const { name, picture, sub } = decoded;

  const user = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture,
  };

  // add user to the persistent state (zustand)
  addUser(user);

  // Save the user to sanity (pages/api/auth.ts directory)
  await axios.post(`${BASE_URL}/api/auth`, user);
};
