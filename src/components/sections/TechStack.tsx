import { Reveal } from '../Reveal'
import { SectionLabel } from '../SectionLabel'

const stack = [
  { name: 'Python', role: 'Backend & Data', color: '#3776AB' },
  { name: 'FastAPI', role: 'API Architecture', color: '#009688' },
  { 
  name: 'Data Analytics', 
  role: 'Pandas, Plotly, Streamlit', // Use uma string única com as ferramentas
  color: '#61DAFB' 
},
  { name: 'Supabase', role: 'Database & Auth', color: '#3ECF8E' },
  { name: 'Agentes de IA', role: 'LLMs & Automação', color: '#C8A96E' },
  { name: 'CRM', role: 'Enterprise Systems', color: '#FF4757' },
]

export function TechStack() {
  return (
    <section className="container max-w-5xl mx-auto px-6 py-16">
      <Reveal>
        <SectionLabel>Tech Stack</SectionLabel>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {stack.map((item, i) => (
          <Reveal key={item.name} delay={i * 50}>
            <div className="flex items-center gap-4 p-4 rounded-lg border-[0.5px] border-t-border bg-t-bg2 hover:bg-t-bg3 transition-colors duration-200">
              <div
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}40` }}
              />
              <div>
                <div className="text-[13px] font-medium text-t-text mb-0.5">{item.name}</div>
                <div className="font-mono text-[10px] text-t-muted uppercase tracking-wider">
                  {item.role}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
