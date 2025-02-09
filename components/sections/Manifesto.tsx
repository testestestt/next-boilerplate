
export default function Manifesto( section : Section.ManifestoProps) {
    return (
        <section>
            <h1>Manifesto</h1>
            <p>Title: {section.title}</p>

            {section.body && 
                <p>Body: {section.body}</p>
            }
        </section>
    );
}