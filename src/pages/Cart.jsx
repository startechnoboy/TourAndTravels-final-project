/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Store/cartSlice";
import Swal from "sweetalert2";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [selectedHotels, setSelectedHotels] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const handleDelete = (item) => {
    if (!item || !item.id) {
      console.error("Item or item.id is undefined");
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(item.id));
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };

  const [personCounts, setPersonCounts] = useState(cartItems.map(() => 1));

  const handlePersonChange = (index, value) => {
    const updatedCounts = [...personCounts];
    updatedCounts[index] = value;
    setPersonCounts(updatedCounts);
  };

  const handleBookNow = (item, personCount) => {
    const hotels = [
      { id: 1, name: "Hotel A", price: "$100 per night" },
      { id: 2, name: "Hotel B", price: "$150 per night" },
      { id: 3, name: "Hotel C", price: "$200 per night" },
    ];
    setSelectedHotels(hotels);
    setSelectedItem(item);

    Swal.fire({
      title: "Select a Hotel",
      text: `Here are some hotels for ${item.name}.`,
      icon: "info",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleSelectHotel = (hotel) => {
    setSelectedHotel(hotel);
    setShowPayment(true);
  };

  return (
    <div className="container mx-auto p-20">
      <h2 className="text-3xl font-bold mb-6">Cart Items</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-6">
          {cartItems.map((item, index) => (
            <li
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-center p-6 bg-white shadow rounded-lg"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-500 mb-4">{item.description}</p>
                <div className="flex items-center space-x-4">
                  <label
                    htmlFor={`personCount-${index}`}
                    className="text-gray-600"
                  >
                    Number of Persons:
                  </label>
                  <input
                    id={`personCount-${index}`}
                    type="number"
                    min="1"
                    value={personCounts[index]}
                    onChange={(e) => handlePersonChange(index, e.target.value)}
                    className="w-16 p-2 border rounded-lg text-center"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                <button
                  onClick={() => handleBookNow(item, personCounts[index])}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Book Now
                </button>
                <button
                  onClick={() => handleDelete(item)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {selectedHotels && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">
            Hotels for {selectedItem.name}
          </h3>
          <ul className="space-y-4">
            {selectedHotels.map((hotel) => (
              <li
                key={hotel.id}
                className="flex justify-between p-4 bg-gray-100 rounded-md shadow"
              >
                <div>
                  <h4 className="text-lg font-semibold">{hotel.name}</h4>
                  <p className="text-gray-600">{hotel.price}</p>
                </div>
                <button
                  onClick={() => handleSelectHotel(hotel)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                >
                  Select
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showPayment && selectedHotel && (
        <div className="mt-8 p-6 bg-white shadow rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">
            Payment for {selectedHotel.name}
          </h3>
          <p className="text-gray-600 mb-4">
            You selected {selectedHotel.name} with {personCounts} person(s).
          </p>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition duration-300">
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
