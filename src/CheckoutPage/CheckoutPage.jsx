import React, { useState } from 'react'
import Nav from '../components/Navbar/Nav'
import Footer from '../components/Footer/Footer'

export function ShoppingCart() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 1 },
    { id: 2, name: 'Product 2', price: 30, quantity: 2 },
    { id: 3, name: 'Product 3', price: 25, quantity: 1 }
  ])

  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    setCart(updatedCart)
  }

  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    )
    setCart(updatedCart)
  }

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="mb-4 text-lg font-semibold">Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="mb-4 rounded-lg border p-4 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <img
                src="http://via.placeholder.com/100x100" // Placeholder image
                alt={item.name}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div className="mt-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Price: ₹{item.price.toFixed(2)}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleDecrement(item.id)}
                className="rounded-md bg-blue-500 p-2 px-4 text-white hover:bg-blue-600">
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                onClick={() => handleIncrement(item.id)}
                className="rounded-md bg-blue-500 p-2 px-4 text-white hover:bg-blue-600">
                +
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="ml-5 rounded-md bg-red-500 p-2 px-4 text-white hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="text-right">
        <p className="text-lg font-semibold">Total: ₹{calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  )
}

function CheckoutPage() {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zipcode: ''
  })

  const [paymentInfo, setPaymentInfo] = useState({
    card: '',
    expiry: '',
    cvv: ''
  })

  const handleShippingChange = (e) => {
    const { name, value } = e.target
    setShippingInfo({
      ...shippingInfo,
      [name]: value
    })
  }

  const handlePaymentChange = (e) => {
    const { name, value } = e.target
    setPaymentInfo({
      ...paymentInfo,
      [name]: value
    })
  }

  const handlePlaceOrder = () => {
    // Handle placing the order here
    console.log('Shipping Info:', shippingInfo)
    console.log('Payment Info:', paymentInfo)
    // You can add your logic to process the order
  }

  return (
    <>
      <Nav />
      <div className="container mx-auto  p-8">
        <h2 className="mt-[10vh] text-2xl font-bold">Your Cart</h2>
        <ShoppingCart />
        <div className="mt-4"></div>
        <div className="mt-4 rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold">Shipping Information</h2>
          <form>
            <div className="mt-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg border p-2"
                placeholder="John Doe"
                value={shippingInfo.name}
                onChange={handleShippingChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="address" className="block text-sm font-medium">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full rounded-lg border p-2"
                placeholder="123 Main St"
                value={shippingInfo.address}
                onChange={handleShippingChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="city" className="block text-sm font-medium">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full rounded-lg border p-2"
                placeholder="Your City"
                value={shippingInfo.city}
                onChange={handleShippingChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="zipcode" className="block text-sm font-medium">
                Zip Code
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                className="w-full rounded-lg border p-2"
                placeholder="12345"
                value={shippingInfo.zipcode}
                onChange={handleShippingChange}
              />
            </div>
          </form>
        </div>
        <div className="mt-4 rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold">Payment Information</h2>
          <form className="flex gap-10">
            <div className="mt-4">
              <label htmlFor="card" className="block text-sm font-medium">
                Credit Card Number
              </label>
              <input
                type="text"
                id="card"
                name="card"
                className=" w-full rounded-lg border p-2"
                placeholder="1234 5678 9012 3456"
                value={paymentInfo.card}
                onChange={handlePaymentChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="expiry" className="block text-sm font-medium">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                className="w-full rounded-lg border p-2"
                placeholder="MM / YY"
                value={paymentInfo.expiry}
                onChange={handlePaymentChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="cvv" className="block text-sm font-medium">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className="w-full rounded-lg border p-2"
                placeholder="123"
                value={paymentInfo.cvv}
                onChange={handlePaymentChange}
              />
            </div>
          </form>
        </div>

        {/* Place Order Button */}
        <div className="mt-8 text-center">
          <button
            className="rounded-lg bg-blue-500 p-2 px-4 text-white hover:bg-blue-600"
            onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CheckoutPage
