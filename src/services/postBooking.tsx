import axios from "axios";


export const postBooking = async (bookingData: any) => {

  try {
 
    const response = await axios.post<any>(
      "https://school-restaurant-api.azurewebsites.net/booking/create",
      bookingData
    );

    return response.data;
  } catch (error) {
    console.error("Error posting booking:", error);
    throw error;
  }
};

/*---------------------------------------------------*/
