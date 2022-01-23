import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'Estate Planning 101',
    href: '/resources/estate-planning-101',
    description:
      'Learn everything you need to know about estate planning including what it is, getting started, and the basics of estate planning in this guide.',
    imageUrl:
      'https://images.unsplash.com/photo-1586161713586-d0055e438da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHN0dWR5aW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    author: 'Patrick Hicks',
  },
  {
    title: 'Understanding Living Trusts in 25 Questions',
    href: '/resources/understanding-living-trusts-25-questions',
    description:
      'In this article we explore 25 important questions to help you better understand why living trusts are important and other considerations when using them.',
    imageUrl:
      'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2lnbmluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    author: 'Estateplanning.com',
  },
  {
    title: 'Corporate Trustees Explained',
    href: '/resources/corporate-trustees-explained',
    description:
      'Learn more about corporate trustees, their complexities and advantages, and decide whether that type of relationship might serve your family well.',
    imageUrl:
      'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29uZmVyZW5jZSUyMHJvb218ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    author: 'Estateplanning.com',
  },
  {
    title: '5 Types of Power of Attorney Explained',
    href: '/resources/5-types-of-POA',
    description:
      'There are five main types of power of attorneys, each explored in this article. Here, readers will be able to better understand the different types of POAs in order to make their estate plan more effective.',
    imageUrl:
      'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhwbGFpbmluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    author: 'Freewill.com',
  },
  {
    title: 'Advance Care Planning: Health Care Directives',
    href: '/resources/health-care-directives',
    description:
      'Health care directives can be a complex subject. However, they are a requirement for any effective estate plan. Learn more about them in this article from the National Institute on Aging.',
    imageUrl:
      'https://images.unsplash.com/photo-1514415008039-efa173293080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGZhbWlseXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    author: 'National Institute on Aging',
  },
]

export default function Resources() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-sky-600 tracking-wide uppercase">Resources</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Greater knowledge, better outcomes.
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              We've cultivated several helpful articles and tips to help you create and manage your estate more effectively.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="my-9 mx-5 flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <Link to={post.href}>
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Link to={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </Link>
                </div>
                <div className="pt-4 text-center">
                  <p className="text-base font-medium text-sky-600">
                    {post.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
