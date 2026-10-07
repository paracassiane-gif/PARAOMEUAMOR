:root {
  --bg: #0b0b0d;
  --bg-2: #141417;
  --panel: rgba(16, 16, 20, 0.8);
  --panel-strong: rgba(10, 10, 12, 0.96);
  --white: #f5f5f2;
  --muted: #a1a1aa;
  --red: #b00020;
  --red-2: #e63956;
  --line: rgba(255, 255, 255, 0.08);
  --shadow: rgba(0, 0, 0, 0.45);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background:
    radial-gradient(circle at top, rgba(176, 0, 32, 0.18), transparent 30%),
    linear-gradient(180deg, #09090b 0%, #111115 100%);
  color: var(--white);
  font-family: 'Montserrat', sans-serif;
  line-height: 1.75;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
}

button,
a {
  transition: all 0.25s ease;
}

.page-noise {
  position: fixed;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 12px 12px;
  opacity: 0.25;
  pointer-events: none;
  z-index: 1;
}

main,
header,
footer {
  position: relative;
  z-index: 2;
}

.loader {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: grid;
  place-items: center;
  background: rgba(11, 11, 13, 0.92);
  backdrop-filter: blur(12px);
  transition: opacity 0.7s ease, visibility 0.7s ease;
}

.loader.hidden {
  opacity: 0;
  visibility: hidden;
}

.loader__content {
  max-width: 760px;
  text-align: center;
  padding: 2rem;
}

.loader__content h1,
.hero h1,
.story h2,
.story h3,
.window-copy h3,
.letter h2,
.final h2,
.proposal strong,
.memory h3,
.counter__box span {
  font-family: 'Playfair Display', serif;
}

.loader__content h1 {
  font-size: clamp(2.6rem, 6vw, 6rem);
  letter-spacing: 0.06em;
  line-height: 0.92;
  margin-bottom: 1.25rem;
}

.loader__dates {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.4rem;
  letter-spacing: 0.18rem;
  text-transform: uppercase;
  color: var(--muted);
  font-size: 0.8rem;
}

.loader__subtitle {
  color: rgba(245,245,242,0.78);
  font-size: 1.1rem;
  margin-bottom: 1.4rem;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 1rem;
  color: var(--muted);
  font-size: 0.7rem;
  letter-spacing: 0.22rem;
  text-transform: uppercase;
}

.eyebrow--accent {
  color: var(--red-2);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 0.14rem;
  text-transform: uppercase;
}

.btn--primary {
  background: linear-gradient(135deg, var(--red), var(--red-2));
  color: var(--white);
  padding: 1rem 2.25rem;
  box-shadow: 0 18px 32px rgba(227, 57, 86, 0.26);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 42px rgba(227, 57, 86, 0.34);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(11, 11, 13, 0.62);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}

.site-header__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.brand {
  font-size: 0.72rem;
  letter-spacing: 0.18rem;
  text-transform: uppercase;
  font-weight: 700;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;
}

.nav a {
  color: rgba(245,245,242,0.76);
  text-decoration: none;
  font-size: 0.72rem;
  letter-spacing: 0.14rem;
  text-transform: uppercase;
}

.nav a:hover {
  color: var(--red-2);
}

.hero {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 6rem 1.5rem 4rem;
  background:
    linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)),
    linear-gradient(135deg, rgba(176,0,32,0.12), transparent 55%),
    #0b0b0d;
}

.hero__content {
  max-width: 880px;
  text-align: center;
}

.hero h1 {
  font-size: clamp(3.4rem, 8vw, 8rem);
  letter-spacing: 0.05em;
  line-height: 0.92;
  margin-bottom: 1.5rem;
}

.hero__quote {
  max-width: 760px;
  margin: 0 auto;
  color: rgba(245,245,242,0.92);
  font-size: clamp(1.08rem, 2vw, 1.55rem);
  line-height: 1.75;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
}

.hero__quote--soft {
  margin-top: 2rem;
  color: rgba(245,245,242,0.74);
}

.hero .btn {
  margin-top: 2rem;
}

.story,
.window,
.memories,
.letter,
.final {
  padding: 7rem 1.5rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.container--narrow {
  max-width: 840px;
}

.container--letter {
  max-width: 1000px;
}

.story h2,
.window-copy h3,
.letter h2,
.final h2 {
  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 1.08;
  margin-bottom: 1.2rem;
}

.story h3 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.1;
  margin-bottom: 1rem;
}

.story p,
.window-copy p,
.letter__body p,
.final p {
  color: rgba(245,245,242,0.82);
  font-size: 1.08rem;
  margin-bottom: 1rem;
}

.story--dark {
  background: linear-gradient(180deg, rgba(17,17,20,0.78), rgba(11,11,13,0.94));
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.story--red {
  background: radial-gradient(circle at center, rgba(227,57,86,0.13), transparent 45%), rgba(11,11,13,0.9);
}

.split-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  align-items: center;
}

.split-layout--reverse {
  grid-template-columns: 0.8fr 1.2fr;
}

.story-copy {
  max-width: 620px;
}

.portrait,
.ambient-card,
.map-card {
  min-height: 420px;
  border-radius: 24px;
  border: 1px solid var(--line);
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 22px 50px rgba(0,0,0,0.18);
  background: linear-gradient(180deg, rgba(17,17,20,0.8), rgba(10,10,12,0.95));
}

.portrait::before,
.ambient-card::before,
.map-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(176,0,32,0.18), transparent 58%);
}

.portrait--wesley {
  background: linear-gradient(180deg, rgba(14,14,18,0.7), rgba(12,12,15,1));
}

.portrait--cassiane {
  background: linear-gradient(180deg, rgba(24,15,18,0.7), rgba(12,12,15,1));
}

.portrait span,
.ambient-card span,
.map-card span {
  position: relative;
  z-index: 1;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(245,245,242,0.9);
}

.essay {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  line-height: 1.45;
  font-style: italic;
  color: rgba(245,245,242,0.92);
}

.window-layout {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 2rem;
  align-items: center;
}

.window-frame {
  min-height: 420px;
  border-radius: 28px;
  border: 1px solid var(--line);
  overflow: hidden;
  background: linear-gradient(180deg, rgba(12,12,15,0.95), rgba(17,17,21,0.9));
  display: grid;
  grid-template-columns: 1fr 10px 1fr;
}

.window-pane {
  display: grid;
  place-items: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(245,245,242,0.9);
}

.window-pane--left {
  background: linear-gradient(180deg, rgba(18,18,22,0.94), rgba(10,10,12,1));
}

.window-pane--right {
  background: linear-gradient(180deg, rgba(34,18,21,0.9), rgba(18,12,14,1));
}

.window-divider {
  background: rgba(255,255,255,0.08);
}

.text-center {
  text-align: center;
}

.proposal {
  max-width: 900px;
  margin: 2rem auto 0;
  border-radius: 24px;
  padding: 2rem 1.5rem;
  background: rgba(17,17,20,0.8);
  border: 1px solid var(--line);
  box-shadow: 0 20px 50px rgba(0,0,0,0.18);
}

.proposal p {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.65rem, 3vw, 3rem);
  line-height: 1.3;
  color: rgba(245,245,242,0.96);
}

.proposal strong {
  display: block;
  margin-top: 1.25rem;
  color: var(--red-2);
  font-size: clamp(2.2rem, 5vw, 4rem);
}

.memory-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.memory {
  min-height: 260px;
  border-radius: 22px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(135deg, rgba(176, 0, 32, 0.12), rgba(10,10,12,0.86));
  border: 1px solid var(--line);
  position: relative;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(0,0,0,0.2);
}

.memory::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.76));
}

.memory > * {
  position: relative;
  z-index: 1;
}

.memory span {
  font-size: 2rem;
  margin-bottom: 0.6rem;
}

.memory h3 {
  font-size: 2rem;
  margin-bottom: 0.3rem;
}

.memory p {
  color: rgba(245,245,242,0.85);
  font-size: 0.96rem;
}

.counter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0 1rem;
}

.counter__box {
  min-width: 160px;
  border-radius: 20px;
  padding: 1.2rem 1rem;
  background: rgba(17,17,20,0.82);
  border: 1px solid var(--line);
  text-align: center;
}

.counter__box span {
  display: block;
  font-size: clamp(2.4rem, 5vw, 4.5rem);
  line-height: 1;
}

.counter__box small {
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
}

.letter__body {
  border-radius: 26px;
  background: rgba(17,17,20,0.82);
  border: 1px solid var(--line);
  box-shadow: 0 20px 50px rgba(0,0,0,0.18);
  padding: 2rem 1.5rem;
}

.letter__body p {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.6rem, 2vw, 2.15rem);
  line-height: 1.45;
  font-style: italic;
}

.letter__sign {
  margin-top: 2rem;
  font-weight: 700;
  font-style: normal;
}

.final {
  min-height: 72vh;
  display: grid;
  place-items: center;
}

.final__badge {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  border: 1px solid rgba(227,57,86,0.35);
  background: rgba(176,0,32,0.12);
  color: var(--red-2);
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  font-size: 0.75rem;
  font-weight: 700;
}

.final__foot {
  margin-top: 2rem;
  color: var(--muted);
  letter-spacing: 0.18rem;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.final__continuo {
  margin-top: 2.5rem;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: rgba(245,245,242,0.9);
}

.site-footer {
  border-top: 1px solid var(--line);
  padding: 2rem 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.18rem;
  text-transform: uppercase;
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 900px) {
  .split-layout,
  .split-layout--reverse,
  .window-layout,
  .memory-grid {
    grid-template-columns: 1fr;
  }

  .site-header__inner,
  .site-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 660px) {
  .site-header__inner {
    padding: 0.9rem 1rem;
  }

  .nav {
    gap: 0.7rem 1rem;
  }

  .story,
  .window,
  .memories,
  .letter,
  .final {
    padding: 5rem 1rem;
  }

  .loader__dates {
    flex-direction: column;
    gap: 0.5rem;
  }

  .counter__box {
    min-width: calc(50% - 0.5rem);
  }
}





































































































































































































































































































































































































































