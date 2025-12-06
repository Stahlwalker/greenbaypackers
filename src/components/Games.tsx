import { useState } from 'react'
import { X } from 'lucide-react'

const Games = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const games = [
    {
      image: '/img/Cleveland_9.21.25.jpeg',
      title: 'Packers at Cleveland 2025',
      description: '9/21/25 Packers defense showed up and kept the Browns scoreless until the final 4 minutes which included a blocked field goal and a game winning 55 yard field goal by the Browns. 10-13 Packers Lose!',
      align: 'left'
    },
    {
      image: '/img/Kansas 2.jpeg',
      title: 'Packers at Kansas City',
      description: '10/27/19 Rodgers threw for 305 yard and three touchdowns, two of them to Aaron Jones on a big night, 31-24 Packers Win!',
      align: 'right'
    },
    {
      image: '/img/Chicago2.jpeg',
      title: 'Packers at Chicago',
      description: '12/16/18 Bears clinch NFC North with victory, 17-24 Packers Lose!',
      align: 'left'
    },
    {
      image: '/img/Detrioit.JPG',
      title: 'Packers at Detroit',
      description: '1/1/17 Rodgers-led Packers beat Lions to win NFC North in 31-24 Packers Win!',
      align: 'right'
    },
    {
      image: '/img/Jacksonville.JPG',
      title: 'Packers at Jacksonville',
      description: '9/11/16 Rodgers accounts for 3 TDs in 27-23 Packers Win!',
      align: 'left'
    },
    {
      image: '/img/Miami.JPG',
      title: 'Packers at Miami',
      description: '10/12/14 Aaron Rodgers tosses TD with 3 seconds left for 27-24 Packers Win!',
      align: 'right'
    },
    {
      image: '/img/packerscharger2.JPG',
      title: 'Lambeau Field',
      description: 'Lambeau Field is the oldest continually operating NFL stadium. Known as The Frozen Tundra, Titletown USA.',
      align: 'left'
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16" id="Games">
      {games.map((game, index) => (
        <div key={index} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 ${
          game.align === 'right' ? 'lg:flex-row-reverse' : ''
        }`}>
          {game.align === 'left' ? (
            <>
              <div className="lg:col-span-4">
                <img
                  src={game.image}
                  alt={game.title}
                  onClick={() => setSelectedImage(game.image)}
                  className="w-full rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                />
              </div>
              <div className="lg:col-span-6 lg:col-start-6">
                <h2 className="text-gray-600 text-3xl mb-4">{game.title}</h2>
                <p className="text-lg">{game.description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="lg:col-span-4 lg:col-start-8 order-1 lg:order-2">
                <img
                  src={game.image}
                  alt={game.title}
                  onClick={() => setSelectedImage(game.image)}
                  className="w-full rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                />
              </div>
              <div className="lg:col-span-6 lg:col-start-1 order-2 lg:order-1 text-left lg:text-right">
                <h2 className="text-gray-600 text-3xl mb-4">{game.title}</h2>
                <p className="text-lg">{game.description}</p>
              </div>
            </>
          )}
        </div>
      ))}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Games
