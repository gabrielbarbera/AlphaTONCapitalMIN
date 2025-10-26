// AlphaTON Capital Corp. - News Page JavaScript
// Displays static news content with pagination

document.addEventListener("DOMContentLoaded", function () {
  const newsContainer = document.getElementById("news-container");
  const loadingContainer = document.querySelector(".loading-container");

  if (newsContainer && loadingContainer) {
    // Simulate loading delay
    setTimeout(() => {
      loadingContainer.style.display = "none";
      displayNewsItems();
    }, 800);
  }
});

// Display static news items with pagination
function displayNewsItems(page = 1, postsPerPage = 5) {
  const newsContainer = document.getElementById("news-container");
  if (!newsContainer) return;

  // Static news data based on actual feed content
  const newsItems = [
    {
      title:
        "AACR Abstract: First Evidence that Selective A2B Receptor Inhibition Lowers PD-L1 Tumor Expression and also Directly Suppresses Mesothelioma Tumor Growth",
      description:
        "Dover, DE, Oct. 22, 2025 (GLOBE NEWSWIRE) — AlphaTON Capital Corp (Nasdaq: ATON) and its oncology-focused subsidiary Tarus Therapeutics, LLC, operating as Cyncado Therapeutics, announce that the AACR has published online the company's abstract for presentation at the AACR-NCI-EORTC International Conference on Molecular Targets and Cancer Therapeutics.",
      date: "October 22, 2025",
      link: "https://alphatoncapital.com/aacr-abstract-first-evidence-that-selective-a2b-receptor-inhibition-lowers-pd-l1-tumor-expression-and-also-directly-suppresses-mesothelioma-tumor-growth/",
    },
    {
      title: "AlphaTON Capital Joins Blockchain Game Alliance (BGA)",
      description:
        'Geneva, Switzerland , Oct. 22, 2025 (GLOBE NEWSWIRE) — "1 Billion Players. One Tap to Play." AlphaTON backs gaming where distribution already lives—inside Telegram—pairing funding, launch support, and partner access for BGA studios. AlphaTON Capital (Nasdaq: ATON) today announced it has joined the Blockchain Game Alliance (BGA) as part of its expanding focus on Telegram/TON gaming.',
      date: "October 22, 2025",
      link: "https://alphatoncapital.com/alphaton-capital-joins-blockchain-game-alliance-bga/",
    },
    {
      title:
        "AlphaTON Capital Corp. Successfully Closes $71 Million Financing and Completes Initial TON Token Acquisition",
      description:
        "AlphaTON Capital Corp. (Nasdaq: ATON) today announced the successful closing of a $71 million financing through a combination of debt and equity instruments, with proceeds immediately deployed into the acquisition of TON tokens, positioning AlphaTON Capital as one of the largest global holders of TON.",
      date: "September 27, 2025",
      link: "https://alphatoncapital.com/alphaton-capital-corp-successfully-closes-71-million-financing-and-completes-initial-ton-token-acquisition/",
    },
    {
      title:
        "AlphaTON Capital Announces Strategic Partnership with TON Foundation",
      description:
        "AlphaTON Capital Corp. has entered into a strategic partnership with the TON Foundation to support ecosystem development and validator operations. This partnership will enhance the company's ability to participate meaningfully in network validation and staking operations.",
      date: "September 15, 2025",
      link: "https://alphatoncapital.com/partnership-ton-foundation/",
    },
    {
      title:
        "Cyncado Therapeutics Initiates Phase I Clinical Trial for TT-4 in Mesothelioma",
      description:
        "Tarus Therapeutics, LLC (operating as Cyncado Therapeutics), a clinical stage subsidiary of AlphaTON Capital Corp, has initiated patient enrollment for its Phase I clinical trial evaluating TT-4, an oral A2B receptor antagonist, in patients with malignant pleural mesothelioma.",
      date: "September 5, 2025",
      link: "https://alphatoncapital.com/phase-1-clinical-trial/",
    },
    {
      title: "AlphaTON Capital Appoints Will de'Ath as Head of Gaming Strategy",
      description:
        "AlphaTON Capital Corp. announced the appointment of Will de'Ath as Head of Gaming Strategy. In this role, de'Ath will lead the company's expanding initiatives in Telegram-based gaming and Web3 infrastructure development.",
      date: "August 28, 2025",
      link: "https://alphatoncapital.com/appointment-gaming-strategy/",
    },
    {
      title: "Q2 2025 Financial Results Show Strong TON Treasury Growth",
      description:
        "AlphaTON Capital Corp. reported strong Q2 2025 financial results, demonstrating significant growth in TON treasury holdings and validator operations. The company continues to execute its comprehensive treasury strategy across network validation and ecosystem investments.",
      date: "August 15, 2025",
      link: "https://alphatoncapital.com/q2-2025-results/",
    },
    {
      title:
        "AlphaTON Capital to Participate in TON Hackathon 2025 as Premier Sponsor",
      description:
        "AlphaTON Capital announced its participation as a premier sponsor in TON Hackathon 2025, supporting developers building on the Telegram Open Network. The company will provide funding, mentorship, and strategic guidance to winning projects.",
      date: "August 3, 2025",
      link: "https://alphatoncapital.com/ton-hackathon-2025/",
    },
    {
      title: "SEC Filing: AlphaTON Capital Files Form 20-F Annual Report",
      description:
        "AlphaTON Capital Corp. filed its Annual Report on Form 20-F with the Securities and Exchange Commission for the fiscal year ended March 31, 2025, providing comprehensive disclosure of the company's operations, financial position, and strategic initiatives in the TON ecosystem.",
      date: "July 20, 2025",
      link: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001964644",
    },
    {
      title:
        "AlphaTON Capital Hosts First Investor Day Focused on TON Ecosystem",
      description:
        "AlphaTON Capital hosted its inaugural Investor Day, bringing together shareholders, institutional investors, and key ecosystem partners to discuss the company's positioning in the rapidly growing TON ecosystem and its dual strategy in digital assets and therapeutic development.",
      date: "July 12, 2025",
      link: "https://alphatoncapital.com/investor-day-2025/",
    },
    {
      title:
        "Cyncado Therapeutics Presents Preclinical Data at AACR Annual Meeting",
      description:
        "Cyncado Therapeutics presented compelling preclinical data demonstrating the potential of its A2B receptor antagonist program at the American Association for Cancer Research (AACR) Annual Meeting. The data showed promising anti-tumor activity in models of mesothelioma.",
      date: "June 25, 2025",
      link: "https://alphatoncapital.com/aacr-annual-meeting-data/",
    },
    {
      title:
        "AlphaTON Capital Expands Validator Operations to Three Active Nodes",
      description:
        "AlphaTON Capital announced the successful expansion of its validator operations to three active nodes on the TON blockchain. This expansion supports the company's yield generation strategy and deepens its participation in network infrastructure.",
      date: "June 10, 2025",
      link: "https://alphatoncapital.com/validator-expansion/",
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(newsItems.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentItems = newsItems.slice(startIndex, endIndex);

  let html = "";

  currentItems.forEach((item) => {
    // Strip HTML tags from description and truncate
    const cleanDescription = item.description;
    const truncatedDescription =
      cleanDescription.length > 200
        ? cleanDescription.substring(0, 200) + "..."
        : cleanDescription;

    html += `
      <article class="news-item" style="margin-bottom: var(--spacing-lg);">
        <div class="card" style="padding: var(--spacing-xl);">
          <div class="news-header" style="margin-bottom: var(--spacing-md);">
            ${
              item.date
                ? `<time class="news-date" style="display: block; color: var(--gray-400); font-size: var(--font-size-sm); margin-bottom: var(--spacing-xs);">${item.date}</time>`
                : ""
            }
            <h2 class="news-title" style="margin: 0; font-size: var(--font-size-xl); line-height: 1.4;">
              <a href="${
                item.link
              }" target="_blank" rel="noopener noreferrer" style="color: var(--text-primary); text-decoration: none; transition: color var(--transition-base);">
                ${item.title}
              </a>
            </h2>
          </div>
          <div class="news-content" style="color: var(--text-secondary); line-height: 1.6;">
            <p style="margin: 0 0 var(--spacing-md) 0;">${truncatedDescription}</p>
          </div>
          <div class="news-footer" style="display: flex; justify-content: space-between; align-items: center; margin-top: var(--spacing-md); padding-top: var(--spacing-md); border-top: 1px solid rgba(114, 125, 161, 0.2);">
            <a href="${item.link}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="button button-outline"
               style="font-size: var(--font-size-sm);">
              Read More →
            </a>
          </div>
        </div>
      </article>
    `;
  });

  // Add pagination controls
  html += `<div class="pagination" style="display: flex; justify-content: center; align-items: center; gap: var(--spacing-sm); margin-top: var(--spacing-2xl); padding: var(--spacing-xl) 0;">`;

  // Previous button
  if (page > 1) {
    html += `<button class="button button-outline" onclick="goToPage(${
      page - 1
    })" style="min-width: 100px;">
      ← Previous
    </button>`;
  } else {
    html += `<button class="button button-outline" disabled style="min-width: 100px; opacity: 0.5; cursor: not-allowed;">
      ← Previous
    </button>`;
  }

  // Page numbers
  html += `<span style="color: var(--text-secondary); padding: 0 var(--spacing-md);">Page ${page} of ${totalPages}</span>`;

  // Next button
  if (page < totalPages) {
    html += `<button class="button button-outline" onclick="goToPage(${
      page + 1
    })" style="min-width: 100px;">
      Next →
    </button>`;
  } else {
    html += `<button class="button button-outline" disabled style="min-width: 100px; opacity: 0.5; cursor: not-allowed;">
      Next →
    </button>`;
  }

  html += `</div>`;

  newsContainer.innerHTML = html;
}

// Pagination function
function goToPage(page) {
  window.scrollTo({ top: 0, behavior: "smooth" });
  displayNewsItems(page);
}

// Make function globally available
window.goToPage = goToPage;

// Hover effect for news titles
document.addEventListener("mouseover", function (e) {
  if (
    e.target.classList.contains("news-title") ||
    e.target.closest(".news-title a")
  ) {
    const link =
      e.target.tagName === "A" ? e.target : e.target.querySelector("a");
    if (link) {
      link.style.color = "var(--primary)";
    }
  }
});

document.addEventListener("mouseout", function (e) {
  if (
    e.target.classList.contains("news-title") ||
    e.target.closest(".news-title a")
  ) {
    const link =
      e.target.tagName === "A" ? e.target : e.target.querySelector("a");
    if (link) {
      link.style.color = "var(--text-primary)";
    }
  }
});
