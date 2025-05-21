import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Video, BookCheck, ArrowRight, Award, Lightbulb, Heart } from 'lucide-react';
import Button from '../components/Button';
import Card, { CardBody } from '../components/Card';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Bridging the Gap for Lateral Entry Students
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 mb-8">
                Connect, learn, and thrive with our community of students and mentors. We help you seamlessly integrate into college life.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/signup">
                  <Button variant="secondary" size="lg">
                    Join Our Community
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-indigo-700">
                    Already a Member? Login
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.pexels.com/photos/7972785/pexels-photo-7972785.jpeg" 
                alt="Students collaborating" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Help You Succeed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides all the resources and support you need to thrive in your academic journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card hover className="text-center">
              <CardBody>
                <div className="mx-auto w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Peer Mentoring</h3>
                <p className="text-gray-600 mb-4">
                  Connect with experienced senior students who can guide you through academic and social challenges.
                </p>
                <Link to="/peer-mentoring" className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardBody>
            </Card>
            
            <Card hover className="text-center">
              <CardBody>
                <div className="mx-auto w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Academic Support</h3>
                <p className="text-gray-600 mb-4">
                  Access study materials, notes, and resources tailored for lateral entry students to bridge knowledge gaps.
                </p>
                <Link to="/academic-support" className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardBody>
            </Card>
            
            <Card hover className="text-center">
              <CardBody>
                <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Video className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Resources</h3>
                <p className="text-gray-600 mb-4">
                  Watch tutorials, lectures, and explanatory videos on complex topics to enhance your understanding.
                </p>
                <Link to="/video-resources" className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardBody>
            </Card>
            
            <Card hover className="text-center">
              <CardBody>
                <div className="mx-auto w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                  <BookCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Forum</h3>
                <p className="text-gray-600 mb-4">
                  Join discussions, ask questions, and share your experiences with fellow lateral entry students.
                </p>
                <Link to="/community-forum" className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students who have successfully integrated into college life with our support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/32.jpg" 
                  alt="Student testimonial" 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold">Priya Sharma</h4>
                  <p className="text-gray-600">Computer Science, 3rd Year</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The peer mentoring program helped me catch up with the core CS concepts I missed. My mentor was always available to answer questions and guide me through difficult projects."
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/44.jpg" 
                  alt="Student testimonial" 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold">Rajesh Kumar</h4>
                  <p className="text-gray-600">Electronics Engineering, 2nd Year</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The academic resources and study materials bridged my knowledge gaps. I went from struggling in classes to becoming one of the top performers in just one semester!"
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="Student testimonial" 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold">Ananya Patel</h4>
                  <p className="text-gray-600">Mechanical Engineering, 4th Year</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The community forum introduced me to other lateral entry students. We formed a study group that evolved into lasting friendships. I no longer felt like an outsider."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-xl text-indigo-200">Active Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-xl text-indigo-200">Experienced Mentors</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-xl text-indigo-200">Video Resources</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-xl text-indigo-200">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Join Our Community?</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                      <Award className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Accelerated Integration</h3>
                    <p className="text-gray-600">
                      Our structured program helps you integrate into college life in weeks, not months or semesters.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-600">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Personalized Support</h3>
                    <p className="text-gray-600">
                      Get matched with mentors who understand your specific challenges and can provide tailored guidance.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                      <Heart className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Lifelong Community</h3>
                    <p className="text-gray-600">
                      Join a supportive network that stays with you throughout your academic journey and beyond.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/signup">
                  <Button variant="primary" size="lg">
                    Join Today
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5905448/pexels-photo-5905448.jpeg" 
                alt="Students in library" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 w-64">
                <div className="text-2xl font-bold text-indigo-600 mb-2">89%</div>
                <p className="text-gray-700">
                  of our lateral entry students report improved academic performance within one semester.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your College Experience?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our community today and get the support you need to excel academically and socially.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup">
              <Button variant="primary" size="lg">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;