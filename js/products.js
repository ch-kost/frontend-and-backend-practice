class ProductCards {
    constructor() {
        this.cards = document.querySelectorAll('.product-card');
        this.buttons = document.querySelectorAll('.product-card__button');
        this.init();
    }
    
    init() {
        this.cards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('product-card__button')) {
                    this.toggleSelection(card);
                }
            });
        });
        
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleAddToCart(button);
            });
        });
    }
    
    toggleSelection(card) {
        card.classList.toggle('product-card--selected');
    }
    
    handleAddToCart(button) {
        const originalText = button.textContent;
        button.textContent = 'Добавлено!';
        button.style.background = 'var(--color-success)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ProductCards();
});