import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Events", "Gallery", "Blog", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:text-red-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Murang'a University of Technology</p>
            <p>P.O. Box 75-10200</p>
            <p>Murang'a, Kenya</p>
            <p>Email: <a href="mailto:info@ajiraclub.com" className="hover:text-red-500">info@ajiraclub.com</a></p>
            <p>Phone: <a href="tel:+254123456789" className="hover:text-red-500">+254 123 456 789</a></p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="hover:text-red-500">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and events.</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-3 py-2 text-gray-900 rounded-md sm:rounded-l-md focus:outline-none"
              />
              {/* <button type="submit" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md sm:rounded-r-md mt-2 sm:mt-0">
                Subscribe
              </button> */}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Mut Ajira Digital Club. All rights reserved.</p>
          <p className="mt-2">
            Powered by{" "}
            <a href="https://ajiradigital.go.ke" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
              Ajira Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
