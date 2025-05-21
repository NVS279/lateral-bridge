import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Video, MessageSquare, Calendar, BookCheck, Clock, TrendingUp, AlertTriangle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Card, { CardBody, CardHeader } from '../components/Card';
import Button from '../components/Button';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  // Mock data
  const upcomingEvents = [
    { id: 1, title: 'Welcome Session for New Lateral Entries', date: '2025-07-15T14:00:00', type: 'orientation' },
    { id: 2, title: 'Group Study: Data Structures', date: '2025-07-16T16:00:00', type: 'academic' },
    { id: 3, title: 'Campus Tour & Networking', date: '2025-07-18T10:00:00', type: 'social' },
  ];
  
  const pendingTasks = [
    { id: 1, title: 'Complete profile information', priority: 'high' },
    { id: 2, title: 'Book first mentoring session', priority: 'medium' },
    { id: 3, title: 'Fill out academic background survey', priority: 'high' },
  ];
  
  const recommendedResources = [
    { id: 1, title: 'Catching Up on Calculus 101', type: 'video', link: '/video-resources' },
    { id: 2, title: 'Engineering Graphics Fundamentals', type: 'document', link: '/academic-support' },
    { id: 3, title: 'Networking Tips for New Students', type: 'article', link: '/community-forum' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.name || 'Student'}!</h1>
        <p className="text-gray-600 mt-1">
          Your personalized dashboard to track progress and access resources.
        </p>
      </div>
      
      {/* Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Link to="/peer-mentoring">
          <Card hover className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white h-full">
            <CardBody className="flex flex-col items-center justify-center py-6">
              <Users className="h-10 w-10 mb-3" />
              <h3 className="text-lg font-semibold">Peer Mentoring</h3>
              <p className="text-indigo-100 text-sm text-center mt-1">
                Connect with experienced mentors
              </p>
            </CardBody>
          </Card>
        </Link>
        
        <Link to="/academic-support">
          <Card hover className="bg-gradient-to-br from-orange-500 to-orange-600 text-white h-full">
            <CardBody className="flex flex-col items-center justify-center py-6">
              <BookOpen className="h-10 w-10 mb-3" />
              <h3 className="text-lg font-semibold">Academic Support</h3>
              <p className="text-orange-100 text-sm text-center mt-1">
                Access study materials & resources
              </p>
            </CardBody>
          </Card>
        </Link>
        
        <Link to="/video-resources">
          <Card hover className="bg-gradient-to-br from-green-600 to-green-700 text-white h-full">
            <CardBody className="flex flex-col items-center justify-center py-6">
              <Video className="h-10 w-10 mb-3" />
              <h3 className="text-lg font-semibold">Video Resources</h3>
              <p className="text-green-100 text-sm text-center mt-1">
                Learn through explained concepts
              </p>
            </CardBody>
          </Card>
        </Link>
        
        <Link to="/community-forum">
          <Card hover className="bg-gradient-to-br from-purple-600 to-purple-700 text-white h-full">
            <CardBody className="flex flex-col items-center justify-center py-6">
              <MessageSquare className="h-10 w-10 mb-3" />
              <h3 className="text-lg font-semibold">Community Forum</h3>
              <p className="text-purple-100 text-sm text-center mt-1">
                Discuss and share experiences
              </p>
            </CardBody>
          </Card>
        </Link>
      </div>
      
      {/* Progress Overview */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Your Integration Progress</h2>
        <Card>
          <CardBody>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                <span className="text-sm font-medium text-gray-700">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Academic Integration</span>
                  <span className="text-sm font-medium text-gray-700">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Social Integration</span>
                  <span className="text-sm font-medium text-gray-700">35%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Resource Utilization</span>
                  <span className="text-sm font-medium text-gray-700">40%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      
      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <div className="divide-y divide-gray-200">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-start">
                      <div className={`
                        flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                        ${event.type === 'orientation' ? 'bg-blue-100 text-blue-600' : 
                          event.type === 'academic' ? 'bg-green-100 text-green-600' : 
                          'bg-orange-100 text-orange-600'}
                      `}>
                        {event.type === 'orientation' ? 
                          <BookCheck className="h-5 w-5" /> : 
                          event.type === 'academic' ? 
                          <BookOpen className="h-5 w-5" /> : 
                          <Users className="h-5 w-5" />
                        }
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-900">{event.title}</h4>
                        <div className="flex items-center mt-1 text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'short',
                            month: 'short', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 bg-gray-50 text-center">
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all events
                </button>
              </div>
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">My Mentorship</h3>
                <Users className="h-5 w-5 text-gray-400" />
              </div>
            </CardHeader>
            <CardBody>
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Mentor" 
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="text-base font-medium text-gray-900">Rajiv Mehta</h4>
                  <p className="text-sm text-gray-500">Senior, Computer Engineering</p>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">4.0/5.0</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <h5 className="text-sm font-medium text-gray-700 mb-2">Next Session:</h5>
                <p className="text-sm text-gray-900 mb-4">Friday, Jul 17, 2025 • 3:00 PM</p>
                <div className="flex space-x-3">
                  <Button size="sm" className="flex-1">
                    Reschedule
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Message
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        
        {/* Middle Column */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Tasks To Complete</h3>
                <AlertTriangle className="h-5 w-5 text-gray-400" />
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <div className="divide-y divide-gray-200">
                {pendingTasks.map(task => (
                  <div key={task.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">{task.title}</p>
                      </div>
                      <span className={`
                        text-xs font-medium px-2 py-1 rounded-full
                        ${task.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}
                      `}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 bg-gray-50 text-center">
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all tasks
                </button>
              </div>
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Recent Community Activity</h3>
                <MessageSquare className="h-5 w-5 text-gray-400" />
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <div className="divide-y divide-gray-200">
                <div className="p-4 hover:bg-gray-50">
                  <div className="flex">
                    <img 
                      src="https://randomuser.me/api/portraits/women/68.jpg" 
                      alt="User avatar" 
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Ananya Patel</p>
                      <p className="text-sm text-gray-500">Posted in "Transfer Credit Questions"</p>
                      <p className="mt-1 text-sm text-gray-600">
                        Has anyone successfully transferred credits from their diploma to reduce the course load?
                      </p>
                      <div className="mt-2 flex space-x-2">
                        <button className="text-xs text-gray-500 flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                          </svg>
                          12 likes
                        </button>
                        <button className="text-xs text-gray-500 flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                          </svg>
                          8 replies
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 hover:bg-gray-50">
                  <div className="flex">
                    <img 
                      src="https://randomuser.me/api/portraits/men/44.jpg" 
                      alt="User avatar" 
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Rajesh Kumar</p>
                      <p className="text-sm text-gray-500">Posted in "Study Groups"</p>
                      <p className="mt-1 text-sm text-gray-600">
                        Looking for study partners for the upcoming Digital Systems exam!
                      </p>
                      <div className="mt-2 flex space-x-2">
                        <button className="text-xs text-gray-500 flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                          </svg>
                          8 likes
                        </button>
                        <button className="text-xs text-gray-500 flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                          </svg>
                          15 replies
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-center">
                <Link to="/community-forum" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all discussions
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
        
        {/* Right Column */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Recommended Resources</h3>
                <TrendingUp className="h-5 w-5 text-gray-400" />
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <div className="divide-y divide-gray-200">
                {recommendedResources.map(resource => (
                  <Link key={resource.id} to={resource.link} className="block p-4 hover:bg-gray-50">
                    <div className="flex items-start">
                      <div className={`
                        flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                        ${resource.type === 'video' ? 'bg-red-100 text-red-600' : 
                          resource.type === 'document' ? 'bg-blue-100 text-blue-600' : 
                          'bg-purple-100 text-purple-600'}
                      `}>
                        {resource.type === 'video' ? 
                          <Video className="h-5 w-5" /> : 
                          resource.type === 'document' ? 
                          <BookOpen className="h-5 w-5" /> : 
                          <MessageSquare className="h-5 w-5" />
                        }
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-900">{resource.title}</h4>
                        <p className="mt-1 text-sm text-gray-500 capitalize">
                          {resource.type} Resource
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="px-4 py-3 bg-gray-50 text-center">
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all recommendations
                </button>
              </div>
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Your Integration Stats</h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Mentoring Sessions</span>
                    <span className="text-sm font-medium text-gray-700">2/8</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Resources Accessed</span>
                    <span className="text-sm font-medium text-gray-700">15/40</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '38%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Community Participation</span>
                    <span className="text-sm font-medium text-gray-700">5/20</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Events Attended</span>
                    <span className="text-sm font-medium text-gray-700">1/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-indigo-50 rounded-md">
                <p className="text-sm text-indigo-800">
                  <strong>Tip:</strong> Attending more social events will help you build a stronger network with your peers.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;