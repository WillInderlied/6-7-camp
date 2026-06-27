import { useState } from 'react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { LiquidGlassButton } from '@/components/ui/liquid-glass-button'
import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion'
import SpotlightCard from '@/components/ui/spotlight-card'
import HeroOdysseyBg from '@/components/ui/hero-odyssey-bg'
import ScrollProgressBar from '@/components/ui/scroll-progress-bar'
import ParallaxLogoOverlay from '@/components/ui/parallax-logo-overlay'
import { TwentyFirstToolbar } from '@21st-extension/toolbar-react'
import { ReactPlugin } from '@21st-extension/react'
import infographicMain from '../Infographic/Infographic Final.png'

const CAMP_YEAR = 2026
const CAMP_START = new Date(CAMP_YEAR, 7, 4)
const CAMP_END = new Date(CAMP_YEAR, 7, 6)

function formatCampDates(start, end) {
  const month = start.toLocaleString('en-US', { month: 'long' })
  return `${month} ${start.getDate()}–${end.getDate()}`
}

const CAMP_DATES = formatCampDates(CAMP_START, CAMP_END)
const CAMP_DATES_WITH_YEAR = `${CAMP_DATES}, ${CAMP_YEAR}`
const CAMP_GRADES = 'Rising 4th–9th Graders'

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdQ-iyGScxepna0zUVHrnxeNGCUxH_o-8ViwidUaan17BvbKA/viewform?usp=dialog'

const LAUREN_AVATAR_URL = '/images/lauren-avatar.png'
const WILL_AVATAR_URL = '/images/will-avatar.png'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#faq', label: 'FAQs' },
]

const whatYouWillDo = [
  {
    title: 'Master Fundamentals',
    body: 'Build a flawless foundation with targeted shooting and passing drills.',
  },
  {
    title: 'Compete',
    body: 'Apply your skills immediately in fast-paced, friendly play.',
  },
  {
    title: 'Build a Routine',
    body: 'Learn exact daily wall-ball and footwork routines used by top athletes.',
  },
  {
    title: 'Train with D1 Players',
    body: 'Get direct coaching and real-time feedback from elite D1 players.',
  },
]

const sessionOneSchedule = [
  { time: '7:30-8:00 AM', activity: 'Check-In', note: 'Drop-off, gear check' },
  { time: '8:00-9:00 AM', activity: 'Warm-Up & Skills', note: 'Shooting, dodging, ball handling' },
  { time: '9:00-10:00 AM', activity: 'Competition', note: 'Fast-paced, friendly competitive games' },
]

const sessionTwoSchedule = [
  { time: '10:30-11:00 AM', activity: 'Check-In', note: 'Drop-off, gear check' },
  { time: '11:00 AM-12:00 PM', activity: 'Warm-Up & Skills', note: 'Shooting, dodging, ball handling' },
  { time: '12:00-1:00 PM', activity: 'Competition', note: 'Fast-paced, friendly competitive games' },
]

const laurenPlayerFieldNotes = [
  {
    year: '2026',
    summary:
      "Appeared in 20 games for the Wildcats and impacted multiple phases: first shot and ground ball at Boston College, two goals vs. Central Michigan, assists vs. Marquette and at Maryland, two ground balls at Oregon, goals at Penn State and vs. Rutgers, plus a shot in the national championship vs. North Carolina.",
  },
  {
    year: '2025',
    summary:
      'Appeared in 8 games, including the NCAA championship game. Logged goals vs. Canisius, Niagara, Marquette, USC, Rutgers, and in the Big Ten semifinal vs. Johns Hopkins, while adding assists vs. Boston College and Oregon and a draw control vs. Canisius.',
  },
  {
    year: '2024',
    summary:
      'Appeared in 7 games, including an NCAA quarterfinal vs. Penn. Made her collegiate debut vs. Marquette, scored a season-high two goals vs. Central Michigan, added three draw controls vs. UAlbany, and recorded a ground ball with a caused turnover vs. Rutgers.',
  },
]

const willPlayerFieldNotes = [
  {
    year: '2026',
    quote:
      '"highest level of self-knowledge ... combined academic and professional drive is rare ... howitzer of a shot." — Lars Tiffany (Coach)',
    bullets: [],
  },
  {
    year: '2025',
    quote:
      '"The time is coming for Will: he has found his true path for physical health and endurance. As one of our strongest and aggrandized athletes, Will is focusing on mobility and range of motion as opposed to raw numbers, and the progress is clear. Will provides us a powerful, downhill dodging threat that can cause a defense to start rotating as well as a cannon of a shot if he is not double-teamed." — Lars Tiffany (Coach)',
    bullets: [
      'Played in all 14 games, including nine starts, as an offensive midfielder.',
      'Finished the season with nine goals and three assists.',
      "His nine goals ranked third among the team's midfielders.",
      'Tallied a five-game goal streak from March 22 through April 19.',
      'Notched his first career man-up goal against Syracuse (March 29).',
      'Recorded his first career multi-goal effort with two goals at No. 8 North Carolina (April 5).',
      'Dished out a career-high two assists in a 13-8 win over Lafayette (April 19).',
    ],
  },
  {
    year: '2024',
    quote:
      '"Will has had his moments where the rest of us witness the power he possesses with both his straight-to-the-cage dodging and the heat he propels with his shot, both on the run and with room-and-time. Speaking of time, the time he has missed due to injury continues to add up unfortunately. But we are optimistic that moving forward, starting with this spring of 2024, Will can be full steam ahead. He has built up his comprehension due to 2 1/2 years of film study and meetings. Will and his teammates are so eager for less talk and more action!" — Lars Tiffany (Coach)',
    bullets: [
      'Scored one goal against Ohio State (Feb. 25).',
      'Appeared in 11 games as a midfielder.',
      'ACC Academic Honor Roll.',
      "Doyle Smith Award (Highest GPA) recipient at Virginia Men's Lacrosse annual banquet.",
    ],
  },
  {
    year: '2023',
    quote:
      '"Will is on the precipice of becoming an integral part of our team offense. After redshirting the 2022 season, Will has honed his body to health and is developing into a powerful dodger and accurate shooter. This Fall, Will proved time and time again that if he is given a small amount of space, he can hammer the ball home. And due to his own extensive training, he is doing such with both hands. Despite a lot of experience and accolades ahead of him on the depth chart to start the Fall, Will\'s progress demands opportunities." — Lars Tiffany (Coach)',
    bullets: [
      'Scored his first career goal against Richmond (March 4).',
      'Appeared in six games as a midfielder.',
      'ACC Academic Honor Roll.',
    ],
  },
  {
    year: '2022',
    quote:
      '"Absorbing a mountain of new information this fall as he has been employed at both the offensive and defensive ends of the field ... Dodges with a determination, and willingness to take a check on his way to the cage ... Blasts his shot on the run with impressive heat ... Will focus his time with Coach Kirwan and our offense in the upcoming spring." — Lars Tiffany (Coach)',
    bullets: ['Did not appear in any games.'],
  },
]

const faqs = [
  { q: 'Who is the 6-7 Camp for?', a: 'All experience levels are welcome.' },
  { q: 'What should my camper bring?', a: 'Lacrosse stick, cleats, water bottle, sunscreen. Loaner sticks available.' },
  { q: 'Is protective gear required?', a: 'We recommend a helmet, gloves, and cleats.' },
  { q: 'What happens if it rains?', a: 'Camp continues rain or shine. Stay tuned for severe weather.' },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200 py-5">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left group">
        <span className="text-lg font-medium text-slate-900 group-hover:text-sky-600 transition-colors">{q}</span>
        <span className={`text-2xl font-light text-slate-400 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <p className="min-h-0 text-slate-600 text-base leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

function CoachAvatar({ src, alt, initials }) {
  return (
    <div className="mx-auto inline-flex rounded-2xl bg-gradient-to-br from-sky-100 via-white to-blue-100 p-1.5 ring-1 ring-sky-200/70 shadow-[0_14px_35px_-20px_rgba(14,116,144,0.55)]">
      <div className="h-24 w-24 overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200 sm:h-28 sm:w-28">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top [filter:contrast(1.04)_saturate(1.05)]"
        />
      </div>
      <span className="sr-only">{initials}</span>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const faqData = faqs.map((item, index) => ({
    id: index + 1,
    question: item.q,
    answer: item.a,
  }))

  return (
    <div className="min-h-screen bg-[#fafbfc] font-sans text-slate-900 antialiased overflow-x-hidden selection:bg-sky-200 selection:text-sky-900">
      <ScrollProgressBar />
      <TwentyFirstToolbar config={{ plugins: [ReactPlugin] }} />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all">
        <a href="#top" className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 items-center gap-2 md:inline-flex">
          <img
            src="/camp-logo-isolated.png"
            alt="Six Seven Camps Phoenix logo"
            className="h-10 w-10 object-contain [filter:contrast(1.08)_saturate(1.08)_drop-shadow(0_1px_2px_rgba(15,23,42,0.2))]"
          />
          <span className="text-base font-semibold lowercase tracking-[0.01em] text-slate-800">
            sixsevencamps
          </span>
        </a>
        <nav className="relative mx-auto flex max-w-7xl items-center justify-center px-6 py-4 lg:px-12">
          {/* Center Nav */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-[15px] font-medium text-slate-600 hover:text-sky-600 transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="absolute right-6 hidden md:block lg:right-12">
            <LiquidGlassButton as="a" href={FORM_URL} target="_blank" className="!px-6 !py-2.5 !text-sm">
              Register Now
            </LiquidGlassButton>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="absolute right-6 p-2 text-slate-600 md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 shadow-lg md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-lg font-medium text-slate-900">
                  {l.label}
                </a>
              ))}
              <LiquidGlassButton as="a" href={FORM_URL} target="_blank" className="w-full text-center mt-2">
                Register Now
              </LiquidGlassButton>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="pt-24">
        
        {/* Flyhyer Style Hero */}
        <section className="relative w-full overflow-hidden py-20 text-center lg:py-32">
          <HeroOdysseyBg />
          <ParallaxLogoOverlay />
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-5 py-2 text-sm font-semibold text-sky-700 ring-1 ring-sky-200/50 mb-8">
            {CAMP_DATES_WITH_YEAR}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 mb-6">
            Learn From The <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Champs.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-slate-500 mb-10 font-light leading-relaxed">
            Train with 2026 ACC Champion, Will Inderlied, and 2026 National Champion, Lauren Archer, in an intensive 3-day lacrosse camp built to sharpen skills, build confidence, and have a blast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <LiquidGlassButton as="a" href={FORM_URL} target="_blank">
              Reserve Your Spot
            </LiquidGlassButton>
            <a href="#about" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-slate-700 font-medium bg-white border border-slate-200 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-all">
              Meet the Coaches
            </a>
          </div>

          {/* Main focus image shown full-frame */}
          <SpotlightCard
            className="mt-14 w-full max-w-5xl rounded-[2rem] border-slate-200 p-2 shadow-2xl"
            glowColor="56, 189, 248"
            radius="2rem"
          >
            <img src={infographicMain} alt="6-7 Camp infographic" className="w-full h-auto rounded-[1.5rem] object-contain" />
          </SpotlightCard>
          </div>
        </section>

        {/* About The Coaches */}
        <section id="about" className="scroll-mt-28 border-t border-slate-200 bg-gradient-to-b from-sky-50/60 via-white to-blue-50/40 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-16 max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">About The Coaches</p>
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Built by Champions</h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Learn from two high-level athletes who lead with competitive detail, communication, and game-tested habits.
              </p>
            </div>

            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
              <SpotlightCard
                className="space-y-8 rounded-3xl border-sky-100 bg-white p-6 shadow-[0_14px_40px_-22px_rgba(14,116,144,0.28)] sm:p-8"
                glowColor="56, 189, 248"
                radius="1.5rem"
              >
                <CoachAvatar
                  src={LAUREN_AVATAR_URL}
                  alt="Lauren Archer"
                  initials="LA"
                />
                <h2 className="mt-10 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                  Lauren Archer
                </h2>
                <p className="mt-10 mb-10 text-base leading-relaxed text-slate-600 sm:text-lg">
                  Lauren Archer joins camp staff with elite high school and collegiate success, bringing championship-tested
                  technical detail and a high-performance mindset to every session. She is about to enter her senior year and
                  plans to take a graduate year afterwards.
                </p>
                <div className="space-y-10">
                  <SpotlightCard className="rounded-2xl border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6" glowColor="96, 165, 250" radius="1rem">
                    <h3 className="mb-4 text-xl font-bold text-slate-900">Collegiate Career & Championships</h3>
                    <ul className="space-y-3 text-slate-700">
                      <li><span className="font-semibold text-slate-900">NCAA National Champion</span> | 2026</li>
                      <li><span className="font-semibold text-slate-900">Big Ten Conference Champion</span> | 2024, 2025, 2026</li>
                      <li><span className="font-semibold text-slate-900">NCAA National Championship Finalist</span> | 2024, 2025</li>
                    </ul>
                  </SpotlightCard>
                  <SpotlightCard className="rounded-2xl border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6" glowColor="96, 165, 250" radius="1rem">
                    <h3 className="mb-4 text-xl font-bold text-slate-900">High School Accolades & Leadership</h3>
                    <ul className="space-y-3 text-slate-700">
                      <li><span className="font-semibold text-slate-900">USA Lacrosse All-American</span> | 2023</li>
                      <li><span className="font-semibold text-slate-900">Jackie Pitts Award Winner</span> | 2023</li>
                      <li><span className="font-semibold text-slate-900">USA Lacrosse Academic All-American</span> | 2022</li>
                    </ul>
                  </SpotlightCard>
                  <SpotlightCard className="rounded-2xl border-slate-200 bg-white p-6" glowColor="96, 165, 250" radius="1rem">
                    <h3 className="mb-3 text-lg font-bold text-slate-900">The Jackie Pitts Award</h3>
                    <p className="leading-relaxed text-slate-600">
                      This honor recognizes seniors who elevate their team, school, and community while honoring the game.
                      It reflects Lauren&rsquo;s leadership both on and off the field.
                    </p>
                  </SpotlightCard>
                  <SpotlightCard className="rounded-2xl border-slate-200 bg-white p-6" glowColor="96, 165, 250" radius="1rem">
                    <h3 className="mb-5 text-lg font-bold text-slate-900">Player Field Notes</h3>
                    <div className="space-y-5">
                      {laurenPlayerFieldNotes.map((item) => (
                        <SpotlightCard key={item.year} className="rounded-xl border-sky-100 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm" glowColor="59, 130, 246" radius="0.75rem">
                          <p className="inline-flex rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 ring-1 ring-sky-200">{item.year}</p>
                          <p className="mt-2 leading-relaxed text-slate-700">{item.summary}</p>
                        </SpotlightCard>
                      ))}
                    </div>
                  </SpotlightCard>
                </div>
              </SpotlightCard>
              <SpotlightCard
                className="space-y-8 rounded-3xl border-sky-100 bg-white p-6 shadow-[0_14px_40px_-22px_rgba(14,116,144,0.28)] sm:p-8"
                glowColor="56, 189, 248"
                radius="1.5rem"
              >
                <CoachAvatar
                  src={WILL_AVATAR_URL}
                  alt="Will Inderlied"
                  initials="WI"
                />
                <h2 className="mt-10 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                  Will Inderlied
                </h2>
                <p className="mt-10 mb-10 text-base leading-relaxed text-slate-600 sm:text-lg">
                  Will combines elite on-field production with academic leadership, bringing clear instruction and high standards
                  to every rep and every player.
                </p>
                <div className="space-y-10">
                  <SpotlightCard className="rounded-2xl border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6" glowColor="96, 165, 250" radius="1rem">
                    <h3 className="mb-4 text-xl font-bold text-slate-900">High School Career</h3>
                    <ul className="space-y-3 text-slate-700">
                      <li><span className="font-semibold text-slate-900">TCIS Player of the Year</span> | 2021</li>
                      <li><span className="font-semibold text-slate-900">Team Captain & Team MVP</span> | Senior Year</li>
                      <li><span className="font-semibold text-slate-900">US Lacrosse Academic All-American</span></li>
                      <li><span className="font-semibold text-slate-900">FCA National Team</span> | Lake Placid and Vail</li>
                      <li><span className="font-semibold text-slate-900">Senior Season Production</span> | 43 goals, 22 assists</li>
                      <li><span className="font-semibold text-slate-900">VISAA First Team All-State</span></li>
                      <li><span className="font-semibold text-slate-900">Virginia All-Prep League</span></li>
                      <li><span className="font-semibold text-slate-900">First Team All-TCIS</span></li>
                    </ul>
                  </SpotlightCard>
                  <SpotlightCard className="rounded-2xl border-slate-200 bg-white p-6" glowColor="96, 165, 250" radius="1rem">
                    <h3 className="mb-3 text-lg font-bold text-slate-900">Academic Honors</h3>
                    <ul className="space-y-3 text-slate-700">
                      <li><span className="font-semibold text-slate-900">ACC Academic Honor Roll</span> | 2023-2024</li>
                      <li><span className="font-semibold text-slate-900">Doyle Smith Award Recipient</span> | Highest GPA at Virginia Men&rsquo;s Lacrosse annual banquet</li>
                    </ul>
                  </SpotlightCard>
                  <SpotlightCard className="rounded-2xl border-slate-200 bg-white p-6" glowColor="96, 165, 250" radius="1rem">
                    <h3 className="mb-5 text-lg font-bold text-slate-900">Player Field Notes & Timeline</h3>
                    <div className="space-y-5">
                      {willPlayerFieldNotes.map((item) => (
                        <SpotlightCard key={item.year} className="rounded-xl border-sky-100 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm" glowColor="59, 130, 246" radius="0.75rem">
                          <p className="inline-flex rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 ring-1 ring-sky-200">{item.year}</p>
                          <blockquote className="mt-3 border-l-2 border-sky-300 pl-4 text-slate-700 italic leading-relaxed">
                            {item.quote}
                          </blockquote>
                          {item.bullets.length > 0 && (
                            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                              {item.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                              ))}
                            </ul>
                          )}
                        </SpotlightCard>
                      ))}
                    </div>
                  </SpotlightCard>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </section>

        {/* The Approach */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 sticky top-32">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8">The 6-7 Approach</h2>
                <div className="text-lg text-slate-500 font-light leading-relaxed space-y-6">
                  <p>At 6-7 Camp, we believe training should be intensive, fun, personal, and carefully structured around building lasting skillsets.</p>
                  <p>Our 3-day lacrosse camp delivers <strong className="font-semibold text-slate-900">6 total hours</strong> of high-energy instruction, repetition, and competition broken into three daily, 2-hour sessions.</p>
                  <LiquidGlassButton as="a" href={FORM_URL} target="_blank" className="mt-4 inline-flex">
                    Join the Camp
                  </LiquidGlassButton>
                </div>
              </div>
              
              <div id="schedule" className="scroll-mt-28 lg:col-span-7 space-y-10">
                <div className="grid grid-cols-1 gap-y-10 xl:grid-cols-2 xl:gap-x-20">
                  <div>
                    <h3 className="mb-6 text-2xl font-bold text-slate-900 whitespace-nowrap">Session 1 - Elementary/Middle</h3>
                    {sessionOneSchedule.map((item, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="mt-1 w-32 shrink-0 text-right text-sm font-bold text-sky-600 whitespace-nowrap">{item.time}</div>
                        <div className="w-px bg-slate-200 relative">
                          <div className="absolute top-1.5 -left-1.5 w-3 h-3 rounded-full bg-sky-500 ring-4 ring-sky-50"></div>
                        </div>
                        <div className="min-w-0 pb-12">
                          <h4 className="mb-3 text-xl font-bold leading-tight tracking-tight text-slate-900">{item.activity}</h4>
                          <p className="text-slate-500 font-light text-base">{item.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3 className="mb-6 text-2xl font-bold text-slate-900 whitespace-nowrap">Session 2 - Middle/High</h3>
                    {sessionTwoSchedule.map((item, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="mt-1 w-32 shrink-0 text-right text-sm font-bold text-sky-600 whitespace-nowrap">{item.time}</div>
                        <div className="w-px bg-slate-200 relative">
                          <div className="absolute top-1.5 -left-1.5 w-3 h-3 rounded-full bg-sky-500 ring-4 ring-sky-50"></div>
                        </div>
                        <div className="min-w-0 pb-12">
                          <h4 className="mb-3 text-xl font-bold leading-tight tracking-tight text-slate-900">{item.activity}</h4>
                          <p className="text-slate-500 font-light text-base">{item.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Column USPs Grid */}
        <section className="border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-20 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {whatYouWillDo.map((h, i) => (
                <SpotlightCard
                  key={i}
                  className="rounded-2xl border-slate-200 p-5"
                  glowColor="96, 165, 250"
                  radius="1rem"
                >
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900">
                    <span className="h-2 w-2 rounded-full bg-sky-500"></span> {h.title}
                  </h3>
                  <p className="text-base font-light leading-relaxed text-slate-500">{h.body}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-slate-50 py-24 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-4xl">
              <ScrollFAQAccordion
                data={faqData}
                className="max-w-full h-auto py-0 text-left"
                questionClassName="bg-slate-100 text-slate-900"
                answerClassName="!bg-sky-500 text-white"
                enableScrollPin={false}
              />
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
