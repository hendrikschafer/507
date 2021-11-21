import Head from 'next/head'
import React, { useEffect, useState } from "react";

export default function Home() {

  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("1/24/2022 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      var d = Math.floor(difference / (1000 * 60 * 60 * 24));
      if (d < 10){d = "0" + d.toString()}
      setDays(d);

      var h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      if (h < 10){h = "0" + h.toString()}
      setHours(h);

      var m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      if (m < 10){m = "0" + m.toString()}
      setMinutes(m);

      var s = Math.floor((difference % (1000 * 60)) / 1000);
      if (s < 10){s = "0" + s.toString()}

      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="dark:text-white dark:bg-gray-900 flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>🔥</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center w-full flex-1 p-4 text-center max-w-4xl">
        <div className="flex items-center flex-wrap justify-around max-w-3xl w-full mx-auto shadow-inner">
          <img className="" src={"/507Logo.svg"} alt="Picture of Food Maniac 3000 Logo"/>
        </div>

        <div className="m-16 items-center grid-flow-col">
          <h3 className="text-2xl text-left">Next Party Starts In:</h3>
          <p className="text-6xl font-bold text-left">Days: {days}</p>
          <p className="text-6xl font-bold text-left">Hours: {hours}</p>
          <p className="text-6xl font-bold text-left">Minutes: {minutes}</p>
          <p className="text-6xl font-bold text-left">Seconds: {seconds}</p>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-12 shadow-inner">
        <a
          className="flex items-center justify-center"
          href="https://www.narth.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by 🪐
        </a>
      </footer>
    </div>
  )
}


function getDate(i) {
  var dt = new Date();
  dt = dt.addDays(i)

  var dd = dt.getDate();
  var mm = dt.getMonth()+1; 
  var yyyy = dt.getFullYear();

  if(dd<10) {
      dd='0'+dd;
  }
  if(mm<10) {
      mm='0'+mm;
  } 
  return yyyy+'-'+mm+'-'+dd
}

function getTxtDate(i) {
  var dt = new Date();
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";
  return weekdays[dt.addDays(i).getDay()]
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getCourts(i) {
  var date = getDate(i)
  return [{name: "🔥Hyde Park🔥", url: "https://www.openplay.co.uk/booking/place/4038?date="+date+"&use_id=42"}, {name: "🚀Regents Park🚀", url: "https://www.openplay.co.uk/booking/place/154?date="+date+"&use_id=42"}]
}
