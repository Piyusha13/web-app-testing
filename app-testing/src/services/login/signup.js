import { CognitoUserAttribute as cognitoUserAttribute } from 'amazon-cognito-identity-js';
import { COGNITO_STATUS } from '../login/constants';
import { createUserInstance, createUserPool } from './user-pool';

const createUserAttribute = (key, value) => {
  return new cognitoUserAttribute({
    Name: key,
    Value: value,
  });
};

export const signup = async (email, password, name, referral) => {
    
  const userPool = createUserPool();
  const attributeList = [
    createUserAttribute('email', email),
    createUserAttribute('name', name),
    createUserAttribute('custom:referral', referral)
  ];

  return new Promise(resolve => {
    userPool.signUp(email, password, attributeList, null, (error, result) => {
      if (error) {
        resolve({ status: COGNITO_STATUS.failed, message: error.message });
      }

      if (result && result.user) {
        const cognitoUser = result.user;
        resolve({ ...cognitoUser, status: COGNITO_STATUS.success, message: result.message });
      }

      if (result && result.message) {
        resolve({ status: COGNITO_STATUS.failed, message: result.message });
      }

    });
  });
};

export const verifyEmail = async (email, otp) => {
  const cognitoUserInstance = createUserInstance(email);
  return new Promise(resolve => {
    cognitoUserInstance.confirmRegistration(otp, true, (error, result) => {
      if (error) {
        resolve({ status: COGNITO_STATUS.failed, message: error.message });
      }

      if (result) {
        resolve({ ...result, status: COGNITO_STATUS.success, message: result.message });
      }
    });
  });
};

export const resendVerificationCode = async (email) => {
  const cognitoUserInstance = createUserInstance(email);
  return new Promise(resolve => {
    cognitoUserInstance.resendConfirmationCode((error, result) => {
      if (error) {
        resolve({ status: COGNITO_STATUS.failed, message: error.message });
      }
      if (result) {
        resolve({ ...result, status: COGNITO_STATUS.success, message: result.message });
      }
    });
  });
}
