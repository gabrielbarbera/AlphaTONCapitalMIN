// AlphaTON Capital Corp. - Home Page JavaScript
// Handles stock chart placeholder and interactive elements

document.addEventListener("DOMContentLoaded", function () {
  // Stock Chart Placeholder - Chart.js would be integrated here
  // For now, this is a placeholder for future API integration

  const chartContainer = document.getElementById("stock-chart");
  if (chartContainer) {
    // Simulate loading state
    chartContainer.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <div class="alphaton-spinner" style="margin: 0 auto 20px;"></div>
        <p style="color: var(--gray-400);">Loading stock data...</p>
      </div>
    `;

    // Simulate chart loading completion
    setTimeout(() => {
      chartContainer.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg);">
          <p style="color: var(--gray-400); margin-bottom: 20px;">Stock chart integration placeholder</p>
          <p style="font-size: var(--font-size-xl); color: var(--gray-300);">
            Real-time stock data would be displayed here with Chart.js integration.
          </p>
          <div style="margin-top: 20px;">
            <a href="https://www.nasdaq.com/market-activity/stocks/aton" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="button button-primary">
              View Live Quote on Nasdaq
            </a>
          </div>
        </div>
      `;
    }, 1500);
  }

  // Key Metrics Loading States
  const metrics = document.querySelectorAll(".metric");
  metrics.forEach((metric, index) => {
    setTimeout(() => {
      const value = metric.querySelector(".metric-value");
      if (value) {
        value.classList.add("loaded");
      }
    }, index * 200);
  });
});
