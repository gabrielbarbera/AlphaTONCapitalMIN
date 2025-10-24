// AlphaTON Capital Corp. - Home Page JavaScript
// Stock chart and home page specific functionality

document.addEventListener('DOMContentLoaded', function() {
    initStockChart();
    initNewsletterForm();
    initScrollAnimations();
});

// Stock Chart Implementation
function initStockChart() {
    const canvas = document.getElementById('stockChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    
    // Set canvas size based on container
    function resizeCanvas() {
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }
    
    resizeCanvas();
    window.addEventListener('resize', AlphaTON.debounce(resizeCanvas, 250));
    
    // Mock stock data (in production, this would come from an API)
    const stockData = generateMockStockData();
    
    // Draw the chart
    drawStockChart(ctx, stockData);
    
    // Update stock metrics
    updateStockMetrics(stockData);
}

function generateMockStockData() {
    const data = [];
    const now = new Date();
    let price = 25.50; // Starting price
    
    // Generate 30 days of data
    for (let i = 29; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        
        // Random price movement
        const change = (Math.random() - 0.5) * 2; // -1 to +1
        price += change;
        price = Math.max(20, Math.min(35, price)); // Keep within reasonable range
        
        data.push({
            date: date,
            price: price,
            volume: Math.floor(Math.random() * 1000000) + 500000
        });
    }
    
    return data;
}

function drawStockChart(ctx, data) {
    const canvas = ctx.canvas;
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Find min/max values
    const prices = data.map(d => d.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice;
    
    // Chart area
    const chartWidth = width - (padding * 2);
    const chartHeight = height - (padding * 2);
    const chartX = padding;
    const chartY = padding;
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
        const y = chartY + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(chartX, y);
        ctx.lineTo(chartX + chartWidth, y);
        ctx.stroke();
    }
    
    // Vertical grid lines
    for (let i = 0; i <= 6; i++) {
        const x = chartX + (chartWidth / 6) * i;
        ctx.beginPath();
        ctx.moveTo(x, chartY);
        ctx.lineTo(x, chartY + chartHeight);
        ctx.stroke();
    }
    
    // Draw price line
    ctx.strokeStyle = '#3B82F6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    data.forEach((point, index) => {
        const x = chartX + (chartWidth / (data.length - 1)) * index;
        const y = chartY + chartHeight - ((point.price - minPrice) / priceRange) * chartHeight;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Draw data points
    ctx.fillStyle = '#3B82F6';
    data.forEach((point, index) => {
        const x = chartX + (chartWidth / (data.length - 1)) * index;
        const y = chartY + chartHeight - ((point.price - minPrice) / priceRange) * chartHeight;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
    });
    
    // Draw labels
    ctx.fillStyle = '#ffffff';
    ctx.font = '12px RedHatDisplay, sans-serif';
    ctx.textAlign = 'center';
    
    // Price labels
    for (let i = 0; i <= 5; i++) {
        const price = minPrice + (priceRange / 5) * (5 - i);
        const y = chartY + (chartHeight / 5) * i;
        ctx.fillText('$' + price.toFixed(2), chartX - 10, y + 4);
    }
    
    // Date labels
    ctx.textAlign = 'center';
    for (let i = 0; i < data.length; i += 5) {
        const x = chartX + (chartWidth / (data.length - 1)) * i;
        const date = data[i].date;
        const dateStr = (date.getMonth() + 1) + '/' + date.getDate();
        ctx.fillText(dateStr, x, chartY + chartHeight + 20);
    }
}

function updateStockMetrics(data) {
    const currentPrice = data[data.length - 1].price;
    const previousPrice = data[data.length - 2].price;
    const change = currentPrice - previousPrice;
    const changePercent = (change / previousPrice) * 100;
    const volume = data[data.length - 1].volume;
    
    // Update DOM elements
    const currentPriceEl = document.getElementById('currentPrice');
    const dailyChangeEl = document.getElementById('dailyChange');
    const volumeEl = document.getElementById('volume');
    
    if (currentPriceEl) {
        currentPriceEl.textContent = '$' + currentPrice.toFixed(2);
    }
    
    if (dailyChangeEl) {
        const sign = change >= 0 ? '+' : '';
        dailyChangeEl.textContent = sign + changePercent.toFixed(2) + '%';
        dailyChangeEl.className = 'metric-value ' + (change >= 0 ? 'positive' : 'negative');
    }
    
    if (volumeEl) {
        volumeEl.textContent = formatNumber(volume);
    }
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Newsletter Form Handling
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        const button = this.querySelector('button[type="submit"]');
        
        if (!email) return;
        
        // Show loading state
        AlphaTON.showLoading(button);
        button.textContent = 'Subscribing...';
        
        // Simulate API call (in production, this would be a real API call)
        setTimeout(() => {
            AlphaTON.hideLoading(button);
            button.textContent = 'Subscribed!';
            button.classList.add('success');
            
            // Reset form
            this.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                button.textContent = 'Subscribe';
                button.classList.remove('success');
            }, 3000);
        }, 1500);
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .metric-card, .resource-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Utility function for smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Export functions for global access
window.AlphaTONHome = {
    scrollToSection,
    updateStockMetrics
};