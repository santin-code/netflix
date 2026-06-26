'use client';

import { useState, useMemo } from 'react';
import { movies, genres } from './data/movies';
import MovieCard from './components/MovieCard';
import Navbar from './components/Navbar';
import AdSlot from './components/AdSlot';

type SortOrder = 'desc' | 'asc';

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [genreOpen, setGenreOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...movies];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(m => m.title.toLowerCase().includes(q));
    }
    if (selectedGenre) {
      list = list.filter(m => m.genre.includes(selectedGenre));
    }
    list.sort((a, b) => sortOrder === 'desc' ? b.year - a.year : a.year - b.year);
    return list;
  }, [search, selectedGenre, sortOrder]);

  // Insert an ad every N cards
  const AD_EVERY = 8;
  const gridItems: Array<{ type: 'movie'; id: number } | { type: 'ad'; key: string }> = [];
  filtered.forEach((movie, i) => {
    gridItems.push({ type: 'movie', id: movie.id });
    if ((i + 1) % AD_EVERY === 0 && i !== filtered.length - 1) {
      gridItems.push({ type: 'ad', key: `ad-${i}` });
    }
  });

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar search={search} onSearch={setSearch} />

      {/* Top leaderboard ad — high value placement */}
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '8px 1rem' }}>
        <AdSlot slot="1111111111" format="horizontal" />
      </div>

      <main style={{ padding: '1rem', maxWidth: '1400px', margin: '0 auto' }}>

        {/* Hero — compact on mobile */}
        <div style={{
          marginBottom: '1.25rem', padding: 'clamp(1rem, 4vw, 2.5rem) clamp(1rem, 4vw, 2rem)',
          background: 'linear-gradient(135deg, #1a0a0a 0%, #0d0d1a 50%, #0a0a0f 100%)',
          borderRadius: '12px', border: '1px solid rgba(229,9,20,0.15)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '-60px', right: '-60px', width: '260px', height: '260px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(229,9,20,0.08) 0%, transparent 70%)',
          }} />
          <h1 style={{ fontSize: 'clamp(1.3rem, 5vw, 2.4rem)', fontWeight: 800, marginBottom: '0.3rem' }}>
            Tu cine, <span style={{ color: 'var(--accent)' }}>sin límites</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)', maxWidth: '480px' }}>
            Explora nuestra colección. Haz clic en cualquier portada para ver.
          </p>
        </div>

        {/* Filters bar */}
        <div style={{ marginBottom: '1rem' }}>

          {/* Top row: genre dropdown (mobile) + sort */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>

            {/* Genre selector — scrollable row on desktop, dropdown on mobile */}
            <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>

              {/* Mobile: dropdown toggle */}
              <button
                onClick={() => setGenreOpen(o => !o)}
                className="genre-toggle"
                style={{
                  display: 'none',
                  width: '100%', padding: '7px 12px',
                  borderRadius: '8px', border: '1px solid var(--border)',
                  background: 'var(--bg-card)', color: 'var(--text-primary)',
                  fontSize: '0.85rem', cursor: 'pointer', textAlign: 'left',
                  justifyContent: 'space-between', alignItems: 'center',
                }}
              >
                <span>{selectedGenre || 'Todos los géneros'}</span>
                <span>{genreOpen ? '▲' : '▼'}</span>
              </button>

              {/* Dropdown panel (mobile) */}
              {genreOpen && (
                <div className="genre-dropdown" style={{
                  display: 'none',
                  position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 50,
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: '8px', marginTop: '4px', maxHeight: '200px', overflowY: 'auto',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}>
                  {['', ...genres].map(g => (
                    <button
                      key={g || 'all'}
                      onClick={() => { setSelectedGenre(g); setGenreOpen(false); }}
                      style={{
                        display: 'block', width: '100%', padding: '9px 14px',
                        background: selectedGenre === g ? 'rgba(229,9,20,0.12)' : 'transparent',
                        border: 'none', color: selectedGenre === g ? 'var(--accent)' : 'var(--text-primary)',
                        fontSize: '0.85rem', cursor: 'pointer', textAlign: 'left',
                        fontWeight: selectedGenre === g ? 600 : 400,
                      }}
                    >{g || 'Todos'}</button>
                  ))}
                </div>
              )}

              {/* Desktop: scrollable pill row */}
              <div className="genre-pills" style={{
                display: 'flex', gap: '6px', overflowX: 'auto',
                paddingBottom: '4px', scrollbarWidth: 'none',
              }}>
                {['', ...genres].map(g => (
                  <button
                    key={g || 'all'}
                    onClick={() => setSelectedGenre(g)}
                    style={{
                      padding: '5px 12px', borderRadius: '20px', fontSize: '0.78rem',
                      border: '1px solid', cursor: 'pointer', transition: 'all 0.18s',
                      background: selectedGenre === g ? 'var(--accent)' : 'transparent',
                      borderColor: selectedGenre === g ? 'var(--accent)' : 'var(--border)',
                      color: selectedGenre === g ? 'white' : 'var(--text-secondary)',
                      fontWeight: selectedGenre === g ? 600 : 400,
                      whiteSpace: 'nowrap', flexShrink: 0,
                    }}
                  >{g || 'Todos'}</button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <button
              onClick={() => setSortOrder(o => o === 'desc' ? 'asc' : 'desc')}
              style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                padding: '5px 12px', borderRadius: '8px', fontSize: '0.78rem',
                border: '1px solid var(--border)', cursor: 'pointer',
                background: 'var(--bg-card)', color: 'var(--text-primary)',
                fontWeight: 500, whiteSpace: 'nowrap', transition: 'border-color 0.2s', flexShrink: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              {sortOrder === 'desc' ? '↓' : '↑'} {sortOrder === 'desc' ? 'Más reciente' : 'Más antiguo'}
            </button>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '8px' }}>
            {filtered.length} {filtered.length === 1 ? 'película' : 'películas'}
            {selectedGenre && <span> · <span style={{ color: 'var(--accent)' }}>{selectedGenre}</span></span>}
          </p>
        </div>

        {/* Grid with inline ads */}
        {filtered.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '1rem',
          }}>
            {gridItems.map(item => {
              if (item.type === 'ad') {
                return (
                  <div key={item.key} style={{ gridColumn: '1 / -1' }}>
                    <AdSlot slot="2222222222" format="rectangle" style={{ padding: '4px 0' }} />
                  </div>
                );
              }
              const movie = filtered.find(m => m.id === item.id)!;
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🎬</div>
            <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-secondary)' }}>No se encontraron películas</p>
            <p style={{ fontSize: '0.8rem', marginTop: '0.4rem' }}>Intenta con otro nombre o género</p>
          </div>
        )}

        {/* Mid-page rectangle ad after the grid */}
        <div style={{ marginTop: '2rem' }}>
          <AdSlot slot="3333333333" format="rectangle" />
        </div>

      </main>

      <footer style={{
        marginTop: '2rem', padding: '1.5rem 1rem',
        borderTop: '1px solid var(--border)',
        textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem',
      }}>
        {/* Footer ad — sticky-footer alternative */}
        <div style={{ marginBottom: '1rem' }}>
          <AdSlot slot="4444444444" format="horizontal" label="" />
        </div>
        <span style={{ color: 'var(--accent)', fontWeight: 700 }}>STREAMFLIX</span> · Solo para uso personal
      </footer>

      <style>{`
        .genre-pills::-webkit-scrollbar { display: none; }
        @media (max-width: 600px) {
          .genre-pills { display: none !important; }
          .genre-toggle { display: flex !important; }
          .genre-dropdown { display: block !important; }
        }
      `}</style>
    </div>
  );
}
