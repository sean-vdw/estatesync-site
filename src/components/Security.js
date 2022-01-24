import { useEffect } from 'react';
import aws from '../assets/aws.svg';
import twilio from '../assets/twilio.svg';
import encrypted from '../assets/encrypted.svg';
import puzzle from '../assets/puzzle.svg';
import hidden from '../assets/hidden.svg';

export default function Security() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-white py-16 sm:py-24 w-full">
      {/* Title */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-sky-600 tracking-wide uppercase">Security</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            How we protect your information.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            We understand that the information you store with us is your life’s hard work and essential to your family’s wellbeing.<br/>
            <b>We take every measure possible to treat it as such.</b>
          </p>
        </div>
      </div>
      {/* Card 1 */}
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-sky-700 overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-sky-500 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-sky-800 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <div className='flex justify-center items-center'>
                  <img 
                    className="lg:h-40 sm:h-32 h-28" 
                    src={aws} 
                    alt="Amazon Web Services" 
                  />
                </div>
                <p className="mt-6 mx-auto max-w-2xl lg:text-2xl text-base text-white">
                  Built with the highest standards for privacy and data security, <b>Amazon’s world-class security experts provide the backbone for our infrastructure.</b> The global team works 24/7 to detect, respond, and prevent any potential security threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative lg:my-12 my-24 sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gray-50 rounded-l-3xl" />
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-gray-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-gray-400 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-gray-700 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <div className='flex justify-center items-center'>
                  <img 
                    className="lg:h-34 sm:h-20 h-16" 
                    src={twilio} 
                    alt="Twilio" 
                  />
                </div>
                <p className="mt-6 mx-auto max-w-2xl lg:text-2xl text-base text-white">
                  Enabling 2-Factor Authentication ensures that <b>even accounts with compromised passwords can still be protected.</b> In a recent study, Google found that utilizing SMS-based authentication can block up to 100% of automated bots, 99% of bulk phishing attacks, and 76% of targeted attacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative lg:my-12 my-24 sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-sky-700 overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-sky-500 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-sky-800 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <div className='flex justify-center items-center'>
                  <img 
                    className="lg:h-34 sm:h-20 h-16" 
                    src={encrypted} 
                    alt="Secure SSL Encryption" 
                  />
                </div>
                <p className="mt-6 mx-auto max-w-2xl lg:text-2xl text-base text-white">
                  SSL certificates protect sensitive data transmitted from and to our website. All information is encrypted before being communicated, and only the web server and website visitor have personal keys to decrypt and recognize it. <b>Encryption prevents eavesdropping and the tampering of information by hackers and identity thieves.</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="relative lg:my-12 my-24 sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gray-50 rounded-l-3xl" />
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-gray-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-gray-400 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-gray-700 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <div className='flex justify-center items-center'>
                  <img 
                    className="lg:h-32 sm:h-24 h-24" 
                    src={puzzle} 
                    alt="Puzzle" 
                  />
                </div>
                <p className="mt-6 mx-auto max-w-2xl lg:text-2xl text-base text-white">
                We believe that less is more. As an additional security measure, <b>we only recommend storing information that is essential for the management of your estate.</b> This includes abstaining from disclosing information such as account balances, which is unnecessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="relative lg:my-12 my-24 sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-sky-700 overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-sky-500 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-sky-800 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <div className='flex justify-center items-center'>
                  <img 
                    className="lg:h-48 sm:h-32 h-32" 
                    src={hidden} 
                    alt="Hidden" 
                  />
                </div>
                <p className="mt-6 mx-auto max-w-2xl lg:text-2xl text-base text-white">
                  <b>EstateSync’s team only has access to the information in your portal if you decide to grant it.</b> By default, our team is not able to see any personal information. However, if you need help, you can temporarily grant us access to view and edit anything you might need and our access can be turned off at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
