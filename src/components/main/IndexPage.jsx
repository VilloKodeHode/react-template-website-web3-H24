import { ProjectCard } from "../ProjectSection/ProjectCard";

export const IndexPage = ({ greeting, setGreeting }) => {
  return (
    <main className="grid gap-36 last-of-type:mb-36">
      <section className="h-[calc(100vh-145px)] bg-orange-300 flex justify-center items-center flex-col gap-8">
        <h1 className="text-6xl">Hero section</h1>
        <p>{greeting}</p>
        <button onClick={() => setGreeting((greeting) => greeting + 1)}>
          click
        </button>
      </section>
      <section
        id="about"
        className="min-h-[50vh] bg-red-400 flex justify-center items-center"
      >
        About section
      </section>
      <section
        id="projects"
        className="min-h-[50vh] gap-8 bg-green-400 flex justify-center items-center"
      >
   <ProjectCard src="/images/mjau.jpg" title="project 1" description="lorem ipsum noe greier" />
   <ProjectCard src="/images/logo.jpg" title="project 2" description="lorem ipsum noe mer greier" />
      </section>
      <section
        id="contact"
        className="min-h-[50vh] bg-blue-400 flex justify-center items-center"
      >
        Contact section
      </section>
    </main>
  );
};
