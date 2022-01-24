import { useEffect } from 'react';
import photo from '../assets/vdw-photo.jpg';
import signature from '../assets/Sean-sig.png';

export default function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-sky-600 font-semibold tracking-wide uppercase">
              About
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Letter from Our Founder
            </span>
          </h1>
        </div>
        <div className="mt-6 prose prose-sky prose-lg text-gray-500 mx-auto text-left">
          <p>
            Dear Reader,
          </p>
          <p>
            Thank you very much for taking the time to visit the EstateSync site. I certainly hope you've enjoyed the content thus far. 
            I have taken the time to write this letter so that others are able to understand and familiarize themselves with the problem
            that many families face throughout the year, as ours did many years ago.
          </p>
          <strong>A Brief Backstory</strong>
          <p>
            My parents, both born in South Africa, moved to the United States in 1988. They did so with very little money to their name in order
            to provide a life of opportunity for my brother and I. They both worked incredibly hard - my mother as a nurse and my father in accounting - 
            so naturally, my father handled our family's finances. As he was stuck in a corporate office most days, one of his favorite things to
            do was ride his road bike through the State Park by our house.
            <br/><br/>
            One morning in mid-December, he went out for his usual ride and did not come back. At age 49 and in otherwise excellent health, my father suffered a severe cerebral aneurysm, from
            which he was not able to recover. The days, weeks, and months thereafter were mostly a blur with a few moments that stand crystal clear to this day.
            One of them was the struggle my mother went through managing the finances and estate management process.
          </p>
          <strong>The Problems</strong>
          <p>
            Managing an estate, especially if an individual is not well-versed in the world of finance can cause stress, frustration, worry, and consumes
            several hours of time, if not weeks or months. After working with hundreds of other families as a CERTIFIED FINANCIAL PLANNER™ professional, I've
            been able to isolate the three most significant problems that impact families in this process:
          </p>
          <ol role="list">
            <li>Organization</li>
            <li>Guidance</li>
            <li>Clarity</li>
          </ol>
          <p>
            To unpack these issues further:
            <br/><br/>
            <b>Organization:</b> With bank accounts, retirement accounts, insurance, and legal documents spread across several (often unknown) locations,
            the process of simply collecting and organizing all of the information needed is a feat. 
            <br/><br/>
            <b>Guidance:</b> Most people rely on friends or family members for help, who may not have the necessary financial sophistication or are unclear of the overall
            financial picture as well.
            <br/><br/>
            <b>Clarity:</b> Instructions from the deceased or written wishes, such as will, can become outdated quickly and there is no fluid
            transition of information between family members. 
          </p>
          <strong>Our Mission: Remove the administrative burden from life's hardest transition.</strong>
          <p>
            The process of losing someone you care about is difficult enough. Time should be spent healing with family and freinds - not racking your brain over which bank needs to be called next. 
            EstateSync is the solution that helps people wrap their estate in one secure package to be seamlessly passed to those who need it.
          </p>
          <p>
            I look forward to the opportunity to serve you and the people you care about most.
            <br/><br/>
            Very best regards,
          </p>
          <img 
            className="w-1/5"
            src={signature}
            alt="Signature"
            width={1310}
            height={873}
          />
          <p>Sean van der Wal</p>
          <figure>
            <img
              className="w-full rounded-lg pt-14"
              src={photo}
              alt="Family Picture"
              width={1310}
              height={873}
            />
            <figcaption>Robert van der Wal with sons, Sean (middle) and Martin (right).</figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}
