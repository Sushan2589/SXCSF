import React from 'react'

const Card = () => {
  return (
    <div>
       {/* Why Participate Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Innovate",
              desc: "Bring your wildest ideas to life. The fest is a stage for creativity and real-world problem solving.",
              emoji: "💡",
            },
            {
              title: "Collaborate",
              desc: "Work with peers, form teams, and build something greater than what you could alone.",
              emoji: "🤝",
            },
            {
              title: "Learn & Grow",
              desc: "Attend workshops, see demos, and get inspired by science and tech in action.",
              emoji: "📚",
            },
            {
              title: "Get Recognized",
              desc: "Win awards, gain recognition, and build confidence through public presentation.",
              emoji: "🏆",
            },
            {
              title: "Network",
              desc: "Meet like-minded students, educators, and professionals who can guide your journey.",
              emoji: "🌐",
            },
            {
              title: "Have Fun!",
              desc: "Science is serious fun. Explore booths, engage with exhibits, and enjoy the fest vibe.",
              emoji: "🎉",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#2a2824] p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{card.emoji}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Card
