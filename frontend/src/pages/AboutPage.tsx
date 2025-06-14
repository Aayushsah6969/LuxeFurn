import React from 'react';
import { Award, Users, History, Target, CheckCircle } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Satisfied Customers', value: '50K+' },
  { label: 'Products Delivered', value: '100K+' },
  { label: 'Design Awards', value: '25+' },
];

const values = [
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Quality',
    description: 'We source only the finest materials and partner with renowned craftsmen to create furniture that lasts generations.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Customer Focus',
    description: 'Our dedicated team ensures every customer finds the perfect pieces for their space and lifestyle.'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Sustainability',
    description: 'We are committed to eco-friendly practices and responsible sourcing throughout our production process.'
  }
];

const team = [
  {
    name: 'Sarah Anderson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    quote: 'Creating beautiful spaces that inspire and comfort is our passion.'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    quote: 'Every piece we create tells a story of craftsmanship and innovation.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    quote: 'Design is about creating harmony between beauty and functionality.'
  }
];

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
          alt="Our workshop"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Crafting exceptional furniture and transforming spaces since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              At LuxeFurn, we believe that every home deserves beautiful, well-crafted furniture that 
              enhances daily living. Our mission is to combine timeless design with modern functionality, 
              creating pieces that inspire and endure.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center text-gray-800 mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 italic">"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};