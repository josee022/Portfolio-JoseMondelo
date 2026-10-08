import { FiArrowUp, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { person } from "@/content/site";

export default function Footer({ t }) {
  const year = new Date().getFullYear();
  const icon = "grid size-11 place-items-center rounded-full text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink";
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-muted">
          <p>
            © {year} {person.name}
          </p>
          <p className="mt-1">
            {t.footer.made}{" "}
            <a href="https://github.com/josee022/Portfolio-JoseMondelo" target="_blank" rel="noopener noreferrer" className="underline decoration-line-strong underline-offset-4 hover:text-ink">
              {t.footer.source}
            </a>
          </p>
        </div>
        <div className="flex items-center gap-1">
          <a href={person.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={icon}>
            <FiGithub aria-hidden="true" className="size-[18px]" />
          </a>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={icon}>
            <FiLinkedin aria-hidden="true" className="size-[18px]" />
          </a>
          <a href={person.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={icon}>
            <FiInstagram aria-hidden="true" className="size-[18px]" />
          </a>
          <a href="#inicio" aria-label={t.footer.top} className={`${icon} ml-2 border border-line`}>
            <FiArrowUp aria-hidden="true" className="size-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
