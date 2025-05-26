import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Linkedin,
  Globe,
  Download,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  Target,
  CheckCircle,
  Calendar,
  ArrowRight,
  Star,
  Quote,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  MapPin,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "education",
        "achievements",
        "blog",
        "testimonials",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const blogPosts = [
    {
      title: "The Future of Digital Banking in Nepal",
      excerpt:
        "Exploring how fintech innovations are reshaping the banking landscape in emerging markets.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Finance",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    },
    {
      title: "Financial Literacy: A Key to Economic Growth",
      excerpt:
        "Understanding the critical role of financial education in personal and national development.",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    },
    {
      title: "Leadership Lessons from Junior Jaycees",
      excerpt:
        "Key insights gained from leading teams and organizing community initiatives.",
      date: "Nov 10, 2024",
      readTime: "4 min read",
      category: "Leadership",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    },
  ];

  const testimonials = [
    {
      name: "Ram Prasad Sharma",
      position: "Senior Manager, B.B.R Construction",
      content:
        "Sudipa's analytical skills and attention to detail in financial record-keeping have been exceptional. Her ability to manage complex construction project finances is remarkable.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Priya Adhikari",
      position: "Director, CBM Nepal",
      content:
        "A dedicated professional with strong business acumen. Sudipa consistently delivered high-quality work and showed great initiative in market research projects.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Bikash Thapa",
      position: "President, Geetanagar Junior Jaycees",
      content:
        "Sudipa's leadership as Executive Vice President was transformative. Her organizational skills and vision helped us achieve our community goals effectively.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Hult Prize Runner-up",
      description:
        "Oxford College of Engineering and Management - OnCampus Event",
      year: "2024",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      title: "Executive Vice President",
      description: "Geetanagar Junior Jaycees - Leading community initiatives",
      year: "2024",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: BookOpen,
      title: "College Ambassador",
      description: "Idea Studio Nepal - Kathmandu University",
      year: "2023",
      color: "from-green-400 to-blue-500",
    },
    {
      icon: Target,
      title: "Quiz Competition Runner-up",
      description: "OCEM Sports Tournament - Academic Excellence",
      year: "2023",
      color: "from-pink-400 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-black dark:bg-gray-900 text-white relative overflow-hidden transition-colors duration-300">
      <SmoothScroll />

      {/* Cursor Follower */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-50 blur-sm"></div>
      </div>

      {/* Navigation - Fixed alignment issues */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isLoaded ? "translate-y-0" : "-translate-y-full"
        } ${
          activeSection !== "home"
            ? "bg-black/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo */}
            <div className="text-xl lg:text-2xl font-bold flex-shrink-0">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                SUDIPA SUBEDI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                "Education",
                "Achievements",
                "Blog",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-blue-400 group ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-white/80"
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-black/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl mt-4 py-6 px-8 border border-white/10 mb-4">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                "Education",
                "Achievements",
                "Blog",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 text-white/80 hover:text-blue-400 transition-colors border-b border-white/10 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-none">
                <span className="block text-white">SUDIPA</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  SUBEDI
                </span>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-300">
                    Available for Opportunities
                  </span>
                </div>
              </h1>

              <div className="text-lg sm:text-xl lg:text-2xl font-light mb-6 text-white/80">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                  BBA Graduate
                </span>
                <span className="mx-2">•</span>
                <span>Finance Specialist</span>
                <span className="mx-2">•</span>
                <span>Strategic Leader</span>
              </div>

              <p className="text-lg lg:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
                Transforming financial challenges into strategic opportunities
                through
                <span className="text-blue-400 font-semibold">
                  {" "}
                  data-driven insights
                </span>{" "}
                and
                <span className="text-purple-400 font-semibold">
                  {" "}
                  innovative management solutions
                </span>
                .
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <button className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105">
                  <Download size={20} />
                  <span className="font-semibold">Download Resume</span>
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={16}
                  />
                </button>
                <a
                  href="#contact"
                  className="border-2 border-white/20 hover:border-blue-400 px-8 py-4 rounded-2xl hover:bg-white/5 transition-all duration-300 font-semibold backdrop-blur-sm text-center"
                >
                  Let's Connect
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 lg:gap-8">
                {[
                  { number: "4+", label: "Years Experience" },
                  { number: "15+", label: "Projects Completed" },
                  { number: "5+", label: "Certifications" },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs lg:text-sm text-white/60 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`flex justify-center transform transition-all duration-1000 delay-500 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="relative">
                <div className="w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full relative overflow-hidden">
                  <div className="absolute inset-4 bg-black dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="text-6xl lg:text-8xl font-black text-white">
                      SS
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-full"></div>
                </div>

                {/* Floating Elements */}
                {[
                  {
                    icon: TrendingUp,
                    position: "top-0 right-8",
                    color: "blue",
                    delay: "0s",
                  },
                  {
                    icon: Award,
                    position: "bottom-0 left-8",
                    color: "purple",
                    delay: "0.5s",
                  },
                  {
                    icon: Users,
                    position: "top-1/2 left-0",
                    color: "pink",
                    delay: "1s",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`absolute ${item.position} transform translate-x-4 translate-y-4`}
                    style={{ animationDelay: item.delay }}
                  >
                    <div
                      className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 p-4 rounded-2xl shadow-2xl animate-bounce backdrop-blur-sm`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-white/50 font-medium">SCROLL</span>
            <ChevronDown className="w-5 h-5 text-white/50" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-semibold text-lg tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-6xl font-black text-white mb-6 mt-4">
              Professional Journey
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-white">
                  Driven by Excellence
                </h3>
                <p className="text-xl text-white/70 leading-relaxed">
                  As a dedicated BBA graduate, I bring a unique combination of
                  academic excellence and practical experience in financial
                  management, business analysis, and strategic planning.
                </p>
                <p className="text-xl text-white/70 leading-relaxed">
                  My journey through diverse internships has equipped me with
                  hands-on expertise in financial documentation, market
                  research, and operational efficiency optimization.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: TrendingUp,
                    title: "Financial Analysis",
                    desc: "Advanced modeling & reporting",
                    color: "blue",
                  },
                  {
                    icon: Users,
                    title: "Team Leadership",
                    desc: "Proven collaboration skills",
                    color: "purple",
                  },
                  {
                    icon: Target,
                    title: "Strategic Planning",
                    desc: "Business strategy development",
                    color: "pink",
                  },
                  {
                    icon: BookOpen,
                    title: "Market Research",
                    desc: "Data-driven insights",
                    color: "orange",
                  },
                ].map((skill, index) => (
                  <div
                    key={skill.title}
                    className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2">{skill.title}</h4>
                    <p className="text-sm text-white/60">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-8">
                  Core Values
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Innovation",
                      desc: "Embracing new technologies and methodologies",
                    },
                    {
                      title: "Integrity",
                      desc: "Maintaining highest ethical standards",
                    },
                    {
                      title: "Excellence",
                      desc: "Delivering quality in every project",
                    },
                    {
                      title: "Growth",
                      desc: "Continuous learning and development",
                    },
                  ].map((value, index) => (
                    <div key={value.title} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {value.title}
                        </h4>
                        <p className="text-white/60">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-semibold text-lg tracking-wider uppercase">
              Experience
            </span>
            <h2 className="text-6xl font-black text-white mb-6 mt-4">
              Professional Timeline
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-px bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500"></div>

            <div className="space-y-16">
              {[
                {
                  title: "Accountant",
                  company: "B.B.R Construction Pvt. Ltd",
                  location: "Bharatpur, Nepal",
                  period: "2025/02/05 - Present",
                  current: true,
                  achievements: [
                    "Financial record management using Excel and Tally for construction projects",
                    "Budget compliance monitoring for Gautam Buddha International Cricket Stadium",
                    "Streamlined financial documentation processes",
                  ],
                  side: "right",
                },
                {
                  title: "Business Management Intern",
                  company: "Comprehensive Business Management Nepal Pvt. Ltd.",
                  location: "Bharatpur 12, Chitwan",
                  period: "2024/07/16 - 2025/01/13",
                  achievements: [
                    "Financial documentation and data entry expertise",
                    "Market research and business analysis",
                    "Organizational behavior and operational workflows",
                  ],
                  side: "left",
                },
                {
                  title: "Finance Intern",
                  company: "Margadarshan Saccos",
                  location: "Bharatpur, Chitwan",
                  period: "2022/11/10 - 2023/04/10",
                  achievements: [
                    "Cooperative finance record-keeping",
                    "Economic finance principles application",
                    "Bookkeeping and team collaboration",
                  ],
                  side: "right",
                },
                {
                  title: "Assistant Accountant",
                  company: "Narayani Readymix Concrete Pvt. Ltd.",
                  location: "Bharatpur, Chitwan",
                  period: "2021/09/01 - 2022/10/01",
                  achievements: [
                    "Daily financial transaction management",
                    "Financial data interpretation under supervision",
                  ],
                  side: "left",
                },
              ].map((job, index) => (
                <div key={index} className="relative flex items-center">
                  {job.side === "left" ? (
                    <>
                      <div className="flex-1 pr-12">
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 ml-auto max-w-lg border border-white/10 hover:border-white/20 transition-all duration-300 group">
                          <div className="flex justify-between items-start mb-6">
                            <div>
                              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                {job.title}
                              </h3>
                              <h4 className="text-xl text-blue-400 font-semibold mt-1">
                                {job.company}
                              </h4>
                              <div className="flex items-center gap-2 text-white/60 mt-2">
                                <MapPin size={14} />
                                <span>{job.location}</span>
                              </div>
                            </div>
                            {job.current && (
                              <span className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                CURRENT
                              </span>
                            )}
                          </div>
                          <div className="mb-6">
                            <span className="text-sm text-white/50">
                              {job.period}
                            </span>
                          </div>
                          <ul className="space-y-3">
                            {job.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                <span className="text-white/80">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-black shadow-2xl"></div>
                      <div className="flex-1 pl-12"></div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 pr-12"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-4 border-black shadow-2xl"></div>
                      <div className="flex-1 pl-12">
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 mr-auto max-w-lg border border-white/10 hover:border-white/20 transition-all duration-300 group">
                          <div className="flex justify-between items-start mb-6">
                            <div>
                              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                {job.title}
                              </h3>
                              <h4 className="text-xl text-blue-400 font-semibold mt-1">
                                {job.company}
                              </h4>
                              <div className="flex items-center gap-2 text-white/60 mt-2">
                                <MapPin size={14} />
                                <span>{job.location}</span>
                              </div>
                            </div>
                            {job.current && (
                              <span className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                CURRENT
                              </span>
                            )}
                          </div>
                          <div className="mb-6">
                            <span className="text-sm text-white/50">
                              {job.period}
                            </span>
                          </div>
                          <ul className="space-y-3">
                            {job.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                <span className="text-white/80">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-semibold text-lg tracking-wider uppercase">
              Skills
            </span>
            <h2 className="text-6xl font-black text-white mb-6 mt-4">
              Core Competencies
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {[
                  {
                    skill: "Financial Analysis",
                    level: 95,
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    skill: "MS Excel Advanced",
                    level: 90,
                    color: "from-green-400 to-green-600",
                  },
                  {
                    skill: "Tally",
                    level: 85,
                    color: "from-purple-400 to-purple-600",
                  },
                  {
                    skill: "Market Research",
                    level: 88,
                    color: "from-pink-400 to-pink-600",
                  },
                  {
                    skill: "Report Writing",
                    level: 92,
                    color: "from-orange-400 to-orange-600",
                  },
                  {
                    skill: "Team Leadership",
                    level: 87,
                    color: "from-teal-400 to-teal-600",
                  },
                ].map((item, index) => (
                  <div key={item.skill} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {item.skill}
                      </span>
                      <span className="text-sm text-white/60">
                        {item.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Professional Skills
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: TrendingUp,
                    title: "Financial Planning",
                    desc: "Strategic budgeting & forecasting",
                  },
                  {
                    icon: Users,
                    title: "Team Management",
                    desc: "Leadership & collaboration",
                  },
                  {
                    icon: Target,
                    title: "Project Management",
                    desc: "Efficient execution & delivery",
                  },
                  {
                    icon: BookOpen,
                    title: "Business Analysis",
                    desc: "Data-driven decision making",
                  },
                  {
                    icon: Award,
                    title: "Quality Assurance",
                    desc: "Attention to detail & accuracy",
                  },
                  {
                    icon: Briefcase,
                    title: "Client Relations",
                    desc: "Professional communication",
                  },
                ].map((skill, index) => (
                  <div
                    key={skill.title}
                    className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {skill.title}
                    </h4>
                    <p className="text-sm text-white/60">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-semibold text-lg tracking-wider uppercase">
              Education
            </span>
            <h2 className="text-6xl font-black text-white mb-6 mt-4">
              Academic Excellence
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Bachelor of Business Administration (BBA)
                  </h3>
                  <p className="text-xl text-blue-400 font-semibold">
                    Oxford College of Engineering and Management
                  </p>
                  <p className="text-white/60">
                    Affiliated to Kathmandu University
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Specializations
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Financial Management",
                      "Banking & Finance",
                      "Business Strategy",
                      "Market Analysis",
                      "Organizational Behavior",
                    ].map((spec, index) => (
                      <li key={spec} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <span className="text-white/80">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Key Coursework
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Financial Accounting",
                      "Business Analytics",
                      "Corporate Finance",
                      "Marketing Management",
                      "Operations Management",
                    ].map((course, index) => (
                      <li key={course} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span className="text-white/80">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-semibold text-lg tracking-wider uppercase">
              Achievements
            </span>
            <h2 className="text-6xl font-black text-white mb-6 mt-4">
              Recognition & Awards
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {achievement.title}
                      </h3>
                      <span className="text-sm font-semibold text-white/60 bg-white/10 px-3 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-white/70 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-semibold text-lg tracking-wider uppercase">
              Blog
            </span>
            <h2 className="text-6xl font-black text-white mb-6 mt-4">
              Latest Insights
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-xl text-white/60 mt-8 max-w-3xl mx-auto">
              Sharing thoughts on finance, leadership, and business strategy
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-blue-400 font-semibold hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl font-semibold">
              View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-semibold text-lg tracking-wider uppercase">
              Testimonials
            </span>
            <h2 className="text-6xl font-black text-white mb-6 mt-4">
              What Others Say
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <div className="relative mb-8">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-400/30" />
                  <p className="text-white/80 leading-relaxed italic pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-white/60">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-semibold text-lg tracking-wider uppercase">
              Contact
            </span>
            <h2 className="text-6xl font-black text-white mb-6 mt-4">
              Let's Connect
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-xl text-white/60 mt-8">
              Ready to contribute to your organization's success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl font-semibold text-white mb-8">
                Get In Touch
              </h3>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                I'm actively seeking opportunities in finance, banking, and
                management roles where I can apply my skills and contribute to
                organizational growth.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+977 9867746750",
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "sudipasubedi2024@gmail.com",
                    color: "from-green-400 to-green-600",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "linkedin.com/in/sudipa-subedi",
                    color: "from-purple-400 to-purple-600",
                  },
                  {
                    icon: Globe,
                    label: "Website",
                    value: "sudipasubedi.com.np",
                    color: "from-pink-400 to-pink-600",
                  },
                ].map((contact, index) => (
                  <div
                    key={contact.label}
                    className="group flex items-center gap-6 p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer"
                  >
                    <div
                      className={`bg-gradient-to-r ${contact.color} p-4 rounded-xl group-hover:scale-110 transition-transform`}
                    >
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">
                        {contact.label}
                      </p>
                      <p className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10">
              <h3 className="text-3xl font-semibold text-white mb-8">
                Professional Interests
              </h3>
              <div className="grid grid-cols-2 gap-6 mb-12">
                {[
                  {
                    icon: TrendingUp,
                    title: "Banking & Finance",
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    icon: Users,
                    title: "Management",
                    color: "from-green-400 to-green-600",
                  },
                  {
                    icon: Target,
                    title: "Business Analysis",
                    color: "from-purple-400 to-purple-600",
                  },
                  {
                    icon: BookOpen,
                    title: "Strategic Planning",
                    color: "from-orange-400 to-orange-600",
                  },
                ].map((interest, index) => (
                  <div
                    key={interest.title}
                    className="bg-white/5 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors cursor-pointer group"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${interest.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <interest.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">
                      {interest.title}
                    </h4>
                  </div>
                ))}
              </div>

              <div className="text-center space-y-6">
                <p className="text-white/60">
                  Available for immediate opportunities
                </p>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 font-semibold">
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
                SUDIPA SUBEDI
              </div>
              <p className="text-white/60 leading-relaxed">
                BBA Graduate passionate about finance, management, and driving
                organizational success through strategic insights.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {["About", "Experience", "Skills", "Education", "Blog"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-white/60 hover:text-blue-400 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li>Financial Analysis</li>
                <li>Business Strategy</li>
                <li>Market Research</li>
                <li>Team Leadership</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Connect</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, color: "from-blue-500 to-blue-600" },
                  { icon: Mail, color: "from-green-500 to-green-600" },
                  { icon: Globe, color: "from-purple-500 to-purple-600" },
                ].map((social, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer`}
                  >
                    <social.icon size={18} className="text-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/60">
              &copy; 2024 Sudipa Subedi. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-white/40">
              Designed for professional excellence in finance and management
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
