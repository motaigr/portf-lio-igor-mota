import { Reveal } from '../Reveal'
import { MessageCircle, ArrowRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="container max-w-3xl mx-auto px-6 py-24">
      <Reveal>
        <div className="relative">
          <div className="absolute inset-0 bg-t-gold/10 blur-[100px] rounded-full" />

          <div className="relative z-10 p-8 md:p-12 rounded-2xl border-[0.5px] border-t-border bg-t-bg2 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-t-text">
              Vamos construir algo juntos?
            </h2>

            <p className="font-mono text-sm text-t-muted mb-8 max-w-md mx-auto">
              Disponível para projetos, estágio e consultoria técnica. Se você tem um desafio que
              precisa ser resolvido, envie uma mensagem.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="https://wa.me/5541987859725"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-md bg-t-gold text-t-bg font-medium hover:opacity-90 hover:-translate-y-[1px] transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Entrar em contato
              </a>

              <a
                href="https://github.com/motaigr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-mono text-[13px] text-t-text hover:text-t-gold transition-colors duration-200"
              >
                Ver no GitHub <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
