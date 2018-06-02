interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'yGQDnrsd09w4RFIJS8ZDgSHxNEc3piuV',
  domain: 'slumboy.auth0.com',
  callbackURL: 'http://localhost:3000/callback',
};
