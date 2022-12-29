// import { sendFailureNotification, sendSuccessNotification } from "../services/notification";
import { toast } from "react-toastify";
import { getLocalStorageKey } from "./local-storage";

export const checkLoginStatus = (location, navigate) => {
  const now = Date.now();
  const token = getLocalStorageKey('token');
  const email = getLocalStorageKey('email');
  const expiry = getLocalStorageKey('expiry');
  const exemptedList = ['/login/', '/signup/', '/reset-password/', '/login', '/signup', '/reset-password'];

  if (!exemptedList.includes(location.pathname)) {
    if (!(token && email && expiry)) {
      navigate("/login");
    //   sendFailureNotification('Session Expired', 'Access has expired please login again.');
        toast.error("Session Expired, Access has expired please login again.");
}
    if (expiry < now) {
      navigate("/login");
      toast.error("Session Expired, Access has expired please login again.");
    //   sendFailureNotification('Session Expired', 'Access has expired please login again.');
    }
  } else {
    if (token && email && expiry && now < expiry) {
      navigate("/");
      toast.success("Session Valid, Redirecting to the dashboard.");
    //   sendSuccessNotification('Session Valid', 'Redirecting to the dashboard.');
    }
  }
};


export const checkIsUserLoggedIn = () => {
  const now = Date.now();
  const token = getLocalStorageKey('token');
  const email = getLocalStorageKey('email');
  const expiry = getLocalStorageKey('expiry');
  if (!(token && email && expiry)) {
    return false;
  }
  if (expiry < now) {
    return false;
  }
  return true;
}