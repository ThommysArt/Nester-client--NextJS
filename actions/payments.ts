import { toast } from '@/components/ui/use-toast'
import { API_URL } from '@/constants/api_urls'

const getAllUserPayments = async (userId: number): Promise<Payment[] | null> => {
    try {
        const response = await fetch(`${API_URL}/payments/by-user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId})
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

const getAllListingPayments = async (listingId: number): Promise<Payment[] | null> => {
    try {
        const response = await fetch(`${API_URL}/payments/by-listing`, {
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

const getPayment = async (id: number): Promise<Payment|null> => {
    try {
        const response = await fetch(`${API_URL}/payments/`, {
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

const createPayment = async (Payment: Payment): Promise<Payment|null> => {
    try {
        const response = await fetch(`${API_URL}/payments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Payment)
        });
        const data = await response.json();
        toast({
            title: "Success",
            description: "Payment created successfully.",
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

const updatePayment = async (Payment: Payment): Promise<Payment|null> => {
    try {
        const response = await fetch(`${API_URL}/payments/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Payment)
        });
        const data = await response.json();
        toast({
            title: "Success",
            description: "Payment updated successfully.",
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

const deletePayment = async (id: number): Promise<void> => {
    try {
        await fetch(`${API_URL}/payments/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        });
        toast({
            title: "Success",
            description: "Payment deleted successfully.",
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

export {getAllUserPayments, getAllListingPayments, getPayment, createPayment, deletePayment, updatePayment};