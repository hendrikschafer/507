import Head from 'next/head'
import Image from 'next/image'

import React, { useEffect, useState } from "react";

export default function Home() {

  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("1/29/2022 20:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      var d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      var h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h);

      var m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      var s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const [input, setInput] = useState('')

  const subscribe = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('./api/subscribe', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailAddress: input,
          status: "subscribed"
        })
      })

      if (res.status === 200) {
        alert("You are subscribed!")
      } else if (res.status === 400) {
        if (input == "") {
          alert("Please enter a valid email address")
        } else {
          alert("You are either already subscribed or have not entered a correct email address!")
        }
      } else {
        alert("Sorry, something went wrong.")
      }
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className="text-white flex flex-col items-center justify-center min-h-full min-w-full max-w-full">
      <Head>
        <title>507</title>
        <link rel="icon" href="/507.ico" />
      </Head>

      <main className="min-w-full max-w-full min-h-full text-center">
        <video autoPlay loop muted playsInline className="absolute z-0 w-full h-full max-w-none object-cover">
          <source src="/BW507.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="grid grid-cols-1 justify-center object-center m-8 mt-16 md:mt-8 lg:mx-96 inset-0">
          <img className="z-40 w-auto inset-0" src="/507LogoWhite.png" alt="Picture of Nirvana" />

          <div className="grid grid-cols-1 z-40 inset-0 mt-4">
            <h3 className="md:text-2xl text-xl text-left drop-shadow-2xl">Next event starts in:</h3>
            <p className="md:text-6xl text-4xl font-bold text-left shadow-2xl">Days: {days}</p>
            <p className="md:text-6xl text-4xl font-bold text-left">Hours: {hours}</p>
            <p className="md:text-6xl text-4xl font-bold text-left">Minutes: {minutes}</p>
            <p className="md:text-6xl text-4xl font-bold text-left">Seconds: {seconds}</p>
          </div>

          <div className="z-40 m-4 md:text-2xl">
            <form className="">
              <input className="p-2 rounded-2xl text-black text-center" id="email" name="email" type="email" autoComplete="email" placeholder="enter your email" value={input} onChange={e => setInput(e.target.value)} />
              <button className="p-1 m-2 border-white text-white border-solid border-4 rounded-2xl hover:bg-gray-700 hover:shadow-inner transition duration-200" type='submit' onClick={subscribe}>
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  )
}
