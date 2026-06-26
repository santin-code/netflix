'use client';

interface NavbarProps {
  search: string;
  onSearch: (v: string) => void;
}

export default function Navbar({ search, onSearch }: NavbarProps) {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(10,10,15,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      padding: '0 2rem',
      height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '1rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        <span style={{
          fontSize: '1.6rem', fontWeight: 800,
          color: 'var(--accent)',
          letterSpacing: '-1px', fontStyle: 'italic',
        }}>STREAMFLIX</span>
      </div>

      <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
        <span style={{
          position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
          color: 'var(--text-muted)', fontSize: '1rem', pointerEvents: 'none',
        }}>🔍</span>
        <input
          type="text"
          placeholder="Buscar película..."
          value={search}
          onChange={e => onSearch(e.target.value)}
          style={{
            width: '100%', background: 'rgba(255,255,255,0.07)',
            border: '1px solid var(--border)', borderRadius: '8px',
            padding: '8px 12px 8px 36px', color: 'var(--text-primary)',
            fontSize: '0.9rem', outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--border)')}
        />
      </div>
    </nav>
  );
}
