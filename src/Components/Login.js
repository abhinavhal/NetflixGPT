import React, { useRef, useState } from "react";
// import Header from "./Header";
import { checkValidData } from "../utils/validate";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
//   const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);

    if (message) return;

    //signin signUp form
//     if (!isSignInForm) {
//       //signUp logic
//       createUserWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           // Signed in
//           const user = userCredential.user;
//           updateProfile(user, {
//             displayName: name.current.value,
//             photoURL: USER_AVATAR,
//           })
//             .then(() => {
//               // Profile updated!
//               // ...
//               const { uid, email, displayName, photoURL } = auth.currentUser;
//               dispatch(
//                 addUser({
//                   uid: uid,
//                   email: email,
//                   displayName: displayName,
//                   photoURL: photoURL,
//                 })
//               );
//             })
//             .catch((error) => {
//               // An error occurred
//               // ...
//               setErrorMessage(error.message);
//             });
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setErrorMessage(errorCode + "-" + errorMessage);
//         });
//     } else {
//       //signin logicc
//       signInWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           // Signed in
//           const user = userCredential.user;
//           console.log(user);
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setErrorMessage(errorCode + "-" + errorMessage);
//         });
//     }
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white rounded bg-black bg-opacity-75"
      >
        <h1 className="font-bold text-2xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full text-black bg-gray-200 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter email"
          className="p-4 my-4 w-full text-black bg-gray-200 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-200 text-black rounded"
        />
        {!isSignInForm && (
          <input
            type="date"
            placeholder=""
            className="p-4 text-black my-4 w-full bg-gray-200 rounded"
          />
        )}
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-600 w-full rounded"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
