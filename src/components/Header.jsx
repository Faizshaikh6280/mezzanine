import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex nav">
        <div className="light-effect">
          <img src="/images/light-bg.png" alt="Light effect" />
        </div>

        <img src="/images/logo-white.svg" alt="Mezzanine logo" />

        <ul className="flex nav__links">
          {["Home", "Services", "Portfolio", "Our Team", "Contact Us"].map(
            (item) => (
              <li key={item}>
                <Link href="#">{item}</Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
