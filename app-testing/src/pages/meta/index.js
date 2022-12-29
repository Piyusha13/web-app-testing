// import { useEffect } from "react";
// import { mapProfileData } from "../../data/profile";
// import { sendFailureNotification } from "../../services/notification";
// import { getUserDetails } from "../../services/user";
// import { Navigate } from 'react-router-dom';
// import { allRoutes } from "../app/all-routes";
// import { cloneObject } from "../../utils/deep-copy";
// import { checkIsUserLoggedIn } from "../../utils/login-status";

// export const userAccess = {};

// const MetaConfig = (props) => {

//   const checkIsUserVerified = async () => {
//     const userData = await getUserDetails();
//     const mappedData = mapProfileData(userData.response);
//     return !!mappedData.topSection.isUserVerified;
//   };

//   const invalidateVerificationRoutes = () => {
//     const routes = cloneObject(allRoutes).map(item => {
//       if (!item.verificationRequired) {
//         return item;
//       }
//       item.element = <Navigate to="/profile" />;
//       return item;
//     });
//     props.setRoutes(routes);
//   };

//   const validateVerificationRoutes = () => {
//     props.setRoutes(allRoutes);
//   };

//   userAccess.checkUserAccess = async () => {
//     const isUserLoggedIn = checkIsUserLoggedIn();
//     if (isUserLoggedIn) {
//       const isUserVerified = await checkIsUserVerified();
//       if (!isUserVerified) {
//         sendFailureNotification('User not verified', 'Please verify Aadhaar, PAN and Bank details to complete verification process');
//         invalidateVerificationRoutes();
//       } else {
//         validateVerificationRoutes();
//       }
//     }
//   };

//   useEffect(() => {
//     userAccess.checkUserAccess();
//   }, []);
// };


// export default MetaConfig;