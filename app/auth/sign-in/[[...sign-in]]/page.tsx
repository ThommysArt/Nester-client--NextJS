import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import SignUpForm from '@/app/auth/_components/sign-in-form';
import { GoogleButton } from '@/components/google-button';

export default function SignInPage() {

  return (
    <div className="grid w-full grow items-center px-4 sm:justify-center">
      <Card className="mx-auto w-[360px] md:w-[430px]">
        <CardHeader>
          <CardTitle className="text-xl">Sign In</CardTitle>
          <CardDescription>
            Get back to work. Login to Nester
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <SignUpForm />
            <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
              or
            </p>
            <GoogleButton />
          </div>
          <div className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link href="/auth/sign-up" className="underline text-rose-500">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}