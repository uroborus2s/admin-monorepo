import CredentialProvider from 'next-auth/providers/credentials';
import { NextAuthConfig } from 'next-auth';

export const authOptions: NextAuthConfig = {
  providers: [
    CredentialProvider({
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'example@mail.com',
        },
      },
      async authorize(credentials) {
        const user = {
          id: '1',
          name: '测试用户',
          email: credentials?.email,
        };
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        }
        // If you return null then an error will be displayed advising the user to check their details.
        return null;

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      },
    }),
  ],
  pages: {
    signIn: '/', // sigin page
  },
};
