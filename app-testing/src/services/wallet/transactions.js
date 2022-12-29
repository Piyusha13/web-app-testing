import { fetchUrl } from "../../utils/fetch";
import { getLocalStorageKey } from "../../utils/local-storage";

export const getUserTransactions = async () => {
  const token = getLocalStorageKey('token');
  const url = "https://lu6che2dg9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/get-user-transections";
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", token);

  const requestOptions = { method: 'GET', headers, redirect: 'follow' };
  const data = await fetchUrl(url, requestOptions);

  return data;
}