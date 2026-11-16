/* ==========================================================================
   IDNR State Parks & Wildlife Areas — Interactive Directory & Park Guide
   ========================================================================== */

const PARKS_DATA = [
  {
    id: "kickapoo",
    name: "Kickapoo State Recreation Area",
    type: "Recreation Area",
    region: "Central",
    county: "Vermilion County",
    city: "Oakwood, IL",
    address: "10906 Kickapoo Park Rd., Oakwood, IL 61858",
    phone: "217-442-4915",
    acres: "2,842 acres",
    hours: "6:00 AM – 10:00 PM daily",
    status: "Open",
    advisory: "Seasonal hunting programs active in designated zones; windshield card required.",
    summary:
      "Established on reclaimed surface-mined land, Kickapoo pairs forested hills and 22 deep, clear ponds with the scenic Middle Fork of the Vermilion River.",
    activities: ["camping", "hiking", "fishing", "boating", "hunting", "biking", "accessible"],
    highlights: [
      "184 campsites (tent, trailer, group) with electrical hookups, showers & dump station",
      "Middle Fork of the Vermilion River — Illinois's only National Scenic River",
      "22 clear deep-water ponds for fishing, paddling, and SCUBA diving",
      "Designated mountain bike trails, wooded hiking loops & accessible fishing piers"
    ],
    directionsUrl: "https://maps.google.com/?q=10906+Kickapoo+Park+Rd,+Oakwood,+IL+61858",
    reserveUrl: "https://exploremoreil.com/",
    legacyUrl: "https://dnr.illinois.gov/parks/park.kickapoo.html"
  },
  {
    id: "starved-rock",
    name: "Starved Rock State Park",
    type: "State Park",
    region: "Northern",
    county: "LaSalle County",
    city: "Oglesby, IL",
    address: "2678 E 875th Rd., Oglesby, IL 61348",
    phone: "815-667-4726",
    acres: "2,630 acres",
    hours: "7:00 AM – Sunset",
    status: "Advisory",
    advisory: "High weekend parking volume; arrive before 9:00 AM on peak weekends.",
    summary:
      "Famous for 18 sandstone canyons carved by glacial meltwater, seasonal waterfalls, and dramatic overlooks along the Illinois River.",
    activities: ["camping", "hiking", "fishing", "boating", "accessible"],
    highlights: [
      "13+ miles of marked trails connecting St. Louis, French, and Wildcat Canyons",
      "Historic CCC-built Starved Rock Lodge & cabins",
      "Bald eagle viewing along the Illinois River in winter",
      "129 Class-A campsites with electrical hookups"
    ],
    directionsUrl: "https://maps.google.com/?q=Starved+Rock+State+Park,+Oglesby,+IL",
    reserveUrl: "https://exploremoreil.com/",
    legacyUrl: "https://dnr.illinois.gov/parks/park.starvedrock.html"
  },
  {
    id: "giant-city",
    name: "Giant City State Park",
    type: "State Park",
    region: "Southern",
    county: "Jackson & Union Counties",
    city: "Makanda, IL",
    address: "235 Giant City Rd., Makanda, IL 62958",
    phone: "618-457-4836",
    acres: "4,055 acres",
    hours: "6:00 AM – 10:00 PM daily",
    status: "Open",
    advisory: "",
    summary:
      "Towering 12,000-year-old Pennsylvanian sandstone bluffs form natural 'streets' in the Shawnee National Forest region.",
    activities: ["camping", "hiking", "fishing", "hunting", "accessible"],
    highlights: [
      "Iconic Giant City Nature Trail through massive sandstone bluff corridors",
      "Rock climbing & rappelling at Devil's Standtable and Shelter Bluff",
      "85 Class-A campsites plus historic lodge dining & cabins",
      "Equestrian trails and seasonal archery/firearm hunting areas"
    ],
    directionsUrl: "https://maps.google.com/?q=235+Giant+City+Rd,+Makanda,+IL+62958",
    reserveUrl: "https://exploremoreil.com/",
    legacyUrl: "https://dnr.illinois.gov/parks/park.giantcity.html"
  },
  {
    id: "matthiessen",
    name: "Matthiessen State Park",
    type: "State Park",
    region: "Northern",
    county: "LaSalle County",
    city: "Oglesby, IL",
    address: "2500 IL-178, Oglesby, IL 61348",
    phone: "815-667-4868",
    acres: "1,938 acres",
    hours: "7:00 AM – Sunset",
    status: "Open",
    advisory: "Lower Dells stairs may be slick after rain; wear sturdy footwear.",
    summary:
      "Just south of Starved Rock, Matthiessen features lush Upper and Lower Dells canyons, mineral springs, and prairie restoration.",
    activities: ["hiking", "biking", "hunting", "accessible"],
    highlights: [
      "Upper & Lower Dells sandstone canyon loop with Cascade Falls",
      "9 miles of designated equestrian & mountain bike trails",
      "Restored tallgrass prairie and oak savanna overlooks",
      "Seasonal archery deer hunting program"
    ],
    directionsUrl: "https://maps.google.com/?q=Matthiessen+State+Park,+Oglesby,+IL",
    reserveUrl: "https://exploremoreil.com/",
    legacyUrl: "https://dnr.illinois.gov/parks/park.matthiessen.html"
  },
  {
    id: "pere-marquette",
    name: "Pere Marquette State Park",
    type: "State Park",
    region: "Central",
    county: "Jersey County",
    city: "Grafton, IL",
    address: "13112 Visitor Center Ln., Grafton, IL 62037",
    phone: "618-786-3323",
    acres: "8,050 acres",
    hours: "6:00 AM – 10:00 PM daily",
    status: "Open",
    advisory: "",
    summary:
      "Illinois's largest state park, perched above the confluence of the Illinois and Mississippi Rivers with sweeping limestone bluffs.",
    activities: ["camping", "hiking", "fishing", "boating", "hunting", "accessible"],
    highlights: [
      "12 miles of scenic bluff trails with McAdams Peak river overlooks",
      "Full-service marina and boat ramp on the Illinois River",
      "80+ Class-A campsites, youth group camps, and stone lodge",
      "Premier winter bald eagle habitat and Visitor Center"
    ],
    directionsUrl: "https://maps.google.com/?q=Pere+Marquette+State+Park,+Grafton,+IL",
    reserveUrl: "https://exploremoreil.com/",
    legacyUrl: "https://dnr.illinois.gov/parks/park.peremarquette.html"
  },
  {
    id: "sangchris-lake",
    name: "Sangchris Lake State Fish & Wildlife Area",
    type: "Fish & Wildlife Area",
    region: "Central",
    county: "Sangamon & Christian Counties",
    city: "Rochester, IL",
    address: "9898 Cascade Rd., Rochester, IL 62563",
    phone: "217-498-9208",
    acres: "3,022 acres",
    hours: "6:00 AM – 10:00 PM daily",
    status: "Open",
    advisory: "Boat motor limit: 25 HP maximum on Sangchris Lake.",
    summary:
      "A 2,165-acre three-fingered lake and surrounding wildlife habitat offering year-round fishing, waterfowl hunting, and lakeside camping.",
    activities: ["camping", "fishing", "boating", "hunting", "hiking"],
    highlights: [
      "Warm-water discharge area supporting year-round bass, crappie & catfish",
      "145+ Class-A/B campsites and equestrian campground",
      "Managed waterfowl, deer, and upland game hunting programs",
      "Three concrete boat ramps with accessible fishing piers"
    ],
    directionsUrl: "https://maps.google.com/?q=Sangchris+Lake+State+Park,+Rochester,+IL",
    reserveUrl: "https://exploremoreil.com/",
    legacyUrl: "https://dnr.illinois.gov/parks/park.sangchrislake.html"
  },
  {
    id: "cache-river",
    name: "Cache River State Natural Area",
    type: "Natural Area",
    region: "Southern",
    county: "Johnson County",
    city: "Belknap, IL",
    address: "930 Sunflower Ln., Belknap, IL 62908",
    phone: "618-634-9678",
    acres: "14,983 acres",
    hours: "Sunrise – Sunset",
    status: "Open",
    advisory: "Check Barkhausen Wetlands Center hours before visiting.",
    summary:
      "Ancient cypress-tupelo swamps with 1,000-year-old bald cypress trees, internationally recognized as a Ramsar Wetland of Importance.",
    activities: ["hiking", "boating", "fishing", "hunting", "accessible"],
    highlights: [
      "Heron Pond floating boardwalk over ancient cypress-tupelo swamp",
      "Flat-water canoeing & kayaking trails through Lower Cache Swamp",
      "Barkhausen-Cache River Wetlands Center with interactive exhibits",
      "State Champion Bald Cypress tree (over 1,000 years old)"
    ],
    directionsUrl: "https://maps.google.com/?q=Cache+River+State+Natural+Area,+Belknap,+IL",
    reserveUrl: "https://exploremoreil.com/",
    legacyUrl: "https://dnr.illinois.gov/parks/park.cacheriver.html"
  },
  {
    id: "rock-cut",
    name: "Rock Cut State Park",
    type: "State Park",
    region: "Northern",
    county: "Winnebago County",
    city: "Loves Park, IL",
    address: "7318 Harlem Rd., Loves Park, IL 61111",
    phone: "815-885-3311",
    acres: "3,092 acres",
    hours: "6:00 AM – 10:00 PM daily",
    status: "Open",
    advisory: "",
    summary:
      "Two glacial-inspired lakes surrounded by prairie, woods, and 40+ miles of multi-use trails near Rockford.",
    activities: ["camping", "hiking", "fishing", "boating", "biking", "hunting", "accessible"],
    highlights: [
      "Pierce Lake (162 acres) & Olson Lake for paddling, swimming & fishing",
      "270 Class-A campsites plus rustic cabin rentals",
      "23 miles of mountain bike trails and 40 miles of hiking/equestrian paths",
      "ADA-accessible fishing piers and paved shoreline paths"
    ],
    directionsUrl: "https://maps.google.com/?q=Rock+Cut+State+Park,+Loves+Park,+IL",
    reserveUrl: "https://exploremoreil.com/",
    legacyUrl: "https://dnr.illinois.gov/parks/park.rockcut.html"
  }
];

const ACTIVITY_LABELS = {
  camping: "Camping",
  hiking: "Hiking",
  fishing: "Fishing",
  boating: "Boating & Paddling",
  hunting: "Hunting",
  biking: "Mountain Biking",
  accessible: "ADA Accessible"
};

/**
 * Build a Google Maps Directions URL that defaults origin to the user's current location.
 */
function getDirectionsUrl(park) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(park.address)}`;
}

// State
const state = {
  search: "",
  region: "all",
  type: "all",
  activity: "all"
};

// DOM Elements
const advisoryBar = document.getElementById("advisoryBar");
const advisoryCloseBtn = document.getElementById("advisoryCloseBtn");
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("parkSearchInput");
const regionFilter = document.getElementById("regionFilter");
const typeFilter = document.getElementById("typeFilter");
const activityChips = document.querySelectorAll(".chip[data-activity]");
const parksGrid = document.getElementById("parksGrid");
const resultsCount = document.getElementById("resultsCount");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");

// Modal Elements
const modalBackdrop = document.getElementById("parkModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalBadges = document.getElementById("modalBadges");
const modalSummary = document.getElementById("modalSummary");
const modalStats = document.getElementById("modalStats");
const modalHighlights = document.getElementById("modalHighlights");
const modalAdvisoryWrap = document.getElementById("modalAdvisoryWrap");
const modalAdvisoryText = document.getElementById("modalAdvisoryText");
const modalDirectionsLink = document.getElementById("modalDirectionsLink");
const modalReserveLink = document.getElementById("modalReserveLink");
const modalPhoneLink = document.getElementById("modalPhoneLink");
const modalLegacyLink = document.getElementById("modalLegacyLink");

let lastFocusedElement = null;

// Advisory Bar Dismissal
if (advisoryCloseBtn && advisoryBar) {
  advisoryCloseBtn.addEventListener("click", () => {
    advisoryBar.hidden = true;
  });
}

// Mobile Navigation Toggle
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Filtering Logic
function getFilteredParks() {
  const query = state.search.trim().toLowerCase();

  return PARKS_DATA.filter((park) => {
    const matchesRegion = state.region === "all" || park.region === state.region;
    const matchesType = state.type === "all" || park.type === state.type;
    const matchesActivity =
      state.activity === "all" || park.activities.includes(state.activity);

    const matchesQuery =
      !query ||
      park.name.toLowerCase().includes(query) ||
      park.county.toLowerCase().includes(query) ||
      park.city.toLowerCase().includes(query) ||
      park.summary.toLowerCase().includes(query) ||
      park.activities.some((a) => ACTIVITY_LABELS[a].toLowerCase().includes(query));

    return matchesRegion && matchesType && matchesActivity && matchesQuery;
  });
}

function renderParks() {
  const filtered = getFilteredParks();
  resultsCount.textContent = `Showing ${filtered.length} of ${PARKS_DATA.length} featured locations`;

  const hasActiveFilters =
    state.search.trim() !== "" ||
    state.region !== "all" ||
    state.type !== "all" ||
    state.activity !== "all";
  clearFiltersBtn.hidden = !hasActiveFilters;

  if (filtered.length === 0) {
    parksGrid.innerHTML = `
      <div class="empty-state">
        <p><strong>No parks or wildlife areas match your filters.</strong></p>
        <p>Try clearing your search or selecting a different region or activity.</p>
        <button type="button" class="btn btn--outline" id="emptyResetBtn">Reset All Filters</button>
      </div>
    `;
    const emptyResetBtn = document.getElementById("emptyResetBtn");
    if (emptyResetBtn) {
      emptyResetBtn.addEventListener("click", resetFilters);
    }
    return;
  }

  parksGrid.innerHTML = filtered
    .map((park) => {
      const badgeClass = park.status === "Open" ? "badge--open" : "badge--advisory";
      const tagsHtml = park.activities
        .slice(0, 4)
        .map((act) => `<li class="tag">${ACTIVITY_LABELS[act] || act}</li>`)
        .join("");
      const extraCount = park.activities.length > 4 ? `<li class="tag">+${park.activities.length - 4} more</li>` : "";

      return `
        <article class="park-card">
          <div class="park-card__top">
            <div>
              <span class="park-card__type">${park.type} • ${park.region} IL</span>
              <h3 class="park-card__title">${park.name}</h3>
            </div>
            <span class="badge ${badgeClass}">${park.status}</span>
          </div>
          <div class="park-card__location">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${park.city} (${park.county})</span>
          </div>
          <p class="park-card__desc">${park.summary}</p>
          <ul class="tag-list" aria-label="Available activities">
            ${tagsHtml}${extraCount}
          </ul>
          <div class="park-card__actions">
            <button type="button" class="btn btn--primary" data-open-park="${park.id}">
              Quick Guide
            </button>
            <a class="btn btn--secondary" href="${getDirectionsUrl(park)}" target="_blank" rel="noopener noreferrer">
              Directions
            </a>
          </div>
        </article>
      `;
    })
    .join("");

  // Attach Quick Guide click handlers
  parksGrid.querySelectorAll("[data-open-park]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openParkModal(btn.getAttribute("data-open-park"));
    });
  });
}

function resetFilters() {
  state.search = "";
  state.region = "all";
  state.type = "all";
  state.activity = "all";

  if (searchInput) searchInput.value = "";
  if (regionFilter) regionFilter.value = "all";
  if (typeFilter) typeFilter.value = "all";
  activityChips.forEach((chip) => {
    chip.setAttribute("aria-pressed", chip.dataset.activity === "all" ? "true" : "false");
  });

  renderParks();
}

// Event Listeners for Search & Filters
if (searchForm) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    state.search = searchInput.value;
    renderParks();
    document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" });
  });
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    state.search = searchInput.value;
    renderParks();
  });
}

if (regionFilter) {
  regionFilter.addEventListener("change", () => {
    state.region = regionFilter.value;
    renderParks();
  });
}

if (typeFilter) {
  typeFilter.addEventListener("change", () => {
    state.type = typeFilter.value;
    renderParks();
  });
}

activityChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const selected = chip.dataset.activity;
    state.activity = selected;
    activityChips.forEach((c) => {
      c.setAttribute("aria-pressed", c.dataset.activity === selected ? "true" : "false");
    });
    renderParks();
  });
});

if (clearFiltersBtn) {
  clearFiltersBtn.addEventListener("click", resetFilters);
}

// Spotlight "View Full Park Guide" buttons
document.querySelectorAll("[data-open-park]").forEach((btn) => {
  btn.addEventListener("click", () => {
    openParkModal(btn.getAttribute("data-open-park"));
  });
});

// Modal / Bottom-Sheet Logic
function openParkModal(parkId) {
  const park = PARKS_DATA.find((p) => p.id === parkId);
  if (!park || !modalBackdrop) return;

  lastFocusedElement = document.activeElement;

  modalTitle.textContent = park.name;
  modalSubtitle.textContent = `${park.type} • ${park.county} • ${park.address}`;

  const statusBadgeClass = park.status === "Open" ? "badge--open" : "badge--advisory";
  modalBadges.innerHTML = `
    <span class="badge ${statusBadgeClass}">${park.status}</span>
    <span class="badge badge--dark">${park.region} Illinois</span>
    <span class="badge badge--dark">${park.acres}</span>
  `;

  modalSummary.textContent = park.summary;

  modalStats.innerHTML = `
    <div class="stat-box">
      <div class="stat-box__label">Hours</div>
      <div class="stat-box__value">${park.hours}</div>
    </div>
    <div class="stat-box">
      <div class="stat-box__label">Size</div>
      <div class="stat-box__value">${park.acres}</div>
    </div>
    <div class="stat-box">
      <div class="stat-box__label">Park Office</div>
      <div class="stat-box__value">${park.phone}</div>
    </div>
    <div class="stat-box">
      <div class="stat-box__label">Activities</div>
      <div class="stat-box__value">${park.activities.length} available</div>
    </div>
  `;

  modalHighlights.innerHTML = park.highlights.map((item) => `<li>${item}</li>`).join("");

  if (park.advisory) {
    modalAdvisoryWrap.hidden = false;
    modalAdvisoryText.textContent = park.advisory;
  } else {
    modalAdvisoryWrap.hidden = true;
  }

  modalDirectionsLink.href = getDirectionsUrl(park);
  modalReserveLink.href = park.reserveUrl;
  modalPhoneLink.href = `tel:${park.phone.replace(/[^0-9]/g, "")}`;
  modalPhoneLink.textContent = `Call ${park.phone}`;
  modalLegacyLink.href = park.legacyUrl;

  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  modalCloseBtn.focus();
}

function closeParkModal() {
  if (!modalBackdrop) return;
  modalBackdrop.hidden = true;
  document.body.style.overflow = "";
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeParkModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeParkModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalBackdrop && !modalBackdrop.hidden) {
    closeParkModal();
  }
});

// Initial Render
renderParks();
