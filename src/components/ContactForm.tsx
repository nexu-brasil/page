
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, Mail, Building, DollarSign, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    faturamento: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const faturamentoOptions = [
    { value: 'ate-50k', label: 'Até R$ 50 mil' },
    { value: '50k-70k', label: 'De R$ 50 a 70 mil' },
    { value: '70k-100k', label: 'De R$ 70 a 100 mil' },
    { value: '100k-200k', label: 'De R$ 100 a 200 mil' },
    { value: '200k-500k', label: 'De R$ 200 a 500 mil' },
    { value: '500k-1m', label: 'De R$ 500 mil a 1 milhão' },
    { value: '1m-5m', label: 'De R$ 1 milhão a 5 milhões' },
    { value: 'acima-5m', label: 'Mais de R$ 5 milhões' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.nome || !formData.empresa || !formData.email || !formData.telefone || !formData.faturamento) {
    toast({
      title: "Campos obrigatórios",
      description: "Por favor, preencha todos os campos do formulário.",
      variant: "destructive"
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    toast({
      title: "Email inválido",
      description: "Por favor, insira um email corporativo válido.",
      variant: "destructive"
    });
    return;
  }

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyFSAHzArzz6H0128cM3yFvDgj-UCG9-WtI-ttz4P6XNMfZ2VL7Up0dsLP4iNsuiMCE/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    });

    const result = await response.json();

    if (result.status === "sucesso") {
      setIsSubmitted(true);
      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Em breve entraremos em contato para agendar sua reunião.",
      });
    } else {
      throw new Error("Erro ao enviar");
    }

  } catch (error) {
    toast({
      title: "Erro no envio",
      description: "Não foi possível enviar o formulário. Tente novamente mais tarde.",
      variant: "destructive"
    });
  }
};


  if (isSubmitted) {
    return (
      <section id="cadastro" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-12">
                <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Cadastro Realizado com Sucesso!
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Recebemos suas informações e nossa equipe entrará em contato em até 24 horas 
                  para agendar sua reunião estratégica gratuita.
                </p>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-gray-700">
                    <strong>Próximos passos:</strong><br />
                    • Análise do seu perfil empresarial<br />
                    • Agendamento da reunião estratégica<br />
                    • Apresentação de proposta personalizada
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cadastro" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Agende sua <span className="text-yellow-400">Reunião Gratuita</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Vamos analisar seu negócio e criar uma estratégia personalizada 
              para acelerar seus resultados digitais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Benefits */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-yellow-400">
                    <Calendar className="h-6 w-6 mr-3" />
                    O que você ganha nesta reunião:
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Análise completa da sua presença digital atual</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Identificação de oportunidades de crescimento</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Estratégia personalizada para seu segmento</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Proposta comercial sem compromisso</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-yellow-400 text-black p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">🎯 Reunião 100% Focada em Resultados</h3>
                <p className="text-sm">
                  Não perdemos tempo com apresentações genéricas. Nossa reunião é 
                  estratégica e focada em gerar valor real para seu negócio.
                </p>
              </div>
            </div>
            
            {/* Form */}
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Preencha seus dados
                </CardTitle>
                <CardDescription>
                  Todas as informações são confidenciais e serão usadas apenas para 
                  prepararmos uma proposta personalizada.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Nome Completo *
                    </Label>
                    <Input
                      id="nome"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="empresa" className="flex items-center">
                      <Building className="h-4 w-4 mr-2" />
                      Nome da Empresa *
                    </Label>
                    <Input
                      id="empresa"
                      type="text"
                      placeholder="Nome da sua empresa"
                      value={formData.empresa}
                      onChange={(e) => handleInputChange('empresa', e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Corporativo *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu.email@empresa.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Telefone (WhatsApp) *
                    </Label>
                    <Input
                      id="telefone"
                      type="tel"
                      placeholder="(41) 99824-4052"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange('telefone', e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Faturamento Mensal da Empresa *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('faturamento', value)} required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione a faixa de faturamento" />
                      </SelectTrigger>
                      <SelectContent>
                        {faturamentoOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Agendar Minha Reunião Gratuita
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Seus dados estão protegidos conforme a LGPD. 
                    Não compartilhamos informações com terceiros.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
