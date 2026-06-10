import { publicAsset } from '../utils/assets';

export const founder = {
  name: 'Swathi Varun',
  title: 'Founder @ Yellow Spoon',
  tagline: 'Building a health-focused snacking brand where nourishment meets taste.',
  bio: [
    'Swathi Varun leads Yellow Spoon, a health-focused snacking brand delivering artisanal treats made with superfoods like nuts, millets, and dry fruits.',
    'Yellow Spoon products are crafted without preservatives, additives, or refined sugar, positioning every snack as a lifestyle choice for gifting, family moments, and daily healthy indulgence.',
    'The brand is recognized as an award-winning name with appreciations for bringing together quality, quantity, nourishment, and taste.',
  ],
  initials: publicAsset('logo.jpg'),
  brand: 'Yellow Spoon',
  location: 'No. 1000, SLN Complex, 1st Floor, 3rd Block, Banashankari 3rd Stage, Bengaluru - 560085',
  email: 'yellowspoonoffice@gmail.com',
  phone: '+91 73492 03311',
  secondaryPhone: '+91 99801 06146',
  website: 'https://www.yellowspoon.in',
  primaryCta: {
    label: 'Visit Yellow Spoon',
    href: 'https://www.yellowspoon.in',
  },
  highlights: [
    'Health-focused artisanal snacks',
    'Superfoods: nuts, millets, and dry fruits',
    'No preservatives, additives, or refined sugar',
    'Award-winning brand with recognitions and appreciations',
  ],
  socialLinks: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/swathi-varun?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      key: 'linkedin',
    },
    { label: 'Instagram', href: 'https://www.instagram.com/yellowspoon_ind?igsh=NzA5OXp2bXh4NW83', key: 'instagram' },
    { label: 'YouTube', href: 'https://youtube.com/@yellowspoon_ind?si=zaBqKqGuZ8Q4yYdZ', key: 'youtube' },
    { label: 'Email', href: 'mailto:yellowspoonoffice@gmail.com', key: 'email' },
    { label: 'Call', href: 'tel:+917349203311', key: 'phone' },
    { label: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=917349203311', key: 'whatsapp' },
  ],
};

export const snapshot = {
  eyebrow: 'Founder Snapshot',
  title: 'Health-first snacking, founder-led.',
  cards: [
    {
      label: 'Email',
      value: founder.email,
      href: `mailto:${founder.email}`,
      icon: 'mail',
    },
    {
      label: 'Phone',
      value: founder.phone,
      href: 'tel:+917349203311',
      icon: 'phone',
    },
    {
      label: 'Alternate WhatsApp',
      value: founder.secondaryPhone,
      href: 'https://api.whatsapp.com/send?phone=919980106146',
      icon: 'whatsapp',
      external: true,
    },
    {
      label: 'Address',
      value: founder.location,
      href: 'https://g.co/kgs/jCRhwv4',
      icon: 'map',
      external: true,
    },
  ],
};
export const sections = [
  {
    id: 'brand',
    eyebrow: 'Brand Home',
    title: 'Discover Yellow Spoon',
    subtitle: 'Explore our products, brand story, and healthy living philosophy.',
    links: [
      {
        title: 'Official Website',
        description: 'Visit the official Yellow Spoon website to discover our products, values, and wellness-focused offerings.',
        href: 'https://www.yellowspoon.in',
        icon: 'website',
        badge: 'Featured',
        featured: true,
      },
      {
        title: 'Product Catalogue',
        description: 'Browse our complete collection of healthy food products, gift options, and specialty offerings.',
        href: publicAsset('ProductCatalogue.pdf'),
        icon: 'catalogue',
      },
      {
        title: 'Founder Portfolio',
        description: 'Learn about the vision, journey, and achievements behind the Yellow Spoon brand.',
        href: publicAsset('Foundersportfolio.pdf'),
        icon: 'portfolio',
      },
      {
        title: 'Portfolio QR Code',
        description: 'Open or download the branded QR code for sharing this portfolio website.',
        href: publicAsset('yellow-spoon-portfolio-qr.svg'),
        icon: 'qr',
      },
      {
        title: 'Google Reviews',
        description: 'See what customers are saying about their experiences with Yellow Spoon.',
        href: 'https://www.google.com/search?q=yellow+spoon+bengaluru+reviews',
        icon: 'reviews',
      },
    ],
  },
  {
    id: 'contact',
    eyebrow: 'Connect',
    title: 'Reach Swathi and Yellow Spoon',
    subtitle: 'Get in touch for orders, collaborations, gifting solutions, and business enquiries.',
    links: [
      {
        title: 'WhatsApp Business',
        description: 'Connect instantly with our team for product enquiries, orders, and support.',
        href: 'https://api.whatsapp.com/send?phone=917349203311',
        icon: 'whatsapp',
        badge: 'Fastest',
        featured: true,
      },
      {
        title: 'WhatsApp',
        description: 'Send a direct message for quick communication and assistance.',
        href: 'https://api.whatsapp.com/send?phone=919980106146',
        icon: 'message',
      },
      {
        title: 'Email',
        description: 'Reach us via email for partnerships, collaborations, and general enquiries.',
        href: 'mailto:yellowspoonoffice@gmail.com',
        icon: 'mail',
      },
      {
        title: 'Phone',
        description: 'Speak directly with our team for immediate assistance and support.',
        href: 'tel:+917349203311',
        icon: 'phone',
      },
    ],
  },
  {
    id: 'social',
    eyebrow: 'Social Proof',
    title: 'Follow the Yellow Spoon Journey',
    subtitle: 'Stay connected through our latest updates, stories, products, and community highlights.',
    links: [
      {
        title: 'Instagram',
        description: 'Explore product showcases, customer stories, and everyday wellness inspiration.',
        href: 'https://www.instagram.com/yellowspoon_ind?igsh=NzA5OXp2bXh4NW83',
        icon: 'instagram',
      },
      {
        title: 'LinkedIn',
        description: 'Follow professional updates, business milestones, and brand developments.',
        href: 'https://www.linkedin.com/in/swathi-varun?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        icon: 'linkedin',
      },
      {
        title: 'YouTube',
        description: 'Watch product features, recipes, wellness content, and brand stories.',
        href: 'https://youtube.com/@yellowspoon_ind?si=zaBqKqGuZ8Q4yYdZ',
        icon: 'youtube',
      },
      {
        title: 'Store Location',
        description: 'Visit our store and experience Yellow Spoon products in person.',
        href: 'https://g.co/kgs/jCRhwv4',
        icon: 'map',
      },
    ],
  },
];