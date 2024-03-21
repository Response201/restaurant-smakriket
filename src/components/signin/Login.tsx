import React, { useState } from 'react'
import { useGlobalContext } from '../../context/GlobalContext';
import { useBookingContext } from '../../context/BookingContext';
import { GetBookings } from '../../services/getBookings';

interface Props{
   
    setReservationFlow:(selectedDate:string) => void
  }
  

export const Login = ({setReservationFlow }:Props) => {
    const [id, setId] = useState<string>('')
    const [loginError, setloginError] = useState('')
    const [password, setPassword] = useState<string>('')
    const {bookings,setBookings, setDate, setTime,setNumberOfGuests,  setCustomerId, setReservationId,error, setError } = useBookingContext()
    const {adminLogin, setAdminLogin} = useGlobalContext()
  


  
    
    
    const OnClickSignIn = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if(id && password){
    if(id === import.meta.env.VITE_USERNAME && password === import.meta.env.VITE_PASSWORD){
        setAdminLogin(true)
        setBookings([])
    setId('')
    }else{
      setloginError('Fel username eller lösenord')
    setTimeout(() =>setError(''), 3000)
    }}}
    
 
    const getData = () => {
    GetBookings()
    
      
        };
      
        if (bookings.length === 0 && !error ){
 
          getData();
        }   

    
    const OnClickSearch = (e: React.FormEvent<HTMLFormElement>): void =>  {
      e.preventDefault()

  
    
      if(id ){
        const item = bookings.filter(item => item._id === id)
      if(item.length >= 1){
        setReservationFlow('modify')
        setAdminLogin(true)
        setDate(item[0].date);
        setTime(item[0].time);
        setNumberOfGuests(item[0].numberOfGuests) 
        setCustomerId(item[0].customerId)
        setReservationId(item[0]._id)
   
      }else{
      setError('Reservation hittas inte')
      setTimeout(() =>setError(''), 3000)
      }}
    
      }





  return (
    <form className="signinContainer___signin___form" onSubmit={!adminLogin ? OnClickSignIn : OnClickSearch}>

    <div>
            <label htmlFor="id">  {!adminLogin ? 'Admin:': 'Reservationsnummer:' } </label>
            <input 
              type="text" 
              id="id" 
              name="id" 
              value={id} 
              onChange={(e) => setId(e.target.value)} 
              required 
              minLength={4}
              maxLength={30}
            />
          </div>
          {!adminLogin ?
          <div>
          
        
            <label htmlFor="password">Lösenord:</label>
            <input 
              type="text" 
              id="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              minLength={3}
              maxLength={10}
            />  
          </div>: '' }
    <button type='submit'>{!adminLogin ? 'Logga in' : 'Sök'}</button>
    <p className='signinContainer___signin___form___error'>{!adminLogin ? `${loginError}` :`${error}`}</p>
    
    </form>
  )
}
