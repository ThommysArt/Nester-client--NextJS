import { toast } from '@/components/ui/use-toast'
import { API_URL } from '@/constants/api_urls'

const getAllListingAmenities = async (listingId: number): Promise<Listing[] | null> => {
    try {
        const response = await fetch(`${API_URL}/amenities`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({listingId})
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        toast({
            title: "Server Error",
            description: "Sorry, error occurred with your request.",
            variant: "destructive"
        });
        return null;
    }
}

const getListingAmenity = async (id: number): Promise<Listing|null> => {
    try {
        const response = await fetch(`${API_URL}/amenities/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        toast({
            title: "Server Error",
            description: "Sorry, error occurred with your request.",
            variant: "destructive"
        });
        return null;
    }
}

const createListingAmenity = async (amenity: ListingAmenity): Promise<Listing|null> => {
    try {
        const response = await fetch(`${API_URL}/listings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(amenity)
        });
        const data = await response.json();
        toast({
            title: "Success",
            description: "Listing Amenity created successfully.",
        });
        return data;
    } catch (error) {
        console.log(error);
        toast({
            title: "Server Error",
            description: "Sorry, error occurred with your request.",
            variant: "destructive"
        });
        return null;
    }
}

const updateListingAmenity = async (amenity: ListingAmenity): Promise<Listing|null> => {
    try {
        const response = await fetch(`${API_URL}/listings/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(amenity)
        });
        const data = await response.json();
        toast({
            title: "Success",
            description: "Listing Amenity updated successfully.",
        });
        return data;
    } catch (error) {
        console.log(error);
        toast({
            title: "Server Error",
            description: "Sorry, error occurred with your request.",
            variant: "destructive"
        });
        return null;
    }
}

const deleteListingAmenity = async (id: number): Promise<void> => {
    try {
        await fetch(`${API_URL}/listings/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        });
        toast({
            title: "Success",
            description: "Listing Amenity deleted successfully.",
        });
    } catch (error) {
        console.log(error);
        toast({
            title: "Server Error",
            description: "Sorry, error occurred with your request.",
            variant: "destructive"
        });
    }
}

export { getAllListingAmenities, getListingAmenity, createListingAmenity, deleteListingAmenity, updateListingAmenity };