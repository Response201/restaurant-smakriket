import { useState, MouseEvent, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment, { Moment } from "moment";
import { DatePickerComponent } from "./DatePickerComponent";
import { DropDown } from "./DropDown";
import { GetBookings } from "../../services/getBookings";
import AvailableTables from "../availableTables";
import { useBookingContext } from "../../context/BookingContext";

interface Props {
  setReservationFlow: (selectedDate: string) => void;
}

interface FindBooking {
  time: string;
}

const ReserveTable = ({ setReservationFlow }: Props) => {
  const { bookings, setBookings, setDate, setTime, setNumberOfGuests, error, date, setError, numberOfGuests } =
    useBookingContext();

  const [selectedDate, setSelectedDate] = useState<Moment>(moment(date));
  const [persons, setPersons] = useState<number>(1);
  const [findBookings, setFindBookings] = useState<FindBooking[]>([]);
  const [hasCheckedAvailability, setHasCheckedAvailability] = useState(false);
  const [shouldShowButtons, setShouldShowButtons] = useState<boolean>(false);

  useEffect(() => {
    onClickFindTables();
    setError("");
  }, [selectedDate, numberOfGuests, bookings]);

  const getData = async () => {
    await GetBookings();
  };

  if (bookings.length === 0 && !error) {
    getData();
  }

  // /* Find tables */
  const onClickFindTables = () => {
    const newDate = selectedDate.format("YYYY-MM-DD");
    // Kontrollera om både datum och antal gäster är valda
    if (selectedDate && persons) {
      // Kontrollera tillgängligheten för tiderna 18:00 och 21:00 för det valda datumet och antalet gäster
      const isAvailable18 = AvailableTables(bookings, newDate, persons, "18:00");
      const isAvailable21 = AvailableTables(bookings, newDate, persons, "21:00");

      // Uppdatera tillståndet för att indikera om tillgängliga bord hittades för någon av tiderna
      setHasCheckedAvailability(isAvailable18 || isAvailable21);
      // Om minst en av tiderna är tillgänglig
      if (isAvailable18 || isAvailable21) {
        // Skapa en lista för tillgängliga tider
        const availableTimes: FindBooking[] = [];
        // Om tiderna är tillgängliga, lägg till dem i listan
        if (isAvailable18) {
          availableTimes.push({ time: "18:00" });
        }
        if (isAvailable21) {
          availableTimes.push({ time: "21:00" });
        }
        // Uppdatera tillståndet för att visa de tillgängliga tiderna och knapparna
        setFindBookings(availableTimes);
        setShouldShowButtons(true);
        // Uppdatera bokningstillståndet med de senaste bokningarna
        setBookings(bookings);
      } else {
        // Om inga bord är tillgängliga för någon av tiderna
        // Rensa listan med tillgängliga tider och dölj knapparna
        setFindBookings([]);
        setShouldShowButtons(false);
      }
    }
  };

  /* Reserve table */
  const onClickReserveTable = (e: MouseEvent, item: FindBooking) => {
    e.preventDefault();
    setFindBookings([]);
    setReservationFlow("reserveFrom");
    setTime(item.time);
    setDate(selectedDate.format("YYYY-MM-DD"));
    setNumberOfGuests(persons);
  };

  return (
    <section className="reserveContainer">
      <section className="reserveContainer___inputs">
        <section className="dropDownContainer">
          <DropDown setPersons={setPersons} />
        </section>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </LocalizationProvider>
      </section>
      <section className="reserveContainer___meassages">
        {findBookings.length >= 1 && error === "" ? (
          <>
            {findBookings.map((item, i) => {
              return (
                <button
                  key={i}
                  className="reserveContainer___meassages___timeBtn"
                  onClick={(e) => onClickReserveTable(e, item)}
                >
                  {" "}
                  {item.time}{" "}
                </button>
              );
            })}
          </>
        ) : (
          <p> {error} Tyvärr inga tider tillgängliga</p>
        )}
      </section>
    </section>
  );
};

export default ReserveTable;
