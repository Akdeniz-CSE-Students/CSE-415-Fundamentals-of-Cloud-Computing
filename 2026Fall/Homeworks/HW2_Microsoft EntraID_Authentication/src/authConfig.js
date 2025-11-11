import { PublicClientApplication } from '@azure/msal-browser';

let tenantDomain = import.meta.env.VITE_TENANT_DOMAIN || 'efekurucayHWcustomer';
// Eğer tenant domain zaten .onmicrosoft.com içeriyorsa, sadece domain adını al
if (tenantDomain.includes('.onmicrosoft.com')) {
  tenantDomain = tenantDomain.replace('.onmicrosoft.com', '');
}

const userFlow = import.meta.env.VITE_USER_FLOW || 'efe_signup_signin';
const clientId = import.meta.env.VITE_CLIENT_ID || '<Uygulama (Client) ID>';

if (clientId === '<Uygulama (Client) ID>') {
  console.warn('⚠️ Client ID ayarlanmamış! Lütfen .env dosyasına VITE_CLIENT_ID ekleyin.');
}

// Microsoft Entra External ID (CIAM) için base authority (user flow olmadan)
const baseAuthority = `https://${tenantDomain}.ciamlogin.com/${tenantDomain}.onmicrosoft.com`;

export const msalConfig = {
  auth: {
    clientId: clientId,
    authority: baseAuthority,
    redirectUri: window.location.origin + '/auth/redirect',
    knownAuthorities: [`${tenantDomain}.ciamlogin.com`],
    validateAuthority: false,
    // Endpoint'leri manuel olarak belirt - base authority kullan
    cloudDiscoveryMetadata: `{"metadata":[{"preferred_network":"${tenantDomain}.ciamlogin.com","preferred_cache":"${tenantDomain}.ciamlogin.com","aliases":["${tenantDomain}.ciamlogin.com"]}]}`,
    authorityMetadata: JSON.stringify({
      authorization_endpoint: `${baseAuthority}/oauth2/v2.0/authorize`,
      token_endpoint: `${baseAuthority}/oauth2/v2.0/token`,
      issuer: baseAuthority,
      end_session_endpoint: `${baseAuthority}/oauth2/v2.0/logout`,
    }),
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
};

// User flow'u query parameter olarak ekle
export const loginRequest = {
  scopes: ['openid', 'profile', 'offline_access'],
  authority: baseAuthority,
  extraQueryParameters: {
    p: userFlow,
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);

await msalInstance.initialize();
