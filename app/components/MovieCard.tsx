'use client';

import { Movie } from '../data/movies';
import { useState } from 'react';

export default function MovieCard({ movie }: { movie: Movie }) {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={`/pelicula/${movie.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="movie-card"
      style={{
        display: 'block',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        background: 'var(--bg-card)',
        position: 'relative',
        cursor: 'pointer',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div style={{ position: 'relative', paddingBottom: '150%', overflow: 'hidden', background: '#1a1a2e' }}>
        {!imgError ? (
          <img
            src={movie.image}
            alt={movie.title}
            onError={() => setImgError(true)}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', transition: 'transform 0.35s ease',
            }}
          />
        ) : (
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '3rem', background: '#1a1a2e',
          }}>🎬</div>
        )}

        <div className="card-overlay" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
          opacity: 0, transition: 'opacity 0.25s ease',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: '1rem',
        }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
            {movie.description}
          </p>
          <div style={{ marginTop: '10px', padding: '8px 14px', background: 'var(--accent)', borderRadius: '6px', textAlign: 'center', fontWeight: 600, fontSize: '0.85rem', color: 'white' }}>
            ▶ Ver ahora
          </div>
        </div>

        <div style={{
          position: 'absolute', top: '8px', right: '8px',
          background: 'rgba(0,0,0,0.75)', borderRadius: '6px',
          padding: '3px 8px', fontSize: '0.75rem', fontWeight: 600,
          color: '#f5c518',
        }}>★ {movie.rating}</div>
      </div>

      <div style={{ padding: '0.6rem 0.75rem' }}>
        <h3 style={{
          fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)',
          marginBottom: '3px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{movie.title}</h3>
        <div style={{ display: 'flex', gap: '6px', fontSize: '0.72rem', color: 'var(--text-muted)', alignItems: 'center' }}>
          <span>{movie.year}</span>
          <span>·</span>
          <span>{movie.duration}</span>
          <span>·</span>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {movie.genre[0]}
          </span>
        </div>
      </div>

      <style>{`
        .movie-card:hover { transform: scale(1.04); box-shadow: 0 12px 40px rgba(0,0,0,0.6); z-index: 2; }
        .movie-card:hover .card-overlay { opacity: 1 !important; }
        .movie-card:hover img { transform: scale(1.08); }
      `}</style>
    </a>
  );
}
