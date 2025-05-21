import React from 'react';
import { User, Mail, Calendar, Book, Bookmark, Settings, Award, MessageSquare, Clock, Edit, Camera, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Card, { CardBody, CardHeader } from '../components/Card';
import Button from '../components/Button';

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Profile</h1>
        <p className="text-gray-600 mt-1">
          Manage your profile information and track your progress.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-1">
          <Card>
            <div className="relative">
              <div className="h-32 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-t-lg"></div>
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <img 
                    src={user?.avatar || 'https://randomuser.me/api/portraits/men/32.jpg'} 
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white"
                  />
                  <button className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full text-white">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <CardBody className="pt-20 text-center">
              <h2 className="text-2xl font-bold text-gray-900">{user?.name || 'Demo User'}</h2>
              <p className="text-indigo-600 mb-4">Lateral Entry Student</p>
              
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Computer Science
                </div>
                <div className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  2nd Year
                </div>
              </div>
              
              <div className="space-y-4 text-left">
                <div className="flex items-center text-gray-700">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <span>{user?.email || 'demo@example.com'}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                  <span>Joined {user?.joinDate ? new Date(user.joinDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }) : 'July 10, 2023'}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Book className="h-5 w-5 text-gray-400 mr-3" />
                  <span>Diploma in Computer Engineering</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 text-gray-400 mr-3" />
                  <span>8.5 CGPA</span>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <Button
                  variant="outline"
                  fullWidth
                  className="flex items-center justify-center"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  className="flex items-center justify-center text-red-600 border-red-600 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </CardBody>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Your Badges</h3>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="bg-indigo-100 rounded-full p-3 mb-2">
                    <MessageSquare className="h-6 w-6 text-indigo-600" />
                  </div>
                  <span className="text-xs text-center">Active Contributor</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-green-100 rounded-full p-3 mb-2">
                    <Book className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-xs text-center">Resource Explorer</span>
                </div>
                <div className="flex flex-col items-center opacity-40">
                  <div className="bg-gray-100 rounded-full p-3 mb-2">
                    <Award className="h-6 w-6 text-gray-400" />
                  </div>
                  <span className="text-xs text-center">Mentor Champion</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        
        {/* Right Column - Activity & Settings */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Your Progress</h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Overall Integration</span>
                    <span className="text-sm font-medium text-gray-700">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Academic Resources Used</span>
                    <span className="text-sm font-medium text-gray-700">32%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Mentoring Sessions</span>
                    <span className="text-sm font-medium text-gray-700">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Community Participation</span>
                    <span className="text-sm font-medium text-gray-700">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>You haven't scheduled a mentoring session in the last 30 days. Regular mentoring can significantly improve your academic performance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            </CardHeader>
            <CardBody className="p-0">
              <div className="divide-y divide-gray-200">
                <div className="p-4 hover:bg-gray-50">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Book className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-900">
                        You accessed <span className="font-medium">Data Structures Guide</span>
                      </p>
                      <p className="text-xs text-gray-500 flex items-center mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        Yesterday at 4:30 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 hover:bg-gray-50">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-900">
                        You commented on <span className="font-medium">Transfer credit process</span> discussion
                      </p>
                      <p className="text-xs text-gray-500 flex items-center mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        2 days ago at 10:15 AM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 hover:bg-gray-50">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-900">
                        You scheduled a mentoring session with <span className="font-medium">Rajiv Mehta</span>
                      </p>
                      <p className="text-xs text-gray-500 flex items-center mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        3 days ago at 2:45 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 hover:bg-gray-50">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Bookmark className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-900">
                        You bookmarked <span className="font-medium">Circuit Analysis Fundamentals</span> video
                      </p>
                      <p className="text-xs text-gray-500 flex items-center mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        5 days ago at 9:20 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center bg-gray-50 border-t border-gray-200">
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all activity
                </button>
              </div>
            </CardBody>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Account Settings</h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                      <p className="text-xs text-gray-500">
                        Receive email notifications for new mentoring opportunities and resources
                      </p>
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input 
                      type="checkbox" 
                      name="toggle" 
                      id="toggle-email"
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
                    />
                    <label 
                      htmlFor="toggle-email" 
                      className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    ></label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Forum Notifications</p>
                      <p className="text-xs text-gray-500">
                        Receive notifications when someone replies to your posts
                      </p>
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input 
                      type="checkbox" 
                      name="toggle" 
                      id="toggle-forum"
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
                      defaultChecked
                    />
                    <label 
                      htmlFor="toggle-forum" 
                      className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    ></label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Profile Visibility</p>
                      <p className="text-xs text-gray-500">
                        Make your profile visible to other community members
                      </p>
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input 
                      type="checkbox" 
                      name="toggle" 
                      id="toggle-visibility"
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
                      defaultChecked
                    />
                    <label 
                      htmlFor="toggle-visibility" 
                      className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    ></label>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button fullWidth>
                  Save Settings
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;