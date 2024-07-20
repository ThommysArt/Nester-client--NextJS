import { toast } from '@/components/ui/use-toast'
import { API_URL } from '@/constants/api_urls'


const getAllBookings = async (): Promise<Booking[] | null> => {
    try {
        const response = await fetch(`${API_URL}/bookings/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
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

const getBooking = async (id: number): Promise<Booking|null> => {
    try {
        const response = await fetch(`${API_URL}/bookings/`, {
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

const createBooking = async (Booking: Booking): Promise<Booking|null> => {
    try {
        const response = await fetch(`${API_URL}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Booking)
        });
        const data = await response.json();
        toast({
            title: "Success",
            description: "Booking created successfully.",
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

const updateBooking = async (Booking: Booking): Promise<Booking|null> => {
    try {
        const response = await fetch(`${API_URL}/bookings/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Booking)
        });
        const data = await response.json();
        toast({
            title: "Success",
            description: "Booking updated successfully.",
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

const deleteBooking = async (id: number): Promise<void> => {
    try {
        await fetch(`${API_URL}/bookings/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        });
        toast({
            title: "Success",
            description: "Booking deleted successfully.",
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

export { getAllBookings, getBooking, createBooking, deleteBooking, updateBooking };