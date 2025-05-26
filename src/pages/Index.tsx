
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Linkedin, Globe, Download, TrendingUp, Users, Award, BookOpen, Target, CheckCircle, Calendar, ArrowRight, Star, Quote, ChevronDown, Menu, X } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogPosts = [
    {
      title: "The Future of Digital Banking in Nepal",
      excerpt: "Exploring how fintech innovations are reshaping the banking landscape in emerging markets.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "Financial Literacy: A Key to Economic Growth",
      excerpt: "Understanding the critical role of financial education in personal and national development.",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
    },
    {
      title: "Leadership Lessons from Junior Jaycees",
      excerpt: "Key insights gained from leading teams and organizing community initiatives.",
      date: "Nov 10, 2024",
      readTime: "4 min read",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Ram Prasad Sharma",
      position: "Senior Manager, B.B.R Construction",
      content: "Sudipa's analytical skills and attention to detail in financial record-keeping have been exceptional. Her ability to manage complex construction project finances is remarkable.",
      rating: 5
    },
    {
      name: "Priya Adhikari",
      position: "Director, CBM Nepal",
      content: "A dedicated professional with strong business acumen. Sudipa consistently delivered high-quality work and showed great initiative in market research projects.",
      rating: 5
    },
    {
      name: "Bikash Thapa",
      position: "President, Geetanagar Junior Jaycees",
      content: "Sudipa's leadership as Executive Vice President was transformative. Her organizational skills and vision helped us achieve our community goals effectively.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <SmoothScroll />
      
      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isLoaded ? 'translate-y-0' : '-translate-y-full'} ${activeSection !== 'home' ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SUDIPA SUBEDI
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Skills', 'Blog', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-700'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 py-4 px-6 shadow-xl">
              {['Home', 'About', 'Experience', 'Skills', 'Blog', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block py-2 text-slate-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Dynamic Hero Section */}
      <section id="home" className="pt-20 pb-16 min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                  ✨ Available for Opportunities
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  SUDIPA
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  SUBEDI
                </span>
              </h1>
              
              <div className="text-xl text-slate-600 mb-4 font-medium">
                <span className="typing-effect">BBA Graduate • Finance Specialist • Strategic Leader</span>
              </div>
              
              <p className="text-lg text-slate-700 mb-8 leading-relaxed max-w-xl">
                Transforming financial challenges into strategic opportunities through 
                <span className="text-blue-600 font-semibold"> data-driven insights</span> and 
                <span className="text-purple-600 font-semibold"> innovative management solutions</span>. 
                Ready to drive growth in dynamic banking and finance environments.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Download size={20} />
                  <span>Download CV</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </button>
                <a href="#contact" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium">
                  Let's Connect
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">4+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">15+</div>
                  <div className="text-sm text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-1">5+</div>
                  <div className="text-sm text-slate-600">Certifications</div>
                </div>
              </div>
            </div>
            
            <div className={`flex justify-center transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <div className="w-80 h-80 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center text-white text-9xl font-bold shadow-inner">
                    SS
                  </div>
                </div>
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg animate-bounce">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg animate-bounce delay-1000">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div className="absolute top-1/2 -left-8 bg-white p-3 rounded-full shadow-lg animate-bounce delay-500">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">Get to know me</span>
            <h2 className="text-5xl font-bold text-slate-800 mb-4 mt-2">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-800 mb-6">Professional Journey</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                As a dedicated BBA graduate, I bring a unique combination of academic excellence and practical experience in financial management, business analysis, and strategic planning. My journey through diverse internships has equipped me with hands-on expertise in financial documentation, market research, and operational efficiency.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                I am passionate about driving business growth, enhancing operational efficiency, and continuously adapting to dynamic business environments. My goal is to leverage my analytical skills and leadership experience to contribute meaningfully to the banking and finance sector.
              </p>
              
              {/* Interactive Skills Preview */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: TrendingUp, title: "Financial Analysis", color: "blue" },
                  { icon: Users, title: "Team Leadership", color: "green" },
                  { icon: Target, title: "Strategic Planning", color: "purple" },
                  { icon: BookOpen, title: "Business Analytics", color: "pink" }
                ].map((skill, index) => (
                  <div key={skill.title} className={`group p-4 bg-${skill.color}-50 rounded-xl hover:bg-${skill.color}-100 transition-all duration-300 cursor-pointer transform hover:scale-105`}>
                    <skill.icon className={`w-8 h-8 text-${skill.color}-600 mb-2 group-hover:animate-pulse`} />
                    <h4 className="font-semibold text-slate-800 text-sm">{skill.title}</h4>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-800 mb-6">Key Achievements</h3>
              <div className="space-y-4">
                {[
                  { icon: Award, title: "Hult Prize Runner-up", desc: "Oxford College of Engineering and Management - OnCampus Event", color: "yellow" },
                  { icon: Target, title: "Executive Vice President", desc: "Geetanagar Junior Jaycees (2024)", color: "blue" },
                  { icon: BookOpen, title: "College Ambassador", desc: "Idea Studio Nepal - Kathmandu University", color: "green" },
                  { icon: CheckCircle, title: "OCEM Sports Tournament", desc: "Quiz Competition - 2nd Runner Up", color: "purple" }
                ].map((achievement, index) => (
                  <div key={achievement.title} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-pointer">
                    <div className={`p-3 bg-${achievement.color}-100 rounded-lg group-hover:scale-110 transition-transform`}>
                      <achievement.icon className={`w-6 h-6 text-${achievement.color}-600`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{achievement.title}</h4>
                      <p className="text-slate-600 text-sm">{achievement.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">My Journey</span>
            <h2 className="text-5xl font-bold text-slate-800 mb-4 mt-2">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            <div className="space-y-12">
              {/* Current Role */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8">
                  <div className="bg-white rounded-2xl shadow-xl p-8 ml-auto max-w-lg transform hover:scale-105 transition-all duration-300 border-l-4 border-blue-600">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800">Accountant</h3>
                        <h4 className="text-xl text-blue-600 font-semibold">B.B.R Construction Pvt. Ltd</h4>
                        <p className="text-slate-600">Bharatpur, Nepal</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Current</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-sm text-slate-500">2025/02/05 - Present</span>
                    </div>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">Financial record management using Excel and Tally for construction projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">Budget compliance monitoring for Gautam Buddha International Cricket Stadium</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Previous roles with alternating layout */}
              {[
                {
                  title: "Business Management Intern",
                  company: "Comprehensive Business Management Nepal Pvt. Ltd.",
                  location: "Bharatpur 12, Chitwan",
                  period: "2024/07/16 - 2025/01/13",
                  achievements: [
                    "Financial documentation and data entry expertise",
                    "Market research and business analysis",
                    "Organizational behavior and operational workflows"
                  ],
                  side: "right"
                },
                {
                  title: "Finance Intern",
                  company: "Margadarshan Saccos",
                  location: "Bharatpur, Chitwan",
                  period: "2022/11/10 - 2023/04/10",
                  achievements: [
                    "Cooperative finance record-keeping",
                    "Economic finance principles application",
                    "Bookkeeping and team collaboration"
                  ],
                  side: "left"
                },
                {
                  title: "Assistant Accountant",
                  company: "Narayani Readymix Concrete Pvt. Ltd.",
                  location: "Bharatpur, Chitwan",
                  period: "2021/09/01 - 2022/10/01",
                  achievements: [
                    "Daily financial transaction management",
                    "Financial data interpretation under supervision"
                  ],
                  side: "right"
                }
              ].map((job, index) => (
                <div key={index} className="relative flex items-center">
                  {job.side === "left" ? (
                    <>
                      <div className="flex-1 pr-8">
                        <div className="bg-white rounded-2xl shadow-xl p-8 ml-auto max-w-lg transform hover:scale-105 transition-all duration-300">
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold text-slate-800">{job.title}</h3>
                            <h4 className="text-xl text-blue-600 font-semibold">{job.company}</h4>
                            <p className="text-slate-600">{job.location}</p>
                          </div>
                          <div className="mb-4">
                            <span className="text-sm text-slate-500">{job.period}</span>
                          </div>
                          <ul className="space-y-2 text-slate-700">
                            {job.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="flex-1 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 pr-8"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="flex-1 pl-8">
                        <div className="bg-white rounded-2xl shadow-xl p-8 mr-auto max-w-lg transform hover:scale-105 transition-all duration-300">
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold text-slate-800">{job.title}</h3>
                            <h4 className="text-xl text-blue-600 font-semibold">{job.company}</h4>
                            <p className="text-slate-600">{job.location}</p>
                          </div>
                          <div className="mb-4">
                            <span className="text-sm text-slate-500">{job.period}</span>
                          </div>
                          <ul className="space-y-2 text-slate-700">
                            {job.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                                <span className="text-sm">{achievement}</span>
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

      {/* Interactive Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">What I Bring</span>
            <h2 className="text-5xl font-bold text-slate-800 mb-4 mt-2">Core Competencies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Skill Categories */}
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: TrendingUp, title: "Financial Analysis", desc: "Advanced proficiency in financial modeling and reporting", color: "blue", skills: ["Excel", "Tally", "Financial Modeling", "Budget Analysis"] },
              { icon: Users, title: "Team Leadership", desc: "Proven experience in leading teams and collaboration", color: "green", skills: ["Team Management", "Communication", "Project Coordination", "Conflict Resolution"] },
              { icon: Target, title: "Strategic Planning", desc: "Expertise in business strategy development", color: "purple", skills: ["Business Strategy", "Market Analysis", "Goal Setting", "Performance Tracking"] },
              { icon: BookOpen, title: "Business Analytics", desc: "Strong analytical skills with market research knowledge", color: "pink", skills: ["Data Analysis", "Market Research", "Report Writing", "Trend Analysis"] }
            ].map((category, index) => (
              <div key={category.title} className="group text-center">
                <div className={`bg-${category.color}-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 cursor-pointer`}>
                  <category.icon className={`w-10 h-10 text-${category.color}-600 group-hover:animate-pulse`} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">{category.title}</h3>
                <p className="text-slate-600 mb-4">{category.desc}</p>
                <div className="space-y-1">
                  {category.skills.map((skill, i) => (
                    <span key={i} className={`inline-block bg-${category.color}-50 text-${category.color}-700 text-xs px-2 py-1 rounded-full mr-1 mb-1`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Progress Bars */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Technical Proficiency</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { skill: "Financial Analysis", level: 95, color: "blue" },
                { skill: "MS Excel Advanced", level: 90, color: "green" },
                { skill: "Tally", level: 85, color: "purple" },
                { skill: "Market Research", level: 88, color: "pink" },
                { skill: "Report Writing", level: 92, color: "indigo" },
                { skill: "Team Leadership", level: 87, color: "yellow" }
              ].map((item, index) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-800">{item.skill}</span>
                    <span className="text-sm text-slate-600">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">Insights & Thoughts</span>
            <h2 className="text-5xl font-bold text-slate-800 mb-4 mt-2">Latest Blog Posts</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
              Sharing insights on finance, leadership, and business strategy from my professional journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">What Others Say</span>
            <h2 className="text-5xl font-bold text-slate-800 mb-4 mt-2">Testimonials</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                  <p className="text-slate-700 leading-relaxed italic pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-300 font-semibold text-lg">Ready to Collaborate</span>
            <h2 className="text-5xl font-bold mb-4 mt-2">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-xl text-slate-300 mt-6">Ready to contribute to your organization's success</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                I'm actively seeking opportunities in finance, banking, and management roles where I can apply my skills and contribute to organizational growth. Let's discuss how I can add value to your team.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "+977 9867746750", color: "blue" },
                  { icon: Mail, label: "Email", value: "sudipasubedi2024@gmail.com", color: "green" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sudipa subedi", color: "purple" },
                  { icon: Globe, label: "Website", value: "sudipasubedi.com.np", color: "pink" }
                ].map((contact, index) => (
                  <div key={contact.label} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className={`bg-${contact.color}-600 p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-300 text-sm">{contact.label}</p>
                      <p className="text-xl font-medium">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-3xl font-semibold mb-6">Professional Interests</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: TrendingUp, title: "Banking & Finance", color: "blue" },
                  { icon: Users, title: "Management", color: "green" },
                  { icon: Target, title: "Business Analysis", color: "purple" },
                  { icon: BookOpen, title: "Strategic Planning", color: "yellow" }
                ].map((interest, index) => (
                  <div key={interest.title} className="bg-white/10 p-4 rounded-xl text-center hover:bg-white/20 transition-colors cursor-pointer group">
                    <interest.icon className={`w-8 h-8 mx-auto mb-2 text-${interest.color}-400 group-hover:animate-pulse`} />
                    <h4 className="font-semibold text-sm">{interest.title}</h4>
                  </div>
                ))}
              </div>
              
              <div className="text-center space-y-4">
                <p className="text-slate-300">Available for immediate opportunities</p>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                SUDIPA SUBEDI
              </div>
              <p className="text-sm">
                BBA Graduate passionate about finance, management, and driving organizational success through strategic insights.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a></li>
                <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
                <li><a href="#blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Financial Analysis</li>
                <li>Business Strategy</li>
                <li>Market Research</li>
                <li>Team Leadership</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <Linkedin size={16} />
                </div>
                <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Mail size={16} />
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <Globe size={16} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center">
            <p>&copy; 2024 Sudipa Subedi. All rights reserved.</p>
            <p className="mt-2 text-sm">Designed for professional excellence in finance and management</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
