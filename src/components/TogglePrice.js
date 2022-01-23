import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TogglePrice() {
  const [enabled, setEnabled] = useState(false)
  const displayPrice = enabled ? '$70' : '$7';

  return (
    <>
      <Switch.Group as="div" className="flex items-center justify-center">
        <Switch.Label as="span" className="mr-3">
          <span className="text-lg leading-6 font-medium text-gray-900">Monthly</span>
        </Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={classNames(
            enabled ? 'bg-sky-600' : 'bg-gray-200',
            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600'
          )}
        >
          <span
            aria-hidden="true"
            className={classNames(
              enabled ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
            )}
          />
        </Switch>
        <Switch.Label as="span" className="ml-3">
          <span className="text-lg leading-6 font-medium text-gray-900">Annual </span>
        </Switch.Label>
      </Switch.Group>
      <span className="text-md text-green-600 mt-2">Save 16.5% with Annual Plan</span>
      <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
        <span>{displayPrice}</span>
        <span className="ml-3 text-xl font-medium text-gray-500">USD</span>
      </div>
    </>
  )
}
