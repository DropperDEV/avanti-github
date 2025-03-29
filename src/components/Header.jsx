import GhLogo from "../assets/gh-logo.svg";

export default function Header() {
  return (
    <header>
      <img src={GhLogo} alt="" />
      <h1>
        Perfil <strong>GitHub</strong>
      </h1>
    </header>
  );
}
