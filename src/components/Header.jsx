import GhLogo from "../assets/gh-logo.svg";

export default function Header() {
  return (
    <header className="flex justify-center items-center  gap-4">
      <img src={GhLogo} alt="Logo" />
      <h1 className=" text-white font-semibold text-6xl">
        Perfil <strong className="font-extrabold">GitHub</strong>
      </h1>
    </header>
  );
}
