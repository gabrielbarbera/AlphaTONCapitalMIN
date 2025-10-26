// AlphaTON Capital Corp. - Home Page JavaScript
// Handles stock chart and key metrics display

document.addEventListener("DOMContentLoaded", function () {
  // Stock Chart with Chart.js
  const chartContainer = document.getElementById("stock-chart");
  if (chartContainer) {
    // Check if Chart.js is loaded
    if (typeof Chart !== "undefined") {
      initializeStockChart(chartContainer);
    } else {
      // Fallback if Chart.js isn't loaded - show mockup
      showStockChartMockup(chartContainer);
    }
  }

  // Load Key Metrics
  loadKeyMetrics();
});

// Initialize Chart.js stock chart
function initializeStockChart(container) {
  // Mock stock data - 30 days of ATON price data
  const dates = [];
  const prices = [];
  const basePrice = 8.5;

  // Generate 30 days of price data
  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dates.push(
      date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    );

    // Simulate realistic price movement
    const randomFactor = (Math.random() - 0.5) * 0.15;
    const price = basePrice * (1 + i * 0.002 + randomFactor);
    prices.push(parseFloat(price.toFixed(2)));
  }

  const ctx = document.createElement("canvas");
  ctx.id = "stock-chart-canvas";
  container.innerHTML = "";
  container.appendChild(ctx);

  new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "ATON Price (USD)",
          data: prices,
          borderColor: "#7c87f7",
          backgroundColor: "rgba(124, 135, 247, 0.1)",
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBorderWidth: 2,
          pointHoverBackgroundColor: "#ffffff",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(23, 24, 38, 0.95)",
          padding: 12,
          titleColor: "#c9d3ee",
          bodyColor: "#ffffff",
          borderColor: "rgba(124, 135, 247, 0.3)",
          borderWidth: 1,
          displayColors: false,
          callbacks: {
            title: function (context) {
              return context[0].label;
            },
            label: function (context) {
              return "$" + context.parsed.y.toFixed(2);
            },
          },
        },
      },
      scales: {
        x: {
          grid: {
            color: "rgba(114, 125, 161, 0.1)",
            drawBorder: false,
          },
          ticks: {
            color: "#939db8",
            font: {
              size: 11,
            },
            maxRotation: 45,
            minRotation: 45,
          },
        },
        y: {
          grid: {
            color: "rgba(114, 125, 161, 0.1)",
            drawBorder: false,
          },
          ticks: {
            color: "#939db8",
            font: {
              size: 12,
            },
            callback: function (value) {
              return "$" + value.toFixed(2);
            },
          },
        },
      },
      interaction: {
        mode: "index",
        intersect: false,
      },
    },
  });

  // Set chart container height
  container.style.height = "400px";
  container.style.padding = "20px";
  container.style.background = "rgba(23, 24, 38, 0.8)";
  container.style.borderRadius = "var(--radius-lg)";
  container.style.border = "1px solid rgba(114, 125, 161, 0.2)";
}

// Fallback mockup if Chart.js isn't loaded
function showStockChartMockup(container) {
  container.innerHTML = `
    <div style="height: 400px; background: rgba(23, 24, 38, 0.8); border-radius: var(--radius-lg); border: 1px solid rgba(114, 125, 161, 0.2); position: relative; overflow: hidden;">
      <svg viewBox="0 0 800 400" style="width: 100%; height: 100%;">
        <!-- Grid Lines -->
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(114, 125, 161, 0.1)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        <!-- Simulated Stock Line -->
        <path d="M 50,350 Q 150,300 250,280 T 450,260 T 650,250 T 750,245" 
              fill="none" 
              stroke="#7c87f7" 
              stroke-width="3" 
              opacity="0.8"/>
        
        <!-- Area fill -->
        <path d="M 50,350 Q 150,300 250,280 T 450,260 T 650,250 T 750,245 L 750,400 L 50,400 Z" 
              fill="url(#areaGradient)" 
              opacity="0.1"/>
        
        <!-- Gradient for area -->
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#7c87f7" />
            <stop offset="100%" stop-color="#7c87f7" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      <!-- Overlay Text -->
      <div style="position: absolute; bottom: 20px; left: 20px; right: 20px;">
        <p style="color: var(--gray-400); font-size: 12px; margin-bottom: 5px;">Last 30 Days - Mock Data</p>
        <p style="color: var(--primary); font-size: 24px; font-weight: 600;">$8.62 <span style="color: #10b981; font-size: 14px;">+2.4%</span></p>
      </div>
    </div>
  `;
}

// Load Key Metrics
function loadKeyMetrics() {
  const metricCards = document.querySelectorAll(".card.text-center");

  // Mock data for key metrics
  const metrics = [
    {
      title: "TON Tokens Held",
      value: "8.2M",
      description: "TON tokens in treasury",
    },
    {
      title: "Validators Operated",
      value: "3",
      description: "Active validator nodes",
    },
    {
      title: "Estimated Staking Yield",
      value: "4.2%",
      description: "Annual staking returns",
    },
    {
      title: "Treasury Allocation",
      value: "$68.9M",
      description: "Total treasury value",
    },
  ];

  metricCards.forEach((card, index) => {
    const spinner = card.querySelector(".alphaton-spinner");
    const titleElement = card.querySelector("h3.metric-value");
    const descriptionElement = card.querySelector("p.text-muted");

    if (spinner && titleElement && descriptionElement && metrics[index]) {
      setTimeout(() => {
        spinner.style.display = "none";
        titleElement.style.fontSize = "2rem";
        titleElement.style.fontWeight = "700";
        titleElement.style.color = "var(--primary)";
        titleElement.style.marginBottom = "8px";
        titleElement.textContent = metrics[index].value;
        titleElement.classList.add("loaded");

        descriptionElement.textContent = metrics[index].description;
        descriptionElement.style.color = "var(--gray-400)";
        descriptionElement.style.fontSize = "0.875rem";
      }, 800 + index * 200);
    }
  });
}
