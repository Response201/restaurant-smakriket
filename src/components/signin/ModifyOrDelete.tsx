


import { useBookingContext } from "../../context/BookingContext";
import { useGlobalContext } from "../../context/GlobalContext";
import { deleteBooking } from "../../services/deleteBooking";


interface Props {
  setReservationFlow: (selectedDate: string) => void;
}

export const ModifyOrDelete = ({ setReservationFlow }: Props) => {
  const { reservationId, setError, error,setBookings } = useBookingContext();
  
  const {setLoading } = useGlobalContext()



  const OnClickChange = (): void => {
    setReservationFlow("modify-date-persons");
  };


  const OnClickDelete = (): void => {
    deleteBooking(reservationId, setError,setLoading);
  };


if(error === 'Reservation borttagen'){
  setError('Reservation borttagen')
 setTimeout(() => {
      setError("");
      setBookings([])
      setReservationFlow('first')
    }, 3000);


}


  return (
    <section className='ModifyOrDeleteContainer'>
      <section className='ModifyOrDeleteContainer___header'>

<p className='ModifyOrDeleteContainer___header___bold'>Reservation:  </p> <p>{reservationId} </p>

      </section>
      <section className='ModifyOrDeleteContainer___btn'> 

      {error !== 'Reservation borttagen' ?<>  <button onClick={OnClickChange}>Ändra</button> <button onClick={OnClickDelete}>Radera</button> </> : <> </> }


</section>


<section className="ModifyOrDeleteContainer___error">
        <p >
          {error}
        </p>
        
      </section>


    </section>
  );
};
