export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "KOAKSOK4OK123",
        user: {
          name: "Gabriel",
          email: "joaogabriel@gmail.com",
        },
      });
    }, 2000);
  });
}
