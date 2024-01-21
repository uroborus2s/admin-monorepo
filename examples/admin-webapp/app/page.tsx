'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import UserAuthForm from "@/components/forms/user-auth-form";

const Page: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push('/auth/login');
  } else {
    router.push('/dashboard');
  }

  return null;
};

export default Page;
