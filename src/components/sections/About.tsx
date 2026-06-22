import { Reveal } from '../Reveal'
import { SectionLabel } from '../SectionLabel'

const events = [
  { year: '2024', title: 'Desenvolvimento do Presença+', active: true },
  { year: '2024', title: 'Visão Computacional c/ YOLOv8', active: false },
  { year: '2023', title: 'Transição para Python & FastAPI', active: false },
  { year: '2021', title: 'Atuação em SAP, Salesforce e Pega', active: false },
]

export function About() {
  return (
    <section id="about" className="container max-w-5xl mx-auto px-6 py-16">
      <Reveal>
        <SectionLabel>Sobre Mim</SectionLabel>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-8">
        <Reveal delay={100} className="md:col-span-7">
          <div className="prose prose-invert max-w-none font-mono text-sm leading-relaxed text-t-muted">
            <p className="mb-4">
              Sou um desenvolvedor baseado em <span className="text-t-text">Curitiba/PR</span>, com
              uma trajetória não convencional que me deu uma perspectiva única sobre o
              desenvolvimento de software.
            </p>
            <p className="mb-4">
              Comecei minha carreira imerso na complexidade de sistemas corporativos pesados como
              SAP, Salesforce e Pega. Essa experiência forjou minha compreensão sobre arquiteturas
              empresariais e resiliência de dados.
            </p>
            <p>
              Hoje, aplico esse rigor e visão estruturada no ecossistema moderno. Utilizando Python,
              React e ferramentas de Inteligência Artificial, construo aplicações ágeis, focadas na
              experiência do usuário e na entrega real de valor, sem perder de vista a robustez que
              o mundo corporativo exige.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200} className="md:col-span-5">
          <div className="pl-6 border-l-[0.5px] border-t-border space-y-8 relative">
            {events.map((e, i) => (
              <div key={i} className="relative">
                <div
                  className={`absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full border-[0.5px] bg-t-bg ${
                    e.active
                      ? 'border-t-gold shadow-[0_0_8px_rgba(200,169,110,0.5)]'
                      : 'border-t-muted'
                  }`}
                />
                <div
                  className={`font-mono text-[11px] mb-1 ${e.active ? 'text-t-gold' : 'text-t-muted'}`}
                >
                  {e.year}
                </div>
                <div className={`text-sm ${e.active ? 'text-t-text font-medium' : 'text-t-muted'}`}>
                  {e.title}
                </div>
              </div>
            ))}

            {/* Gradient fade at the bottom of the line */}
            <div className="absolute bottom-[-10px] -left-[1px] w-[2px] h-12 bg-gradient-to-b from-t-border to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
