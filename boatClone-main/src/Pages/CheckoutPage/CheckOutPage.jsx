import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { Header } from "../../components/Header/Header";
import { useCart } from "../../contexts/CartProvider";
import "./CheckOutPage.css";
import { useAddress } from "../../contexts/AddressProvider";

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
import { useState } from "react";

export function CheckOutPage() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    address,
    name,
    handleName,
    house,
    handleHouse,
    street,
    handleStreet,
    city,
    handleCity,
    pincode,
    handlePincode,
    mobile,
    handleMobile,
    addAddress,
  } = useAddress();
  const [addressSelected, setAddressSelected] = useState(false);
  const { cartItems, cartCount, cartSubtotal, setCartItems } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="checkoutMain">
        <div className="checkoutHeading">
          <h1>Checkout</h1>
        </div>
        <div className="checkoutDetails">
          <div className="addressContainer">
            <div className="addressHeading">Address Details</div>
            <div className="addresses">
              {address.map((item) => (
                <div className="addressSelection">
                  <input type="radio" name="address" id="address" style={{accentColor:"#ED1C24"}} onChange={() => setAddressSelected(true)}/>
                  <div className="details">
                    <p>{item.name}</p>
                    <p>
                      {item.house},{item.street}
                    </p>
                    <p>
                      {item.city}, {item.pincode}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={onOpen}>+ Add New Address</button>
          </div>
          <div className="orderSummary">
            <h1>Order Summary</h1>
            <hr/>
            <div className="itemQuantityHeader">
              <h2>Items</h2>
              <h2>Price</h2>
            </div>
            {cartItems.map((item) => (
              <div className="itemQuantityDetails">
                <div>{item.title}({item.quantity})</div>
                <div>₹{item.price * item.quantity}</div>
              </div>
            ))}
            <hr/>
            <div className="cartQuantity"><div>Total Quantity:</div><div>{cartCount}</div></div>
            <div className="cartPrice"><div>Total Price:</div><div>₹{cartSubtotal}</div></div>
            {addressSelected && cartItems.length > 0 ? <button
              onClick={() => {
                setTimeout(() => {
                  navigate("/");
                }, 2000);
                toast.success("Order Placed");
                setCartItems([]);
              }}
            className="checkoutBtn">
              Place Order
            </button>:<button className="checkoutBtn">{cartItems.length ===0 ?"Please add items" : "Please select the address"}</button>}
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
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
                  focusBorderColor="#ED1C24"
                />
                <FormLabel>House</FormLabel>
                <Input
                  placeholder="House"
                  value={house}
                  id="name"
                  type="text"
                  onChange={handleHouse}
                  focusBorderColor="#ED1C24"
                />
                <FormLabel>Street</FormLabel>
                <Input
                  placeholder="Street"
                  value={street}
                  id="name"
                  type="text"
                  onChange={handleStreet}
                  focusBorderColor="#ED1C24"
                />
                <FormLabel>City</FormLabel>
                <Input
                  placeholder="City"
                  value={city}
                  id="name"
                  type="text"
                  onChange={handleCity}
                  focusBorderColor="#ED1C24"
                />
                <FormLabel>Pincode</FormLabel>
                <Input
                  placeholder="Pincode"
                  value={pincode}
                  id="name"
                  type="number"
                  onChange={handlePincode}
                  focusBorderColor="#ED1C24"
                />
                <FormLabel>Mobile</FormLabel>
                <Input
                  placeholder="Mobile"
                  value={mobile}
                  id="name"
                  type="number"
                  onChange={handleMobile}
                  focusBorderColor="#ED1C24"
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
