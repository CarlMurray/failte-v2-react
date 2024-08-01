import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="container">
        <a href="#">fáilte</a>
        <nav>
          <ul>
            <li>Home</li>
            <li>Play</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
