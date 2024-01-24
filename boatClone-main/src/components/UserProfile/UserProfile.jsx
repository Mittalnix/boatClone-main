import { useState } from "react";
import { useAddress } from "../../contexts/AddressProvider";
import { useAuth } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

import "./UserProfile.css";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

export function UserProfile() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    address,
    setAddress,
    name,
    handleName,
    house,
    handleHouse,
    street,
    handleStreet,
    city,
    handleCity,
    pin,
    handlePin,
    mobile,
    handleMobile,
    deleteAddress,
    addAddress,
  } = useAddress();
  const [isProfileChecked, setIsProfileChecked] = useState(true);
  const { handleLogout } = useAuth();
  const { user } =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : { user: null };
  const { firstName, lastName, email } = user;

  const profileNavClickhandler = () => {
    setIsProfileChecked(true);
  };

  const addressNavClickhandler = () => {
    setIsProfileChecked(false);
  };

  return (
    <>
      <div className="user-container">
        <div className="user-nav">
          <nav
            onClick={profileNavClickhandler}
            className={`${isProfileChecked ? "nav-btn" : ""} `}
          >
            <p>Profile</p>
          </nav>
          <nav
            onClick={addressNavClickhandler}
            className={`${!isProfileChecked ? "nav-btn" : ""} `}
          >
            <p>Address</p>
          </nav>
        </div>
        {isProfileChecked ? (
          <div className="profile-details">
            <h3>Profile Details</h3>
            <div className="profile-name-email">
              <p>
                <span>Name:</span> {firstName} {lastName}
              </p>
              <p>
                <span>Email:</span> {email}
              </p>
            </div>
            <div className="profile-button">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        ) : (
          <>
            <div className="address-details">
              <h3>Address Details</h3>
              {address.length > 0 &&
                address?.map((add, index) => {
                  const { name, house, street, city, pincode, mobile } = add;
                  return (
                    <div key={index} className="user-address-details">
                      <h4>{name}</h4>
                      <p>
                        {house}, {street}
                      </p>
                      <p>
                        {city}, {pincode}(Pincode)
                      </p>
                      <p>Phone No: {mobile}</p>
                      <hr/>
                    </div>
                  );
                })}

              <h3 className="add-address" onClick={onOpen}>
                + Add New Address
              </h3>
            </div>
          </>
        )}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                addAddress();
              }}
            >
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input
                  placeholder="First name"
                  value={name}
                  id="name"
                  type="text"
                  onChange={handleName}
                />
                <FormLabel>House</FormLabel>
                <Input
                  placeholder="House"
                  value={house}
                  id="name"
                  type="text"
                  onChange={handleHouse}
                />
                <FormLabel>Street</FormLabel>
                <Input
                  placeholder="Street"
                  value={street}
                  id="name"
                  type="text"
                  onChange={handleStreet}
                />
                <FormLabel>City</FormLabel>
                <Input
                  placeholder="City"
                  value={city}
                  id="name"
                  type="text"
                  onChange={handleCity}
                />
                <FormLabel>Pincode</FormLabel>
                <Input
                  placeholder="Pincode"
                  value={pin}
                  id="name"
                  type="number"
                  onChange={handlePin}
                />
                <FormLabel>Mobile</FormLabel>
                <Input
                  placeholder="Mobile"
                  value={mobile}
                  id="name"
                  type="number"
                  onChange={handleMobile}
                />
              </FormControl>
              <Button type="submit" onClick={onClose}>
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
