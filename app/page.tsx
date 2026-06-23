"use client";

import { Link } from "@heroui/react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#software", label: "Projects" },
  { href: "#books", label: "Books" },
  { href: "#podcasts", label: "Podcasts" },
  { href: "#links", label: "Links" },
  { href: "#contact", label: "Contact" },
];

const sectionClass =
  "border-t border-foreground/15 pt-8 first:border-t-0 first:pt-0";
const headingClass = "mb-4 text-base font-medium";
const headingWithIntroClass = "text-base font-medium";
const introClass =
  "mb-4 mt-2 border-l-2 border-foreground/25 pl-3 text-sm italic leading-relaxed text-foreground/90";
const subheadingClass = "mb-2 text-sm font-medium text-foreground/80";
const listClass =
  "list-disc space-y-1 pl-5 text-sm leading-relaxed text-foreground/90";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6">
      <header className="flex flex-col gap-3 pt-10 pb-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h1 className="text-base font-normal">Arjun Mayur</h1>
        <nav
          aria-label="Section navigation"
          className="flex flex-wrap gap-x-4 gap-y-2 text-sm"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main
        aria-label="Home"
        className="flex flex-col gap-8 border-t border-foreground pt-8 pb-16"
      >
        <section id="about" className={sectionClass} aria-labelledby="about-title">
          <h2 id="about-title" className={headingClass}>
            About Me
          </h2>
          <div className="flex flex-col gap-5">
            <div>
              <h3 className={subheadingClass}>Current</h3>
              <ul className={listClass}>
                <li>Currently building voice AI agents</li>
                <li>
                  Interested in talking about all things related to tech,
                  investing and sports. If this sounds like you, feel free to
                  reach out to me!
                </li>
              </ul>
            </div>
            <div>
              <h3 className={subheadingClass}>Previous</h3>
              <ul className={listClass}>
                <li>
                  Recent MBA graduate from the University of Michigan Stephen M.
                  Ross School of Business
                </li>
                <li>Product &amp; Software Engineering work at J.P. Morgan</li>
                <li>
                  Worked on cutting-edge automated trading systems for the
                  Equity Derivatives Trading Desk
                </li>
                <li>
                  Studied Computer Science &amp; Economics at Vanderbilt
                  University
                </li>
              </ul>
            </div>
            <div>
              <h3 className={subheadingClass}>Outside of work</h3>
              <ul className={listClass}>
                <li>Tennis, pickleball and indie films</li>
                <li>
                  Read a lot about psychology, markets, and how people make
                  decisions
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="software"
          className={sectionClass}
          aria-labelledby="software-title"
        >
          <h2 id="software-title" className={headingClass}>
            Projects
          </h2>
          <ul className="space-y-3 text-sm leading-relaxed text-foreground/90">
            <li>
              <Link href="https://apps.apple.com/us/app/flow-fast-finance-news/id6751279102">
                Flow News
              </Link>
              <span className="block">
                Short-form AI-generated financial news summaries. Live on the
                Apple App Store.
              </span>
            </li>
            <li>
              <Link href="https://github.com/amayur96/AdvI">AdvI</Link>
              <span className="block">
                Two-sided AI learning platform that connects students and faculty
              </span>
            </li>
          </ul>
        </section>

        <section id="books" className={sectionClass} aria-labelledby="books-title">
          <h2 id="books-title" className={headingWithIntroClass}>
            Books
          </h2>
          <p className={introClass}>On the nightstand right now.</p>
          <ul className={listClass}>
            <li>
              How to Rule the World: An Education in Power at Stanford University
              by Theo Baker
            </li>
          </ul>
        </section>

        <section
          id="podcasts"
          className={sectionClass}
          aria-labelledby="podcasts-title"
        >
          <h2 id="podcasts-title" className={headingWithIntroClass}>
            Podcasts
          </h2>
          <p className={introClass}>On rotation during walks and commutes.</p>
          <ul className={listClass}>
            <li>
              <Link href="https://servedpodcast.com/">
                Served with Andy Roddick
              </Link>
            </li>
            <li>
              <Link href="https://podcasts.apple.com/us/podcast/group-chat/id1311062310">
                Group Chat
              </Link>
            </li>
            <li>
              <Link href="https://www.acquired.fm/">Acquired</Link>
            </li>
          </ul>
        </section>

        <section id="links" className={sectionClass} aria-labelledby="links-title">
          <h2 id="links-title" className={headingWithIntroClass}>
            Links
          </h2>
          <p className={introClass}>Things that shaped how I think and build.</p>
          <ul className={listClass}>
            <li>
              UI -{" "}
              <Link
                className="break-all"
                href="https://weberdominik.com/blog/rules-user-interfaces/"
              >
                https://weberdominik.com/blog/rules-user-interfaces/
              </Link>
            </li>
            <li>
              AI evals -{" "}
              <Link
                className="break-all"
                href="https://www.youtube.com/watch?v=BsWxPI9UM4c"
              >
                https://www.youtube.com/watch?v=BsWxPI9UM4c
              </Link>
            </li>
          </ul>
        </section>

        <section
          id="contact"
          className={sectionClass}
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title" className={headingClass}>
            Contact
          </h2>
          <ul className={listClass}>
            <li>
              <Link href="mailto:arjmaybca@gmail.com">
                Email (arjmaybca@gmail.com)
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/arjun-mayur/">
                LinkedIn (arjun-mayur)
              </Link>
            </li>
            <li>
              <Link href="https://github.com/amayur96">GitHub (amayur96)</Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
