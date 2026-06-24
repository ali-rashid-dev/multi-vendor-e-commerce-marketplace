"use client";

import { SignUpView } from '@/modules/auth/view/sign-up-view';
import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SignUpPage = () => {
  const trpc = useTRPC();
  const router = useRouter();
  const sessionQuery = useQuery(trpc.auth.session.queryOptions());

  useEffect(() => {
    if (sessionQuery.isSuccess && sessionQuery.data?.user) {
      router.push('/');
    }
  }, [sessionQuery.isSuccess, sessionQuery.data, router]);

  return <SignUpView />;
};

export default SignUpPage;
