import { toast } from '@/components/ui/use-toast'
import axios from 'axios'

const getAllListings = async () : Promise<Listing[] | null> => {
    try {
        const response = await axios.get('https://nester-server-expressjs.onrender.com/api/v1/listings')
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

const getListing = async (id: number): Promise<Listing|null> => {
    try {
        const response = await axios.get(`https://nester-server-expressjs.onrender.com/api/v1/listings/${id}`)
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

const createListing = async (listing: Listing): Promise<Listing|null> => {
    try {
        const response = await axios.post('https://nester-server-expressjs.onrender.com/api/v1/listings', listing)
        toast({
            title: "Success",
            description: "Listing created successfully.",
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

const updateListing = async (id: number, listing: Listing): Promise<Listing|null> => {
    try {
        const response = await axios.put(`https://nester-server-expressjs.onrender.com/api/v1/listings/${id}`, listing)
        toast({
            title: "Success",
            description: "Listing updated successfully.",
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

const deleteListing = async (id: number): Promise<void> => {
    try {
        await axios.delete(`https://nester-server-expressjs.onrender.com/api/v1/listings/${id}`)
        toast({
            title: "Success",
            description: "Listing deleted successfully.",
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

export {getAllListings, getListing, createListing, deleteListing, updateListing};