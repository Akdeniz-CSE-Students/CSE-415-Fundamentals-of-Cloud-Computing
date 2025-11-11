import { useAccount } from '@azure/msal-react';

function ProtectedPage({ account: propAccount }) {
  const hookAccount = useAccount();
  const account = propAccount || hookAccount;
  
  // Email'i farklı kaynaklardan al
  const email = account?.username || 
                account?.preferred_username || 
                account?.idTokenClaims?.email || 
                account?.idTokenClaims?.preferred_username || 
                account?.idTokenClaims?.emails?.[0] || 
                'N/A';
  
  // Ad ve soyad bilgilerini al
  const firstName = account?.idTokenClaims?.given_name || 
                    (account?.name && account.name !== 'unknown' ? account.name : null) ||
                    'N/A';
  
  const lastName = account?.idTokenClaims?.family_name || 'N/A';
  
  const fullName = firstName !== 'N/A' && lastName !== 'N/A' 
    ? `${firstName} ${lastName}` 
    : firstName !== 'N/A' 
      ? firstName 
      : email !== 'N/A' 
        ? email.split('@')[0] 
        : 'N/A';
  
  return (
    <div className="protected-page">
      <div className="profile-info">
        <h3>Kullanıcı Bilgileri</h3>
        <div className="info-item">
          <strong>Email:</strong> {email}
        </div>
        <div className="info-item">
          <strong>Ad:</strong> {firstName}
        </div>
        <div className="info-item">
          <strong>Soyad:</strong> {lastName}
        </div>
        <div className="info-item">
          <strong>Tam Ad:</strong> {fullName}
        </div>
        <div className="info-item">
          <strong>Kullanıcı ID:</strong> {account?.localAccountId || account?.homeAccountId || 'N/A'}
        </div>
      </div>
    </div>
  );
}

export default ProtectedPage;

