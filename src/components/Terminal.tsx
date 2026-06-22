import { useState, useEffect } from 'react'

const lines = [
  { cmd: 'whoami', out: 'Igor Mota — Developer & Analyst' },
  { cmd: 'stack --list', out: 'Python, React, FastAPI, SQL, YOLOv8' },
  { cmd: 'status', out: 'Ready to build solutions.' },
]

export function Terminal() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < lines.length * 2) {
        setStep((s) => s + 1)
      }
    }, 800)
    return () => clearTimeout(timer)
  }, [step])

  return (
    <div className="rounded-xl overflow-hidden bg-t-bg3 border-[0.5px] border-t-border shadow-elevation w-full font-mono text-[12px] leading-relaxed">
      <div className="px-4 py-3 border-b-[0.5px] border-t-border flex items-center gap-2 bg-t-bg2/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-t-muted mx-auto pr-6">terminal: ~/igor/stack</div>
      </div>

      <div className="p-5 flex flex-col gap-3 min-h-[160px]">
        {lines.map((l, i) => (
          <div key={i} className={i * 2 > step ? 'hidden' : 'block'}>
            <div>
              <span className="text-t-gold-dim">$</span>{' '}
              <span className="text-t-text">{l.cmd}</span>
            </div>
            <div className={i * 2 + 1 > step ? 'hidden' : 'text-t-muted pl-4 mt-1'}>
              → <span className="text-t-gold">{l.out}</span>
            </div>
          </div>
        ))}

        {step >= lines.length * 2 && (
          <div className="mt-1 flex items-center text-t-gold-dim">
            $ <span className="w-2 h-4 bg-t-gold ml-2 animate-blink" />
          </div>
        )}
      </div>
    </div>
  )
}
