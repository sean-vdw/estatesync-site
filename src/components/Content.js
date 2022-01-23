import guide from '../assets/guide.mp4';
import contact from '../assets/contact.mp4';
import vchat from '../assets/vchat.jpg';

export default function Content() {
  return (

    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-center text-sky-700 lg:text-3xl text-xl font-semibold uppercase tracking-wide">
            How It Works
          </p>
        </div>
      </div>

      {/* One */}
      <div className="mx-auto max-w-md lg:mb-96 mb-36 px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-sky-800 uppercase">One</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Create account & follow interactive guide.
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          The estate management process is fragmented and opaque. We provide you with a guided roadmap to remove the frustration and guesswork.
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-52">
          <video 
            autoPlay={true}
            loop={true}
            muted={true}
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src={guide}
            type="video/mp4"
          />
        </div>
      </div>

      {/* Two */}
      <div className="mx-auto max-w-md px-4 lg:my-96 mb-40 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-sky-800 uppercase">Two</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Invite and collaborate with trusted contacts.
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Grant different levels of permission to family members, professional counsel, or other trusted contacts for a seamless transition.
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-52">
          <video 
              autoPlay={true}
              loop={true}
              muted={true}
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src={contact}
              type="video/mp4"
            />
        </div>
      </div>

      {/* Three */}
      <div className="mx-auto max-w-md px-4 lg:mb-96 md:mb-40 mb-64 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-sky-800 uppercase">Three</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Receive 1:1 help after a life event.
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Navigating grief is difficult in and of itself. We help your family alleviate task-oriented headaches when it's needed most. 
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-72">
          <img
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src={vchat}
            alt="Video Chat"
          />
        </div>
      </div>

    </div>
  )
}