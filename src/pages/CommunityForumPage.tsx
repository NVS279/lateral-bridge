import React, { useState } from 'react';
import { MessageSquare, Search, Filter, ChevronDown, Users, ThumbsUp, MessageCircle, Clock, Tag, UserPlus, ChevronUp, ChevronRight, AlertCircle } from 'lucide-react';
import Card, { CardBody, CardHeader, CardFooter } from '../components/Card';
import Button from '../components/Button';
import { useAuth } from '../contexts/AuthContext';

// Mock data
const categories = [
  'All Categories',
  'Academic Discussion',
  'Campus Life',
  'Transfer Credits',
  'Study Groups',
  'Projects & Assignments',
  'Career Guidance',
  'Technical Questions',
  'Course Selection',
  'Lateral Entry Experience'
];

const discussions = [
  {
    id: 1,
    title: 'How to cope with the fast-paced curriculum as a lateral entry student?',
    category: 'Lateral Entry Experience',
    author: {
      name: 'Ankit Patel',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      role: 'Lateral Entry Student'
    },
    createdAt: '2023-07-15T10:30:00',
    content: 'I recently joined the Computer Science program through lateral entry, and I\'m finding it challenging to keep up with the pace. The professors seem to assume we already know certain concepts that weren\'t covered in my diploma. Any tips from those who\'ve been through this?',
    likes: 24,
    replies: 8,
    views: 135,
    isHot: true,
    isPinned: false
  },
  {
    id: 2,
    title: 'Transfer credit process for diploma courses - What worked for you?',
    category: 'Transfer Credits',
    author: {
      name: 'Priya Sharma',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      role: 'Lateral Entry Student'
    },
    createdAt: '2023-07-12T14:15:00',
    content: 'I\'m trying to get credits transferred from my diploma to reduce my course load. Has anyone successfully done this? Which courses were easily transferable and which ones were rejected? Any advice on making the process smoother?',
    likes: 32,
    replies: 15,
    views: 210,
    isHot: true,
    isPinned: true
  },
  {
    id: 3,
    title: 'Looking for study partners for Digital Electronics',
    category: 'Study Groups',
    author: {
      name: 'Rajesh Kumar',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      role: 'Lateral Entry Student'
    },
    createdAt: '2023-07-10T16:45:00',
    content: 'I\'m looking for study partners for the upcoming Digital Electronics exam. I\'m particularly struggling with sequential circuits and flip-flops. Anyone interested in forming a study group? We could meet in the library or online.',
    likes: 18,
    replies: 12,
    views: 95,
    isHot: false,
    isPinned: false
  },
  {
    id: 4,
    title: 'Recommended electives for lateral entry Mechanical Engineering students',
    category: 'Course Selection',
    author: {
      name: 'Arjun Reddy',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
      role: 'Senior Student'
    },
    createdAt: '2023-07-08T09:20:00',
    content: 'I\'m a senior mechanical engineering student and I\'ve mentored several lateral entry students. Based on my experience, here are some electives that complement the diploma background and help bridge knowledge gaps: 1. Advanced Manufacturing Processes, 2. Computational Fluid Dynamics, 3. Robotics & Automation. Any other recommendations?',
    likes: 45,
    replies: 22,
    views: 280,
    isHot: true,
    isPinned: true
  },
  {
    id: 5,
    title: 'Social integration challenges - How to make friends when joining in the middle?',
    category: 'Campus Life',
    author: {
      name: 'Neha Gupta',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      role: 'Lateral Entry Student'
    },
    createdAt: '2023-07-05T11:30:00',
    content: 'I joined as a lateral entry student last semester, and while the academics are manageable, I\'m finding it difficult to integrate socially. Most students already have their friend groups from first year. How have others overcome this? Any clubs or activities particularly welcoming to mid-way entrants?',
    likes: 38,
    replies: 25,
    views: 220,
    isHot: false,
    isPinned: false
  },
  {
    id: 6,
    title: 'Database Management System project ideas for lateral entry students',
    category: 'Projects & Assignments',
    author: {
      name: 'Rahul Verma',
      avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
      role: 'Lateral Entry Student'
    },
    createdAt: '2023-07-02T15:40:00',
    content: 'I need to come up with a project idea for my DBMS course. Looking for something that would showcase my skills but is also manageable given I\'m still catching up on some fundamentals. Any ideas or examples of successful projects from other lateral entry students?',
    likes: 26,
    replies: 18,
    views: 175,
    isHot: false,
    isPinned: false
  },
  {
    id: 7,
    title: 'How to approach professors about academic gaps from diploma to degree transition',
    category: 'Academic Discussion',
    author: {
      name: 'Ananya Patel',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      role: 'Lateral Entry Student'
    },
    createdAt: '2023-06-28T13:15:00',
    content: 'I\'ve noticed some knowledge gaps between my diploma curriculum and what\'s expected in my current courses. How have others approached professors about this? Are they generally understanding? Any tips for explaining your situation without sounding like you\'re making excuses?',
    likes: 42,
    replies: 30,
    views: 245,
    isHot: true,
    isPinned: false
  },
  {
    id: 8,
    title: 'Internship opportunities for lateral entry students',
    category: 'Career Guidance',
    author: {
      name: 'Suresh Patel',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      role: 'Recent Graduate'
    },
    createdAt: '2023-06-25T10:50:00',
    content: 'For lateral entry students looking for internships, I wanted to share my experience. Many companies have specific programs for diploma holders transitioning to degrees. Here are some tips: highlight your practical experience from diploma, mention your unique perspective, and leverage the career center\'s lateral entry resources. Has anyone else found good opportunities?',
    likes: 53,
    replies: 35,
    views: 310,
    isHot: true,
    isPinned: false
  }
];

interface DiscussionCardProps {
  discussion: typeof discussions[0];
}

const DiscussionCard: React.FC<DiscussionCardProps> = ({ discussion }) => {
  return (
    <Card hover className={discussion.isPinned ? 'border-l-4 border-indigo-500' : ''}>
      <CardBody>
        <div className="flex items-start">
          <img 
            src={discussion.author.avatar} 
            alt={discussion.author.name}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                  {discussion.title}
                </h3>
                <div className="flex items-center mt-1 space-x-4">
                  <div className="text-sm text-gray-600">
                    {discussion.author.name} · <span className="text-gray-500">{discussion.author.role}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {new Date(discussion.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                {discussion.isPinned && (
                  <div className="mr-2 text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                    Pinned
                  </div>
                )}
                {discussion.isHot && (
                  <div className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                    Hot
                  </div>
                )}
              </div>
            </div>
            
            <p className="mt-3 text-gray-700 line-clamp-2">
              {discussion.content}
            </p>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="flex space-x-6">
                <div className="flex items-center text-gray-500 text-sm">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  {discussion.likes}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {discussion.replies} replies
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Tag className="h-4 w-4 mr-1" />
                  {discussion.category}
                </div>
              </div>
              <Button variant="outline" size="sm">
                View Discussion
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const CommunityForumPage: React.FC = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('newest');
  
  // Filter discussions based on search and category
  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = 
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || discussion.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort discussions
  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    
    if (sortBy === 'newest') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sortBy === 'popular') {
      return b.likes - a.likes;
    } else if (sortBy === 'active') {
      return b.replies - a.replies;
    }
    
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Community Forum</h1>
        <p className="text-gray-600 mt-1">
          Engage with fellow students, share experiences, and get support from the community.
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
                <p className="text-sm text-indigo-700">Community Members</p>
                <p className="text-2xl font-bold text-indigo-900">500+</p>
              </div>
            </div>
          </CardBody>
        </Card>
        
        <Card className="bg-orange-50">
          <CardBody>
            <div className="flex items-center">
              <div className="rounded-full bg-orange-100 p-3 mr-4">
                <MessageSquare className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-orange-700">Active Discussions</p>
                <p className="text-2xl font-bold text-orange-900">125+</p>
              </div>
            </div>
          </CardBody>
        </Card>
        
        <Card className="bg-green-50">
          <CardBody>
            <div className="flex items-center">
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-green-700">Replies This Week</p>
                <p className="text-2xl font-bold text-green-900">350+</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      
      {/* Create New Discussion */}
      <div className="mb-8">
        <Card>
          <CardBody>
            <div className="flex items-center space-x-4">
              <img 
                src={user?.avatar || 'https://randomuser.me/api/portraits/men/32.jpg'} 
                alt="Your avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Start a new discussion or ask a question..."
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <Button>Create Post</Button>
            </div>
          </CardBody>
        </Card>
      </div>
      
      {/* Search and Filter */}
      <div className="mb-8">
        <Card>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search discussions..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1 md:hidden">
                  Category
                </label>
                <div className="flex items-center">
                  <Filter className="h-5 w-5 text-gray-400 mr-2 hidden md:block" />
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1 md:hidden">
                  Sort By
                </label>
                <div className="flex items-center">
                  <Filter className="h-5 w-5 text-gray-400 mr-2 hidden md:block" />
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="newest">Newest First</option>
                    <option value="popular">Most Popular</option>
                    <option value="active">Most Active</option>
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
      
      {/* Popular Categories */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {['Academic Discussion', 'Transfer Credits', 'Study Groups', 'Lateral Entry Experience'].map(category => (
            <button 
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`p-4 rounded-lg text-center hover:shadow-md transition-shadow duration-200 ${
                selectedCategory === category 
                  ? 'bg-indigo-100 border-2 border-indigo-500' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className={`rounded-full p-3 mb-3 ${
                  selectedCategory === category ? 'bg-indigo-200' : 'bg-gray-100'
                }`}>
                  {category === 'Academic Discussion' ? (
                    <BookOpen className={`h-6 w-6 ${selectedCategory === category ? 'text-indigo-600' : 'text-gray-600'}`} />
                  ) : category === 'Transfer Credits' ? (
                    <CreditCard className={`h-6 w-6 ${selectedCategory === category ? 'text-indigo-600' : 'text-gray-600'}`} />
                  ) : category === 'Study Groups' ? (
                    <Users className={`h-6 w-6 ${selectedCategory === category ? 'text-indigo-600' : 'text-gray-600'}`} />
                  ) : (
                    <GraduationCap className={`h-6 w-6 ${selectedCategory === category ? 'text-indigo-600' : 'text-gray-600'}`} />
                  )}
                </div>
                <span className={`font-medium ${selectedCategory === category ? 'text-indigo-800' : 'text-gray-800'}`}>
                  {category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Pinned Discussions */}
      {sortedDiscussions.some(d => d.isPinned) && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pinned Discussions</h2>
          <div className="space-y-4">
            {sortedDiscussions.filter(d => d.isPinned).map(discussion => (
              <DiscussionCard key={discussion.id} discussion={discussion} />
            ))}
          </div>
        </div>
      )}
      
      {/* All Discussions */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            {selectedCategory === 'All Categories' ? 'Recent Discussions' : selectedCategory + ' Discussions'}
          </h2>
          <span className="text-sm text-gray-500">
            Showing {filteredDiscussions.filter(d => !d.isPinned).length} of {discussions.filter(d => !d.isPinned).length} discussions
          </span>
        </div>
        
        {filteredDiscussions.filter(d => !d.isPinned).length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No discussions found</h3>
            <p className="text-gray-600 mb-4">
              Be the first to start a discussion in this category or try adjusting your search.
            </p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedDiscussions.filter(d => !d.isPinned).map(discussion => (
              <DiscussionCard key={discussion.id} discussion={discussion} />
            ))}
          </div>
        )}
      </div>
      
      {/* Community Guidelines */}
      <div className="mb-12 bg-orange-50 rounded-lg p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <AlertCircle className="h-6 w-6 text-orange-500" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-orange-800">Community Guidelines</h3>
            <div className="mt-2 text-sm text-orange-700">
              <p className="mb-2">
                To foster a supportive and inclusive environment for all students, please follow these guidelines:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Be respectful and courteous to fellow community members</li>
                <li>Provide constructive feedback and support, especially to newcomers</li>
                <li>Share personal experiences but avoid sharing confidential information</li>
                <li>Use appropriate language and maintain academic integrity</li>
                <li>Report any inappropriate content to moderators</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Active Community Members */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Active Community Members</h2>
        <Card>
          <CardBody>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {discussions.slice(0, 6).map(discussion => (
                <div key={discussion.id} className="flex flex-col items-center">
                  <img 
                    src={discussion.author.avatar} 
                    alt={discussion.author.name}
                    className="w-16 h-16 rounded-full mb-2"
                  />
                  <h3 className="text-sm font-medium text-center">{discussion.author.name}</h3>
                  <p className="text-xs text-gray-500 text-center">{discussion.author.role}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" className="inline-flex items-center">
                <UserPlus className="h-4 w-4 mr-2" />
                View All Members
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default CommunityForumPage;

// Import missing components
function BookOpen(props: any) {
  return <div {...props} />;
}

function CreditCard(props: any) {
  return <div {...props} />;
}

function GraduationCap(props: any) {
  return <div {...props} />;
}