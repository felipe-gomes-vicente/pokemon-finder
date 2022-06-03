import imgContact from "../../assets/images/contact-imagem.png";
import github from "../../assets/images/icon-github.svg";
import email from "../../assets/images/icon-envelope.svg";
import linkedin from "../../assets/images/icon-linkedin.svg";

import "./style.scss";

export function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <div>
          <img className="contact-image" alt="Contact" src={imgContact} />
        </div>
        <div>
          <h2>Felipe Gomes Vicente</h2>
          <p>Desenvolvedor Front-End</p>
        </div>
        <div className="contact-links">
          <a target="_blank" href="https://github.com/felipe-gomes-vicente" rel="noreferrer">
            <img alt="github" src={github} />
          </a>
          <a
            href="mailto:felipegomes.vicente2@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="e-mail" src={email} />
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-gomes-vicente"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="linkedin" src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}
