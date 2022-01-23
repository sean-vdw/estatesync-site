import poaPic from '../../assets/Infographic-POA-type-and-agent-authority.png';

export default function FivePOA() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              5 Types of Power of Attorney, Explained.
            </span>
            <span className="block text-base text-center text-sky-600 font-semibold tracking-wide uppercase mt-6">
              From: Freewill.com
            </span>
          </h1>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto text-left">
          <p>
            We all do our best to be prepared for any situation, and to care for the people we love. But sometimes unexpected things can happen to us, like a car accident or illness, that make us unable to look after ourselves or manage our affairs. In these situations, a power of attorney can help.
            <br/><br/>A power of attorney, or POA, is a legal document that lets you grant another person the authority to make decisions on your behalf. This person is called your agent or proxy. POAs are powerful documents that ensure important decisions about your family, finances, and healthcare will be handled, even if you can’t make these decisions yourself.
            <br/><br/>There are many types of POAs, and understanding them will help you choose one that’s the best fit for you. We break down some of the most common varieties for you below.
          </p>
          <ol role="list">
            <li>
              <strong>Durable power of attorney</strong>
              <p>
                Having a durable POA means your agent’s authority to act on your behalf continues if you become incapacitated — for example, if you fell into a coma. If you’re using your POA for estate planning, it’s typical for it to be durable, because you’re planning for a situation where you might not be able to make decisions on your own. In most states, the court will typically presume that a POA is durable unless you specify otherwise. But it’s always a good idea to explicitly state in your POA document whether you want it to be durable, to avoid potential confusion.
                <br/><br/><b>Non-durable power of attorney</b>
                <br/><br/>With a non-durable POA, your agent’s power to act ends if you become incapacitated. Non-durable POAs aren’t useful for estate planning, but can be useful in other scenarios. For example, you might grant your stock broker a non-durable POA so they can manage your investments day-to-day.
              </p>
            </li>
            <li>
              <strong>Springing Power of Attorney</strong>
              <p>
                Once you execute a traditional POA, it’s effective immediately, and your agent can start exercising the powers you granted them right away. This can be useful when you’re using your POA for business or financial purposes. For example, if you own a business and move overseas, you can appoint an agent to manage it for you while you’re away.
                <br/><br/>A springing POA, on the other hand, only gives your agent the power to act when a specified condition is met. When used for estate planning, the condition is typically that you’ve become incapacitated and can’t act for yourself. Once the condition is met, your agent’s power “springs” into effect. Until then, your agent has no legal authority, and you are the only one with control over your affairs.
                <br/><br/>Although a springing POA ensures your agent can’t use their powers unless you’re incapacitated, most attorneys don’t recommend using springing POAs for estate-planning purposes. This is because the process of determining whether you’re incapacitated isn’t always straightforward, and can take time.
                <br/><br/>For example, if you develop dementia, it may not be clear whether or not you can manage your affairs. Your agent, doctors, and loved ones may have different opinions about what it means to be incapacitated. These delays and difficulties could mean that your agent can’t act on your behalf right away, leaving bills unpaid, delaying decisions about your medical care, and preventing your family from receiving financial support that you normally provide. A non-springing POA avoids these issues, and you can instruct your agent to only use their powers if they reasonably believe you’re incapacitated. Your agent is required by law to follow your instructions.
                <br/><br/>If you’re considering a springing POA, it may be beneficial to speak to an estate attorney about your situation.
              </p>
              <img
                className='w-full'
                src={poaPic}
                alt='Agent POA Decision Diagram'
                width={1310}
                height={873}
              />
            </li>
            <li>
              <strong>General Power of Attorney</strong>
              <p>
                With a general power of attorney, you authorize your agent to act for you in all situations allowed by local law. This includes legal, financial, health, and business matters. General POAs can be durable or non-durable, depending on your preferences.
                <br/><br/>A general POA gives your agent considerable power over your affairs, but there are still some things they can’t do. For example, they can’t enter into a marriage on your behalf, or make changes to your last will and testament.
              </p>
            </li>
            <li>
              <strong>Financial Power of Attorney</strong>
              <p>
                A financial POA is considered a type of special or limited power of attorney, because it gives your agent authority to act on your behalf regarding certain subject matters of your choosing. In this case, it lets your agent make decisions about your money and property. For example, you could grant your agent the authority to:
              </p>
              <ul role='list'>
                <li>Pay your bills and your family’s expenses</li>
                <li>Make bank deposits and withdrawals</li>
                <li>Collect and manage your retirement benefits</li>
                <li>Sell or rent your real estate</li>
                <li>File your taxes</li>
              </ul>
              <p>You can choose which powers you want your agent to receive. For example, maybe you only want your agent to pay your bills or manage your property. And financial POAs can be durable or non-durable, depending on your preferences.</p>
            </li>
            <li>
              <strong>Medical Power of Attorney</strong>
              <p>
                A medical POA, also called a healthcare POA, is another type of special or limited power of attorney. It allows your agent to make healthcare decisions on your behalf. This could include decisions about your medical care, like:
              </p>
              <ul role='list'>
                <li>Medical treatments</li>
                <li>Medication</li>
                <li>Surgery</li>
                <li>End-of-life care</li>
                <li>The doctors and hospitals used to administer your care</li>
              </ul>
              <p>For example, if you’re too sick to let doctors know whether you want to receive a feeding tube, your healthcare agent can make that decision for you.</p>
            </li>
          </ol>
          <h2>When does your agent’s authority to act for you end?</h2>
          <p>
            This depends on the type of POA you’re using. With a non-durable POA, your agent’s authority ends as soon as you become incapacitated. If you have a durable POA, your agent can continue to make decisions for you even after you become unable to make them yourself. And with a springing POA, your agent’s authority ends once the condition that triggered the authority (for example, your incapacitation) no longer exists.
            <br/><br/>When you die, your agent’s legal authority to make decisions for you ends, regardless of which type of POA you have in place. If you want to plan who should receive your property and other assets when you pass away, consider making a last will and testament.
          </p>
          <h2>Which type of POA should you choose?</h2>
          <p>
            The best type of POA for you will depend on your preferences, and the particular situation you’re planning for. If you’re creating a POA to plan for a situation where you could suddenly become incapacitated — such as after a car accident, or due to a health condition — you’ll likely want a durable financial POA and a medical POA.
            <br/><br/>If you want to give a single, trusted person complete control over your finances and healthcare, you may decide a general POA is the best fit. If you’d rather give different people responsibility for managing your finances and your healthcare, you can create separate financial POA and medical POA documents. If you do name two different agents, it’s a good idea to choose people you trust and who will get along with each other. There may be a time when they need to work together. For example, your financial agent may need to use your money to pay for a medical treatment your healthcare agent chose for you.
          </p>
          <p className="text-base">Source: 
            <a href="https://www.freewill.com/learn/5-types-of-power-of-attorney">Freewill.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
