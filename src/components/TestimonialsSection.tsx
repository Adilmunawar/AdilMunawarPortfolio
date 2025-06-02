
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Senior Product Manager",
      company: "Tech Innovators Inc.",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Exceptional work on our e-commerce platform! The attention to detail and innovative solutions exceeded our expectations. Highly professional and delivers on time."
    },
    {
      id: 2,
      name: "Emily Chen",
      designation: "CTO",
      company: "Digital Solutions Corp",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Outstanding full-stack development skills! Transformed our legacy system into a modern, scalable application. Great communication throughout the project."
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      designation: "Founder & CEO",
      company: "StartupLab",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Incredible AI integration work! Built our chatbot from scratch with advanced NLP capabilities. The results speak for themselves - 90% customer satisfaction."
    },
    {
      id: 4,
      name: "Jessica Williams",
      designation: "Head of Engineering",
      company: "CloudTech Systems",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Perfect execution of our mobile app project! Clean code, intuitive UI/UX, and seamless performance across all devices. Truly a professional experience."
    },
    {
      id: 5,
      name: "Alexandra Thompson",
      designation: "VP of Technology",
      company: "InnovateCorp",
      location: "Boston, MA",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Brilliant problem-solving skills! Optimized our database queries and improved application performance by 300%. Excellent technical expertise and creativity."
    },
    {
      id: 6,
      name: "David Kim",
      designation: "Technical Director",
      company: "FutureTech Labs",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Amazing work on our enterprise dashboard! Beautiful design combined with powerful functionality. The real-time analytics features are exactly what we needed."
    },
    {
      id: 7,
      name: "Rachel Davis",
      designation: "Lead Developer",
      company: "WebCraft Studio",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Exceptional API development and integration! Seamlessly connected multiple third-party services with our platform. Professional, efficient, and reliable."
    },
    {
      id: 8,
      name: "Amanda Foster",
      designation: "Digital Marketing Director",
      company: "GrowthHackers",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Revolutionary work on our marketing automation platform! Increased our lead generation by 250%. The custom features are exactly what our business needed."
    },
    {
      id: 9,
      name: "Lisa Parker",
      designation: "Project Manager",
      company: "AgileWorks",
      location: "Denver, CO",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Outstanding project delivery! Managed complex requirements with ease and delivered ahead of schedule. Great collaboration and communication skills."
    },
    {
      id: 10,
      name: "James Wilson",
      designation: "Chief Innovation Officer",
      company: "NextGen Solutions",
      location: "Portland, OR",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Innovative blockchain integration that revolutionized our supply chain tracking. Cutting-edge technology implementation with flawless execution."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400 star-rating' 
            : 'text-gray-400'
        } transition-all duration-300`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-cyber-dark via-cyber-gray/5 to-cyber-dark">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/3 rounded-full blur-3xl animate-drift-1"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyber-blue/3 rounded-full blur-3xl animate-drift-2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 section-heading animate-fade-in-up">
            Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
            What our clients say about our work and collaboration
          </p>
        </div>

        {/* Auto-scrolling testimonials */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex space-x-8 testimonial-scroll">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card 
                  key={`${testimonial.id}-${index}`}
                  className="testimonial-card group relative bg-cyber-gray/20 border-cyber-cyan/30 hover:border-cyber-cyan/60 backdrop-blur-xl transition-all duration-700 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan/20 to-cyber-blue/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  <div className="relative p-6">
                    {/* Quote icon */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <Quote size={32} className="text-cyber-cyan" />
                    </div>

                    {/* Profile section */}
                    <div className="flex items-center mb-4">
                      <Avatar className="w-14 h-14 border-2 border-cyber-cyan/50 group-hover:border-cyber-cyan transition-all duration-500">
                        <AvatarImage 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-cyber-gray text-cyber-cyan font-bold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <h4 className="text-white font-bold text-lg group-hover:text-cyber-cyan transition-colors duration-500">
                          {testimonial.name}
                        </h4>
                        <p className="text-cyber-cyan/80 text-sm font-medium">
                          {testimonial.designation}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {testimonial.company} • {testimonial.location}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4 space-x-1">
                      {renderStars(testimonial.rating)}
                      <span className="ml-2 text-sm text-gray-400">({testimonial.rating}.0)</span>
                    </div>

                    {/* Comment */}
                    <blockquote className="text-gray-300 italic leading-relaxed group-hover:text-white transition-colors duration-500">
                      "{testimonial.comment}"
                    </blockquote>

                    {/* Decorative elements */}
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyber-cyan/30 group-hover:border-cyber-cyan/60 transition-colors duration-500"></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Gradient overlays for seamless scrolling effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-cyber-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-cyber-dark to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
