import axios from "axios";
import { toast } from "@/components/ui/use-toast"

const createUser = async (): Promise<User | null> => {
    try {
        const response = await axios.post('https://nester-server-expressjs.onrender.com/api/v1/users')
        toast({
            title: "Success",
            description: "User created successfully.",
        })
        return response.data
    } catch (error) {
        console.log(error)
        toast({
            title: "Server Error",
            description: "Sorry, error occured with your request.",
            variant: "destructive"
        })
        return null
    }
}

const getUser = async (id: number): Promise<User | null> => {
    try {
        const response = await axios.get(`https://nester-server-expressjs.onrender.com/api/v1/users/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
        toast({
            title: "Server Error",
            description: "Sorry, error occured with your request.",
            variant: "destructive"
        })
        return null
    }
}

const getAllUsers = async (): Promise<User[] | null> => {
    try {
        const response = await axios.get('https://nester-server-expressjs.onrender.com/api/v1/users')
        return response.data
    } catch (error) {
        console.log(error)
        toast({
            title: "Server Error",
            description: "Sorry, error occured with your request.",
            variant: "destructive"
        })
        return null
    }
}

const updateUser = async (id: number, user: User): Promise<User | null> => {
    try {
        const response = await axios.put(`https://nester-server-expressjs.onrender.com/api/v1/users/${id}`, user)
        toast({
            title: "Success",
            description: "User updated successfully.",
        })
        return response.data
    } catch (error) {
        console.log(error)
        toast({
            title: "Server Error",
            description: "Sorry, error occured with your request.",
            variant: "destructive"
        })
        return null
    }
}

const deleteUser = async (id: number): Promise<void> => {
    try {
        await axios.delete(`https://nester-server-expressjs.onrender.com/api/v1/users/${id}`)
        toast({
            title: "Success",
            description: "User deleted successfully.",
        })
    } catch (error) {
        console.log(error)
        toast({
            title: "Server Error",
            description: "Sorry, error occured with your request.",
            variant: "destructive"
        })
    }
}

export { createUser, getUser, getAllUsers, updateUser, deleteUser };