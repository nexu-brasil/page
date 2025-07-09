
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Smartphone } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('cadastro');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="mb-8">
              <img 
                src="/images/nexu-bg.png" 
                alt="Nexu Assessoria"
                className="h-16 w-auto mb-6"
              />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforme sua
              <span className="text-yellow-400 block">Presença Digital</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Especialistas em tráfego pago, branding e estratégias digitais que 
              <strong className="text-white"> geram resultados reais</strong> para seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg group transition-all duration-300"
              >
                Agendar Reunião Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 text-lg transition-all duration-300"
              >
                Ver Nossos Cases
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-gray-400">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">250%</div>
                <div className="text-sm text-gray-400">ROI Médio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">5+</div>
                <div className="text-sm text-gray-400">Anos de Experiência</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Services preview */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <Target className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="font-semibold mb-2">Tráfego Pago</h3>
                <p className="text-sm text-gray-300">Facebook e Instagram Ads otimizados</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <Users className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="font-semibold mb-2">Social Media</h3>
                <p className="text-sm text-gray-300">Gestão completa das redes sociais</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <Target className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="font-semibold mb-2">Branding</h3>
                <p className="text-sm text-gray-300">Identidade visual que converte</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <Smartphone className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="font-semibold mb-2">Cardápio Digital</h3>
                <p className="text-sm text-gray-300">Soluções digitais para restaurantes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
