"use server"
import { signIn } from "@/auth";

const EmailSignUp = async (formData: {name: string, email: string}) => {
    try {
        console.log("[SIGN UP]: started");
       
        await signIn("resend", formData);
        
    } catch (error) {
        console.log("[SIGN UP]: ", error);
    }
}

const EmailSignIn = async (formData: {email: string}) => {
    try {
        console.log("[SIGN IN]: started");
       
        await signIn("resend", formData);
        
    } catch (error) {
        console.log("[SIGN IN]: ", error);
    }
}
export { EmailSignUp, EmailSignIn };