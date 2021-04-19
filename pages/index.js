import Head from 'next/head'

export default function Home() {

  const t = [4, 5]
  let data = [{date: getTxtDate(t[0]), courts: getCourts(t[0])}, {date: getTxtDate(t[1]), courts: getCourts(t[1])}]


  return (
    <div className="dark:text-white dark:bg-gray-900 flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>🎾🎾🎾</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <h1 className="text-5xl lg:text-8xl font-bold mt-5 dark:text-white">
          <a className="text-xl">wel</a>
          <a className="text-xl lg:text-2xl">c</a>
          <a className="text-xl lg:text-3xl">o</a>
          <a className="text-xl lg:text-4xl">m</a>
          <a className="text-2xl lg:text-5xl">e </a>
          <a className="text-3xl lg:text-6xl">t</a>
          <a className="text-4xl lg:text-7xl">o </a>
          <a className="text-blue-600">hAcK ThE TeNnIs bRo</a>
          <a className="text-4xl  lg:text-7xl"> d</a>
          <a className="text-3xl  lg:text-6xl">o</a>
          <a className="text-2xl  lg:text-5xl">t</a>
          <a className="text-xl  lg:text-4xl"> </a>
          <a className="text-xl  lg:text-3xl">c</a>
          <a className="text-xl  lg:text-2xl">o</a>
          <a className="text-xl lg:text-xl">m</a>
        </h1>

        <div className="flex flex-wrap items-center justify-around">

          {data.map(({ date, courts}) => (
            <div className="rounded-xl mt-4 ring-black">
              <p className="mb-2 text-2xl animate-pulse">
                {''} 
                <code className="p-3 font-mono text-lg bg-gray-100 dark:bg-gray-800">
                  ⬇ Choose {date}'s Court ⬇
                </code>
              </p>

              <div className="flex flex-wrap items-center justify-around">

                {courts.map(({ name, url}) => (
                  <a
                  href={url}
                  className="dark:bg-gray-600 p-5 m-2 text-left ring-black dark:ring-white hover:ring-blue-600 rounded-xl shadow-md hover:shadow-2xl ring-1 hover:ring-2"
                  >
                    <h3 className="text-2xl font-bold">{name}</h3>
                  </a>
                ))}
              </div>
            </div>
          ))}
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

function getWave(txt) {
  
  for (var i = 0; i < txt.length; i++) {
    
  }
}


/*

      <footer className="flex items-center justify-center w-full h-12 border-t">
        <a
          className="flex items-center justify-center"
          href="https://www.narth.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/narthblack.svg" alt="Narth Logo" className="h-5 ml-2" />
        </a>
      </footer>

*/