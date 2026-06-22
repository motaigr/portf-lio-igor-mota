interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-mono text-[10px] text-t-gold uppercase tracking-wider">{children}</span>
      <div className="h-[0.5px] bg-t-border flex-1" />
    </div>
  )
}
