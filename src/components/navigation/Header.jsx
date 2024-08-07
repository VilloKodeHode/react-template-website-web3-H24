export default function Header({greeting}) {
  return (
    <header className="bg-orange-500 p-8 flex justify-between items-center">
      <figure className="w-36">
        <img className="w-full" src="/images/logo.jpg" alt="" />
      </figure>
      <p>{greeting}</p>
      <nav className="flex gap-8">
        <button><a href="#about">About</a></button>
        <button><a href="#projects">Projects</a></button>
        <button><a href="#contact">Contact</a></button>
      </nav>
    </header>
  );
}
