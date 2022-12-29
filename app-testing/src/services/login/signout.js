import { getLocalStorageKey, removeLocalStorageKey } from "../../utils/local-storage";
import { createUserInstance } from "./user-pool";

export const signout = async () => {
  const email = getLocalStorageKey('email');
  const cognitoUserInstance = createUserInstance(email);
  const result = await cognitoUserInstance.signOut();
  removeLocalStorageKey('token');
  removeLocalStorageKey('email');
  return result;
};