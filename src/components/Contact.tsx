
import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import emailjs from 'emailjs-com';
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email using EmailJS
    emailjs.send(
      'service_id', // Replace with your EmailJS service ID
      'template_id', // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'user_id' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };
  
  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">Get In Touch</h2>
          <div className="w-20 h-1 bg-neon-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass-card p-6 md:p-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Let's Work Together</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-neon-blue/20 text-neon-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Email</h4>
                  <p className="text-white">tanay@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-neon-purple/20 text-neon-purple">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">LinkedIn</h4>
                  <p className="text-white">linkedin.com/in/tanay</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-neon-pink/20 text-neon-pink">
                  <Github size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">GitHub</h4>
                  <p className="text-white">github.com/tanay-dev</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 md:p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-neon-blue transition-colors resize-none"
                  placeholder="I'd like to discuss a project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-medium ${
                  isSubmitting 
                    ? 'bg-gray-700 text-gray-300 cursor-not-allowed' 
                    : 'bg-neon-blue text-black hover:bg-white transition-colors'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
