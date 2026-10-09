import { CaseStudy, Capability, Testimonial } from '../types';
import heroAssetImg from '../assets/images/hero_studio_showcase_1791406046421.jpg';
import auroraImg from '../assets/images/case_study_aurora_1791406059854.jpg';
import chronosImg from '../assets/images/case_study_chronos_1791406070925.jpg';
import atelierImg from '../assets/images/case_study_atelier_1791406080513.jpg';
import avatarStefan from '../assets/images/avatar_stefan_1791527085889.jpg';
import avatarClaire from '../assets/images/avatar_claire_1791527100398.jpg';
import avatarMarc from '../assets/images/avatar_marc_1791527116509.jpg';
import avatarElena from '../assets/images/avatar_elena_1791527133374.jpg';

export const HERO_ASSET = heroAssetImg;

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'aurora-parfums',
    title: 'Aurora Atelier Fragrance',
    client: 'Maison Aurora Paris',
    year: '2026',
    category: 'Brand Identity',
    tagline: 'Haute perfumery brand system tailored in brutalist stone and purple silk.',
    description:
      'A complete visual wardrobe for an artisanal Parisian fragrance house transitioning from boutique niche to global luxury flagships.',
    challenge:
      'The client was using generic minimalist luxury templates that rendered their collection indistinguishable from mass-market beauty brands.',
    solution:
      'We engineered a tactile identity rooted in dark chiseled volcanic basalt, high-contrast typography, and ultraviolet tactile foils. Every flacon and packaging unit now feels like an architectural relic.',
    image: auroraImg,
    featured: true,
    aspect: '4:3',
    deliverables: [
      'Bespoke Wordmark & Monogram',
      'Flacon & Secondary Box Packaging',
      'Art Directed Bottle Photography Stylebook',
      'Global Flagship Signage Guidelines',
    ],
    palette: [
      { name: 'Basalt Charcoal', hex: '#161618' },
      { name: 'Studio Accent', hex: '#9169F6' },
      { name: 'Deep Royal', hex: '#4C2F87' },
      { name: 'Opal Mist', hex: '#E2E8F0' },
    ],
    typography: 'Lexend Headline + Sora Body',
    outcomeMetric: '+210% Retail Pre-orders in Tokyo & London',
  },
  {
    id: 'chronos-horlogerie',
    title: 'Chronos Kinetic Watches',
    client: 'Chronos Manufacture Geneva',
    year: '2026',
    category: '3D & Motion',
    tagline: 'Avant-garde horology visual communication and 3D kinetic campaign.',
    description:
      'Sculptural digital campaign and interactive identity for a limited-run mechanical timepiece brand exploring relativistic time.',
    challenge:
      'Traditional watch photography flattened the intricate multi-axis tourbillon mechanics and failed to communicate the radical engineering to modern collectors.',
    solution:
      'Created custom 3D kinetic renders and spatial motion sequences paired with sharp Swiss typographic layouts that highlight every escapement gear and titanium chamfer.',
    image: chronosImg,
    featured: true,
    aspect: '4:3',
    deliverables: [
      '3D Kinetic Campaign Film Assets',
      'Interactive Digital Showroom Architecture',
      'Collector Edition Physical Certificate System',
      'Social Kinetic Loops',
    ],
    palette: [
      { name: 'Obsidian Black', hex: '#0F0F12' },
      { name: 'Titanium Grey', hex: '#27272A' },
      { name: 'Orchid Purple', hex: '#9169F6' },
      { name: 'Deep Indigo', hex: '#4C2F87' },
    ],
    typography: 'Lexend Bold + Sora Regular',
    outcomeMetric: '100% Limited Edition Allocation Sold in 48 Hours',
  },
  {
    id: 'atelier-monograph',
    title: 'The Monograph Studio Identity',
    client: 'Atelier Kvadrat',
    year: '2025',
    category: 'Editorial & Digital',
    tagline: 'Tactile editorial lookbook and digital brand system for architectural textiles.',
    description:
      'An understated, museum-grade visual identity and printed monograph that showcases tactile materiality across physical and digital formats.',
    challenge:
      'The textile house had disparate print collateral and an uninspired web catalog that felt distant from the sensory richness of their woven fabrics.',
    solution:
      'Designed a unified visual language with generous negative space, rigorous grid alignment, blind embossing guidelines, and an ultra-fast digital lookbook.',
    image: atelierImg,
    featured: false,
    aspect: '4:3',
    deliverables: [
      '320-Page Hardcover Monograph',
      'Digital Lookbook & Interactive Spec Sheet',
      'Sample Swatch Box Packaging',
      'Brand Identity Manual',
    ],
    palette: [
      { name: 'Graphite Stone', hex: '#1C1C21' },
      { name: 'Velvet Plum', hex: '#6D28D9' },
      { name: 'Parchment Grey', hex: '#CBD5E1' },
      { name: 'Deep Carbon', hex: '#121214' },
    ],
    typography: 'Instrument Serif + Plus Jakarta Sans',
    outcomeMetric: 'Awarded Red Dot Best of the Best 2025',
  },
  {
    id: 'vivid-spatial',
    title: 'Vivid Spatial Sound Labs',
    client: 'Vivid Acoustics Berlin',
    year: '2025',
    category: 'Visual Systems',
    tagline: 'Translating invisible binaural acoustics into visceral brand communication.',
    description:
      'A dynamic visual identity system for high-fidelity spatial audio hardware that dresses acoustic engineering in crisp geometric precision.',
    challenge:
      'Audiophile hardware often falls into dated industrial cliches or overly sterile tech charts that obscure the emotional impact of music.',
    solution:
      'Constructed a generative waveform logomark and editorial layout system that visualizes audio frequencies through clean lines and ultraviolet accents.',
    image: heroAssetImg,
    featured: false,
    aspect: '16:9',
    deliverables: [
      'Generative Visual Identity System',
      'Hardware Faceplate Typographic Specifications',
      'Companion App UI Direction',
      'Acoustic Lab Packaging',
    ],
    palette: [
      { name: 'Acoustic Charcoal', hex: '#141416' },
      { name: 'Luminous Violet', hex: '#A855F7' },
      { name: 'Pure Chalk', hex: '#F1F5F9' },
      { name: 'Sub-bass Grey', hex: '#3F3F46' },
    ],
    typography: 'Cabinet Grotesk + Plus Jakarta Sans',
    outcomeMetric: 'Featured in Wallpaper* Design Awards',
  },
];

export const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Brand Tailoring & Identity Systems',
    subtitle: 'Dressing brands with distinctive visual codes',
    description:
      'We treat identity design like bespoke tailoring. No off-the-rack templates or recycled tropes. We build unique logomarks, proprietary typographic hierarchies, and cohesive design systems that command immediate authority.',
    deliverables: [
      'Primary Wordmark & Monogram Design',
      'Custom Typographic Hierarchy & Pairing',
      'Comprehensive Brand Identity Guidelines',
      'Palette & Materiality Specifications',
      'Stationery & Packaging Architecture',
    ],
    idealFor: 'Emerging luxury, niche design labels, and high-growth companies outgrowing their startup skin.',
  },
  {
    index: '02',
    title: 'Visual Communication & Art Direction',
    subtitle: 'Clarity without friction, elegance without clutter',
    description:
      'Making sure what your brand says matches how it looks. We craft editorial lookbooks, pitch monographs, exhibition graphics, and marketing assets that convey complex ideas with calm precision and aesthetic restraint.',
    deliverables: [
      'Editorial Lookbooks & Brand Monographs',
      'Exhibition & Spatial Graphics',
      'Campaign Art Direction & Stylebooks',
      'Investor & Launch Keynote Visuals',
      'Print Production & Finishes Oversight',
    ],
    idealFor: 'Brands launching flagship products, seeking investment, or repositioning into high-end markets.',
  },
  {
    index: '03',
    title: '3D Craft & Motion Expression',
    subtitle: 'Kinetic depth and tactile digital objects',
    description:
      'In a flat digital landscape, depth and motion create unforgettable retention. We model sculptural 3D brand emblems, kinetic typography, and fluid visual loops that give your identity tangible weight.',
    deliverables: [
      'Kinetic Brand Mark Ident Animation',
      'Sculptural 3D Product Visualization',
      'Digital Materiality & Texture Renders',
      'Looping Social & Hero Video Assets',
      'Spatial UI Object Design',
    ],
    idealFor: 'Product studios, hardware innovators, and avant-garde fashion/art collectives.',
  },
  {
    index: '04',
    title: 'Art-Directed Digital Flagships',
    subtitle: 'Web experiences with editorial presence',
    description:
      'Your digital presence should feel like walking into a flagship salon in Milan or Tokyo. We design art-directed websites that combine brutalist editorial layouts, silky micro-interactions, and flawless typography.',
    deliverables: [
      'High-Fidelity Web Design & Art Direction',
      'Custom Interactive Micro-interactions',
      'Mobile-Refined Fluid Responsive Layouts',
      'Design System Components & Hand-off',
      'Creative Frontend Prototyping',
    ],
    idealFor: 'Forward-thinking founders who demand their web presence look leagues ahead of competitors.',
  },
];

export const SOLO_STUDIO_PILLARS = [
  {
    title: 'Direct Principal Access',
    subtitle: 'No Account Managers',
    description:
      'You collaborate directly with Wong from initial vision to final pixel. No telephone game, no junior designers practicing on your brand, and no middle managers billing hours for status calls.',
  },
  {
    title: 'Uncompromised Craft',
    subtitle: 'Quality Over Volume',
    description:
      'By taking on only 2 to 3 projects per quarter, every detail receives obsessive care. Each curve, kerning pair, and color gradient is calibrated with studio-grade precision.',
  },
  {
    title: 'Agile Velocity',
    subtitle: 'Days, Not Months',
    description:
      'Agencies move slowly because of committee approvals. A solo studio cuts through bureaucratic noise, delivering finished visual systems in weeks with absolute focus.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Wong dressed our brand with an elegance we did not think possible. He took our complex technical acoustics and gave it the visual poise of an haute horlogerie house. Our pre-orders tripled within two weeks of relaunch.',
    author: 'Stefan Lindqvist',
    role: 'Founder & CEO',
    company: 'Vivid Acoustics Berlin',
    impactMetric: '+210% Pre-Orders',
    avatar: avatarStefan,
  },
  {
    quote:
      'Working with a one-man studio was the best decision we made. Wong understood our luxury fragrance positioning instantly, provided direct creative dialogue with zero fluff, and delivered a world-class packaging system.',
    author: 'Claire Delacroix',
    role: 'Creative Director',
    company: 'Maison Aurora',
    impactMetric: '100% Retail Sellout',
    avatar: avatarClaire,
  },
  {
    quote:
      'Most agencies deliver generic pitch decks and slide decks. Wong delivered a living, breathing work of art. The typography and 3D kinetic assets made our Geneva launch an undisputed success.',
    author: 'Marc Vaneau',
    role: 'Managing Partner',
    company: 'Chronos Manufacture',
    impactMetric: 'Sold Out in 48h',
    avatar: avatarMarc,
  },
  {
    quote:
      'Wong completely transformed our brand posture before our Series A. Institutional investors specifically complimented our bespoke typography and commanding digital presence during demo days.',
    author: 'Elena Lindqvist',
    role: 'Co-Founder & VP Product',
    company: 'Aether Spatial Studio',
    impactMetric: '$14M Series A Closed',
    avatar: avatarElena,
  },
];

export const STUDIO_STATISTICS = [
  { value: '1', label: 'Principal Designer', detail: 'Zero delegation' },
  { value: '2-3', label: 'Projects per Quarter', detail: 'Hyper-focused' },
  { value: '100%', label: 'Direct Dialogue', detail: 'Founder-to-founder' },
  { value: '12+', label: 'Design Awards & Citations', detail: 'Global recognition' },
];
