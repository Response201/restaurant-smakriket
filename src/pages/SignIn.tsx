import { useState } from 'react';
import returant from '../assets/homePageImage.png';
import { BookingProvider, useBookingContext} from '../context/BookingContext';
import { Login } from '../components/signin/Login';
import { ReservationChangesDone } from '../components/signin/ReservationChangesDone';
import ReserveTable from '../components/bookings/ReserveTable';
import { ModifyOrDelete } from '../components/signin/ModifyOrDelete';
import { useGlobalContext } from '../context/GlobalContext';
import { LoadingAnimation } from '../components/LoadingAnimation';





export const SignIn = () => {
const [reservationFlow, setReservationFlow] = useState('first')
const {setError } = useBookingContext()
const { loading } = useGlobalContext()

setError('')



  return (
    <BookingProvider>
  <article className="signinContainer">

<img  src={returant} alt="resturant" className="signinContainer___backgroundImg" />
<div className="signinContainer___overLay" ></div>
<section className="signinContainer___signin">
{loading &&  < LoadingAnimation />}
{!loading && reservationFlow === 'first' && <Login setReservationFlow={setReservationFlow}   />   }
{!loading && reservationFlow === 'modify' && <ModifyOrDelete setReservationFlow={setReservationFlow}/>   }
{!loading && reservationFlow === 'modify-date-persons' && <ReserveTable setReservationFlow={setReservationFlow}  />   }



{!loading && reservationFlow === 'reserveFrom' && <ReservationChangesDone setReservationFlow={setReservationFlow}/>  }




</section>


  </article>
  </BookingProvider>
  
  )
  ;
};
