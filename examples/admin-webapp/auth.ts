import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth-options';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authOptions);
