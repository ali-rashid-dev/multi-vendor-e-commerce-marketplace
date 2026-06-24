
"use client";

import { SignInView } from '@/modules/auth/view/sign-in-view';
import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SignInPage = () => {
  const trpc = useTRPC();
  const router = useRouter();
  const sessionQuery = useQuery(trpc.auth.session.queryOptions());

  useEffect(() => {
    if (sessionQuery.isSuccess && sessionQuery.data?.user) {
      router.push('/');
    }
  }, [sessionQuery.isSuccess, sessionQuery.data, router]);

  return <SignInView />;
};

export default SignInPage;
