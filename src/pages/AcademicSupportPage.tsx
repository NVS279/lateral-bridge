import React, { useState } from 'react';
import { Book, BookOpen, FileText, Download, Filter, Search, Users, ChevronDown, Star, ChevronRight, Eye } from 'lucide-react';
import Card, { CardBody, CardHeader, CardFooter } from '../components/Card';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

// Mock data
const subjects = [
  'All Subjects',
  'Mathematics',
  'Computer Science',
  'Electronics',
  'Digital Systems',
  'Circuit Analysis',
  'Data Structures',
  'Programming',
  'Mechanics',
  'Communications',
  'Thermodynamics'
];

const resourceTypes = [
  'All Types',
  'Lecture Notes',
  'Practice Problems',
  'Previous Papers',
  'Study Guides',
  'Reference Materials',
  'Video Tutorials',
  'Code Examples'
];

const resources = [
  {
    id: 1,
    title: 'Comprehensive Data Structures Guide',
    subject: 'Data Structures',
    type: 'Study Guides',
    author: 'Prof. Rahul Gupta',
    uploadedBy: 'Ankit Patel',
    uploadDate: '2023-06-15',
    rating: 4.8,
    reviewCount: 45,
    downloads: 230,
    description: 'A complete guide to data structures covering arrays, linked lists, stacks, queues, trees, graphs, and more. Includes implementation examples in C and Java.',
    thumbnail: 'data-structures',
    fileUrl: '/files/guide.pdf'
  },
  {
    id: 2,
    title: 'Circuit Analysis Fundamentals',
    subject: 'Circuit Analysis',
    type: 'Lecture Notes',
    author: 'Dr. Suresh Kumar',
    uploadedBy: 'Priya Sharma',
    uploadDate: '2023-05-22',
    rating: 4.5,
    reviewCount: 38,
    downloads: 185,
    description: 'Comprehensive notes on circuit analysis theory, covering KVL, KCL, node analysis, mesh analysis, and theorems. Includes worked examples and problem-solving techniques.',
    thumbnail: 'circuit-analysis',
    fileUrl: '/files/circuit-analysis-notes.pdf'
  },
  {
    id: 3,
    title: 'Object-Oriented Programming Tutorial',
    subject: 'Programming',
    type: 'Code Examples',
    author: 'Prof. Anjali Mehta',
    uploadedBy: 'Rohit Verma',
    uploadDate: '2023-07-08',
    rating: 4.7,
    reviewCount: 42,
    downloads: 210,
    description: 'Learn OOP principles through practical code examples. Covers classes, inheritance, polymorphism, encapsulation, and abstraction with Python and C++ examples.',
    thumbnail: 'programming',
    fileUrl: '/files/oop-tutorial.pdf'
  },
  {
    id: 4,
    title: 'Digital Systems Previous Year Papers',
    subject: 'Digital Systems',
    type: 'Previous Papers',
    author: 'Engineering Department',
    uploadedBy: 'Admin',
    uploadDate: '2023-04-10',
    rating: 4.9,
    reviewCount: 52,
    downloads: 320,
    description: 'Collection of previous year exam papers for Digital Systems course from 2018-2023. Includes comprehensive solutions and marking schemes.',
    thumbnail: 'digital-systems',
    fileUrl: '/files/digital-systems-papers.pdf'
  }
];

// Function to get a placeholder image for the subject
const getSubjectImage = (subject: string) => {
  const placeholders: Record<string, string> = {
    'Data Structures': 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'Circuit Analysis': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAgAJqYpYK7OwOKs57mP53Stm35kMtXkVL-upoXJOsg&s&ec=72940543',
    'Programming': 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'Digital Systems': 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  };
  
  return placeholders[subject] || 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
};

const ResourceCard: React.FC<{ resource: typeof resources[0] }> = ({ resource }) => {
  const handleView = () => {
    if (resource.fileUrl) {
      window.open(resource.fileUrl, '_blank');
    } else {
      alert('File not available for preview.');
    }
  };

  const handleDownload = () => {
    if (resource.fileUrl) {
      window.open(resource.fileUrl, '_blank');
    } else {
      alert('File not available for download.');
    }
  };

  return (
    <Card hover>
      <div className="overflow-hidden h-40">
        <img
          src={getSubjectImage(resource.subject)}
          alt={resource.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardBody>
        <div className="flex justify-between items-start mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {resource.subject}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {resource.type}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900">{resource.title}</h3>
        <p className="text-sm text-gray-500 mt-1">By {resource.author}</p>
        <p className="text-sm text-gray-600 mt-3 line-clamp-2">{resource.description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="ml-1 text-sm font-medium">{resource.rating}</span>
            <span className="ml-1 text-xs text-gray-500">({resource.reviewCount})</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Download className="h-4 w-4 mr-1" />
            {resource.downloads} downloads
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="flex items-center" onClick={handleView}>
          <Eye className="h-4 w-4 mr-2" />
          View
        </Button>
        <Button className="flex items-center" onClick={handleDownload}>
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      </CardFooter>
    </Card>
  );
};

const AcademicSupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [selectedType, setSelectedType] = useState('All Types');
  
  // Filter resources based on search, subject, and type
  const filteredResources = resources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSubject = selectedSubject === 'All Subjects' || resource.subject === selectedSubject;
    const matchesType = selectedType === 'All Types' || resource.type === selectedType;
    
    return matchesSearch && matchesSubject && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ...existing code for filters, stats, and featured subjects... */}
      
      {/* Resource Grid */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Academic Resources</h2>
          <span className="text-sm text-gray-500">
            Showing {filteredResources.length} of {resources.length} resources
          </span>
        </div>
        
        {filteredResources.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or check back later.
            </p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedSubject('All Subjects');
                setSelectedType('All Types');
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}
      </div>
      
      {/* ...existing code for academic support services and calendar... */}
    </div>
  );
};

export default AcademicSupportPage;