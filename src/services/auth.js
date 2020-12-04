import AtlasAPI from "./api";

export function signIn(email, password) {
  const response = AtlasAPI.post("/user/session", { email, password }).catch(
    (error) => {
      response = error.response;
    }
  );

  return response;
}
