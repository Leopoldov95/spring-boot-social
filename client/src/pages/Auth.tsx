import React from "react";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";

const Auth = () => {
  const [signIn, setSignIn] = React.useState(false);

  return (
    <div className="flex flex-col gap-5 pt-4">
      {signIn ? (
        <h1 className="text-colorPrimary text-4xl">Sign In</h1>
      ) : (
        <h1 className="text-colorPrimary text-4xl">Sign Up</h1>
      )}

      {signIn ? <SignIn /> : <SignUp />}
      <div>
        {!signIn ? (
          <p>
            Already have an account?{" "}
            <span
              className="cursor-pointer text-colorPrimary font-bold"
              onClick={() => setSignIn(!signIn)}
            >
              Sign In
            </span>
          </p>
        ) : (
          <p>
            Want to create an account?{" "}
            <span
              className="cursor-pointer text-colorPrimary font-bold"
              onClick={() => setSignIn(!signIn)}
            >
              Sign Up
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
