import React, { useState } from 'react';
import { Play, Clock, Filter, Search, ChevronDown, Star, User, Calendar, Tag, Eye, ThumbsUp } from 'lucide-react';
import Card, { CardBody } from '../components/Card';
import Button from '../components/Button';

// Mock data
const categories = [
  'All Categories',
  'Programming',
  'Data Structures',
  'Circuit Analysis',
  'Electronics',
  'Digital Systems',
  'Mathematics',
  'Communications',
  'Physics',
  'Engineering Graphics',
  'Mechanical Engineering',
  'Software Development'
];

const videos = [
  {
    id: 1,
    title: 'Introduction to Data Structures and Algorithms',
    category: 'Data Structures',
    instructor: 'Dr. Rajiv Mehta',
    duration: '42:15',
    publishedDate: '2023-05-15',
    views: 1250,
    likes: 432,
    rating: 4.8,
    reviewCount: 68,
    description: 'An introductory overview of fundamental data structures and algorithms. Covers arrays, linked lists, basic searching, and sorting techniques.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'data-structures-1'
  },
  {
    id: 2,
    title: 'Circuit Analysis: Kirchhoff\'s Laws',
    category: 'Circuit Analysis',
    instructor: 'Prof. Ananya Desai',
    duration: '35:28',
    publishedDate: '2023-06-22',
    views: 980,
    likes: 325,
    rating: 4.7,
    reviewCount: 52,
    description: 'A detailed explanation of Kirchhoff\'s Voltage Law (KVL) and Kirchhoff\'s Current Law (KCL) with practical circuit examples and problem-solving techniques.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'circuit-analysis-1'
  },
  {
    id: 3,
    title: 'Object-Oriented Programming Concepts',
    category: 'Programming',
    instructor: 'Dr. Suresh Kumar',
    duration: '48:32',
    publishedDate: '2023-07-08',
    views: 1540,
    likes: 520,
    rating: 4.9,
    reviewCount: 78,
    description: 'Explore core object-oriented programming concepts including classes, objects, inheritance, polymorphism, and encapsulation with practical examples in Java.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'programming-1'
  },
  {
    id: 4,
    title: 'Digital Logic Design: Combinational Circuits',
    category: 'Digital Systems',
    instructor: 'Prof. Rahul Verma',
    duration: '38:45',
    publishedDate: '2023-04-30',
    views: 870,
    likes: 295,
    rating: 4.6,
    reviewCount: 45,
    description: 'Learn about combinational logic circuits including decoders, multiplexers, and adders. Includes circuit design techniques and analysis methods.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'digital-systems-1'
  },
  {
    id: 5,
    title: 'Calculus: Limits and Continuity',
    category: 'Mathematics',
    instructor: 'Dr. Neha Singh',
    duration: '51:20',
    publishedDate: '2023-08-05',
    views: 1320,
    likes: 465,
    rating: 4.8,
    reviewCount: 72,
    description: 'A comprehensive lecture on limits and continuity. Includes intuitive explanations, rigorous definitions, and numerous examples with complete solutions.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'mathematics-1'
  },
  {
    id: 6,
    title: 'Semiconductor Devices: Diodes and Transistors',
    category: 'Electronics',
    instructor: 'Prof. Anjali Patel',
    duration: '45:12',
    publishedDate: '2023-07-18',
    views: 950,
    likes: 320,
    rating: 4.7,
    reviewCount: 58,
    description: 'Explore the fundamentals of semiconductor devices with focus on diodes and transistors. Covers PN junctions, biasing, and basic amplifier configurations.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'electronics-1'
  },
  {
    id: 7,
    title: 'Signal Processing Fundamentals',
    category: 'Communications',
    instructor: 'Dr. Vikram Joshi',
    duration: '47:35',
    publishedDate: '2023-06-10',
    views: 890,
    likes: 305,
    rating: 4.6,
    reviewCount: 50,
    description: 'An introduction to signal processing concepts including sampling, Fourier analysis, filtering, and modulation techniques used in communication systems.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'communications-1'
  },
  {
    id: 8,
    title: 'Web Development for Beginners',
    category: 'Software Development',
    instructor: 'Prof. Rohan Gupta',
    duration: '55:20',
    publishedDate: '2023-08-12',
    views: 1420,
    likes: 510,
    rating: 4.9,
    reviewCount: 85,
    description: 'A beginner-friendly introduction to web development covering HTML, CSS, and JavaScript fundamentals with hands-on examples and project demonstrations.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'software-development-1'
  }
];

// Function to get a thumbnail image based on the category
const getThumbnailImage = (category: string) => {
  const placeholders: Record<string, string> = {
    'Data Structures': 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'Circuit Analysis': 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'Programming': 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'Digital Systems': 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'Mathematics': 'https://images.pexels.com/photos/6238038/pexels-photo-6238038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'Electronics': 'https://images.pexels.com/photos/3912980/pexels-photo-3912980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'Communications': 'https://images.pexels.com/photos/280962/pexels-photo-280962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'Software Development': 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  };
  
  return placeholders[category] || 'https://images.pexels.com/photos/6476250/pexels-photo-6476250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
};

interface VideoCardProps {
  video: typeof videos[0];
  onSelect: (video: typeof videos[0]) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onSelect }) => {
  return (
    <Card hover className="h-full" onClick={() => onSelect(video)}>
      <div className="relative overflow-hidden">
        <img 
          src={getThumbnailImage(video.category)} 
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button 
            className="bg-indigo-600 text-white p-3 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(video);
            }}
          >
            <Play className="h-8 w-8" />
          </button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <CardBody>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold line-clamp-2">{video.title}</h3>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <User className="h-4 w-4 mr-1" />
          {video.instructor}
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            {video.views} views
          </div>
          <div className="flex items-center">
            <ThumbsUp className="h-4 w-4 mr-1" />
            {video.likes}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="font-medium">{video.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({video.reviewCount})</span>
          </div>
          <span className="text-xs py-1 px-2 bg-indigo-100 text-indigo-800 rounded-full">
            {video.category}
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

const VideoResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
  
  // Filter videos based on search and category
  const filteredVideos = videos.filter(video => {
    const matchesSearch = 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || video.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const handleVideoSelect = (video: typeof videos[0]) => {
    setSelectedVideo(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Video Resources</h1>
        <p className="text-gray-600 mt-1">
          Learn at your own pace with our video tutorials and lectures on various subjects.
        </p>
      </div>
      
      {/* Featured Video Player Section */}
      {selectedVideo ? (
        <div className="mb-12">
          <div className="bg-gray-900 rounded-t-lg overflow-hidden aspect-video">
            <iframe
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-white shadow-md rounded-b-lg p-6">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedVideo.title}</h2>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {selectedVideo.instructor}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(selectedVideo.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {selectedVideo.duration}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {selectedVideo.views} views
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    {selectedVideo.category}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <span className="font-medium">{selectedVideo.rating}</span>
                  <span className="text-xs text-gray-500 ml-1">({selectedVideo.reviewCount} reviews)</span>
                </div>
                <Button size="sm" className="flex items-center">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Like ({selectedVideo.likes})
                </Button>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              {selectedVideo.description}
            </p>
          </div>
        </div>
      ) : (
        <div className="mb-12 bg-indigo-50 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Learn Through Visual Content
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our video library helps lateral entry students catch up on core concepts through expert-led lectures and tutorials.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="rounded-full bg-indigo-100 p-2 mr-3">
                    <Play className="h-5 w-5 text-indigo-600" />
                  </div>
                  <span className="text-gray-800">Expert-led lectures from faculty</span>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full bg-indigo-100 p-2 mr-3">
                    <Play className="h-5 w-5 text-indigo-600" />
                  </div>
                  <span className="text-gray-800">Step-by-step tutorials for complex topics</span>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full bg-indigo-100 p-2 mr-3">
                    <Play className="h-5 w-5 text-indigo-600" />
                  </div>
                  <span className="text-gray-800">Practice problem solutions and explanations</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Student watching educational video"
                className="w-full h-full object-cover"
              />
            </div>
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
                  placeholder="Search videos by title, instructor, or description..."
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
            </div>
          </CardBody>
        </Card>
      </div>
      
      {/* Categories Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {categories.filter(c => c !== 'All Categories').slice(0, 8).map(category => (
          <button
            key={category}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
              selectedCategory === category 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
        <button
          className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
          More...
        </button>
      </div>
      
      {/* Video Grid */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            {selectedCategory === 'All Categories' ? 'All Videos' : selectedCategory + ' Videos'}
          </h2>
          <span className="text-sm text-gray-500">
            Showing {filteredVideos.length} of {videos.length} videos
          </span>
        </div>
        
        {filteredVideos.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <Play className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No videos found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or check back later.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map(video => (
              <VideoCard key={video.id} video={video} onSelect={handleVideoSelect} />
            ))}
          </div>
        )}
      </div>
      
      {/* New Video Series Promotion */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl overflow-hidden shadow-xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">New Video Series</h2>
            <h3 className="text-3xl font-bold mb-6">Diploma to Degree: Bridging the Gap</h3>
            <p className="text-indigo-100 text-lg mb-6">
              A comprehensive 15-part video series designed specifically for lateral entry students to quickly adapt to university curriculum.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-indigo-700 hover:bg-indigo-50"
            >
              Preview Series
            </Button>
          </div>
          <div className="hidden md:block relative">
            <img 
              src="https://images.pexels.com/photos/4492126/pexels-photo-4492126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Student studying online"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <Play className="h-12 w-12 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Request Video Resources */}
      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Can't Find What You Need?</h2>
        <p className="text-gray-600 mb-6">
          Request specific video content or tutorials on subjects you're struggling with.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="email"
            placeholder="Your email"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <select className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select subject area</option>
            {categories.filter(c => c !== 'All Categories').map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <textarea
          placeholder="Describe the video content you would like to see..."
          rows={4}
          className="mt-4 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
        <div className="mt-4">
          <Button>Submit Request</Button>
        </div>
      </div>
    </div>
  );
};

export default VideoResourcesPage;