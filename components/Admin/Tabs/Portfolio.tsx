import TeamComponent from "@/components/Micro/Team/TeamComponent";

const Portfolio = () => {
  return (
    <section className="grid pt-0 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center">
      <TeamComponent
        name="Samson Ajulor"
        role="Backend Developer"
        image="/assets/team/samson.svg"
        alt="Samson"
        twitter="https://twitter.com/samsonajulor"
        linkedin="https://linkedin.com/in/samsonajulor"
        borderColor="gray-500"
        />
      <TeamComponent
        name="Jessica Joseph"
        role="Frontend Developer"
        image="/assets/team/jessica.svg"
        alt="Jessica"
        twitter="https://twitter.com/forJessica_sake"
        linkedin="https://www.linkedin.com/in/jessica-joseph-/"
        borderColor="gray-500"
        />

      <TeamComponent
        name="Ololade Otemade"
        role="Frontend Developer"
        image="/assets/team/lolade.svg"
        alt="Ololade"
        twitter="https://twitter.com/cavemann__"
        linkedin="https://www.linkedin.com/in/ololade-otemade-72959613a/"
        borderColor="gray-500"
        />
      <TeamComponent
        name="Foluso Kayode"
        role="Fullstack Developer"
        image="/assets/team/folu.svg"
        alt="Foluso"
        twitter="https://twitter.com/folusokayode"
        linkedin="https://www.linkedin.com/in/folusokayodefavour/"
        borderColor="gray-500"
        />
      <TeamComponent
        name="Nobei Joan"
        role="Product Designer"
        image="/assets/team/joan.svg"
        alt="Joan"
        twitter="https://twitter.com/nobei_joan"
        linkedin="https://www.linkedin.com/in/joan-nobei-2704b6227"
        borderColor="gray-500"
        />

      <TeamComponent
        name="Mujeeb Adebowale"
        role="Backend Developer"
        image="/assets/team/mujeeb.svg"
        alt="Mujeeb"
        twitter="/"
        linkedin="https://www.linkedin.com/in/mujeeb-adebowale-794762199"
        borderColor="gray-500"
        />
    </section>
  );
};

export default Portfolio;
