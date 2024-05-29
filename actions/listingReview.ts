import axios from "axios";
import { toast } from "@/components/ui/use-toast"

const createListingReview = async (): Promise<ListingReview | null> => {
    try {
        const response = await axios.post('https://nester-server-expressjs.onrender.com/api/v1/reviews')
        toast({
            title: "Success",
            description: "Listing review created successfully.",
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

const updateListingReview = async (id: number, review: ListingReview): Promise<ListingReview | null> => {
    try {
        const response = await axios.put(`https://nester-server-expressjs.onrender.com/api/v1/reviews/${id}`, review)
        toast({
            title: "Success",
            description: "Listing review updated successfully.",
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

const deleteListingReview = async (id: number): Promise<void> => {
    try {
        await axios.delete(`https://nester-server-expressjs.onrender.com/api/v1/reviews/${id}`)
        toast({
            title: "Success",
            description: "Listing review deleted successfully.",
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

const getListingReview = async (id: number): Promise<ListingReview | null> => {
    try {
        const response = await axios.get(`https://nester-server-expressjs.onrender.com/api/v1/reviews/id=${id}`)
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

const getListingReviews = async (listingId: number): Promise<ListingReview[] | null> => {
    try {
        const response = await axios.get(`https://nester-server-expressjs.onrender.com/api/v1/reviews/id=${listingId}`)
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

const getListingReviewById = async (listingId: number): Promise<ListingReview[] | null> => {
    try {
        const response = await axios.get(`https://nester-server-expressjs.onrender.com/api/v1/reviews/by-listing/${listingId}`)
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

export { createListingReview, updateListingReview, deleteListingReview, getListingReview, getListingReviews, getListingReviewById }