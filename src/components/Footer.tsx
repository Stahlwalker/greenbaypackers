import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <h5 className="text-xl mb-4">About Me</h5>
            <p className="mb-4">
              My name is Luke Stahl and I'm a web developer, marketer and Packers fan.
            </p>
            <p>
              My family and I make it a point to support the team yearly by traveling to a new city to take in
              the festivities.
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <h5 className="text-xl mb-4">Connect</h5>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/lucas.stahl.75"
                className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook">
                <FaFacebookF size={20} className="text-white" />
              </a>
              <a
                href="https://twitter.com/LucasStahl11"
                className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)">
                <BsTwitterX size={18} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/lucasstahl"
                className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                <FaLinkedinIn size={20} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/stahlwalker11/"
                className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">
                <FaInstagram size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-packers-darkgreen text-yellow-400 py-4">
        <div className="container mx-auto text-center">
          <a href="https://lucasstahl.com/" className="hover:text-yellow-500 transition">
            &copy; 2019 Luke Stahl
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
