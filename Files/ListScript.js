    
    
    

        // Sample product data - NEW SECTION
        // In a real application, this would be loaded from a database or API
        let products = [
            {
                id: 1,
                category: "All-In-One PC",
                title: "DELL OPTIPLEX 3240",
                specs: "I5(6) / 8GB RAM / 256 SSD / 2G R7 M320 / 22\" / IPS / FullHD",
                price: 19500000,
                image: "DELL OPTIPLEX 3240.png"
            },
            {
                id: 2,
                category: "All-In-One PC",
                title: "DELL OPTIPLEX AIO 7450",
                specs: "I5(6) / 8GB RAM / 256 SSD / 2G SHARE INTEL / 24\" / IPS",
                price: 21500000,
                image: "DELL OPTIPLEX AIO 7450.png"
            },
            {
                id: 3,
                category: "Monitor",
                title: "SAMSUNG 2022* 27\"",
                specs: "1980*1080 / IPS / VGA / HDMI / 75Hz / 18 MONTH GARANTY",
                price: 12500000,
                image: "SAMSUNG 2022 27.png"
            },
            {
                id: 4,
                category: "Monitor",
                title: "SAMSUNG 2022* 24\"",
                specs: "1980*1080 / VA / VGA / HDMI / 75Hz / 18 MONTH GARANTY",
                price: 10600000,
                image: "SAMSUNG 2022 24.png"
            },
            {
                id: 5,
                category: "Monitor",
                title: "DELL 2017 24\" Frameless",
                specs: "1980*1080 / IPS / DISPLAY PORT / VGA / DVI / PORT USB 3",
                price: 6000000,
                image: "DELL 2017 24 Frameless.png"
            },
            {
                id: 6,
                category: "Monitor",
                title: "DELL 2016 24\"",
                specs: "1980*1080 / IPS / DISPLAY PORT / VGA / DVI / PORT USB 3",
                price: 5500000,
                image: "Dell P2414H 24 c3.png"
            },
            {
                id: 7,
                category: "Monitor",
                title: "DELL 2017 22\" FRAMELESS",
                specs: "1980*1080 / IPS / FULL PORT / PORT USB 3",
                price: 4500000,
                image: "DELL 2017 22 FRAMELESS.png"
            },
            {
                id: 8,
                category: "Monitor",
                title: "DELL 2016 23\"",
                specs: "1980*1080 / IPS / DISPLAY PORT / VGA / DVI / PORT USB",
                price: 4500000,
                image: "DELL 2016 23.png"
            },
            {
                id: 9,
                category: "Monitor",
                title: "HP 2016 23\"",
                specs: "1980*1080 / IPS / DISPLAY PORT / VGA / DVI / PORT USB",
                price: 4500000,
                image: "HP 2016 23.png"
            },
            {
                id: 10,
                category: "Monitor",
                title: "SAMSUNG 2017 24\"",
                specs: "1980*1080 / LED / VGA / DVI / DISPLAYPORT",
                price: 5000000,
                image: "SAMSUNG 2022 24 2.png"
            },
            {
                id: 11,
                category: "Monitor",
                title: "ACER (WHITE) 2019 24\"",
                specs: "1980*1080 / IPS / DISPLAY PORT / VGA / DVI",
                price: 5000000,
                image: "ACER (WHITE) 2019 24.png"
            },
            {
                id: 12,
                category: "Tiny Case",
                title: "HP G2 TINY CASE",
                specs: "I5(6) / 8GB RAM / 500 HDD / 4G INTEL",
                price: 9500000,
                image: "HP G2 TINY CASE.png"
            },
            {
                id: 13,
                category: "Tiny Case",
                title: "HP G3 TINY CASE",
                specs: "I5(7) / 8GB RAM / 500 HDD / 4G INTEL",
                price: 10500000,
                image: "HP G3 TINY CASE.jpg"
            },
            {
                id: 14,
                category: "Mini Case",
                title: "HP G1 MINI CASE",
                specs: "I5(4) / 4GB RAM / 500 HDD / 4G INTEL",
                price: 6400000,
                image: "MINI-CASE-HP-ELITE-800-G2.jpg"
            },
            {
                id: 15,
                category: "Mini Case",
                title: "HP G2 MINI CASE",
                specs: "I5(6) / 8GB RAM / 500 HDD / 4G INTEL",
                price: 7600000,
                image: "MINI-CASE-HP-ELITE-800-G2.jpg"
            },
            {
                id: 16,
                category: "Mini Case",
                title: "HP G3 MINI CASE",
                specs: "I5(7) / 8GB RAM / 500 HDD / 4G INTEL",
                price: 8600000,
                image: "HP G3 MINI CASE.jpg"
            },
            {
                id: 17,
                category: "Mini Case",
                title: "HP G4 MINI CASE",
                specs: "I5(8) / 8GB RAM / 500 HDD / 4G INTEL",
                price: 16500000,
                image: "HP G3 MINI CASE.jpg"
            },
            {
                id: 18,
                category: "Mini Case",
                title: "HP G5 MINI CASE",
                specs: "I5(9) / 8GB RAM / 500 HDD / 4G INTEL",
                price: 19500000,
                image: "HP G3 MINI CASE.jpg"
            },
            {
                id: 19,
                category: "Notebook",
                title: "DELL LATITUDE E5430",
                specs: "I5(3) / 4GB RAM / 750G HDD / 2G INTEL",
                price: 9500000,
                image: "1769551DELL LATITUDE E5430.jpg"
            },
            {
                id: 20,
                category: "Notebook",
                title: "DELL LATITUDE E6530",
                specs: "I5(3) / 4GB RAM / 500G HDD / 2G INTEL",
                price: 9800000,
                image: "DELL LATITUDE E6530.jpg"
            },
            {
                id: 21,
                category: "Notebook",
                title: "DELL LATITUDE E6250",
                specs: "I7(5) / 8GB RAM / 240G SSD / 4G INTEL",
                price: 15500000,
                image: "DELL LATITUDE E6250.jpg"
            },
            {
                id: 22,
                category: "Notebook",
                title: "DELL LATITUDE E5270",
                specs: "I7(6U) / 8GB RAM / 240G SSD / 4G INTEL",
                price: 16500000,
                image: "DELL LATITUDE E5270.jpg"
            },
            {
                id: 23,
                category: "Notebook",
                title: "HP PRO BOOK 6460B",
                specs: "I5(3) / 4GB RAM / 320G HDD / 2G INTEL",
                price: 9500000,
                image: "HP PRO BOOK 6460B.jpg"
            },
            {
                id: 24,
                category: "Notebook",
                title: "HP PRO BOOK 645 G2",
                specs: "I5(6U) / 8GB RAM / 500G HDD / 4G INTEL",
                price: 15500000,
                image: "HP PRO BOOK 645 G2.png"
            },
            {
                id: 25,
                category: "Notebook",
                title: "HP PRO BOOK 650 G2",
                specs: "I5(6U) / 8GB RAM / 256G SSD M.2 / 4G INTEL",
                price: 18500000,
                image: "HP PRO BOOK 650 G2.png"
            },
            {
                id: 26,
                category: "Notebook",
                title: "HP PRO BOOK 650 G2",
                specs: "I7(6HQ) / 8GB RAM / 256G SSD M.2 / 4G INTEL",
                price: 19500000,
                image: "HP PRO BOOK 650 G2.png"
            },
            {
                id: 27,
                category: "Notebook",
                title: "ACER ASPIRE 5755G",
                specs: "I5(2) / 4GB RAM / 500G HDD / 2G GT 630",
                price: 9500000,
                image: "ACER ASPIRE 5755G.png"
            },
            {
                id: 28,
                category: "All-In-One PC",
                title: "APPLE IMAC AIO 22 slim",
                specs: "I5(3) / 8GB RAM / 1TB HDD / 1G R7 M320 / 22\" / IPS / FullHD",
                price: 24500000,
                image: "APPLE imac slim 22.jpg"
            },
            {
                id: 29,
                category: "All-In-One PC",
                title: "APPLE IMAC AIO 27 slim",
                specs: "I5(4) / 8GB RAM / 1TB HDD / 2G / 24\" / IPS / 2K",
                price: 31500000,
                image: "APPLE imac 27.webp"
            }
        ];
 // Function to format price with commas
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to save products to local storage
function saveProductsToStorage() {
    localStorage.setItem('catalogProducts', JSON.stringify(products));
}

// Function to load products from local storage
function loadProductsFromStorage() {
    const storedProducts = localStorage.getItem('catalogProducts');
    if (storedProducts) {
        products = JSON.parse(storedProducts);
    } else {
        // Initialize storage with default products on first run
        saveProductsToStorage();
    }
}

// Function to render product cards
function renderProductCards() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image || 'placeholder.jpg'}" alt="${product.title}">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-specs">${product.specs}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
            </div>
        `;
        
        productGrid.appendChild(card);
    });
}

// Function to render the edit table
function renderEditTable() {
    const tableBody = document.getElementById('editTableBody');
    tableBody.innerHTML = '';
    
    products.forEach(product => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${product.title}</td>
            <td>${product.category}</td>
            <td>${formatPrice(product.price)} Tomans</td>
            <td>
                <input type="number" id="price-${product.id}" value="${product.price}" min="0">
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Function to toggle between catalog and admin views
function toggleAdminMode() {
    const catalogSection = document.getElementById('catalogSection');
    const adminSection = document.getElementById('adminSection');
    const adminButton = document.getElementById('adminButton');
    
    if (adminSection.style.display === 'none') {
        // Switch to admin mode
        catalogSection.style.display = 'none';
        adminSection.style.display = 'block';
        adminButton.textContent = 'Exit Admin Mode';
        renderEditTable();
    } else {
        // Switch to catalog mode
        adminSection.style.display = 'none';
        catalogSection.style.display = 'block';
        adminButton.textContent = 'Admin Mode';
        renderProductCards();
    }
}

// Function to save price changes
function saveChanges() {
    products.forEach(product => {
        const priceInput = document.getElementById(`price-${product.id}`);
        if (priceInput) {
            const newPrice = parseInt(priceInput.value);
            if (!isNaN(newPrice) && newPrice >= 0) {
                product.price = newPrice;
            }
        }
    });
    
    // Save to local storage
    saveProductsToStorage();
    
    // Show success message
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = 'Prices updated successfully!';
    statusMessage.className = 'status-message success';
    statusMessage.style.display = 'block';
    
    // Hide message after 3 seconds
    setTimeout(() => {
        statusMessage.style.display = 'none';
    }, 3000);
    
    // Refresh the edit table
    renderEditTable();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {

    // Load products from storage COMMENT THIS WHEN CHANGE

    loadProductsFromStorage();  // THIS  
    
    // Render product cards
    renderProductCards();
    
    // Admin button event listener
    document.getElementById('adminButton').addEventListener('click', toggleAdminMode);
    
    // Save changes button event listener
    document.getElementById('saveChanges').addEventListener('click', saveChanges);
    
    // Back to catalog button event listener
    document.getElementById('backToCatalog').addEventListener('click', toggleAdminMode);
    
    // Add search functionality
    const searchInput = document.querySelector('.search input');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            const specs = card.querySelector('.product-specs').textContent.toLowerCase();
            const category = card.querySelector('.product-category').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || specs.includes(searchTerm) || category.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Add category filter functionality
    const categorySelect = document.querySelector('.category-filter select');
    
    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        
        if (selectedCategory === 'all') {
            productCards.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }
        
        productCards.forEach(card => {
            const cardCategory = card.querySelector('.product-category').textContent.toLowerCase();
            
            if (selectedCategory === 'all-in-one' && cardCategory.includes('all-in-one')) {
                card.style.display = 'block';
            } else if (selectedCategory === 'monitors' && cardCategory.includes('monitor')) {
                card.style.display = 'block';
            } else if ((selectedCategory === 'cases') && 
                      (cardCategory.includes('mini case') || cardCategory.includes('tiny case'))) {
                card.style.display = 'block';
            } else if (selectedCategory === 'notebooks' && cardCategory.includes('notebook')) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // scrollButton functionality
    const scrollButton = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
        // scrollButton functionality
        const scrollButtonD = document.getElementById('scroll-to-footer');


    
        scrollButtonD.addEventListener('click', () => {
            window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth' });
        });
});