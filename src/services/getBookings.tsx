import axios from "axios";
import { useBookingContext } from "../context/BookingContext";
import { IBooking } from "../models/IBookings";



export const GetBookings = async (id: string = "65c65652e125e85f5e15b7bf") => { 
  const { setBookings } = useBookingContext();

 

  try {

    const response = await axios.get<IBooking[]>(
      `https://school-restaurant-api.azurewebsites.net/booking/restaurant/${id}`
    );

    setBookings(response.data)
   
  } catch (error) {
   
console.log('error vid hämtning av alla bokningar')
  } 


};
