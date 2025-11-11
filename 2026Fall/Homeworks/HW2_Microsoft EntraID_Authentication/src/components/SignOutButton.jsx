import { useMsal } from '@azure/msal-react';

function SignOutButton() {
  const { instance } = useMsal();

  const handleSignOut = async () => {
    try {
      await instance.logoutRedirect({
        postLogoutRedirectUri: window.location.origin,
      });
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  };

  return (
    <button onClick={handleSignOut} className="sign-out-button">
      Sign Out
    </button>
  );
}

export default SignOutButton;

