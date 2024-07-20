import { toast } from "@/components/ui/use-toast"
import { API_URL } from "@/constants/api_urls";

const createListingImage = async (listing_image: ListingImage): Promise<ListingImage | null> => {
    try {
        const response = await fetch(API_URL + "/images", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(listing_image),
        });
        toast({
            title: "Success",
            description: "Added listing image successfully"
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

const getListingImages = async (listingId: number): Promise<ListingImage[] | null> => {
    try {
        const response = await fetch(`${API_URL}/images/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({listingId})
        });
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

const getListingImage = async (id: number): Promise<ListingImage | null> => {
    try {
        const response = await fetch(`${API_URL}/images`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        });
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

const updateListingImage = async (id: number): Promise<ListingImage | null> => {
    try {
        const response = await fetch(`${API_URL}/images`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        });
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

const deleteListingImage = async (id: number): Promise<ListingImage | null> => {
    try {
        const response = await fetch(`${API_URL}/images`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        });
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

export { createListingImage, getListingImage, getListingImages, updateListingImage, deleteListingImage };