import type { AuthOptions, Session, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { login } from '../utils/login';
import { getProfile } from '../utils/tokenFn';

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',

      credentials: {
        email: { label: 'Email', type: 'email', required: true },
        password: {
          label: 'Password',
          type: 'password',
          required: true
        }
      },
      async authorize(credentials, req) {
        try {
          if (!credentials) {
            return null;
          }
          const { email, password } = credentials;

          const token = await login({ email, password });

          if (!token) {
            return null;
          }

          const profile = await getProfile(token);
          if (!profile) {
            return null;
          }

          const user = JSON.parse(Object.keys(req.query || {})[0]);
          return user as unknown as User;
        } catch (e) {
          throw new Error((e as any)?.message);
        }
      }
    })
  ],
  session: {
    maxAge: 60 * 60 * 24 * 29
  },
  callbacks: {
    async session({ session }) {
      const token = (session.user?.name as any).token;
      const fetchedUser = await getProfile(token);
      const user = {
        profile: fetchedUser,
        ...fetchedUser.userId,
        token: token
      };
      const newSession = {
        ...session,
        user
      };
      return newSession as Session;
    }
  },
  pages: {
    signIn: '/forms'
    // signOut: "/auth/logout",
    // error: "/auth/error",
  }
};
