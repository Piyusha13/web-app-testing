import { CognitoUser as cognitoUser, CognitoUserPool as cognitoUserPool } from 'amazon-cognito-identity-js';

export const createUserPool = () => {
  const poolData = {
    UserPoolId:"ap-south-1_BLKP0hdR7",
    ClientId:"1kbp8ohsndi5opruitth7q2d2v",
  };
  return new cognitoUserPool(poolData); 
  
};

export const createUserInstance = (email) => { 
  const userPool = createUserPool();
  const userData = { Username: email, Pool: userPool };
  return new cognitoUser(userData);
}