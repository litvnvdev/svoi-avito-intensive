import { footerLinks } from "./constants";

export function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-1 text-gray-400 underline decoration-solid mt-32">
        {footerLinks.map(({ id, link, text }) => (
          <a
            className="cursor-pointer hover:text-gray-600 transition-colors"
            key={id}
            href={link}
          >
            {text}
          </a>
        ))}
      </div>
    </footer>
  );
}
