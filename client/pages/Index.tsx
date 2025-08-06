import { Calendar, MapPin, Trophy, Clock, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import MobileMenu from "../components/MobileMenu";

export default function Index() {
  const [currentSection, setCurrentSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "entertainment", "programs", "competitions", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF3DA] overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/727fbcdacb0299c724c7e8808c6350f86154c576?width=570" 
          alt="" 
          className="absolute top-[50%] left-[35%] w-64 h-64 opacity-20 transform rotate-12 animate-pulse"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/d2ebfed4b21dfdb3e0d3af4cd3e4fc2f56d47a49?width=570" 
          alt="" 
          className="absolute top-[65%] left-[10%] w-64 h-64 opacity-20 transform -rotate-45 animate-pulse delay-1000"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b361b3470d6227ed4e1dddad844cc32db150b4da?width=289" 
          alt="" 
          className="absolute top-[45%] right-[5%] w-32 h-40 opacity-20 transform rotate-12 animate-pulse delay-500"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d87fb2fac8836a3c1d7f1bef442e76232ebffadf?width=286"
                alt="ORANZA Logo"
                className="h-8 w-auto"
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "HOME" },
                { id: "entertainment", label: "ENTERTAINMENT" },
                { id: "programs", label: "PROGRAMS" },
                { id: "competitions", label: "COMPETITIONS" },
                { id: "contact", label: "CONTACT" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[#FFF6E2] font-medium text-lg transition-all ${
                    currentSection === item.id
                      ? "border-b-2 border-[#DA4A01] font-semibold"
                      : "hover:text-[#DA4A01]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-[#8B0000] to-[#FF6C00] text-[#FFF6E2] px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                Register Now
              </button>
            </div>

            <MobileMenu currentSection={currentSection} onNavigate={scrollToSection} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/471a125997bdfd27188a0210523853918450b8d5?width=3106')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-[#FFF6E2] mb-4 leading-tight">
            ORANZA - 2025
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#FFF6E2] mb-4 leading-tight">
            BUILDING BONDS BEYOND BUSINESS
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#FFF6E2] mb-8 lg:mb-12 uppercase">
            Management Fest
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 mb-8 lg:mb-12">
            <div className="flex items-center gap-3 bg-[#DA4A01]/30 backdrop-blur-md px-4 lg:px-6 py-3 rounded-full border-2 border-[#BA7451]/70">
              <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              <span className="text-white font-semibold text-sm lg:text-lg">Aug 22-23, 2025</span>
            </div>
            <div className="flex items-center gap-3 bg-[#DA4A01]/30 backdrop-blur-md px-4 lg:px-6 py-3 rounded-full border-2 border-[#BA7451]/70">
              <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              <span className="text-white font-semibold text-sm lg:text-lg text-center">Sacred Heart College, Thevera</span>
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment Zone */}
      <section id="entertainment" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DA4A01] mb-4">
              Entertainment Zone
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#BA7451] max-w-4xl mx-auto">
              Incredible experiences awaits you at ORANZA 2025 each designed to bring together passionate communities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Live Music",
                image: "https://api.builder.io/api/v1/image/assets/TEMP/ff3ccafbb9883be3758e346d045ab075ba93eedd?width=479"
              },
              {
                title: "E-Gaming Arena",
                image: "https://api.builder.io/api/v1/image/assets/TEMP/8a3e0ae020c447e03028dd58e3be9cad0059d142?width=479"
              },
              {
                title: "Anime Showcase",
                image: "https://api.builder.io/api/v1/image/assets/TEMP/360a52c2d039223c70a0f4e8ce9c097dc5e8ba17?width=479"
              },
              {
                title: "Auto Show",
                image: "https://api.builder.io/api/v1/image/assets/TEMP/4942836a4ac7e0016d8b4afc116ae27c9b79ed24?width=479"
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-[#E5A333]/60 backdrop-blur-sm rounded-xl p-4 lg:p-6 hover:scale-105 transition-transform duration-300 shadow-lg">
                  <div className="aspect-[4/3] mb-4 lg:mb-6 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-[#9B0E00] text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section id="programs" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DA4A01] mb-4">
              KEY PROGRAMS
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#BA7451]">
              Don't miss these events that define the ORANZA experience
            </p>
          </div>

          {/* Day 1 */}
          <div className="mb-16 lg:mb-20">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DA4A01] text-center mb-8 lg:mb-12">DAY 1</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
              {[
                {
                  title: "Registration",
                  description: "Registration for all the COMPETITIONS",
                  time: "9:00 AM - 10:00 AM",
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/ea812f75332d4b9b450ebc08e432e12913d04b59?width=394"
                },
                {
                  title: "Opening Ceremony",
                  description: "Chief guest",
                  time: "10:00 AM - 11:00 AM",
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/4141f90c2bf3425fb1414144334fe04d96ce44f7?width=394"
                },
                {
                  title: "Competitions",
                  description: "Akatsuki Minds, Attack On Assets, The Devil Fruit Den (Juniors)",
                  time: "11:15 AM - 3:30 PM",
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/b6df0e7855cf7787fd495b22e100f0b968e5dd58?width=394"
                },
                {
                  title: "Auto Show",
                  description: "Where machines meet madness – the ultimate auto vibe!",
                  time: "3:30 PM - 5:00 PM",
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/b6df0e7855cf7787fd495b22e100f0b968e5dd58?width=394"
                },
                {
                  title: "Live Music",
                  description: "Live tunes, loud vibes, unforgettable nights!",
                  time: "5:00 PM - 8:00 PM",
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/ff3ccafbb9883be3758e346d045ab075ba93eedd?width=479"
                }
              ].map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DA4A01] text-center mb-8 lg:mb-12">DAY 2</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
              {[
                {
                  title: "Registration",
                  description: "Registration for all the COMPETITIONS",
                  time: "9:00 AM - 10:00 AM",
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/28e6044c3fb8f9980f0af0a4d9fc512bb8fe88e8?width=394"
                },
                {
                  title: "Competitions",
                  description: "Shinigami Strategist, The Devil Fruit Den, My Marketing Academia, The Talent Alchemist",
                  time: "10:00 AM - 3:30 PM",
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/cde1d0b3514eb4c15b616a1e79bae89a46a2d46c?width=394"
                },
                {
                  title: "Rhythm Re:Born",
                  description: "Feel the rhythm, own the stage!",
                  time: "10:00 AM - 3:30 PM",
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/57a765b87a7c8784eb882f5fdabdd77b8e11d5f5?width=394"
                },
                {
                  title: "Fashion Shows",
                  description: "A runway of trends, talent, and timeless fashion!",
                  time: "6:00 PM - 6:30 PM",
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/b6df0e7855cf7787fd495b22e100f0b968e5dd58?width=394"
                },
                {
                  title: "Closing Ceremony",
                  description: "The final bow – thank you for being part of it!",
                  time: "6:30 PM - August 21",
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/ad63e0edeadcc3f91759367e6da23067d60b6985?width=394"
                }
              ].map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitions */}
      <section id="competitions" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DA4A01] mb-4">
              COMPETITIONS
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#BA7451] max-w-4xl mx-auto">
              Showcase your skills and complete for amazing prizes in our flagship competition
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {[
              {
                title: "Shinigami Strategist",
                description: "Think you've got what it takes to be the Best Manager? Prove your leadership, strategy, and decision-making under pressure",
                prizePool: "���15,000",
                deadline: "August 20, 2025",
                fee: "₹450"
              },
              {
                title: "The Talent Alchemist",
                description: "Step into the shoes of an HR exec — recruit, resolve, lead, and survive the chaos.",
                prizePool: "₹15,000",
                deadline: "August 20, 2025",
                fee: "₹600"
              },
              {
                title: "My Marketing Academia",
                description: "Bring your A-game as a marketing team — craft brands, chase trends, and sell the story with creativity, strategy, and serious consumer insight.",
                prizePool: "₹15,000",
                deadline: "August 20, 2025",
                fee: "₹600"
              },
              {
                title: "Attack On Assets",
                description: "From market swings to money moves, this is where finance teams rise or fall. Think fast, act smart, and let your numbers do the talking.",
                prizePool: "₹15,000",
                deadline: "August 20, 2025",
                fee: "₹600"
              },
              {
                title: "Akatsuki Minds Assemble",
                description: "Real domains. Real pressure. Put your team to the test across finance, marketing, ops, HR, and leadership — and earn the title of Best Management Team",
                prizePool: "₹15,000",
                deadline: "August 20, 2025",
                fee: "₹600"
              },
              {
                title: "The Devil Fruit Den (Juniors)",
                description: "High school innovators, your stage is set! Pitch your big idea to the sharks and make your mark early.",
                prizePool: "₹15,000",
                deadline: "August 20, 2025",
                fee: "₹600"
              },
              {
                title: "The Devil Fruit Den",
                description: "College hustlers, it's your time to shine! Present your boldest business idea and win over the sharks.",
                prizePool: "₹15,000",
                deadline: "August 20, 2025",
                fee: "₹600"
              },
              {
                title: "Rhythm Re:Born Dance Competition",
                description: "Multi-game tournament featuring League of Legends, Valorant and Counter-Strike",
                prizePool: "₹50,000",
                deadline: "August 20, 2025",
                fee: "₹2,000"
              }
            ].map((competition, index) => (
              <CompetitionCard key={index} {...competition} />
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-[#8B0000] to-[#FF6C00] text-[#FFF6E2] px-12 py-4 rounded-full text-2xl font-semibold hover:scale-105 transition-transform">
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* Spot Events Banner */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EFC376]/30 rounded-3xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#9B0E00] mb-4">
              🎯 Spot Events @ Oranza
            </h3>
            <p className="text-lg md:text-xl text-[#CC5215]">
              Get ready for adrenaline-pumping action and spontaneous fun with our specially curated Spot Events! Whether you're a gaming enthusiast, an anime lover, or a sports fanatic — we've got something just for you. Win exciting prizes and make every moment at Oranza unforgettable!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#FDD99B] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/96a757d89685a5fa4b51e267ce89eb7883b3b2bc?width=288" 
                alt="ORANZA Logo" 
                className="h-8 w-auto mb-8"
              />
              <div className="flex space-x-8">
                <div className="w-14 h-14 bg-[#DA4A01] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 2.078c-5.474 0-9.904 4.429-9.904 9.904s4.43 9.904 9.904 9.904 9.904-4.429 9.904-9.904-4.43-9.904-9.904-9.904zM2.113 11.982c5.474 0 9.904-4.43 9.904-9.904"/>
                  </svg>
                </div>
                <div className="w-14 h-14 bg-[#DA4A01] rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-[#AA410B] mb-6">Quick Links</h4>
              <div className="space-y-4">
                {["Home", "Entertainment Zones", "Programs", "Competition", "Registration"].map((link) => (
                  <div key={link} className="text-lg text-[#DA4A01] hover:text-[#AA410B] cursor-pointer">
                    {link}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-[#AA410B] mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-[#DA4A01]" />
                  <span className="text-lg text-[#DA4A01]">Sacred Heart College, Thevera</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-[#DA4A01]" />
                  <span className="text-lg text-[#DA4A01]">+91 9232-324</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-[#DA4A01]" />
                  <span className="text-lg text-[#DA4A01]">oranza2k25.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface EventCardProps {
  title: string;
  description: string;
  time: string;
  image: string;
}

function EventCard({ title, description, time, image }: EventCardProps) {
  return (
    <div className="bg-[#E5A333]/60 backdrop-blur-sm rounded-lg border-2 border-[#BA7451] shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="aspect-[4/3] relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-[#EFC376]/25 backdrop-blur-sm p-2 lg:p-3">
          <div className="flex items-center gap-2 text-white">
            <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
            <span className="text-xs lg:text-sm font-semibold">{time}</span>
          </div>
        </div>
      </div>
      <div className="p-3 lg:p-4">
        <h3 className="text-base lg:text-lg font-bold text-[#9B0E00] mb-2">{title}</h3>
        <p className="text-xs lg:text-sm text-[#DA4A01] leading-tight">{description}</p>
      </div>
    </div>
  );
}

interface CompetitionCardProps {
  title: string;
  description: string;
  prizePool: string;
  deadline: string;
  fee: string;
}

function CompetitionCard({ title, description, prizePool, deadline, fee }: CompetitionCardProps) {
  return (
    <div className="bg-[#E5A333]/60 backdrop-blur-sm rounded-lg p-6 border border-[#BA7451]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#9B0E00] mb-2">{title}</h3>
          <p className="text-[#DA4A01] mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <Trophy className="w-4 h-4 text-[#DA4A01]" />
              <span className="text-sm font-semibold text-[#DA4A01]">Prize Pool-{prizePool}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4 text-[#DA4A01]" />
              <span className="text-sm font-semibold text-[#DA4A01]">Registration Deadline - {deadline}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <svg className="w-4 h-4 text-[#DA4A01]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-sm font-semibold text-[#DA4A01]">Registration Fee - {fee}</span>
            </div>
          </div>
        </div>
        
        <div className="lg:flex-shrink-0">
          <button className="bg-transparent border-2 border-[#830303] text-[#9B0E00] px-6 py-2 rounded-lg font-semibold hover:bg-[#9B0E00] hover:text-white transition-colors">
            View Rules
          </button>
        </div>
      </div>
    </div>
  );
}
