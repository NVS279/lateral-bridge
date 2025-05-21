import React, { useState } from 'react';
import { Calendar, Clock, MapPin, MessageSquare, UserCheck, Users, Star, Filter, ChevronDown, Search } from 'lucide-react';
import Card, { CardBody, CardHeader, CardFooter } from '../components/Card';
import Button from '../components/Button';

// Mock data
const mentors = [
  {
    id: 1,
    name: 'Rajiv Mehta',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    department: 'Computer Engineering',
    year: 'Senior',
    specialization: 'Programming, Data Structures, Algorithms',
    rating: 4.8,
    reviewCount: 24,
    availability: 'Weekdays, 4-6 PM',
    bio: 'I enjoy helping new students adapt to the university environment and excel in their technical courses. I have been mentoring for 2 years and specialize in programming fundamentals and data structures.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    department: 'Electrical Engineering',
    year: 'Final Year',
    specialization: 'Circuit Analysis, Electronics, Microcontrollers',
    rating: 4.5,
    reviewCount: 18,
    availability: 'Weekends, Flexible Hours',
    bio: 'As a lateral entry student myself, I understand the challenges you face. I focus on helping with core electrical engineering concepts and lab preparations. I believe in practical, hands-on learning.'
  },
  {
    id: 3,
    name: 'Arjun Reddy',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    department: 'Mechanical Engineering',
    year: 'Senior',
    specialization: 'Thermodynamics, Mechanics, CAD',
    rating: 4.7,
    reviewCount: 29,
    availability: 'Mon, Wed, Fri (Evening)',
    bio: 'I specialize in helping students understand complex mechanical engineering subjects through simplified explanations and visual aids. My mentees consistently improve their grades and understanding.'
  },
  {
    id: 4,
    name: 'Neha Gupta',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    department: 'Computer Science',
    year: 'Final Year',
    specialization: 'Web Development, Databases, Cloud Computing',
    rating: 4.9,
    reviewCount: 32,
    availability: 'Tue, Thu (Afternoon), Sat (Morning)',
    bio: 'I love demystifying computer science concepts for newcomers. My approach focuses on connecting theory with practical applications. I also provide guidance on industry projects and internships.'
  },
  {
    id: 5,
    name: 'Rohan Desai',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    department: 'Civil Engineering',
    year: 'Senior',
    specialization: 'Structural Analysis, Design, Materials',
    rating: 4.6,
    reviewCount: 15,
    availability: 'Weekday Mornings, Sunday',
    bio: 'I help students understand the fundamentals of civil engineering with a focus on structural analysis and design. I use real-world examples and case studies to make learning engaging and relevant.'
  },
  {
    id: 6,
    name: 'Anjali Patel',
    avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
    department: 'Electronics & Communication',
    year: 'Final Year',
    specialization: 'Signal Processing, Communication Systems',
    rating: 4.4,
    reviewCount: 12,
    availability: 'Weekends, Evening Hours',
    bio: 'I specialize in breaking down complex theories into understandable segments. My focus is on helping students develop intuition for electronic systems and communication principles.'
  }
];

const upcomingSessions = [
  {
    id: 1,
    mentorName: 'Rajiv Mehta',
    mentorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: '2025-07-17T15:00:00',
    topic: 'Introduction to Data Structures',
    location: 'Online (Zoom)',
    status: 'confirmed'
  },
  {
    id: 2,
    mentorName: 'Priya Sharma',
    mentorAvatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    date: '2025-07-20T11:00:00',
    topic: 'Circuit Analysis Fundamentals',
    location: 'Engineering Block, Room 204',
    status: 'pending'
  }
];

const MentorCard: React.FC<{mentor: typeof mentors[0]}> = ({ mentor }) => {
  return (
    <Card hover>
      <CardBody>
        <div className="flex flex-col md:flex-row items-start">
          <img 
            src={mentor.avatar} 
            alt={mentor.name} 
            className="w-20 h-20 rounded-full object-cover mr-4 mb-4 md:mb-0"
          />
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{mentor.name}</h3>
                <p className="text-sm text-gray-600">{mentor.department}, {mentor.year}</p>
              </div>
              <div className="flex items-center mt-2 md:mt-0">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span className="text-sm font-semibold">{mentor.rating}</span>
                <span className="text-xs text-gray-500 ml-1">({mentor.reviewCount} reviews)</span>
              </div>
            </div>
            
            <p className="text-sm font-medium text-gray-700 mt-3">Specializes in:</p>
            <p className="text-sm text-gray-600">{mentor.specialization}</p>
            
            <div className="flex items-center mt-3 text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-1 text-indigo-500" />
              <span>{mentor.availability}</span>
            </div>
            
            <p className="mt-3 text-sm text-gray-700">{mentor.bio}</p>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <Button variant="primary">Schedule Session</Button>
          <button className="mt-3 sm:mt-0 text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
            <MessageSquare className="w-4 h-4 mr-1" />
            Message
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

const PeerMentoringPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  
  const departments = ['All', 'Computer Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Electronics & Communication', 'Computer Science'];
  
  // Filter mentors based on search and department
  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDepartment = selectedDepartment === 'All' || mentor.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Peer Mentoring</h1>
        <p className="text-gray-600 mt-1">
          Connect with experienced senior students who can guide you through your academic journey.
        </p>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-indigo-50">
          <CardBody>
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-100 p-3 mr-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-indigo-700">Total Mentors</p>
                <p className="text-2xl font-bold text-indigo-900">50+</p>
              </div>
            </div>
          </CardBody>
        </Card>
        
        <Card className="bg-green-50">
          <CardBody>
            <div className="flex items-center">
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <UserCheck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-green-700">Successful Mentorships</p>
                <p className="text-2xl font-bold text-green-900">200+</p>
              </div>
            </div>
          </CardBody>
        </Card>
        
        <Card className="bg-orange-50">
          <CardBody>
            <div className="flex items-center">
              <div className="rounded-full bg-orange-100 p-3 mr-4">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-orange-700">Weekly Sessions</p>
                <p className="text-2xl font-bold text-orange-900">75+</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      
      {/* Upcoming Sessions */}
      {upcomingSessions.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Upcoming Sessions</h2>
          <div className="space-y-4">
            {upcomingSessions.map(session => (
              <Card key={session.id} className={session.status === 'confirmed' ? 'border-l-4 border-green-500' : 'border-l-4 border-yellow-500'}>
                <CardBody>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center">
                      <img 
                        src={session.mentorAvatar} 
                        alt={session.mentorName}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{session.topic}</h3>
                        <p className="text-sm text-gray-600">with {session.mentorName}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>
                          {new Date(session.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>
                          {new Date(session.date).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{session.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      {session.status === 'confirmed' ? (
                        <>
                          <Button size="sm">Join Now</Button>
                          <Button variant="outline" size="sm">Reschedule</Button>
                        </>
                      ) : (
                        <>
                          <Button size="sm">Confirm</Button>
                          <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                            Cancel
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      )}
      
      {/* Search and Filter */}
      <div className="mb-8">
        <Card>
          <CardBody>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <div className="relative flex-1 mb-4 md:mb-0">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name or specialization..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1 md:hidden">
                  Department
                </label>
                <div className="flex items-center">
                  <Filter className="h-5 w-5 text-gray-400 mr-2 hidden md:block" />
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      
      {/* Available Mentors */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Available Mentors</h2>
        
        {filteredMentors.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No mentors found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or check back later.
            </p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedDepartment('All');
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredMentors.map(mentor => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        )}
      </div>
      
      {/* How It Works */}
      <div className="mt-12 bg-indigo-50 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How Peer Mentoring Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Browse Mentors</h3>
            <p className="text-gray-600">
              Explore profiles of experienced senior students who excel in your areas of interest.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Schedule a Session</h3>
            <p className="text-gray-600">
              Book a time that works for both you and your mentor, either online or in-person.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Get Personalized Help</h3>
            <p className="text-gray-600">
              Receive guidance tailored to your specific needs, from academics to campus life adjustment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeerMentoringPage;