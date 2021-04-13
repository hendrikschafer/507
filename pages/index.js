import Head from 'next/head'

export default function Home() {
  const date = getDate();
  var hp3 = "https://www.openplay.co.uk/booking/place/4038?date="+date+"&use_id=42"
  var rp3 = "https://www.openplay.co.uk/booking/place/154?date="+date+"&use_id=42"
  console.log(hp3)


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>hAcK ThE TeNnIs bRo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to hack the bros dot com{' '}
          <a className="text-blue-600" href="https://en.wikipedia.org/wiki/Thomas_Hollis_(1720–1774)">
            get adobe flash player!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          {' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            Get started by choosing your Court
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href={hp3}
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Hyde Park &rarr;</h3>
          </a>

          <a
            href={rp3}
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Regents Park &rarr;</h3>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/narthblack.svg" alt="Narth Logo" className="h-5 ml-2" />
        </a>
      </footer>
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