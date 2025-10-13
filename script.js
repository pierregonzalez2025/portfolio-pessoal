// Scroll suave no menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Alerta no email
document.querySelectorAll('.btn[href^="mailto:"]').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        alert('Ei! Recebi sua mensagem, respondo em breve! 😊');
    });
});

console.log('Portfólio carregado!');