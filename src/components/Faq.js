import { useEffect } from 'react';
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What happens if I pass?",
    answer:
      "Upon the notification of your passing by a trusted contact, your executor or successor is provided with a detailed guide as to how to approach the settlement of your estate and accounts. They can work hand in hand with legal and financial professionals to ensure that your affairs are settled quickly and effectively.",
  },
  {
    question: "What does your pricing include?",
    answer:
      "Our monthly and annual plans provide the same features and benefits. This cost covers industry-leading security services, storage of information and documents, and the facilitation of access to any trusted contacts. The volume of your document storage and information is unlimited.",
  },
  {
    question: "What happens to my information if I delete my account?",
    answer:
      "Immediately after your account is deleted, all personal information is permanently deleted from our server. If you wish to reactivate your account at a later date, you will need to upload all the same information again.",
  },
  {
    question: "Do you sell my information to any third parties?",
    answer:
      "Absolutely not. Your security and privacy are our highest concern and monetizing your information is against our core principles. Additionally, EstateSync’s team only has access to the information in your portal if you decide to grant it to us. Our access is turned off by default and you have the ability to toggle this on/off at any time.",
  },
  {
    question: "What happens once the estate settlement process is complete?",
    answer:
      "Once your executor or successor notifies us that the estate settlement process is complete, we take the same absolute measures as an account termination - we discontinue access for all of your trusted contacts and permanently erase all information that was uploaded to EstateSync.",
  },
  {
    question: "Do you provide any tax, legal, or financial advice?",
    answer:
      "We do not. EstateSync is a platform to help you, your family, and any professional counsel simply navigate the complexities of estate management. If you’re seeking advice, it should be done through a licensed professional.",
  },
  {
    question: "Can you assist with the probate process?",
    answer:
      "EstateSync does not assist with the probate process. If you need assistance with probate specifically, please contact a licensed legal professional.",
  },
  {
    question: "I've been granted access to someone else's EstateSync portal. Now what?",
    answer:
      "If someone has granted you with access to their EstateSync portal as a Primary Contact, you now have the ability to view, edit, add, and delete documents and information with full privileges. This is typically used by a spouse. If you have been granted access as a Secondary or Professional Contact, you may now view their EstateSync information only. This feature is often used by legal or financial counsel to ensure that all information is up-to-date and verify that a sufficient plan is in place.",
  },
  {
    question: "How do I notify EstateSync of someone's passing?",
    answer:
      "Once you set up and log into your EstateSync portal, you will immediately see an option to either view the person’s profile or to notify us that they have now passed on. Click the notification button and we will be in touch promptly to discuss next steps.",
  },
  {
    question: "I notice that some information doesn't look accurate. What should I do?",
    answer:
      "Identifying any inconsistencies in information is a crucial first step. If it seems as though the information was typed incorrectly, you can discuss with the estate owner to update or contact a licensed professional to assist with financial or legal guidance. If necessary, this professional can also be granted access to the EstateSync portal in order to review.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Faq() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a href="mailto:support@estatesync.co" className="font-medium text-sky-600 hover:text-sky-500">
                customer support
              </a>{' '}
              team.
            </p>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-left text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
