import { toast } from '@/components/ui/use-toast'
import { API_URL } from '@/constants/api_urls'

const getAllListings = async (hostId: number): Promise<Listing[] | null> => {
    try {
        const response = await fetch(`${API_URL}/listings`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({hostId})
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

const getListing = async (id: number): Promise<Listing|null> => {
    try {
        const response = await fetch(`${API_URL}/listings/`, {
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

const createListing = async (listing: Listing): Promise<Listing|null> => {
    try {
        const response = await fetch(`${API_URL}/listings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(listing)
        });
        const data = await response.json();
        toast({
            title: "Success",
            description: "Listing created successfully.",
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

const updateListing = async (listing: Listing): Promise<Listing|null> => {
    try {
        const response = await fetch(`${API_URL}/listings/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(listing)
        });
        const data = await response.json();
        toast({
            title: "Success",
            description: "Listing updated successfully.",
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

const deleteListing = async (id: number): Promise<void> => {
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
            description: "Listing deleted successfully.",
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

export {getAllListings, getListing, createListing, deleteListing, updateListing};