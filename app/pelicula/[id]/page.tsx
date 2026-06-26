import { movies } from '../../data/movies';
import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const movie = movies.find(m => m.id === Number(id));
  if (!movie) return { title: 'Película no encontrada' };

  return {
    title: `${movie.title} (${movie.year}) — Streamflix`,
    description: movie.description,
    openGraph: {
      title: `${movie.title} (${movie.year})`,
      description: movie.description,
      images: [
        {
          url: movie.image,
          width: 300,
          height: 450,
          alt: movie.title,
        },
      ],
      type: 'video.movie',
      url: `https://tu-dominio.com/pelicula/${movie.id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${movie.title} (${movie.year})`,
      description: movie.description,
      images: [movie.image],
    },
  };
}

export async function generateStaticParams() {
  return movies.map(m => ({ id: String(m.id) }));
}

export default async function PeliculaPage({ params }: Props) {
  const { id } = await params;
  const movie = movies.find(m => m.id === Number(id));
  if (!movie) notFound();
  redirect(movie.link);
}
