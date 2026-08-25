import React from 'react';
import { notFound } from 'next/navigation';
import { JOURNEYS } from '@/data/journeys';
import JourneyDetailClient from './JourneyDetailClient';

export async function generateStaticParams() {
  return JOURNEYS.map((journey) => ({
    slug: journey.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const journey = JOURNEYS.find((j) => j.slug === slug);
  if (!journey) return { title: 'Journey Not Found | Sacred Roots' };
  return {
    title: `${journey.title} | Sacred Roots Journeys`,
    description: journey.tagline,
  };
}

export default async function JourneyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const journey = JOURNEYS.find((j) => j.slug === slug);

  if (!journey) {
    notFound();
  }

  return <JourneyDetailClient journey={journey} />;
}
