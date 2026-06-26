// JS used  to swap the right-hand content panel. (subemenu is native with <details>/<summary>)
const pageContent = {
    "ABOUT": {
        title: " ",
        html: `
        <p>Veritas Metabolic Advisory (VMA) is a boutique scientific consulting firm exclusively focused in Metabolic Disease External R&D, Search & Evaluation, Due-Diligence, Partnering, and Alliance Development.</p>
        <p>Founded on the principle that the best decisions are grounded in deep domain expertise and intellectual honesty, VMA brings senior pharmaceutical R&D experience directly to clients who need decision-quality insight, not generalist advice.</p>
        <p>We serve pharmaceutical and biotech companies seeking rigorous external innovation support, and academic institutions and technology transfer offices preparing to engage with industry. Whether the need is strategic, scientific, or transactional, Veritas operates as a trusted, confidential partner at every stage.</p>`
    },
    "SERVING": {
        title: " ",
        html: `
        <strong>Pharmaceutical & Biotech Companies</strong>
        <ul>
            <li>Strategic R&D Advisory</li>
            <li>Innovation Sourcing & Triage (Buy-Side)</li>
            <li>Scientific & Technical Due Diligence (Buy-Side)</li>
            <li>Asset Positioning & Pitch Optimization (Sell-Side)</li>
            <li>Portfolio & Competitive Intelligence</li>
        </ul>
        <strong>Academic Institutions & Technology Transfer Offices Principal Investigator (PI) Advisory (Sell-Side)</strong>
        <ul>
            <li>Industry-Ready Narrative Development</li>
            <li>Partnership & Negotiation Support</li>
        </ul>
        <strong>Tech Transfer Office (TTO) Advisory (Buy/Sell-Side)</strong>
        <ul>
            <li>Asset Prioritization & Commercial Triage</li>
            <li>Due Diligence & Deal</li>
            <li>Industry Matching & Outreach</li>
        </ul>
        `},
    "PHARMA/BIOTECH": {
        title: " ",
        html: `
        <strong>Pharmaceutical & Biotech Companies</strong>
        <ul>
            <li> <strong>Buy-Side Services: Search, Evalutation & Due Diligence </strong>
                <ul>
                    <li>
                        <p><strong>Deal Funnel Management & Asset Triage:</strong>
                        Serving as an expert scientific gatekeeper to vet inbound asset presentations from academic labs and biotechs. Rapidly separate high-potential opportunities from those requiring immediate dismissal based on strategic fit, technical feasibility, and commercial viability.</p>
                    </li>
                    <li>
                    <p><strong>Due Diligence Architecture:</strong> Initiating, leading, and managing rigorous scientific and technical due diligence processes for assets from discovery to Phase 2. </p>
                    </li>
                    <li>
                        <p><strong>Executive Synthesis:</strong> Translating dense, multi-disciplinary technical data, portfolio assessments, and competitive landscape analyses into high-level, fit-for-purpose recommendation memos tailored for senior leadership and governance boards.</p>
                    </li>
                </ul>
            </li>
            <li><strong>Sell-Side Services: Transaction & Pitch Optimization</strong>
                <ul>
                    <li>
                        <p><strong>Pharma-Ready Pitch Optimization:</strong>Reverse-engineering the presentation process for early-stage companies. Structurally aligning pitch decks, Target Product Profiles (TPPs), and data packages with the exact milestones and criteria Big Pharma executives require to greenlight a deal. </p>
                    </li>
                    <li>
                        <p><strong>Strategic Positioning:</strong> Advising founders on how to articulate their underlying biology, differentiation, and competitive edge to maximize partner engagement and accelerate transaction timelines.</p>
                    </li>
                </ul>
            </li>
        </ul>`
    },
    "ACADEMIA": {
        title: " ",
        html: `
        <strong>Academic Institutions & Technology Transfers Offices</strong>
        <ul>
            <li><strong>Principal Investigaor (PI) Advisory (Sell-Side) </strong>
                <ul>
                    <li>
                        <p><strong>Industry-Ready Narrative Development: </strong>Translating cutting-edge academic science into compelling, pharma-aligned narratives. Reshaping datasets to match the exact language and criteria used by corporate Business Development and R&D executives. </p>
                    </li>
                    <li>
                        <p><strong>Partnership & Negotiation Support: </strong>Providing expert guidance through the research collaboration and Sponsored Research Agreement (SRA) process, ensuring academic labs secure terms that protect scientific freedom while accelerating deal execution. </p>
                    </li>
                </ul>
            </li>
            <li><strong>Tech Transfer Office (TTO) Advisory (Buy/Sell-Side)</strong>
                <ul>
                    <li>
                        <p><strong>Asset Prioritization & Commercial Triage: </strong> Rapidly assessing the translational potential of disclosed inventions in the metabolic space, enabling TTOs to allocate resources to assets with the strongest industry licensing prospects. </p>
                    </li>
                    <li>
                        <p><strong>Due Diligence & Deal Readiness: </strong> Conducting objective evaluations to identify scientific, technical, or strategic gaps that could derail industry interest, creating targeted remediation plans before partner engagement. </p>
                    </li>
                    <li>
                        <p><strong>Industry Matching & Outreach: </strong> Leveraging a deep, global network in Pharma R&D and comprehensive knowledge of active corporate portfolios to target strategically aligned partners. </p>
                    </li>
                </ul>
            </li>
        </ul>
        `
    },
    "FOCUS AREAS": {
        title: " ",
        html: `
        <strong>AREAS OF THERAPEUTIC FOCUS</strong>
        <ul>
            <li>Obesity</li>
            <li>Type 2 Diabetes</li>
            <li>NASH/MASH</li>
            <li>Cardiorenal Disease</li>
        </ul>
        <strong>MODALITIES</strong>
        <ul>
            <li>Small Molecules</li>
            <li>Biologics</li>
            <li>RNA Therapeutics</li>
            <li>AI-Enabled Platforms</li>
        </ul>
        <strong>DEAL TYPES SUPPORTED</strong>
        <ul>
            <li>Licenses</li>
            <li>Research Collaborations</li>
            <li>Sponsored Research Agreements</li>
            <li>MTAs, CDAs, Amendments</li>
        </ul>`
    },
    "WORKING WITH VMA": {
        title: " ",
        html: `
        <strong>ENGAGEMENT MODEL</strong>
        <ul>
            <li>Flexible, project-based or retainer arrangements tailored to client needs.</li>
            <li>Strict confidentiality and ethical standards; independent, non-affiliated with any third-party conflicts.</li>
            <li>Transparent deliverables: diagnostic memos, go/no-go recommendations, deal-ready data rooms, and executive briefs.</li>
        </ul>

        <p>Veritas Metabolic Advisory operates with full independence, strict confidentiality, and an unwavering commitment to scientific integrity. Engagements are structured to meet the specific needs of each client; from discrete advisory projects to ongoing retained consulting relationships. </p>

        <p>All work is performed without use of third-party confidential information, and clients can be assured that the analysis and recommendations they receive reflect objective, expert judgment, not conflicted interests. </p>`
    }
};


function setContent(key) {
    const section = document.getElementById('text-desc');
    const content = pageContent[key];
    if (!content) return;
    section.innerHTML = `<h2 class="content-title">${content.title}</h2>${content.html}`;
}

const sidebar = document.querySelector('.sidebar');

// Prevent details element from closing
const detailsElement = document.querySelector('details');
detailsElement.addEventListener('toggle', event => {
    event.preventDefault();
    detailsElement.open = true;
});

sidebar.addEventListener('click', event => {
    const target = event.target.closest('[data-key]');
    if (!target) return;
    
    // Remove active class from all menu items, submenu items, and summary elements
    document.querySelectorAll('.menu-item, .submenu-item, summary').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked element
    target.classList.add('active');
    
    setContent(target.dataset.key);
});

// Set ABOUT as active on page load
document.addEventListener('DOMContentLoaded', () => {
    const aboutItem = document.querySelector('[data-key="ABOUT"]');
    if (aboutItem) {
        aboutItem.classList.add('active');
        setContent('ABOUT');
    }
});