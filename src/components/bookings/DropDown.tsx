import { useState } from "react";
import { useBookingContext } from "../../context/BookingContext";

interface Props {
  setPersons: (persons: number) => void;
}

export const DropDown = ({ setPersons }: Props) => {
  const { numberOfGuests, setNumberOfGuests } = useBookingContext();
  const [guestNumber, setGuestNumber] = useState(numberOfGuests);
  const person = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const selectedPerson = parseInt(e.target.value);
    setPersons(selectedPerson);
    setNumberOfGuests(selectedPerson);
    setGuestNumber(selectedPerson);

    console.log("test", selectedPerson);
  };

  return (
    <section className="dropDownContainer">
      <label htmlFor="persons">Antal personer</label>
      <select id="persons" onChange={handleChange} value={guestNumber}>
        {person.map((person) => (
          <option className="number" value={person} key={person}>
            {person}
          </option>
        ))}
      </select>
    </section>
  );
};
