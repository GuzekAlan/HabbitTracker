localStorage.getItem("zti_user_id");

function useAuth() {
  return {
    userId: () => localStorage.getItem("zti_user_id"),
    logIn: (userId: string) => localStorage.setItem("zti_user_id", userId),
    logOut: () => localStorage.removeItem("zti_user_id"),
  };
}

export default useAuth;
