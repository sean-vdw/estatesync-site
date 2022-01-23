import family from '../assets/family.jpg'

const posts = [
  {
    title: 'New to EstateSync',
    name: 'Marc S.',
    description:
      'I am new to EstateSync and my experience has been excellent. Entering my information was easy, and I am confident that it will be secure. After having to unravel family members assets without a tool like this, I am certain that it will be simple for my descendants.',
  },
  {
    title: 'Brilliant concept',
    name: 'Aly',
    description:
      'As the executor for a family member’s estate, working with Estatesync has allowed me to both sort and streamline everything so I don’t need to worry about future administrative implications. The platform was secure and easy to use for me and my designated trusted contact.',
  },
  {
    title: 'Brilliant idea of a platform',
    name: 'Bo Birdsong',
    description:
      'Having a centralized place to organize my family documents, wills, deeds, etc in one easy to use platform has removed the burden of worrying about end of life affairs. The guidance of Sean and his team gives me the confidence I need as well to get through those dreadful situations down the road. Surprised it took this long for a platform like this to come to the market!',
  },
  {
    title: 'User friendly and secure',
    name: 'Alex Baker',
    description:
      'As executor in charge of managing my family\'s estate, this helped me coordinate all of our family assets and beneficiary documents with our estate plan. I appreciate having all our resources on one user friendly and secure platform.',
  },
  {
    title: 'Excellent idea…',
    name: 'Philippa',
    description:
      'The website is very clear and gives excellent information and tips on use, I really liked the security features and felt reassured about the fact that it is obviously taken very seriously. I found the introduction page extremely helpful as it guides you nicely through the process.I think the concept of being prepared and having all this information in one place is fantastic. I have started entering my information, and thought it might be daunting, but I found it very straightforward.',
  },
  {
    title: 'This platform is exactly what I was…',
    name: 'Stephen Mayer',
    description:
      'This platform is exactly what I was looking for! There isn’t enough time in the day to tackle all of life’s problems, and this platform makes everything estate management easy. Easy to navigate and very user friendly. I can rest easier knowing my estate is taken care of in the event something happens to me.',
  },
  {
    title: 'Surprising weight off my mind!',
    name: 'Ryan Karlson',
    description:
      'What a weight off my mind! As I went through the onboarding I realized how stressful it was having all this stuff only in my head. The obvious worst case scenarios that would be made worse by me not having all this information in one place for my family and other trusted parties. Amazing service!',
  },
  {
    title: 'Now I\'m the man with a plan',
    name: 'Jon Brusati',
    description:
      'For years I put off the seemingly daunting task of having my estate prepared. After being the executor of a loved one who passed, I quickly learned that it is imperative to leave my own family with a much smoother experience should something happen to me. EstateSync has taken the guess work out of what to do next when I pass. This was a foreign subject to me and I was amazed by the compassionate guidance I received from EsateSync in organizing my own affairs. Rather than reading through hours of paperwork and not knowing exactly who to contact, EstateSync makes it easy by having all of the critical information in one centralized location. It\'s transparent and accessible only to the ones I want to have access. An enormous weight has been lifted with the ease of EstateSync. Thank you!',
  },
  {
    title: 'What a fantastic idea',
    name: 'Danny',
    description:
      'What a fantastic idea! This platform/service completely eliminated my concern of burdening loved ones with such a difficult process to navigate, such as settling my estate.',
  },
  {
    title: 'EstateSync is fantastic, easy, and cheap',
    name: 'Martin',
    description:
      'EstateSync is fantastic! I started with my 7-day free trial and that is all I needed to continue my subscription. The interface is extremely user friendly; I now have all my information in one central and secure location, which was previously scattered around my office. Not only was I able to do it by myself (stress-free), any of my questions that did arise were answered promptly and professionally. I don\'t have this cloud looming over my head to get this done anymore and know that any changes needed to be made will be fast and easy. Not only do I like the ease of use, but it is cost effective and would recommend this product to anyone of my friends.',
  },
  {
    title: 'This is a fantastic service',
    name: 'Wayne',
    description: 'This is a fantastic service! The estate process is usually very cumbersome and EstateSync makes it so easy. I decided to use EstateSync because I want my family to be able to manage my estate quickly and efficiently in the event something happens to me. I highly recommend it.',
  },
  {
    title: 'Great knowledge and expertise!',
    name: 'Phil Campit',
    description:
      'We are very fortunate to have come across EstateSync. My wife and I have been revisiting our estate plan but were unsure of how to best organize it. The two of us have much more peace of mind now that we have a comprehensive and secure place to manage everything. We were also able to share our executor in case anything were to happen to us. Huge weight off of our shoulders.',
  },
  {
    title: 'Excellent alternative to storing…',
    name: 'Brandon',
    description:
      'Excellent alternative to storing important documents in a safe.',
  },
]

export default function Testimonials() {
  return (
    <>
      <div className="relative bg-sky-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={family}
            alt="Family"
          />
          <div className="absolute inset-0 bg-sky-900 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-left text-white sm:text-5xl lg:text-6xl">Testimonials</h1>
          <p className="mt-6 text-xl text-left text-indigo-100 max-w-3xl">
          Since its launch, EstateSync has been essential in helping families navigate a cumbersome and antiquated process.<br/><br/>  
          <b>See what our users have to say.</b>
          </p>
        </div>
      </div>

      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div className="mt-6 pt-10 text-left grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div className="rounded-lg bg-sky-50 px-10 py-7 mx-7 shadow-sm" key={post.title}>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                <div className="mt-3">
                  <p className="text-base font-semibold text-sky-700">
                    - {post.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
