/*
 * Bad Wizard Games catalog
 *
 * Add another object to this list to publish a game. Upload this file to
 * data/games.js on the website after making changes. Boolean values must be
 * true or false without quotation marks.
 */
window.BAD_WIZARD_GAMES = [
  {
    title: "Cult Leader",
    genre: "tabletop strategy",
    genreLabel: "Strategy",
    subtitle: "Competitive Strategy",
    tags: "cult faith secrecy influence fear satire resource-management negotiation",
    players: "2-5",
    time: "60-120",
    inprint: true,
    pnp: true,
    prototype: false,
    image: "assets/games/cult-leader.jpg",
    imageAlt: "Cult Leader strategy board game artwork",
    description: "Establish a secretive movement, recruit devoted followers, construct increasingly elaborate compounds, and spread your influence before rival leaders undermine your authority. Manage faith, fear, money, suspicion, and public attention while surviving betrayals, scandals, defectors, and government investigations.",
    format: "Competitive strategy",
    detailsUrl: "game_details/cult_details.html",
    secondaryUrl: "games/cult/play.html",
    secondaryLabel: "Play",
    secondaryExternal: true
  },
  {
    title: "Double Wide",
    genre: "adult party",
    genreLabel: "Party",
    subtitle: "Adult Party Game",
    tags: "take-that trailer park chaos gossip sabotage satire adult humor",
    players: "3-6",
    time: "30-60",
    inprint: true,
    pnp: true,
    prototype: false,
    image: "assets/games/double-wide.jpg",
    imageAlt: "Double Wide adult party game artwork",
    description: "Welcome to Lamb Chop, Mississippi, where every neighbor has a secret and every lawn dispute can become a full-scale feud. Collect money, upgrade your trailer, spread gossip, steal possessions, start fights, and unleash disasters on competing households.",
    format: "Take-that party game",
    detailsUrl: "game_details/DoubleWide_details.html",
    secondaryUrl: "games/dw/play.html",
    secondaryLabel: "Play",
    secondaryExternal: true
  },
  {
    title: "10.31.84",
    genre: "mystery horror",
    genreLabel: "Horror Mystery",
    subtitle: "Slasher Mystery",
    tags: "whodunit halloween investigation survival deduction hidden killer sherlock",
    players: "2-6",
    time: "45-90",
    inprint: false,
    pnp: false,
    prototype: true,
    image: "assets/games/10_31.jpg",
    imageAlt: "10.31.84 Halloween horror mystery game artwork",
    description: "Halloween night, 1984. A killer is stalking the town, and every darkened house may conceal evidence, a victim, or the murderer. Search locations, question suspects, collect clues, and piece together the killer’s identity before the body count rises.",
    format: "Deduction and survival",
    detailsUrl: "game_details/10_31_details.html",
    secondaryUrl: "prototype_game.html",
    secondaryLabel: "Prototype",
    secondaryExternal: false
  },
  {
    title: "Pixel Co-op",
    genre: "co-op strategy",
    genreLabel: "Co-op",
    subtitle: "Cooperative Strategy",
    tags: "8-bit space colony society resource-management settlement survival cooperative",
    players: "1-4",
    time: "30-60",
    inprint: false,
    pnp: false,
    prototype: true,
    image: "assets/games/pixel_co_op.jpg",
    imageAlt: "Pixel Co-op cooperative science-fiction board game artwork",
    description: "Work together to transform a fragile frontier outpost into a thriving independent settlement. Gather credits and metal, construct connected districts, assign workers, purchase settlers, and unlock powerful cooperative bonuses.",
    format: "Cooperative colony building",
    detailsUrl: "game_details/pixel_details.html",
    secondaryUrl: "games/pixel/play.html",
    secondaryLabel: "Play",
    secondaryExternal: true
  },
  {
    title: "The Judge’s Eye",
    genre: "rpg mystery",
    genreLabel: "Narrative Mystery",
    subtitle: "Courtroom Mystery",
    tags: "courtroom deduction roleplaying evidence testimony investigation cooperative",
    players: "3-6",
    time: "60-120",
    inprint: true,
    pnp: true,
    prototype: false,
    image: "assets/games/judge.jpg",
    imageAlt: "The Judge’s Eye courtroom mystery game artwork",
    description: "Enter a courtroom where testimony is unreliable, evidence is incomplete, and every character may be hiding a personal agenda. Examine evidence, challenge statements, expose contradictions, and deliver a final verdict.",
    format: "Roleplaying and deduction",
    detailsUrl: "game_details/judge_details.html",
    secondaryUrl: "#",
    secondaryLabel: "Print & Play",
    secondaryExternal: false
  },
  {
    title: "Grab-a-Ghost",
    genre: "co-op horror mystery",
    genreLabel: "18+ Horror",
    subtitle: "Narrative Survival Horror",
    tags: "ghosts watson manor evidence investigation hidden truth survival cooperative gracie gwendolyn",
    players: "2-6",
    time: "60-120",
    inprint: true,
    pnp: true,
    prototype: false,
    image: "assets/games/gag_art.png",
    imageAlt: "Grab-a-Ghost Watson Manor game artwork",
    description: "Watson Manor has waited a century for someone to knock on its door. Enter a living house where every room hides a nightmare, every clue may be a lie, and every investigation reveals a different truth. Work together to survive—but not everyone who escapes leaves unchanged.",
    format: "Narrative survival horror",
    detailsUrl: "game_details/gag_details.html",
    secondaryUrl: "prototype_game.html",
    secondaryLabel: "Prototype",
    secondaryExternal: false
  }
];

(function renderBadWizardContent() {
  const escapeHtml = value => String(value ?? "").replace(/[&<>'"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);

  const grid = document.getElementById("grid");
  if (grid && Array.isArray(window.BAD_WIZARD_GAMES)) {
    grid.innerHTML = window.BAD_WIZARD_GAMES.map(game => {
      const external = game.secondaryExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<article class="card game-card" data-genre="${escapeHtml(game.genre)}" data-inprint="${Boolean(game.inprint)}" data-players="${escapeHtml(game.players)}" data-pnp="${Boolean(game.pnp)}" data-proto="${Boolean(game.prototype)}" data-tags="${escapeHtml(game.tags)}" data-time="${escapeHtml(game.time)}" data-title="${escapeHtml(game.title)}" tabindex="0">
        <div class="media"><a class="game-art-link" href="${escapeHtml(game.image)}" target="_blank" rel="noopener" aria-label="View ${escapeHtml(game.title)} game artwork"><img class="game-art" src="${escapeHtml(game.image)}" alt="${escapeHtml(game.imageAlt)}" loading="lazy"><div class="game-title-overlay"><h3>${escapeHtml(game.title)}</h3><span>${escapeHtml(game.subtitle)}</span></div></a></div>
        <span class="tag">${escapeHtml(game.genreLabel)}</span>
        <div class="card-body"><p class="muted">${escapeHtml(game.description)}</p><div class="meta"><span>${escapeHtml(game.players).replace("-", "–")} players</span><span>•</span><span>${escapeHtml(game.time).replace("-", "–")} min</span><span>•</span><span>${escapeHtml(game.format)}</span></div><div class="cta"><a class="btn" href="${escapeHtml(game.detailsUrl)}">View Details</a><a class="btn-outline" href="${escapeHtml(game.secondaryUrl)}"${external}>${escapeHtml(game.secondaryLabel)}</a></div></div>
      </article>`;
    }).join("");
  }
  
  const announcements = document.getElementById("announcementList");
  if (
    announcements &&
    Array.isArray(window.BAD_WIZARD_ANNOUNCEMENTS)
  ) {
    const items = [...window.BAD_WIZARD_ANNOUNCEMENTS].sort((a, b) =>
      String(b.date).localeCompare(String(a.date))
    );

    announcements.innerHTML = items.length
      ? items
          .map((item, index) => {
            const date = new Date(`${item.date}T12:00:00`);

            const dateLabel = Number.isNaN(date.getTime())
              ? item.date
              : new Intl.DateTimeFormat("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                }).format(date);

            const action = item.link
              ? `
                <a
                  class="btn-outline"
                  href="${escapeHtml(item.link)}"
                >
                  ${escapeHtml(item.linkLabel || "Learn more")}
                </a>
              `
              : "";

            const bodyContent = item.summaryHtml
              ? item.summaryHtml
              : `<p>${escapeHtml(item.summary || "")}</p>`;

            const bodyId = `announcement-body-${index}`;

            return `
              <article class="announcement-card">
                <div class="announcement-meta">
                  <span class="pill">
                    ${escapeHtml(item.category || "Announcement")}
                  </span>

                  <time datetime="${escapeHtml(item.date || "")}">
                    ${escapeHtml(dateLabel || "")}
                  </time>
                </div>

                <h3>${escapeHtml(item.title || "")}</h3>

                <div
                  class="announcement-body is-collapsed"
                  id="${bodyId}"
                >
                  ${bodyContent}
                </div>

                <div class="announcement-card-actions">
                  <button
                    class="announcement-toggle btn-outline"
                    type="button"
                    aria-expanded="false"
                    aria-controls="${bodyId}"
                  >
                    Read more
                  </button>

                  ${action}
                </div>
              </article>
            `;
          })
          .join("")
      : '<p class="muted">No announcements have been posted yet.</p>';

    announcements.addEventListener("click", (event) => {
      const button = event.target.closest(".announcement-toggle");

      if (!button) {
        return;
      }

      const bodyId = button.getAttribute("aria-controls");
      const body = document.getElementById(bodyId);

      if (!body) {
        return;
      }

      const isExpanded = button.getAttribute("aria-expanded") === "true";

      body.classList.toggle("is-collapsed", isExpanded);
      body.classList.toggle("is-expanded", !isExpanded);

      button.setAttribute("aria-expanded", String(!isExpanded));
      button.textContent = isExpanded ? "Read more" : "Show less";
    });
  }
  
})();
