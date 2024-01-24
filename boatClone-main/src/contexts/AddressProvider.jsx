import { createContext, useContext, useState } from "react"

export const AddressContext = createContext();

export function AddressProvider({children}){
    const [address, setAddress] = useState([
        {
          id: 1,
          name: "Nitin",
          house: "269",
          street: "Green Avenue",
          city: "Bathinda",
          pincode: "151001",
          mobile: "1234567890",
        },
      ]);
      const [name, setName] = useState("");
      const [house, setHouse] = useState("");
      const [street, setStreet] = useState("");
      const [city, setCity] = useState("");
      const [pincode, setPincode] = useState("");
      const [mobile, setMobile] = useState("");

      function handleName(event) {
        setName(event.target.value);
      }
      function handleHouse(event) {
        setHouse(event.target.value);
      }
      function handleStreet(event) {
        setStreet(event.target.value);
      }
      function handleCity(event) {
        setCity(event.target.value);
      }
      function handlePincode(event) {
        setPincode(event.target.value);
      }
      function handleMobile(event) {
        setMobile(event.target.value);
      }

      const deleteAddress = (id) => {
        setAddress(address.filter((item) => item.id !== id));
      };

      function addAddress() {
        const newAddress = {
          name,
          house,
          street,
          city,
          pincode,
          mobile,
        };
        setAddress([...address, newAddress]);
      }
    return(
        <AddressContext.Provider value={{address, setAddress, name, setName,house, setHouse, street,setStreet,city, setCity,pincode, setPincode, mobile,setMobile, deleteAddress, addAddress, handleName, handleHouse, handleStreet, handleCity, handlePincode, handleMobile}}>{children}</AddressContext.Provider>
    )
}

export const useAddress = () => useContext(AddressContext);