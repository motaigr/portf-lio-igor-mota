import { Reveal } from '../Reveal'
import { Terminal } from '../Terminal'

export function Hero() {
  return (
    <section className="container max-w-5xl mx-auto px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <Reveal delay={100} className="flex flex-col items-start max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-t-gold" />
            <span className="font-mono text-[10px] text-t-gold uppercase tracking-wider">
              Python · AI · Backend
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-tight mb-6 text-t-text">
            De dados a <em className="text-t-gold font-normal italic pr-1">soluções</em> reais.
          </h1>

          <p className="font-mono text-sm text-t-muted font-light leading-relaxed mb-8 max-w-md">
            Com uma base sólida em finanças e sistemas corporativos, transformo lógica de negócios
            complexa em arquiteturas elegantes e eficientes.
          </p>
        </Reveal>

        <Reveal delay={300} className="w-full lg:max-w-md ml-auto">
          <Terminal />
        </Reveal>
      </div>
    </section>
  )
}
