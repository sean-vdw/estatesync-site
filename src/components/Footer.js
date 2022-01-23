import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const navigation = {
  solutions: [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQs', href: '/FAQs' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources'},
    { name: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 w-full">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 gap-4">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-10"
              src={logo}
              alt="EstateSync"
            />
            <p className="text-gray-500 text-base w-full">
              Inspiring confidence and security during life's most difficult transition.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:gap-8 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:gap-8 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:gap-8 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2022 EstateDog, Inc. All rights reserved.</p>
          <p className="text-sm text-gray-400 xl:text-center"><i>Notice: This website uses Cookies. By using our website, you agree to our use of Cookies. Please review our Privacy Policy for details on how we use Cookies.</i></p>
        </div>
      </div>
    </footer>
  )
}
