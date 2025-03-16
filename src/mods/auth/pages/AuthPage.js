import React from 'react';
import {AuthForm} from "../components/AuthForm";

export const AuthPage = () => {
  const handleLogin = event => {
    event.preventDefault();

    console.log('Logging in....');
  };

  return (
    <div>
      <AuthForm
        onSubmit={handleLogin}
      />
    </div>
  );
};
