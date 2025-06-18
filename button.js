document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Menu items data
    const menuItems = [
        {
            id: 1,
            name: "Margherita Pizza",
            category: "pizza",
            price: 12.99,
            img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            desc: "Classic pizza with tomato sauce, mozzarella, and fresh basil."
        },
        {
            id: 2,
            name: "Pepperoni Pizza",
            category: "pizza",
            price: 14.99,
            img: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            desc: "Traditional pizza with tomato sauce, mozzarella, and pepperoni."
        },
        {
            id: 3,
            name: "Veggie Pizza",
            category: "pizza",
            price: 13.99,
            img: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            desc: "Pizza loaded with fresh vegetables and mozzarella cheese."
        },
        {
            id: 4,
            name: "Classic Burger",
            category: "burger",
            price: 8.99,
            img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            desc: "Juicy beef patty with lettuce, tomato, onion, and special sauce."
        },
        {
            id: 5,
            name: "Cheeseburger",
            category: "burger",
            price: 9.99,
            img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            desc: "Classic burger with a slice of melted American cheese."
        },
        {
            id: 6,
            name: "Bacon Burger",
            category: "burger",
            price: 10.99,
            img: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            desc: "Burger topped with crispy bacon strips and cheddar cheese."
        },
        {
            id: 7,
            name: "Spaghetti Carbonara",
            category: "pasta",
            price: 11.99,
            img: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            desc: "Classic Italian pasta with eggs, cheese, pancetta, and black pepper."
        },
        {
            id: 8,
            name: "Fettuccine Alfredo",
            category: "pasta",
            price: 12.99,
            img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            desc: "Creamy pasta with butter, parmesan cheese, and garlic."
        },
        {
            id: 9,
            name: "Penne Arrabiata",
            category: "pasta",
            price: 10.99,
            img: "https://images.unsplash.com/photo-1611270633750-6e7f5135b6bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            desc: "Spicy tomato sauce with garlic and red chili peppers."
        },
        {
            id: 10,
            name: "Caesar Salad",
            category: "salad",
            price: 8.99,
            img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            desc: "Romaine lettuce with croutons, parmesan, and Caesar dressing."
        },
        {
            id: 11,
            name: "Greek Salad",
            category: "salad",
            price: 9.99,
            img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            desc: "Fresh vegetables with feta cheese, olives, and olive oil."
        },
        {
            id: 12,
            name: "Chocolate Cake",
            category: "dessert",
            price: 6.99,
            img: "https://images.unsplash.com/photo-1565800080240-32a4f80f0e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            desc: "Rich chocolate cake with chocolate frosting."
        },
        {
            id: 13,
            name: "Cheesecake",
            category: "dessert",
            price: 7.99,
            img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            desc: "Creamy New York style cheesecake with strawberry topping."
        },
        {
            id: 14,
            name: "Tiramisu",
            category: "dessert",
            price: 8.99,
            img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            desc: "Classic Italian dessert with coffee-soaked ladyfingers."
        }
    ];
    
    // Shopping cart
    let cart = [];
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeBtn = document.querySelector('.close-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.querySelector('.cart-count');
    
    // Display menu items
    const menuItemsContainer = document.getElementById('menu-items');
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    function displayMenuItems(category = 'all') {
        menuItemsContainer.innerHTML = '';
        
        const filteredItems = category === 'all' 
            ? menuItems 
            : menuItems.filter(item => item.category === category);
        
        filteredItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.dataset.id = item.id;
            menuItem.dataset.category = item.category;
            
            menuItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="menu-item-img">
                <div class="menu-item-info">
                    <div class="menu-item-title">
                        <h3 class="menu-item-name">${item.name}</h3>
                        <h3 class="menu-item-price">$${item.price.toFixed(2)}</h3>
                    </div>
                    <p class="menu-item-desc">${item.desc}</p>
                    <button class="add-to-cart-btn">Add to Cart</button>
                </div>
            `;
            
            menuItemsContainer.appendChild(menuItem);
        });
        
        // Add event listeners to "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const menuItem = this.closest('.menu-item');
                const itemId = parseInt(menuItem.dataset.id);
                addToCart(itemId);
            });
        });
    }
    
    // Filter menu items by category
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(btn => btn.classList.remove('active