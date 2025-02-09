import Hero from "../sections/Hero";
import Manifesto from "../sections/Manifesto";

const componentMap: { [key: string]: React.ComponentType } = {
    "hero": Hero,
    "manifesto": Manifesto,
};

export default function Sections({ sections }: { sections?: Sanity.Section[] }) {
  if (!sections || sections.length === 0) {
    return <p>No section included in this page</p>;
  }

  return (
    <>
      {sections.map((section: Sanity.Section) => {
        const Component = componentMap[section._type];
        if (!Component) {
          return (
            <div data-type={section._type} key={section._key}>
              Unknown section type: {section._type}
            </div>
          );
        }
        return <Component {...section} key={section._key} />;
      })}
    </>
  );
}
