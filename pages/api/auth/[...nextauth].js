import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios from 'axios';

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        uid: { label: "uid", type: "text" },
      },
      async authorize(credentials) {
        try {
          const user = await axios.post(process.env.CREATE_SESSION_URL, credentials);
    
          if (user) {
            // console.log(user.data);
            return user.data;
          } else {
            return null;
          }
        } catch(e) {
          throw new Error("There was an error on user authentication");  
        }
      },
    })    
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        return {
          accessToken: user.discord_uid,
          user
        }
      }

      return token;
    },
    async session (session, token) {
      if (token) {
        session.accessToken = token.accessToken;
        session.user = {
          avatar: token.user.avatar_url,
          discord_tag: token.user.discord_tag,
          name: token.user.name,
          onboarding_complete: token.user.onboarding_complete,
        }
      }

      return session;
    }
  },
  session: { 
    jwt: true,
  },
  jwt: {
    secret: process.env.AUTH_SECRET,    
  }  
}

export default (req, res) => NextAuth(req, res, options);
