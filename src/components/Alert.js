import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

export default function Alert() {
  return (
    <div className="bg-sky-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-sky-800">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              EstateSync is currently undergoing maintenance. We expect this to be completed on Thursday, 1/27.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
