// Simulação de banco de dados
let courses = {
    1: { locked: true },
    2: { locked: false }
};

// Controle de cursos bloqueados
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const courseId = this.dataset.id;
        courses[courseId].locked = !courses[courseId].locked;
        updateUI();
    });
});

// Redirecionamento para pagamento
document.querySelectorAll('.unlock-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const courseId = this.closest('.course').dataset.id;
        alert(`Redirecionando para pagamento do curso ${courseId}`);
        // window.location.href = `https://pagamento.com?course=${courseId}`;
    });
});

function updateUI() {
    // Atualiza a UI com base no status dos cursos
}
