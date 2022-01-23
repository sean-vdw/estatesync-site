import amazon from '../assets/amazon.svg';
import twilio from '../assets/twilio.svg';
import encrypted from '../assets/encrypted.svg';

export default function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
          <div className="relative h-full">
            <svg
              className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-16 sm:pb-24">

          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Synchronized estate management</span>
                <span className="block text-sky-800">for families</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                EstateSync removes the burden from a fragmented experience by aligning assets, people, and process on a single platform.
              </p>
              <a href='https://app.estatesync.co/register'>
                <button
                  type="button"
                  className="inline-flex items-center px-6 py-3 mt-6 border border-transparent text-base font-medium rounded-md text-sky-900 bg-sky-100 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-700"
                >
                  Try Free for 7 Days
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-gray-600" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center">
            <iframe className="relative rounded shadow-lg lg:w-9/12 md:w-10/12 w-full aspect-video" src="https://www.youtube.com/embed/qBUmc1pGIrE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      <div className="bg-gray-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
            Platform Secured by
          </h2>
          <div className="mt-8 grid grid-cols-3 gap-8 md:grid-cols-3 lg:grid-cols-3">
            <div className="col-span-1 flex justify-center items-center lg:col-span-1">
              <img 
                className="lg:h-16 sm:h-12" 
                src={twilio}
                alt="Twilio" 
              />
            </div>
            <div className="col-span-1 flex justify-center items-center lg:col-span-1">
              <img 
                className="lg:h-40 sm:h-28" 
                src={amazon} 
                alt="Amazon" 
              />
            </div>
            <div className="col-span-1 flex justify-center items-center lg:col-span-1">
              <img
                className="lg:h-16 sm:h-12"
                src={encrypted}
                alt="Secure SSL Encryption"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
