

import {  Dispatch, SetStateAction } from "react";
import axios from 'axios';
import { UpdateBooking } from "../models/UpdateBooking";






export const updateReservation = async(id:string, bookingData:UpdateBooking, setError:Dispatch<SetStateAction<string>>, setLoading:Dispatch<SetStateAction<boolean>>) => {


  
  
    try {
   setLoading(true)
   const res = await axios.put<UpdateBooking>(`https://school-restaurant-api.azurewebsites.net/booking/update/${id}`, bookingData)
   setError('Reservation uppdaterad')
  
    return res.data
     
    } catch (error) {
     setError('något gick fel')
  
    } finally{
        setLoading(false)
        setTimeout(() => {
            setError('')
             }, 3000);

    }
}
