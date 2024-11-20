import NewsLetter from "../features/NewsLetterForm";
import Title from "../ui/Title";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center justify-between gap-8 border-t sm:h-72">
      <div className="grid w-11/12 grid-cols-2 py-8 sm:w-2/3 sm:grid-cols-3">
        <div className="col-start-1 flex flex-col gap-4">
          <Title classStyle="text-3xl sm:text-6xl" />

          <div className="relative">
            <ul className="absolute left-1 flex flex-col gap-4 sm:left-2">
              <li className="underline underline-offset-2">
                <Link href="/about">About</Link>
              </li>
              <li className="underline underline-offset-2">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="underline underline-offset-2">
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:col-start-3">
          <span className="text-2xl font-semibold">Join our newsletter</span>
          <NewsLetter />
        </div>
      </div>

      <div className="text-base">
        <span>
          ©{date} <Title classStyle="" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
