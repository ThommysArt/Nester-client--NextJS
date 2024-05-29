type Listing = {
    title: string,
    date: Date,
    description: string,
    price: number,
    location: string,
    hostId: number
}

type User = {
    id: number,
    authCode: string,
    createdAt: Date,
}

type Host = {
    id: number,
    userId: number,
}

type ListingAmenity = {
    id: number,
    name: string,
    description: string,
    listingId: number
}

type ListingImage = {
    id: number,
    url: string,
    listingId: number
}

type ListingReview = {
    id: number,
    listingId: number,
    userId: number,
    rating: number,
    comment: string,
}

type Payment = {
    id: number,
    listingId: number,
    userId: number,
    amount?: number,
    date: Date,
    method: "stripe" | "paypal" | "notch-pay"
}

type Booking = {
    id: number,
    listingId: number,
    paymnetId: number,
    chechInDate: Date,
    checkOutDate: Date,
    userId: number,
    guests: number,
    price:  number,
    status: "pending" | "approved" | "declined" | "cancelled"
}