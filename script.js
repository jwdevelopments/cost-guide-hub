/* ======================
   NICHES
====================== */

const niches = {
  insurance: "Insurance Costs",
  finance: "Loans & Finance",
  health: "Healthcare Costs",
  property: "Property & Real Estate",
  home: "Home Improvement",
  legal: "Legal Services",
  travel: "Travel Costs",
  business: "Business Services",
  education: "Education & Courses",
  tech: "Technology Costs"
};

/* ======================
   QUESTIONS
====================== */

const questions = [
  "How much does {niche} cost?",
  "What affects the price of {niche}?",
  "Is {niche} expensive?",
  "How can I reduce {niche} costs?",
  "Is {niche} worth the money?"
];

/* ======================
   PAGE LOGIC
====================== */

const params = new URLSearchParams(window.location.search);
const topic = params.get("topic");

if (topic && niches[topic]) {
  const name = niches[topic].toLowerCase();

  document.getElementById("pageTitle").innerText =
    niches[topic] + " | Cost Guide";

  document.getElementById("heading").innerText =
    niches[topic];

  document.getElementById("intro").innerText =
    "General pricing guidance to help you budget before requesting quotes.";

  document.getElementById("metaDesc").setAttribute(
    "content",
    "Typical pricing information for " + name
  );

  const qDiv = document.getElementById("questions");

  questions.forEach(q => {
    qDiv.innerHTML += `
      <div>
        <h3>${q.replace("{niche}", name)}</h3>
        <p>Prices vary based on provider, location, and complexity.</p>
      </div>
    `;
  });
}

/* ======================
   HOMEPAGE
====================== */

function renderNicheList() {
  const ul = document.getElementById("nicheList");
  if (!ul) return;

  Object.keys(niches).forEach(key => {
    ul.innerHTML += `<li><a href="niche.html?topic=${key}">${niches[key]}</a></li>`;
  });
}
