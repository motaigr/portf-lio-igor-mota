import { Reveal } from '../Reveal'
import { SectionLabel } from '../SectionLabel'

const projects = [
  {
    title: 'API Imóveis',
    description: 'API REST de alta performance para gestão e busca avançada de imóveis.',
    tags: ['Python', 'FastAPI'],
    icon: '🏠',
    color: '#0D1117',
    gridColor: 'rgba(200, 169, 110, 0.1)',
    span: 'md:col-span-2',
  },
  {
    title: 'Triagem Dentista',
    description:
      'Sistema inteligente de triagem odontológica com automação de testes e persistência de dados.',
    tags: ['Python', 'Pytest', 'Supabase'],
    icon: '🦷',
    color: '#0F0F1A',
    gridColor: 'rgba(200, 169, 110, 0.08)',
    span: 'md:col-span-1',
  },
  {
    title: 'Phone Detection CV',
    description: 'Modelo de visão computacional otimizado para detectar o uso de smartphones.',
    tags: ['YOLOv8', 'Python', 'OpenCV'],
    icon: '👁️',
    color: '#0A1A0A',
    gridColor: 'rgba(200, 169, 110, 0.08)',
    span: 'md:col-span-1',
  },
]

export function Projects() {
  return (
    <section id="work" className="container max-w-5xl mx-auto px-6 py-16">
      <Reveal>
        <SectionLabel>Projetos Selecionados</SectionLabel>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((p, i) => (
          <Reveal key={i} delay={i * 100} className={p.span}>
            <div className="group rounded-xl bg-t-bg2 border-[0.5px] border-t-border overflow-hidden transition-all duration-300 hover:border-t-gold/35 cursor-pointer h-full flex flex-col">
              <div
                className="relative w-full h-48 overflow-hidden flex items-center justify-center border-b-[0.5px] border-t-border"
                style={{ backgroundColor: p.color }}
              >
                <div
                  className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `linear-gradient(${p.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${p.gridColor} 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                    transform: 'perspective(400px) rotateX(60deg) scale(2.5)',
                    transformOrigin: 'center top',
                  }}
                />
                <div className="relative z-10 text-5xl filter drop-shadow-2xl transition-transform duration-300 group-hover:-translate-y-2">
                  {p.icon}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded bg-t-gold/10 border-[0.5px] border-t-gold/20 text-t-gold font-mono text-[10px] uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-medium mb-2 text-t-text group-hover:text-t-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-t-muted leading-relaxed font-mono mt-auto">
                  {p.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
