import { useEffect } from 'react';
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ClipboardListIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';

const features = [
  { 
    name: 'Guided Implementation', 
    icon: ClipboardListIcon,
    description: 'A simple, interactive guide that walks you through key considerations and action items.'
  },
  { 
    name: 'Secure Storage', 
    icon: LockClosedIcon,
    description: 'Security from industry-leading providers inlcuding Amazon Web Services and Twilio.' 
  },
  { 
    name: 'Two-Factor Authentication',
    icon: ShieldCheckIcon,
    description: 'Ensures that accounts with compromised passwords can still be protected.' 
  },
  { 
    name: 'Permission-based Sharing',
    icon: UserGroupIcon,
    description: 'Collaborate on your own terms. Decide who can see information and when.' 
  },
  { 
    name: '1:1 Support', 
    icon: ChatAlt2Icon,
    description: 'When help is needed the most, we\'re there to support your family one-on-one.' 
  },
  { 
    name: 'Custom Instructions',
    icon: AnnotationIcon,
    description: 'Securely post custom instructions, notes, and details for your trusted contacts.' 
  },
]

export default function Features() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32 lg:mt-0">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-sky-600 uppercase">Benefits</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Everything you need for seamless management
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          A single platform designed for one thing: frictionless estate management between families
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-sky-700 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
