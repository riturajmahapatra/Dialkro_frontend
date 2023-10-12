import React, { useState } from 'react'
import ShopTimingsForm from './ShopTimingsForm'
import { useNavigate } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../../Footer/Footer'


const PaymentForm = () => {
  const navigate = useNavigate()


 const [googlepay, setgooglepay] = useState(false)
  const [phonepay, setphonepay] = useState(false)
  const [bhimpe, setbhimpe] = useState(false)
  const [mobikwik, setmobikwik] = useState(false)
  const [uberpay, setuberpay] = useState(false)
  const [chillr, setchillr] = useState(false)
  const [paytm, setpaytm] = useState(false)
  const [sbipay, setsbipay] = useState(false)
  const [imobile, setimobile] = useState(false)
  const [axispay, setaxispay] = useState(false);
  const [bob, setbob] = useState(false);
  const [amazonpay, setamozonpay] = useState(false);
  const [freecharge, setfreecharge] = useState(false);
  const [cred, setcred] = useState(false);
  const [cashondelivery, setcashondelivery] = useState(false);

  const obj = { googlepay, phonepay, bhimpe, mobikwik, uberpay, chillr, paytm, sbipay, imobile, axispay, bob, amazonpay, freecharge, cred, cashondelivery }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(obj)
  }

  return (

    <>
      <Nav />

    

      <div className=" flex items-center justify-center">
        <div className="mt-20">
          <form className='py-4' onSubmit={handleSubmit}>
            <h1 className='text-center py-3 mt-5 mb-5 text-xl font-bold bg-blue-500 rounded text-white'>Select Payment Method</h1>
            <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5 py-2">
              <div className="flex items-center gap-2">
                <input
                  id="google"
                  className="rounded-sm"
                  name='same'
                  value={googlepay}
                  onClick={(e) => setgooglepay(true)}
                  type="checkbox"
                />
                <label htmlFor="google">GooglePay</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  className="rounded-sm "
                  value={phonepay}
                  name='same'
                  id="phone"
                  onChange={(e) => setphonepay(e.target.value)}
                  type="checkbox"
                />
                <label htmlFor="phone">PhonePe</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  className="rounded-sm"
                  onChange={(e) => setbhimpe(e.target.value)}
                  value={bhimpe}
                  name='same'
                  id="bhimpe"
                  type="checkbox"
                />
                <label htmlFor="bhimpe">Bhim App</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  className="rounded-sm "
                  value={mobikwik}
                  name='same'
                  id="mobikwik"
                  onChange={(e) => setmobikwik(e.target.value)}
                  type="checkbox"
                />
                <label htmlFor="mobikwik">Mobikwik</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  className="rounded-sm "
                  value={uberpay}
                  name='same'
                  id="uberpay"
                  onChange={(e) => setuberpay(e.target.value)}
                  type="checkbox"
                />
                <label htmlFor="uberpay">UberPay</label>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-10 md:grid-cols-3 py-2 lg:grid-cols-5">
              <div className="flex items-center gap-2">
                <input
                  className="rounded-sm "
                  value={sbipay}
                  name='same'
                  id="sbi"
                  onChange={(e) => setsbipay(e.target.value)}
                  type="checkbox"
                />
                <label htmlFor="sbi">SBI Pay</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  className="rounded-sm "
                  value={imobile}
                  name='same'
                  id="imobile"
                  onChange={(e) => setimobile(e.target.value)}
                  type="checkbox"
                />
                <label htmlFor="imobile">iMobile</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  className="rounded-sm "
                  value={axispay}
                  name='same'
                  id="axispay"
                  onChange={(e) => setaxispay(e.target.value)}
                  type="checkbox"
                />
                <label htmlFor="axispay">AxisPay</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  className="rounded-sm "
                  value={chillr}
                  name='same'
                  id="chillr"
                  onChange={(e) => setchillr(e.target.value)}
                  type="checkbox"
                />
                <label htmlFor="chillr">Chillr</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  className="rounded-sm "
                  value={paytm}
                  name='same'
                  id="paytm"
                  onChange={(e) => setpaytm(e.target.value)}
                  type="checkbox"
                />
                <label htmlFor="paytm">Paytm payment</label>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-10 py-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="flex items-center gap-2">
                <input
                  className="rounded-sm "
                  value={bob}
                  name='same'
                  id="bob"
                  onChange={(e) => setbob(e.target.value)}
                  type="checkbox"
                />
                <label htmlFor="bob">(BOB) UPI</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  className="rounded-sm "
                  value={amazonpay}
                  name='same'
                  id="amazon"
                  onChange={(e) => setamozonpay(e.target.value)}
                  type="checkbox"
                />
                <label htmlFor="amazon">Amazon Pay</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  className="rounded-sm "
                  value={freecharge}
                  name='same'
                  id="freecharge"
                  onChange={(e) => setfreecharge(e.target.value)}
                  type="checkbox"
                />
                <label htmlFor="freecharge">Freecharge</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  className="rounded-sm "
                  value={cred}
                  name='same'
                  id="cred"
                  onChange={(e) => setcred(e.target.value)}
                  type="checkbox"
                />
                <label htmlFor="cred">Cred</label>
              </div>


              <div className="flex items-center gap-2">
                <input
                  className="rounded-sm"
                  value={cashondelivery}
                  name='same'
                  id="cashondelivery"
                  onChange={(e) => setcashondelivery(e.target.value)}
                  type="checkbox"
                />
                <label htmlFor="cashondelivery">Cash On Delivery</label>
              </div>


            </div>

            <button
              className="mt-9 w-[200px] rounded-lg border border bg-blue-500 text-white  px-5 py-1 font-bold duration-300 hover:bg-blue-600 shadow-md "
              type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PaymentForm
