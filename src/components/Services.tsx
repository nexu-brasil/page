
import { Target, Users, Palette, Smartphone, TrendingUp, Heart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Facebook & Instagram Ads",
      description: "Campanhas de tráfego pago otimizadas para máxima conversão e ROI. Segmentação precisa e criativos que vendem.",
      features: ["Campanhas de Conversão", "Remarketing Avançado", "Otimização Diária", "Relatórios Detalhados"]
    },
    {
      icon: Palette,
      title: "Branding Estratégico",
      description: "Construa uma marca forte e memorável que se destaca no mercado e conecta com seu público-alvo.",
      features: ["Identidade Visual", "Manual da Marca", "Posicionamento", "Estratégia de Marca"]
    },
    {
      icon: Users,
      title: "Social Media",
      description: "Gestão completa das suas redes sociais com conteúdo que engaja e converte seguidores em clientes.",
      features: ["Criação de Conteúdo", "Gestão de Comunidade", "Stories e Reels", "Planejamento Editorial"]
    },
    {
      icon: Smartphone,
      title: "Cardápio Digital",
      description: "Soluções digitais modernas para restaurantes, facilitando pedidos e melhorando a experiência do cliente.",
      features: ["QR Code Menu", "Sistema de Pedidos", "Interface Responsiva", "Integração com Delivery"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-blue-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em marketing digital para impulsionar seu negócio
            e gerar resultados mensuráveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-yellow-100 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-yellow-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Pronto para crescer?</h3>
            <p className="text-xl mb-6">
              Vamos criar uma estratégia personalizada para o seu negócio
            </p>
            <button 
              onClick={() => document.getElementById('cadastro')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
