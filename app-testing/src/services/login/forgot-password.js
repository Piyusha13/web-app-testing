import { COGNITO_STATUS } from "../login/constants";
import { createUserInstance } from "../login/user-pool";

export const forgotPassword = (email) => {
  const cognitoUserInstance = createUserInstance(email);
  return new Promise(resolve => {
    cognitoUserInstance.forgotPassword({
      onSuccess: (data) => {
        resolve({ status: COGNITO_STATUS.success, ...data });
      },
      onFailure: (error) => {
        resolve({ status: COGNITO_STATUS.failed, message: error.message || 'Failed to send OTP please retry after some time.' });
      }
    });
  });
};

export const resetPassword = (email, verificationCode, newPassword) => {
  const cognitoUserInstance = createUserInstance(email);
  return new Promise(resolve => {
    cognitoUserInstance.confirmPassword(verificationCode, newPassword, {
      onSuccess() {
        resolve({ status: COGNITO_STATUS.success, message: 'Password reset successfully.' });
      },
      onFailure(error) {
        console.log('Password not confirmed!', error);
        resolve({ status: COGNITO_STATUS.failed, message: error.message || 'Password reset failed.' });
      },
    });
  });
}