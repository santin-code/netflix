'use client';

interface AdSlotProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  style?: React.CSSProperties;
  label?: string;
}

export default function AdSlot({ slot, format = 'auto', style, label = 'Publicidad' }: AdSlotProps) {
  return (
    <div style={{ textAlign: 'center', ...style }}>
      <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '4px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        {label}
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
