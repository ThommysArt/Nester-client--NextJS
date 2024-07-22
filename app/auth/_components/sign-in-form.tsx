"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { EmailSignIn } from '@/actions/auth';

const emailFormSchema = z.object({
  email: z.string().min(3, { message: "Email field has to be filled." }).email("This is not a valid email.")
});

type EmailFormSchema = z.infer<typeof emailFormSchema>;

const SignUpForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<EmailFormSchema>({
        resolver: zodResolver(emailFormSchema),
        defaultValues: {
        email: "",
        },
    });

    const onSubmit: SubmitHandler<EmailFormSchema> = async (data) => {
        try {
            await EmailSignIn({email: data.email})
            toast({
                title: "Signed In",
                description: "Successfully signed in to Nester"
            });
            console.log("[SIGN IN]: successful")
        } catch (error) {
            toast({
                title: "Error",
                description: "An error occurred during sign in. Please try again.",
                variant: "destructive"
            });
            console.log("[SIGN IN]: Failed", error)
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
                required
                />
                {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
            </div>
            <Button type="submit" className="w-full mt-4">
                Continue with Email
            </Button>
        </form>
    );
}

export default SignUpForm;
