import { Reveal } from '../Reveal'
import { SectionLabel } from '../SectionLabel'

export function Education() {
  return (
    <section className="container max-w-5xl mx-auto px-6 py-16">
      <Reveal>
        <SectionLabel>Formação</SectionLabel>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Reveal delay={100}>
          <div className="p-6 rounded-xl border-[0.5px] border-t-border bg-t-bg2 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-t-text">BYU-Pathway Worldwide</h3>
              <span className="px-2 py-1 rounded bg-t-gold/10 text-t-gold font-mono text-[10px] uppercase border-[0.5px] border-t-gold/20">
                Em curso
              </span>
            </div>
            <p className="font-mono text-sm text-t-muted">Desenvolvimento de Software</p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="p-6 rounded-xl border-[0.5px] border-t-border bg-t-bg2 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-t-text">Universidade Positivo</h3>
              <span className="px-2 py-1 rounded bg-t-gold/10 text-t-gold font-mono text-[10px] uppercase border-[0.5px] border-t-gold/20">
                Em curso
              </span>
            </div>
            <p className="font-mono text-sm text-t-muted">Sistemas de Informação</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
