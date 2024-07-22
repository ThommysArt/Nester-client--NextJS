"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signIn } from '@/auth';
import { toast } from '@/components/ui/use-toast';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { EmailSignUp } from '@/actions/auth';

const emailFormSchema = z.object({
  firstName: z.string().min(2, { message: "Fill in your First Name" }),
  lastName: z.string().min(2, { message: "Fill in your Last Name" }),
  email: z.string().min(3, { message: "Email field has to be filled." }).email("This is not a valid email.")
});

type EmailFormSchema = z.infer<typeof emailFormSchema>;

const SignUpForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<EmailFormSchema>({
        resolver: zodResolver(emailFormSchema),
        defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        },
    });

    const onSubmit: SubmitHandler<EmailFormSchema> = async (data) => {
        try {
            await EmailSignUp({name: data.firstName + " " + data.lastName, email: data.email})
            toast({
                title: "Signed Up",
                description: "Successfully signed up to Nester"
            });
            console.log("[SIGN UP]: successful")
        } catch (error) {
            toast({
                title: "Error",
                description: "An error occurred during sign up. Please try again.",
                variant: "destructive"
            });
            console.log("[SIGN UP]: Failed", error)
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
            <Label htmlFor="first-name">First name</Label>
            <Input 
                id="first-name" 
                placeholder="Max" 
                {...register("firstName")} 
                required 
            />
            {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
            </div>
            <div className="grid gap-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input 
                id="last-name" 
                placeholder="Robinson" 
                {...register("lastName")} 
                required 
            />
            {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
            </div>
        </div>
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
            Create an account
        </Button>
        </form>
    );
}

export default SignUpForm;
