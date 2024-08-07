import { toast } from "@/components/ui/use-toast"
import { API_URL } from "@/constants/api_urls";

const createUser = async (): Promise<User | null> => {
    try {
        const response = await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        toast({
            title: "Success",
            description: "User created successfully.",
        })
        return response.json()
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

const getUser = async (userId: string): Promise<User | null> => {
    try {
        const response = await fetch(`${API_URL}/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId}),
        })
        return response.json()
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
        const response = await fetch(`${API_URL}/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return response.json()
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

const updateUser = async (user: User): Promise<User | null> => {
    try {
        const response = await fetch(`${API_URL}/users/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        })
        toast({
            title: "Success",
            description: "User updated successfully.",
        })
        return response.json()
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
        const deletedUser = await fetch(API_URL + `/users/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id}),
        })
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