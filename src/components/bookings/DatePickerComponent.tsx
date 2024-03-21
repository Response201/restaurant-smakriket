import { ThemeProvider, createTheme } from '@mui/material';
import { DatePicker  } from '@mui/x-date-pickers/DatePicker';
import moment, { Moment } from 'moment';
import { useBookingContext } from '../../context/BookingContext';


interface Props{
  selectedDate:Moment
  setSelectedDate:(selectedDate:Moment) => void
}

const green:string = 'rgb(33, 54, 16)';

const datePickerSlotProps = {

  day: {
  
    sx: {
      '&.MuiPickersDay-root.Mui-selected': {
        backgroundColor: `${green}`,
   
      },
      ':not(.Mui-selected)': {
        backgroundColor: '#ffff',
        borderColor: `${green}`,
        
      },
      '&:hover': {
        backgroundColor: `${green}`,
        borderColor: ' #000',
        color: '#ffff',
        transition: 'all 0.5s ease',
      },
      '&.Mui-selected': {
        color: '#ffff',
        backgroundColor: `${green}`,
        borderColor: `${green}`,
        '&:hover': {
          color: '#ffff',
          backgroundColor: `${green}`,
          borderColor: `${green}`,
          transition: 'all 0.5s ease',
        },
      },
    },
  },
  



  

 

}; 



const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Roboto, 'Courier New', Courier, monospace",
      fontSize: 16
     
    },
  },

  components: {
    
   
    MuiInputLabel: {
      defaultProps: {
        sx: {
         fontSize:'1.2rem',
          fontFamily: "Roboto, 'Courier New', Courier, monospace",
          backgroundColor:'white',
          padding:'0 5px',
         color:'black'
        },
      },
      
    },
  },
 
});




export const DatePickerComponent = ({selectedDate, setSelectedDate}:Props) => {
  const {setDate} = useBookingContext();
  const handleDateChange = ( value: Moment | null ) => {
    if(value){
  setSelectedDate(value);
setDate(value.format("YYYY-MM-DD"))



}
};





    return (
      <ThemeProvider theme={theme}>
        <DatePicker
        label="Välj en dag"
        openTo="day"
        views={['day']}
        value={selectedDate}
        format="YYYY-MM-DD"
        onChange={handleDateChange}
        minDate={moment(new Date())}
          sx={{
           
          
            width: "270px",
            ".MuiSvgIcon-root":{
              color: "black",
              outlineColor:'transparent',
              
            },

          '& .MuiInputLabel-root': {
            color: 'black',
            
          },
          '& .MuiOutlinedInput-input': {
            color: 'black',
            
           
           
          },
          '& .MuiOutlinedInput-root': {
            'fieldset': {
              borderColor: 'black',
              color: 'black',
              outline:'none',
              border:'1px solid black'
            },
            '&:focus > fieldset': {
              borderColor: 'black',
              color: 'black',
              outline:'none',
              border:'1px solid black'
              
            },
            
          
            '&:hover > fieldset': {
              borderColor: 'black',
              color: 'black',
              outline:'none',
              border:'1px solid black'
            },
            '&:active > fieldset': {
              borderColor: 'black',
              color: 'black',
              outline:'none',
              border:'1px solid black'
            },
            '&.Mui-focused > fieldset': {
              borderColor: 'black',
              color: 'black',
              outline:'none',
              border:'1px solid black'
             
            },
           
          },
        }} 
        slotProps={{
          ...datePickerSlotProps
         
        }}  
        />
      </ThemeProvider>
    );
  };