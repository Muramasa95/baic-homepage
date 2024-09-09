const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
        <div>
          <img
            src="/src/assets/logos/f-logo.png"
            alt="Motors Gate Logo"
            className="mb-4 w-24 h-46"
          />
          <p className="text-sm">
            Motors Gate Company, Official Agent of BAIC Motors in the Kingdom of
            Saudi Arabia. BAIC Automotive Co. Ltd is a subsidiary of BAIC
            CORPORATION. BAIC Motor is the largest auto company in the China
            market.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Sales and reservation policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Exchange and return policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Book A Service
              </a>
            </li>
            <li>
              <a href="mailto:info@baic.sa" className="hover:underline">
                info@baic.sa
              </a>
            </li>
            <li>
              <a href="tel:8002440207" className="hover:underline">
                8002440207
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
