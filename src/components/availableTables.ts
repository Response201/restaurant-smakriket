import { IBooking } from "../models/IBookings";

export const AvailableTables = (bookings: IBooking[], date: string, persons: number, time: string) => {
  const tablesToBook = 15;

  // Beräkna det totala antalet bord som behövs för bokningen baserat på antalet gäster
  const totalTablesNeeded = Math.ceil(persons / 6);
  console.log("Antal bord som behövs", totalTablesNeeded);

  // Filtrera bokningarna för det valda datumet och tiden
  const filteredBookings = bookings.filter((booking) => booking.date === date && booking.time === time);
  console.log("Alla bokningar det valda datumet och tid", filteredBookings);

  // Beräkna det totala antalet bord som redan är bokade för den valda tiden
  let totalTablesBooked = 0;
  filteredBookings.forEach((booking) => {
    const numberOfGuests = booking.numberOfGuests;
    // Beräkna antalet bord som behövs för varje bokning baserat på antalet gäster och lägg till det till totalt antal bokade bord
    totalTablesBooked += Math.ceil(numberOfGuests / 6);
  });
  console.log("Totalt antal bord redan bokade:", totalTablesBooked);

  // Beräkna antalet bord som är kvar att boka
  const tablesLeftToBook = tablesToBook - totalTablesBooked;
  console.log("antal bord det finns kvar att boka", tablesLeftToBook);

  // Om det finns tillräckligt med bord kvar att boka
  if (tablesLeftToBook > 0) {
    // Kontrollera om antalet kvarvarande bord är tillräckligt för att täcka det totala behovet av bord
    return tablesLeftToBook >= totalTablesNeeded;
  } else {
    return false; // Om antalet kvarvarande bord är mindre än noll, returnera false
  }
};

export default AvailableTables;
