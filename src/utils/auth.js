import auth0 from "auth0-js"

export const isBrowser = typeof window !== 'undefined';

const auth0 = isBrowser
  ? new auth0js.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK,
      audience: process.env.AUTH0_AUDIENCE,
      responseType: 'token id_token',
      scope: 'openid profile email'
    })
  : {};