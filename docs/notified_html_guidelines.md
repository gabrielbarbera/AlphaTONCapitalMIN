# 🏛 NOTIFIED HTML IMPLEMENTATION GUIDELINES

## For: AlphaTON Capital IR Website

## Platform: Notified Investor Relations Hosting

---

## 📜 1. General Requirements

- All pages must be **pure static HTML**, CSS, and vanilla JavaScript.
- **No server-side code** (e.g., PHP, ASP, Node, React SSR).
- **No single-page apps** or routing frameworks.
- All resources must be **locally hosted** in the `/assets` directory.
- The site must remain **functional without external dependencies**.
- All pages must be **WCAG 2.1 A/AA compliant**.
- Target URL: `ir.alphatoncapital.com`.

---

## 🧭 2. Page Structure

| Page                 | File                | Purpose                           |
| -------------------- | ------------------- | --------------------------------- |
| Home                 | `index.html`      | Overview + stock ticker           |
| News & Events        | `news.html`       | Press releases, ecosystem updates |
| Financials & Filings | `financials.html` | SEC filings + reports             |
| Corporate Governance | `governance.html` | Policies, committees              |
| Leadership           | `leadership.html` | Executive team                    |
| Board of Directors   | `board.html`      | Board members                     |
| FAQs                 | `faqs.html`       | Investor questions                |
| Contact              | `contact.html`    | Contact form + IR info            |

✅ No dropdown menus except mobile hamburger.
✅ All internal links must be relative.

---

## 🧩 3. Allowed HTML Elements

- Headings (`<h1>`–`<h4>`)
- Paragraphs (`<p>`)
- Lists (`<ul>`, `<ol>`)
- Tables (`<table>`) for financial data
- Links (`<a>`) — must open external in `_blank` with `rel="noopener noreferrer"`
- Buttons (`<button>`)
- Forms (`<form>`) — static or mailto action
- Accordions
- Modals
- Tabs (optional)
- Icons (SVG or PNG)
- Images (`<img>` with `alt` text)

---

## 🧭 4. Navigation & Layout

- **Header**: fixed or sticky with logo and main nav
- **Navigation**:
  - Responsive hamburger menu for mobile
  - No JavaScript-based routing
  - Highlight active page in nav
- **Footer**:
  - Newsletter form
  - Legal links (Privacy, Terms)
  - SEC filings quick link
  - IR contact

All pages must share a **consistent header and footer** structure.

---

## 🖼 5. Assets

- All fonts, icons, and images must be **locally hosted**.
- Font formats: `EOT`, `TTF`, `WOFF`, `SVG`.
- Use `@font-face` to load fonts in CSS.
- Images should be optimized (`.webp` or `.png`) and compressed.
- Paths must be relative, e.g.:
  ```html
  <link rel="stylesheet" href="/assets/css/style.css">
  <img src="/assets/img/logo.png" alt="AlphaTON Logo">
  ```

🧠 6. JavaScript
Only vanilla JavaScript is allowed.

Allowed functionality:

Accordion toggle

Modal open/close

Mobile menu toggle

Simple tab switchers

Basic form validation

jQuery is optional but not required.

No external JS libraries or frameworks.

Example: Accordion

js
Copy code
document.querySelectorAll('.accordion-header').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const panel = btn.nextElementSibling;
    panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + 'px';
  });
});
♿ 7. Accessibility (WCAG 2.1 A/AA)
Use semantic HTML structure.

Provide proper aria-* attributes on:

Accordion

Modals

Navigation

Ensure all interactive elements are keyboard navigable.

All images must have descriptive alt text.

Use sufficient color contrast ratios.

Focus states must be visible.

🧭 8. Responsive Design
Support breakpoints:

Mobile: ≤ 767px

Tablet: 768–1023px

Desktop: ≥ 1024px

Responsive navigation required.

Use relative units (%, rem, vw) instead of fixed px when possible.

Avoid horizontal scroll on any device.

📬 9. Forms
Contact Form
Fields:

Full Name (required)

Email (required)

Subject

Message

Add hidden reCAPTCHA or spam deterrent placeholder.

On submit, show static success message or integrate with Notified form handler.

Newsletter Form
Single email field + consent checkbox (optional).

Positioned in footer across all pages.

Example:

html
Copy code

<form action="#" method="post" class="newsletter-form">
  <label for="email">Subscribe to Investor Updates</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Subscribe</button>
</form>
🔒 10. Compliance Notes
Follow SEC and Nasdaq disclosure standards.

External links must open in new tabs.

Include Privacy Policy and Terms of Use.

No analytics or tracking scripts without disclosure.

🧪 11. Testing Checklist
✅ Validate in Chrome, Safari, Firefox, Edge

✅ Test keyboard navigation

✅ Test responsive layout

✅ Check aria attributes and alt text

✅ Validate HTML/CSS with W3C tools

✅ Confirm fonts and assets load locally

✅ Ensure external links behave correctly

🧰 12. Folder Structure
css
Copy code
/
│── index.html
│── news.html
│── financials.html
│── governance.html
│── leadership.html
│── board.html
│── faqs.html
│── contact.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── fonts/
│   └── img/
│
└── README.md
📝 13. Packaging for Notified
Deliver a ZIP file with:

All HTML pages

assets directory (CSS, JS, Fonts, Images)

No external dependencies

Relative paths intact

Test locally before upload

Provide manifest of all files if required

🛡 14. Legal Compliance (Boilerplate)
This website contains forward-looking statements regarding AlphaTON Capital Corp.'s business, operations, and financial performance. These statements are subject to risks and uncertainties that may cause actual results to differ materially. Please refer to SEC filings for a discussion of risk factors.

Full Version:



**HTML Template Guidelines**

IR Websites & Newsrooms

To start the build of the Notified-hosted website, we require a fully functional, finalized HTML template with accompanying assets (JavaScript, CSS and font files). You can test this by saving the HTML file to your computer and opening it in a web browser – responsive elements should render accordingly, drop-down menus should work, fonts should render properly, and it should look correct in all browsers you plan to support. Photoshop files, images, screenshots mockups in design collaboration tools (for example, Figma), and PDFs may be sent as supporting material, but they cannot be used as a template.

Upon receipt of the finalized HTML template and assets, our Development Managers will review them and note any issues or coding/JavaScript errors for correction. Upon approval, the Project Manager will work with you and the development team to implement the site. The website build timeline will be provided by your Project Manager following the review of the assets by the development team.

Additional Files

Required:

• **Landing page design **– file that shows exact design, layout, elements, and

sections for the IR home page. If the client does not provide it, our design

team will create one at an additional cost.

• **IR Navigation **– include the functionality for 2nd and 3rd tier navigation (for

both desktop and mobile views) ex. Investor Relations → Stock Information

→ Stock Quote & Chart. If the client does not provide it, our development

team will build one at an additional cost.

Advisable:

• **Interior page **– file that shows the layout of the inner pages.

Notes:

HTML code should NOT be rendered on browser entirely by JavaScript (for example sites Angular or React JS). We cannot pull templates from propriety third party applications such as wix.com, squarespace.com and similar platforms. These typically have copyrights and can be only used on websites hosted on their

2

servers as per their rules of usage. These sites also render a large portion of the HTML markup as JavaScript which cannot be repurposed.

We will endeavor to replicate the provided HTML template as closely as possible. However, due to potential differences in how your code is rendered on our platform, an exact one-to-one match may not be feasible. In such instances, we will propose suitable alternatives or advice if a particular element of their template cannot be implemented within our system’s capabilities. Our goal is to preserve the integrity and functionality of your original template while ensuring compatibility and optimal performance on our platform.

Hosting Assets

We recommend we host all site assets locally in Notified’s secure cloud hosting environment. This helps protect against:

• **Cross-domain issues.**

• **Inadvertently updating the Investor site when corporate site is updated.**

• **Inability to access IR site if connection to the corporate site is down which**

is critical during earnings.

Responsive Design/Mobile

• **Our platform is responsive ready and will apply according to the styles**

provided. Our page-level content, in many cases, can be customized to

your breakpoints as well.

Design and Style Guides for HTML elements

A typical IR/PR website will contain the following HTML elements:

• **Headings (columns headings, section headings, page headings).**

• **HTML tables (headings, padding, gridlines, background colors).**

• **Form elements (checkboxes/radio buttons/text areas/submit buttons).**

• **Unordered and ordered lists.**

• **Icons (HTML, PDF, WORD, XLS, XBRL, audio/video/webcast, etc.)**

• **Paragraph and disclaimer text styles.**

• **Accordion, tabs, modal (pop up window).**

Please include the code for each of these elements in the CSS and HTML template. Notified will use default icon set if there are no specific styles.

3

Custom Web Fonts

We support custom web fonts via CSS @font-face or through web font providers like Google and Typekit. However, we do not procure web fonts on your behalf.

• **CSS @font-face **- We need to locally host all web font files to avoid crossdomain issues. Acceptable web font formats:

o **EOT (Embedded OpenType Fonts).**

o **TTF/OTF (TrueType and OpenType Fonts).**

o **WOFF (Web Open Font Format).**

o **SVG (Scalable Vector Graphics).**

• **Web Font Providers **- Please add the following domains to your approved

domain list within those accounts:

o **Vanity URLs (if applicable) - e.g. investors.companyname.com.**

o **Our global hosting environment domain - **www.gcs-web.com**.**

Image Creation, Custom JavaScript and Web Design

Our team will do their best to have your Notified-hosted site closely match the template we receive to begin the project. We do not, however, create, purchase or edit images, create/fix custom JavaScript functionality or design content. If you require design assistance, please contact your Sales Director or Project Manager for more details.

Server-Side Code and Remote Content

Our webhosting platform does not execute server-side code, including PHP, ASP.NET, or ColdFusion, and as a result we do not have the option to pull remote HTML content from your servers. We are able to consume JS-driven web services provided that the application does not violate the **Same Origin Policy as defined by the W3C **(see Header/Footer section below). We cannot introduce any foreign server-side code into this environment.

Client-Side Code

Client needs to provide working API URL with all parameters/keys. API must be CORS enabled, and it must allow requests from our domain. We handle this request on client-side, not on server-side.

Maintaining Control Over Your Header/Footer

Our Publishing Engine (PE) application is a program that will call a remote web page on a scheduled basis, save out the HTML markup from that page, and insert the markup within a specified area of a website (or page) being hosted on our servers. Using PE enables you to control the portions of your hosted website that

4

need to be maintained in conjunction with other non-Notified hosted sites. For example, if you were making changes to the navigation on your corporate site and wanted to see those changes flow through to your Notified hosted site near simultaneously.

Please note that all paths for links or images within the Publishing Engine must be absolute to work correctly when pulled into our site.

Cross-Domain Issues

As you are developing the template for your Notified-hosted website, please be aware of the Same Origin Policy, which is a security feature built into modern web browsers and user agents whereby a site hosted on Domain A cannot load certain file types or execute certain JavaScript functions (e.g., AJAX calls) made to Domain B. This is not a Notified policy or configuration. Please see here for more information: **https://developer.mozilla.org/en-US/docs/Web/Security/Sameorigin_policy**.

If your template requires cross-domain resource sharing, please let us know in advance and we can collaborate on other options. It should be noted that protocol (HTTP vs HTTPS) and subdomains (www.example.com and ir.example.com) are considered different domains. Common areas of concern are: navigations populated via clientside AJAX requests, or loading of certain mime types, such as the. woff web-font format.

Site-Wide Search

If you would like to index the content from your Notified-hosted website within your corporate search results, we support indexing from most major search engines but do ban certain search bots due to their known malicious activity.

Please note that all indexing is banned from 8:00 AM ET through 8:00 PM ET so that we may provide optimal website performance during our heaviest periods of traffic.

Framing Notified-Hosted Pages

If you plan to frame the Notified-hosted website, we require a fully functioning HTML template that dictates the size of the content area you intend to frame. This template should also contain all necessary calls to CSS, JavaScript, and image files. This ensures the content of the site displays properly once rendered. We do have the ability to resize your content height dynamically based on the length of the content.

5

Vanity URL

A Vanity URL is a short URL that masks the Notified domain. With the vanity URL chosen (ex. ir.companyname.com), there will be a requirement to have your internal and external DNS updated to include a CNAME that your Project Manager will provide during the build. You will receive specific instructions on how to update your DNS from your Project Manager.

Browsers And Platforms Supported

The Notified webhosting platform is designed to support websites in all modern web browsers, platforms, and devices. Please speak with your Project Manager to discuss your company’s browser support strategy.

Accessibility

Notified is committed to digital accessibility, and to conforming to the Web Content Accessibility Guidelines (WCAG) 2.1, Level A and AA and complying with Americans with Disabilities Act (ADA), the Accessibility for Ontarians with Disabilities Act (AODA) and other applicable accessibility regulations.

Notified’s customers are responsible for their own content, including accessibility compliance of their IR sites. Notified provides a selection of website templates to our customers upon request. Notified can also help your custom design conform with accessibility standards. To accomplish this, Notified has partnered with a specialized accessibility provider to administer our accessibility program and oversee its governance.

Using Third-Party Assets

If your HTML template includes third-party assets (including but not limited to fonts, plug-ins, code, images, etc.), please ensure you have the right to use the asset on your Notified hosted website. Proper licensing and attribution for each asset will need to be provided by the client. License violations may result in legal liability and Notified will not be held responsible for license violations associated with the provided HTML template.
