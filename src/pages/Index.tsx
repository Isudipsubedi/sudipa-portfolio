
import React from 'react';
import { Phone, Mail, Linkedin, Globe, Download, TrendingUp, Users, Award, BookOpen, Target, CheckCircle } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SmoothScroll />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800">SUDIPA SUBEDI</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
                SUDIPA
                <span className="block text-blue-600">SUBEDI</span>
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                BBA Graduate | Finance & Management Professional | Strategic Business Analyst
              </p>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Transforming financial challenges into strategic opportunities through data-driven insights and innovative management solutions. Ready to drive growth in dynamic banking and finance environments.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Download size={20} />
                  Download CV
                </button>
                <a href="#contact" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-slate-200 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gradient-to-br from-blue-600 to-slate-700 rounded-full flex items-center justify-center text-white text-8xl font-bold">
                  SS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A passionate BBA graduate with expertise in finance, management, and business analytics, ready to excel in challenging professional environments.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Professional Summary</h3>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                As a dedicated BBA graduate, I bring a unique combination of academic excellence and practical experience in financial management, business analysis, and strategic planning. My journey through diverse internships has equipped me with hands-on expertise in financial documentation, market research, and operational efficiency.
              </p>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                I am passionate about driving business growth, enhancing operational efficiency, and continuously adapting to dynamic business environments. My goal is to leverage my analytical skills and leadership experience to contribute meaningfully to the banking and finance sector.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-slate-800">Financial Analysis</h4>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-slate-800">Team Leadership</h4>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Key Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Hult Prize Runner-up</h4>
                    <p className="text-slate-600">Oxford College of Engineering and Management - OnCampus Event</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Executive Vice President</h4>
                    <p className="text-slate-600">Geetanagar Junior Jaycees (2024)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">College Ambassador</h4>
                    <p className="text-slate-600">Idea Studio Nepal - Kathmandu University</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">OCEM Sports Tournament</h4>
                    <p className="text-slate-600">Quiz Competition - 2nd Runner Up</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
            <p className="text-xl text-slate-600">Building expertise through diverse roles in finance and business management</p>
          </div>

          <div className="space-y-8">
            {/* Current Role */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Accountant</h3>
                  <h4 className="text-xl text-blue-600 font-semibold">B.B.R Construction Pvt. Ltd</h4>
                  <p className="text-slate-600">Bharatpur, Nepal</p>
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mt-4 lg:mt-0">
                  2025/02/05 - Present
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Maintained comprehensive daily financial records of labor salaries, material costs, and project activities using Excel and Tally</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Tracked construction expenditures and vendor payments for Gautam Buddha International Cricket Stadium</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Prepared regular financial reports ensuring budget compliance and audit readiness</span>
                </li>
              </ul>
            </div>

            {/* Internship 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Business Management Intern</h3>
                  <h4 className="text-xl text-blue-600 font-semibold">Comprehensive Business Management Nepal Pvt. Ltd.</h4>
                  <p className="text-slate-600">Bharatpur 12, Chitwan</p>
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mt-4 lg:mt-0">
                  2024/07/16 - 2025/01/13
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Gained hands-on experience in financial documentation and data entry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Observed and assisted in market research and business analysis tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Developed foundational skills in organizational behavior and operational workflows</span>
                </li>
              </ul>
            </div>

            {/* Internship 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Finance Intern</h3>
                  <h4 className="text-xl text-blue-600 font-semibold">Margadarshan Saccos</h4>
                  <p className="text-slate-600">Bharatpur, Chitwan</p>
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mt-4 lg:mt-0">
                  2022/11/10 - 2023/04/10
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Assisted in record-keeping for cooperative finance decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Shadowed team members to understand economic finance principles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Practiced basic bookkeeping and motivational strategies in teamwork</span>
                </li>
              </ul>
            </div>

            {/* Internship 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Assistant Accountant</h3>
                  <h4 className="text-xl text-blue-600 font-semibold">Narayani Readymix Concrete Pvt. Ltd.</h4>
                  <p className="text-slate-600">Bharatpur, Chitwan</p>
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mt-4 lg:mt-0">
                  2021/09/01 - 2022/10/01
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Helped manage daily financial transactions and ledger updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Learned to interpret financial data under supervision</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Core Competencies</h2>
            <p className="text-xl text-slate-600">A comprehensive skill set for modern finance and management challenges</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Financial Analysis</h3>
              <p className="text-slate-600">Advanced proficiency in financial modeling, data analysis, and reporting</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Team Leadership</h3>
              <p className="text-slate-600">Proven experience in leading teams and collaborative problem-solving</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Strategic Planning</h3>
              <p className="text-slate-600">Expertise in business strategy development and implementation</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Business Analytics</h3>
              <p className="text-slate-600">Strong analytical skills with knowledge of market research and data interpretation</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-semibold text-slate-800 mb-4">Core Areas</h4>
              <ul className="space-y-2 text-slate-700">
                <li>Financial Accounting</li>
                <li>Managerial Accounting</li>
                <li>Corporate Finance</li>
                <li>Economics</li>
                <li>Business Law</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-semibold text-slate-800 mb-4">Analytical Tools</h4>
              <ul className="space-y-2 text-slate-700">
                <li>MS Excel (Advanced)</li>
                <li>Tally</li>
                <li>PowerPoint</li>
                <li>Financial Modeling</li>
                <li>Data Analysis</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-semibold text-slate-800 mb-4">Business Skills</h4>
              <ul className="space-y-2 text-slate-700">
                <li>Financial Analysis</li>
                <li>Market Research</li>
                <li>Report Writing</li>
                <li>Data Interpretation</li>
                <li>Project Management</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-semibold text-slate-800 mb-4">Soft Skills</h4>
              <ul className="space-y-2 text-slate-700">
                <li>Problem-Solving</li>
                <li>Communication</li>
                <li>Presentation</li>
                <li>Team Collaboration</li>
                <li>Time Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Education & Certifications</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Bachelor of Business Administration</h3>
                  <h4 className="text-xl text-blue-600 font-semibold">Oxford College of Engineering and Management</h4>
                  <p className="text-slate-600">Gaidakot, Nawalparasi</p>
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Feb 2021 - Present
                </div>
              </div>
              <p className="text-slate-700 mb-4"><strong>Relevant Coursework:</strong></p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                <span>• Principles of Management</span>
                <span>• Financial Accounting</span>
                <span>• Business Economics</span>
                <span>• Marketing Management</span>
                <span>• Human Resource Management</span>
                <span>• Business Law</span>
                <span>• Organizational Behavior</span>
                <span>• Financial Management</span>
                <span>• Business Research Methods</span>
                <span>• Entrepreneurship Development</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">+2 Management</h3>
                  <h4 className="text-xl text-blue-600 font-semibold">Parijat English Boarding School</h4>
                  <p className="text-slate-600">Bharatpur, Chitwan</p>
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  2020 - 2022
                </div>
              </div>
              <p className="text-slate-700">Foundation in business management and analytical thinking</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Professional Certifications & Training</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Technical Certifications</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Proficiency in Office Package (78 hours / 2 months)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Beautician Training (3-months CTEVT)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>First Aid Training (Parijat English Boarding School)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Leadership Training</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Emcee Training (Geetanagar Junior Jaycees)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>LOM Officer's Training (Geetanagar Junior Jaycees)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>Painting and Pencil Art (Nepal Arts and Kollywood Kala Kendra)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-slate-300">Ready to contribute to your organization's success</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-lg text-slate-300 mb-8">
                I'm actively seeking opportunities in finance, banking, and management roles where I can apply my skills and contribute to organizational growth. Let's discuss how I can add value to your team.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-300">Phone</p>
                    <p className="text-xl">+977 9867746750</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-300">Email</p>
                    <p className="text-xl">sudipasubedi2024@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-300">LinkedIn</p>
                    <p className="text-xl">linkedin.com/in/sudipa subedi</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-300">Website</p>
                    <p className="text-xl">sudipasubedi.com.np</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Professional Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-600 p-4 rounded-lg text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <h4 className="font-semibold">Banking & Finance</h4>
                </div>
                <div className="bg-slate-600 p-4 rounded-lg text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-green-400" />
                  <h4 className="font-semibold">Management</h4>
                </div>
                <div className="bg-slate-600 p-4 rounded-lg text-center">
                  <Target className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                  <h4 className="font-semibold">Business Analysis</h4>
                </div>
                <div className="bg-slate-600 p-4 rounded-lg text-center">
                  <BookOpen className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <h4 className="font-semibold">Strategic Planning</h4>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-slate-300 mb-4">Available for immediate opportunities</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Sudipa Subedi. All rights reserved.</p>
            <p className="mt-2">Designed for professional excellence in finance and management</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
