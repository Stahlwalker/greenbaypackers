import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const baseUrl = import.meta.env.BASE_URL

  return (
    <header className="relative min-h-[500px] lg:min-h-[1000px] bg-cover bg-center"
            style={{ backgroundImage: `url(${baseUrl}img/packers2.jpg)` }}>
      <nav className="bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <a href="/" className="text-gray-300 text-xl lg:text-2xl font-bold">
              Packers Nation Invasion
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="#Tradition" className="text-white hover:text-yellow-400 transition">Tradition</a>
              <a href="#Games" className="text-white hover:text-yellow-400 transition">Games</a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition">Contact</a>

              <a href="https://www.instagram.com/stahlwalker11/"
                 className="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition"
                 target="_blank" rel="noopener noreferrer"
                 aria-label="Instagram">
                <FaInstagram size={20} className="text-white" />
              </a>
              <a href="https://www.facebook.com/lucas.stahl.75"
                 className="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition"
                 target="_blank" rel="noopener noreferrer"
                 aria-label="Facebook">
                <FaFacebookF size={20} className="text-white" />
              </a>
              <a href="https://x.com/LukeStahl11"
                 className="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition"
                 target="_blank" rel="noopener noreferrer"
                 aria-label="X (formerly Twitter)">
                <BsTwitterX size={18} className="text-white" />
              </a>
              <a href="https://www.linkedin.com/in/lucasstahl"
                 className="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition"
                 target="_blank" rel="noopener noreferrer"
                 aria-label="LinkedIn">
                <FaLinkedinIn size={20} className="text-white" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-gray-200 rounded-lg p-4 mb-4">
              <a href="#Tradition"
                 className="block py-2 text-gray-800 hover:text-yellow-500"
                 onClick={() => setIsMenuOpen(false)}>
                Tradition
              </a>
              <a href="#Games"
                 className="block py-2 text-gray-800 hover:text-yellow-500"
                 onClick={() => setIsMenuOpen(false)}>
                Games
              </a>
              <a href="#contact"
                 className="block py-2 text-gray-800 hover:text-yellow-500"
                 onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
