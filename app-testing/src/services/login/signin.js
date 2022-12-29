import { createUserInstance } from "./user-pool";
import { AuthenticationDetails as authenticationDetails } from 'amazon-cognito-identity-js';
import { COGNITO_STATUS } from '../login/constants';

export const authorizeUser = (email, password) => {
  const cognitoUserInstance = createUserInstance(email);
  const userData = new authenticationDetails({ Username: email, Password: password });

  return new Promise((resolve) => {
    cognitoUserInstance.authenticateUser(userData, {
      onSuccess: (result) => {

        const idToken = result.getIdToken().getJwtToken();
        const accessToken = result.getAccessToken().getJwtToken();
        const expiry = result.accessToken.getExpiration();

        resolve({
          status: COGNITO_STATUS.success,
          token: idToken,
          access: accessToken,
          expiry: expiry * 1000,
          name: result.idToken.payload.name
        });

      },
      onFailure: (error) => {
        const { message } = error
        resolve({
          status: COGNITO_STATUS.failed,
          message: message
        });
      }
    });
  })
}
