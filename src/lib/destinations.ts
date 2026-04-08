import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDir = path.join(process.cwd(), 'content', 'destinations');

export interface Destination {
  slug: string;
  title: string;
  description: string;
  destination: string;
  pubDate: string;
  tags: string[];
  heroImage?: string;
  content: string;
  htmlContent?: string;
}

export function getAllDestinations(): Destination[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

  return files.map(filename => {
    const slug = filename.replace('.md', '');
    const filePath = path.join(contentDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      destination: data.destination || slug,
      pubDate: data.pubDate || '',
      tags: data.tags || [],
      heroImage: data.heroImage || '',
      content,
    };
  }).sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
}

export async function getDestination(slug: string): Promise<Destination | null> {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    destination: data.destination || slug,
    pubDate: data.pubDate || '',
    tags: data.tags || [],
    heroImage: data.heroImage || null,
    content,
    htmlContent: processed.toString(),
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace('.md', ''));
}
