import { toast } from "@/components/ui/use-toast"
import { API_URL } from "@/constants/api_urls";

const createHost = async (authCode: string): Promise<Host | null> => {
    try {
        const response = await fetch(`${API_URL}/hosts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                authCode: authCode,
            })
        })
        toast({
            title: "Success",
            description: "Host created successfully.",
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

const getHost = async (id: number): Promise<Host | null> => {
    try {
        const response = await fetch(`${API_URL}/hosts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id})
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

const getAllHost = async (): Promise<Host | null> => {
    try {
        const response = await fetch(`${API_URL}/hosts/all`, {
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

const updateHost = async (host: Host): Promise<User | null> => {
    try {
        const response = await fetch(`${API_URL}/hosts`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(host)
        })
        toast({
            title: "Success",
            description: "Host updated successfully.",
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

const deleteHost = async (id: number): Promise<User | null> => {
    try {
        const response = await fetch(`${API_URL}/hosts`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        })
        toast({
            title: "Success",
            description: "Host deleted successfully.",
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

export { createHost, getHost, getAllHost, updateHost, deleteHost };