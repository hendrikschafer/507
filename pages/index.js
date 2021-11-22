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
    const target = new Date("1/23/2022 23:59:59");

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


  return (
    <div className="dark:text-white dark:bg-gray-900 flex flex-col items-center justify-center min-h-full min-h-full max-w-none">
      <Head>
        <title>507</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-w-full max-w-full min-h-full text-center">
        <video autoPlay loop muted className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
          <source src="/giphy.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

        <div className="grid grid-cols-1 justify-center object-center m-16 lg:mx-96 inset-0">
          <img className="z-40 w-auto inset-0" src="/507Logo4.png" alt="Picture of Nirvana" />
          
          <div className="grid grid-cols-1 z-40 inset-0">
            <h3 className="md:text-2xl text-xl text-left">Next event starts in:</h3>
            <p className="md:text-6xl text-4xl font-bold text-left">Days: {days}</p>
            <p className="md:text-6xl text-4xl font-bold text-left">Hours: {hours}</p>
            <p className="md:text-6xl text-4xl font-bold text-left">Minutes: {minutes}</p>
            <p className="md:text-6xl text-4xl font-bold text-left">Seconds: {seconds}</p>
          </div>
        </div>
      </main>
    </div>
  )
}
