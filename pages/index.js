import Head from 'next/head'

export default function Home() {
  const date = getDate();
  var hp3 = "https://www.openplay.co.uk/booking/place/4038?date="+date+"&use_id=42"
  var rp3 = "https://www.openplay.co.uk/booking/place/154?date="+date+"&use_id=42"


  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-2">
      <Head>
        <title>🎾🎾🎾</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 m-2 text-center">
        <h1 className="text-8xl font-bold">
          <a className="text-3xl">welco</a>
          <a className="text-4xl">m</a>
          <a className="text-5xl">e </a>
          <a className="text-6xl">t</a>
          <a className="text-7xl">o </a>
          <a className="text-blue-600">hAcK ThE TeNnIs bRo</a>
          <a className="text-7xl"> d</a>
          <a className="text-6xl">o</a>
          <a className="text-5xl">t </a>
          <a className="text-4xl">c</a>
          <a className="text-3xl">om</a>
        </h1>

        <p className="mt-3 text-2xl">
          {''} 
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md shadow-md">
            ⬇ Choose your Court below ⬇
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl m-2 md:w-full">
          <a
            href={hp3}
            className="p-6 mt-6 m-2 text-left border w-96 rounded-xl shadow-md hover:shadow-2xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Hyde Park &rarr; 🚀</h3>
          </a>

          <a
            href={rp3}
            className="p-6 mt-6 m-2 text-left border w-96 rounded-xl shadow-md hover:shadow-2xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Regents Park &rarr; 🪐</h3>
          </a>
        </div>
      </main>

      
    </div>
  )
}


function getDate() {
  var t3 = new Date();
  var dd = t3.getDate()+3;

  var mm = t3.getMonth()+1; 
  var yyyy = t3.getFullYear();
  if(dd<10) {
      dd='0'+dd;
  } 

  if(mm<10) {
      mm='0'+mm;
  } 
 
  t3 = yyyy+'-'+mm+'-'+dd;
  return t3
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