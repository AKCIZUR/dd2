export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  featured?: boolean;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'design-systems-that-scale',
    title: 'Design systémy, které rostou bez chaosu',
    description:
      'Jak držet UI konzistentní, když aplikace přidává nové sekce, komponenty a stavy.',
    date: '19. května 2026',
    readingTime: '5 min',
    category: 'Design',
    featured: true,
    content: [
      'Začni s malým jádrem: typografie, spacing, barvy, tlačítka a form controls. Všechno ostatní stav na těchto pevných blocích.',
      'Zaveď jasná pravidla pro varianty a stavy. Každá komponenta by měla mít jeden způsob použití, ne tři vizuálně podobné alternativy.',
      'Mysli na dokumentaci už při tvorbě. Krátké příklady a screenshoty ušetří spoustu času při dalším rozšiřování systému.',
    ],
  },
  {
    slug: 'loading-states-that-feel-fast',
    title: 'Loading states, které působí rychleji než jsou',
    description:
      'Skeletony, progresivní rendering a drobné mikropohyby, které zlepšují vnímání výkonu.',
    date: '16. května 2026',
    readingTime: '4 min',
    category: 'UX',
    content: [
      'Skeleton má kopírovat strukturu obsahu, ne jen být šedá krabička. Uživatel díky tomu okamžitě chápe, co se načítá.',
      'Když můžeš, načítej nejdřív nadpis a základní strukturu a až potom detaily. Rozhraní tím působí rychleji a klidněji.',
      'Jemná animace je lepší než křiklavý loader. Cílem je pocit plynulosti, ne soutěž o pozornost.',
    ],
  },
  {
    slug: 'motion-without-overdoing-it',
    title: 'Motion bez přepáleného efektu',
    description:
      'Subtilní animace, které dávají rozhraní charakter, ale nepřebíjejí obsah.',
    date: '12. května 2026',
    readingTime: '6 min',
    category: 'Frontend',
    content: [
      'Motion by měl být konzistentní. Stejná rychlost a stejný charakter animace napříč aplikací působí mnohem profesionálněji.',
      'Používej animaci jako odpověď na akci nebo přechod mezi stavy. Všechno ostatní může zůstat statické.',
      'Na dlouhých stránkách je lepší jeden výrazný efekt než několik malých, které spolu soupeří.',
    ],
  },
  {
    slug: 'documentation-homepage-patterns',
    title: 'Homepage patterny pro dokumentační weby',
    description:
      'Jak propojit úvodní stránku, blog a dokumentaci do jednoho přehledného flow.',
    date: '8. května 2026',
    readingTime: '3 min',
    category: 'Content',
    content: [
      'Homepage by měla vysvětlit, kam uživatel pokračuje dál. Jasná CTA na docs a blog jsou často důležitější než dlouhý text.',
      'Blog funguje jako sekundární vstup. Může ukazovat nové postupy, novinky nebo hlubší vysvětlení designových rozhodnutí.',
      'Dokumentace zůstává hlavní cíl, ale blog pomáhá budovat důvěru a kontext kolem produktu.',
    ],
  },
];

export const blogHighlights = [
  'Přehledná struktura',
  'Rychlé načítání',
  'Lehké motion efekty',
  'Čistý dark UI',
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
