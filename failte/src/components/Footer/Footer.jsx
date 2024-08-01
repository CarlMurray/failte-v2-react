import "./Footer.scss";
import githubIcon from "/img/footer/footer-github-icon.svg";
import linkedinIcon from "/img/footer/footer-linkedin-icon.svg";
import personalIcon from "/img/footer/footer-portfolio-icon.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <img src={linkedinIcon} alt="LinkedIn" />
        <img src={githubIcon} alt="GitHub" />
        <img src={personalIcon} alt="Personal Portfolio" />
      </div>
    </footer>
  );
}
