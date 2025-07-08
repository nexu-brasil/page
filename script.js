
// Smooth scroll function
function scrollToForm() {
    const formSection = document.getElementById('cadastro');
    if (formSection) {
        formSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formCard = document.getElementById('form-card');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = {
                nome: formData.get('nome'),
                empresa: formData.get('empresa'),
                email: formData.get('email'),
                telefone: formData.get('telefone'),
                faturamento: formData.get('faturamento')
            };
            
            // Basic validation
            if (!data.nome || !data.empresa || !data.email || !data.telefone || !data.faturamento) {
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Por favor, insira um email corporativo válido.');
                return;
            }
            
            // Log form data (in real implementation, this would be sent to a server)
            console.log('Dados do formulário:', data);
            
            // Show success message
            showSuccessMessage();
            
            // Show browser notification
            if ('Notification' in window) {
                Notification.requestPermission().then(function(permission) {
                    if (permission === 'granted') {
                        new Notification('Cadastro realizado com sucesso!', {
                            body: 'Em breve entraremos em contato para agendar sua reunião.',
                            icon: '/lovable-uploads/31db895c-97d1-44ab-a7aa-678429695817.png'
                        });
                    }
                });
            }
        });
    }
});

// Show success message function
function showSuccessMessage() {
    const formCard = document.getElementById('form-card');
    
    if (formCard) {
        formCard.innerHTML = `
            <div class="success-card">
                <div class="success-icon">✅</div>
                <h2>Cadastro Realizado com Sucesso!</h2>
                <p>Recebemos suas informações e nossa equipe entrará em contato em até 24 horas para agendar sua reunião estratégica gratuita.</p>
                <div class="next-steps">
                    <p><strong>Próximos passos:</strong><br>
                    • Análise do seu perfil empresarial<br>
                    • Agendamento da reunião estratégica<br>
                    • Apresentação de proposta personalizada</p>
                </div>
            </div>
        `;
    }
}

// Add smooth scrolling for all anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add click event to all buttons that should scroll to form
    const ctaButtons = document.querySelectorAll('.btn-cta');
    ctaButtons.forEach(button => {
        button.addEventListener('click', scrollToForm);
    });
    
    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add animation on scroll (simple version)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service items for animation
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});

// Add form input animations
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, select');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.style.borderColor = '#2563eb';
            this.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
            this.style.borderColor = '#d1d5db';
            this.style.boxShadow = 'none';
        });
    });
});

// Phone number formatting
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('telefone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length >= 11) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (value.length >= 7) {
                value = value.replace(/(\d{2})(\d{4})(\d+)/, '($1) $2-$3');
            } else if (value.length >= 3) {
                value = value.replace(/(\d{2})(\d+)/, '($1) $2');
            } else if (value.length >= 1) {
                value = value.replace(/(\d+)/, '($1');
            }
            
            e.target.value = value;
        });
    }
});
