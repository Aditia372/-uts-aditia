
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-center">
      <div className="container mx-auto">
        <p className="text-white">© 2024 Aditia Nurohman | All rights reserved.</p>

        <ul className="flex items-center justify-center mt-4">
          <li className="mx-4">
            <a href="https://www.facebook.com/" className="text-white hover:text-gray-500">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="mx-4">
            <a href="https://www.instagram.com/" className="text-white hover:text-gray-500">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="mx-4">
            <a href="https://twitter.com/" className="text-white hover:text-gray-500">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
