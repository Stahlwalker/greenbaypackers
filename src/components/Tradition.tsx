import { useState, useEffect } from 'react'
import CountUp from '@/components/CountUp'
import GradientText from '@/components/GradientText'

const Tradition = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isExpired, setIsExpired] = useState(false)
  const [activeTab, setActiveTab] = useState<'home' | 'away'>('home')
  const baseUrl = import.meta.env.BASE_URL

  useEffect(() => {
    const countDownDate = new Date("Sept 10, 2026 19:20:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = countDownDate - now

      if (distance < 0) {
        setIsExpired(true)
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setIsExpired(false)
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container mx-auto px-4 py-16" id="Tradition">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <h2 className="text-green-700 text-4xl font-bold mb-4">
            What is Packers Nation Invasion
          </h2>
          <p className="mb-4">
            Packers Nation Invasion is a yearly trip my family and I take to support the Green Bay Packers as
            they take on road games. We started invading cities in 2012 with a goal of visiting all 32 stadiums.
          </p>
          <p className="mb-4">
            On our journey, we get to take in the local festivities, eat amazing food and get away from the
            everyday grind. Packers fans have a great following and it's truly amazing to see how an away team
            can come in and take over a stadium, there is nothing else like it.
          </p>
          <p className="mb-4">
            Listed is a stat sheet of the games attended both home and away. Our scored card is{' '}
            <span className="text-green-700 text-xl font-bold">9-3</span>.
          </p>
          <p className="mb-4">
            <span className="text-3xl">Stadiums visited: </span>
            <GradientText
              colors={['#FFB612', '#203731', '#FFB612']}
              animationSpeed={3}
              showBorder={false}
              className="inline"
            >
              <CountUp
                to={7}
                from={0}
                className="text-5xl font-bold inline"
                duration={2}
              />
            </GradientText>
          </p>

          <p className="text-green-700 text-2xl mt-6 mb-2">2026 Season Kickoff</p>
          <p className="text-2xl">
            {isExpired ? (
              <span className="text-red-600 font-bold">EXPIRED</span>
            ) : (
              `${countdown.days}d ${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`
            )}
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          {/* Tabs */}
          <div className="flex border-b border-gray-300">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex-1 py-3 text-center text-green-700 transition ${
                activeTab === 'home' ? 'border-b-2 border-green-700' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('away')}
              className={`flex-1 py-3 text-center text-green-700 transition ${
                activeTab === 'away' ? 'border-b-2 border-green-700' : ''
              }`}
            >
              Away
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === 'home' ? (
              <div>
                <p className="text-green-700 text-2xl mb-4">HOME</p>
                <p className="mb-2">11/14/23 Packers vs Saints 18-17 <span className="text-green-700 text-xl">W</span></p>
                <p className="mb-2">11/14/21 Packers vs Seahawks 17-0 <span className="text-green-700 text-xl">W</span></p>
                <p className="mb-2">9/24/17 Packers vs Bengals 27-24 <span className="text-green-700 text-xl">W</span></p>
                <p className="mb-2">10/18/15 Packers vs Chargers 27-20 <span className="text-green-700 text-xl">W</span></p>
                <p className="mb-2">12/9/12 Packers vs Lions 27-20 <span className="text-green-700 text-xl">W</span></p>
              </div>
            ) : (
              <div>
                <p className="text-green-700 text-2xl mb-4">AWAY</p>
                <p className="mb-2">9/21/25 Packers at Cleveland 10-13 <span className="text-red-600 text-xl">L</span></p>
                <p className="mb-2">11/6/22 Packers at Detroit 9-15 <span className="text-red-600 text-xl">L</span></p>
                <p className="mb-2">10/27/19 Packers at Kansas City 31-24 <span className="text-green-700 text-xl">W</span></p>
                <p className="mb-2">12/16/18 Packers at Chicago 17-24 <span className="text-red-600 text-xl">L</span></p>
                <p className="mb-2">1/1/17 Packers at Detroit 31-24 <span className="text-green-700 text-xl">W</span></p>
                <p className="mb-2">9/11/16 Packers at Jacksonville 27-23 <span className="text-green-700 text-xl">W</span></p>
                <p className="mb-2">10/24/14 Packers at Miami 27-24 <span className="text-green-700 text-xl">W</span></p>
              </div>
            )}
          </div>

          {/* 2026 Schedule */}
          <div className="mt-8">
            <p className="text-green-700 text-xl mb-4">2026 Schedule</p>
            <img src={`${baseUrl}img/2026_schedule.JPG`} alt="2026 Schedule" className="w-full max-w-md rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tradition
