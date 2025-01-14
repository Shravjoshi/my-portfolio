import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <p>&copy; 2025 Shravani Joshi. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        {/* Email Link */}
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-2xl hover:text-purple-600" />
        </a>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-purple-600" />
        </a>
        {/* GitHub */}
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-purple-600" />
        </a>
        {/* Twitter */}
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-purple-600" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
