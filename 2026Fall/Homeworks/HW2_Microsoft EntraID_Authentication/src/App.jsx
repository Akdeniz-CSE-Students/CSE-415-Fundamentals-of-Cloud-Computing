import { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { useIsAuthenticated, useAccount } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import SignInButton from './components/SignInButton';
import SignOutButton from './components/SignOutButton';
import ProtectedPage from './components/ProtectedPage';

function App() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const account = useAccount();
  const [isLoading, setIsLoading] = useState(true);
  const [redirectAccount, setRedirectAccount] = useState(null);

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        setIsLoading(true);
        const response = await instance.handleRedirectPromise();
        if (response) {
          if (response.account) {
            setRedirectAccount(response.account);
          }
        } else {
          const accounts = instance.getAllAccounts();
          if (accounts.length > 0) {
            setRedirectAccount(accounts[0]);
          }
        }
      } catch (error) {
        console.error('Redirect error:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    handleRedirect();
  }, [instance]);

  // Account'u redirect account veya hook'tan al
  const activeAccount = account || redirectAccount;

  if (isLoading) {
    return (
      <div className="app">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <p>Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>20220808005 - Yahya Efe Kuruçay - Fall 2026 - CSE 415 HW2 - Microsoft Entra ID Authentication</h1>
        <nav className="auth-nav">
          {!isAuthenticated ? (
            <SignInButton />
          ) : (
            <>
              <div className="user-info">
                <p>
                  Hoş geldiniz, <strong>{activeAccount?.idTokenClaims?.given_name || activeAccount?.username || activeAccount?.idTokenClaims?.preferred_username || 'Kullanıcı'}</strong>!
                </p>
              </div>
              <SignOutButton />
            </>
          )}
        </nav>
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <ProtectedPage account={activeAccount} />
        ) : (
          <div className="welcome-section">
            <h2>Hoş Geldiniz</h2>
            <p>Korumalı içeriğe erişmek için lütfen giriş yapın.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

