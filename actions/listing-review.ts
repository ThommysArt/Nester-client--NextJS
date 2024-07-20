import { toast } from "@/components/ui/use-toast"
import { API_URL } from "@/constants/api_urls";

const createListingReview = async (): Promise<ListingReview | null> => {
    try {
        const response = await fetch(`${API_URL}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            const data = await response.json()
            toast({
                title: "Success",
                description: "Listing review created successfully.",
            })
            return data
        } else {
            throw new Error('Failed to create listing review')
        }
    } catch (error) {
        console.error(error)
        toast({
            title: "Server Error",
            description: "Sorry, an error occurred with your request.",
            variant: "destructive"
        })
        return null
    }
}

const updateListingReview = async (review: ListingReview): Promise<ListingReview | null> => {
    try {
        const response = await fetch(`${API_URL}/reviews`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: review.id,
                listingId: review.listingId,
                userId: review.userId,
                rating: review.rating,
                comment: review.comment
            })
        })
        if (response.ok) {
            const data = await response.json()
            toast({
                title: "Success",
                description: "Listing review updated successfully.",
            })
            return data
        } else {
            throw new Error('Failed to update listing review')
        }
    } catch (error) {
        console.error(error)
        toast({
            title: "Server Error",
            description: "Sorry, an error occurred with your request.",
            variant: "destructive"
        })
        return null
    }
}

const deleteListingReview = async (id: number): Promise<void> => {
    try {
        const response = await fetch(`${API_URL}/reviews`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        if (response.ok) {
            toast({
                title: "Success",
                description: "Listing review deleted successfully.",
            })
        } else {
            throw new Error('Failed to delete listing review')
        }
    } catch (error) {
        console.error(error)
        toast({
            title: "Server Error",
            description: "Sorry, an error occurred with your request.",
            variant: "destructive"
        })
    }
}

const getListingReview = async (id: number): Promise<ListingReview | null> => {
    try {
        const response = await fetch(`${API_URL}/reviews/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw new Error('Failed to get listing review')
        }
    } catch (error) {
        console.error(error)
        toast({
            title: "Server Error",
            description: "Sorry, an error occurred with your request.",
            variant: "destructive"
        })
        return null
    }
}

const getListingReviews = async (listingId: number): Promise<ListingReview[] | null> => {
    try {
        const response = await fetch(`${API_URL}/reviews/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ listingId })
        })
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw new Error('Failed to get listing reviews')
        }
    } catch (error) {
        console.error(error)
        toast({
            title: "Server Error",
            description: "Sorry, an error occurred with your request.",
            variant: "destructive"
        })
        return null
    }
}

export { createListingReview, updateListingReview, deleteListingReview, getListingReview, getListingReviews }