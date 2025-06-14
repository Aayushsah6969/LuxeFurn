import React, { useState, useRef } from 'react';
import { User, Package, Heart, Settings, LogOut, AlertCircle, Upload, X } from 'lucide-react';
import toast from 'react-hot-toast';

const accountSections = [
  {
    title: 'Profile',
    icon: <User className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="john@example.com"
          />
        </div>
        <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          Update Profile
        </button>
      </div>
    )
  },
  {
    title: 'Orders',
    icon: <Package className="w-5 h-5" />,
    content: (
      <div className="text-center py-8">
        <Package className="w-12 h-12 mx-auto text-gray-400 mb-4" />
        <p className="text-gray-600">No orders yet</p>
      </div>
    )
  },
  {
    title: 'Wishlist',
    icon: <Heart className="w-5 h-5" />,
    content: (
      <div className="text-center py-8">
        <Heart className="w-12 h-12 mx-auto text-gray-400 mb-4" />
        <p className="text-gray-600">Your wishlist is empty</p>
      </div>
    )
  },
  {
    title: 'Settings',
    icon: <Settings className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notifications</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Email notifications
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              SMS notifications
            </label>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Report Problem',
    icon: <AlertCircle className="w-5 h-5" />,
    content: ({ onSubmit = () => {} }) => {
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const [images, setImages] = useState<File[]>([]);
      const [previews, setPreviews] = useState<string[]>([]);
      const fileInputRef = useRef<HTMLInputElement>(null);

      const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length + images.length > 3) {
          toast.error('Maximum 3 images allowed');
          return;
        }

        const newImages = [...images, ...files];
        setImages(newImages);

        // Generate previews
        const newPreviews = files.map(file => URL.createObjectURL(file));
        setPreviews([...previews, ...newPreviews]);
      };

      const removeImage = (index: number) => {
        const newImages = images.filter((_, i) => i !== index);
        const newPreviews = previews.filter((_, i) => i !== index);
        setImages(newImages);
        setPreviews(newPreviews);
      };

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        toast.success('Problem report submitted successfully');
        setTitle('');
        setDescription('');
        setImages([]);
        setPreviews([]);
      };

      return (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
              placeholder="Brief description of the problem"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
              placeholder="Please provide detailed information about the issue"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Attach Images (Optional)
            </label>
            <div className="space-y-4">
              {previews.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {previews.map((preview, index) => (
                    <div key={index} className="relative">
                      <img
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {images.length < 3 && (
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                    multiple
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center justify-center w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Upload Images
                  </button>
                  <p className="text-sm text-gray-500 mt-2">
                    Maximum 3 images. Supported formats: JPG, PNG
                  </p>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Submit Report
          </button>
        </form>
      );
    }
  }
];

export const AccountPage: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('Profile');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-600">john@example.com</p>
                </div>
              </div>
              <nav className="space-y-1">
                {accountSections.map((section) => (
                  <button
                    key={section.title}
                    onClick={() => setActiveSection(section.title)}
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                      activeSection === section.title
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {section.icon}
                    <span>{section.title}</span>
                  </button>
                ))}
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">{activeSection}</h2>
            {(() => {
              const section = accountSections.find(s => s.title === activeSection);
              if (!section) return null;
              return typeof section.content === 'function' 
                ? section.content({})
                : section.content;
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};