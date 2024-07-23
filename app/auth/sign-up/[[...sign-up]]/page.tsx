
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import GoogleButton from '@/app/auth/_components/google-button';
import SignUpForm from "@/app/auth/_components/sign-up-form";

export default function SignUpPage() {

  return (
    <div className="grid w-full grow items-center px-4 sm:justify-center">
      <Card className="mx-auto max-w-sm md:max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Become a Real Estate giant. Join us on Nester Platform
          </CardDescription>
        </CardHeader>
        <CardContent>      
          <div className="grid gap-4">
            <SignUpForm />
          <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
            or
          </p>
            <GoogleButton/>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/sign-in" className="underline text-rose-500">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
