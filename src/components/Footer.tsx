
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <img 
              src="public/images/nexu-bg.png" 
              alt="Nexu Assessoria"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos negócios através de estratégias digitais inteligentes 
              e resultados mensuráveis. Sua parceira no crescimento digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Serviços</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook Ads</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram Ads</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Branding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Social Media</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cardápio Digital</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-400 mr-3" />
                <span className="text-gray-300">contato@nexubrasil.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-400 mr-3" />
                <span className="text-gray-300">(41) 99824-4052</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-400 mr-3 mt-1" />
                <span className="text-gray-300">Curitiba, PR</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Nexu Assessoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
