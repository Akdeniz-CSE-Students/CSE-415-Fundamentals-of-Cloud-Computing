import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';

function SignInButton() {
  const { instance } = useMsal();

  const handleSignIn = async () => {
    try {
      await instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error('Sign-in error:', error);
      alert('Sign-in hatası: ' + error.message);
    }
  };

  return (
    <button onClick={handleSignIn} className="sign-in-button">
      Sign In
    </button>
  );
}

export default SignInButton;

