export type WasteCategory = 'organik' | 'anorganik' | 'b3';

export interface StageConfig {
  stageId: 1 | 2 | 3;
  category: WasteCategory;
  title: string;
  target: number;
  binColor: string;
  binAccent: string;
  binTextColor: string;
  binLabel: string;
  description: string;
}

export interface TrashItem {
  itemId: string;
  name: string;
  category: WasteCategory;
  sprite: string;
  x: number;
  y: number;
  rotation: number;
  hint: string;
}

export const CATEGORY_NAMES: Record<WasteCategory, string> = {
  organik: 'Organik',
  anorganik: 'Anorganik',
  b3: 'B3',
};

export const STAGES: StageConfig[] = [
  {
    stageId: 1,
    category: 'organik',
    title: 'Tahap 1: Sampah Organik',
    target: 8,
    binColor: '#16A34A',
    binAccent: '#15803D',
    binTextColor: '#FFFFFF',
    binLabel: 'ORGANIK',
    description: 'Sampah yang berasal dari makhluk hidup dan mudah membusuk menjadi kompos.',
  },
  {
    stageId: 2,
    category: 'anorganik',
    title: 'Tahap 2: Sampah Anorganik',
    target: 8,
    binColor: '#EAB308',
    binAccent: '#CA8A04',
    binTextColor: '#1E293B',
    binLabel: 'ANORGANIK',
    description: 'Sampah buatan yang sulit terurai alami, tetapi sebagian besar bisa didaur ulang.',
  },
  {
    stageId: 3,
    category: 'b3',
    title: 'Tahap 3: Sampah B3',
    target: 5,
    binColor: '#DC2626',
    binAccent: '#B91C1C',
    binTextColor: '#FFFFFF',
    binLabel: 'B3',
    description: 'Bahan Berbahaya dan Beracun yang perlu penanganan khusus agar tidak mencemari lingkungan.',
  },
];

export const ITEMS: TrashItem[] = [
  // Organik (8 items)
  {
    itemId: 'org-01',
    name: 'Kulit pisang',
    category: 'organik',
    sprite: 'org-01',
    x: 76,
    y: 47,
    rotation: -12,
    hint: 'Kulit buah mudah terurai secara alami menjadi kompos.',
  },
  {
    itemId: 'org-02',
    name: 'Daun kering',
    category: 'organik',
    sprite: 'org-02',
    x: 10,
    y: 49,
    rotation: 14,
    hint: 'Daun gugur adalah sampah organik yang cocok untuk pupuk kompos.',
  },
  {
    itemId: 'org-03',
    name: 'Sisa nasi',
    category: 'organik',
    sprite: 'org-03',
    x: 47,
    y: 59,
    rotation: -6,
    hint: 'Sisa makanan cepat membusuk dan termasuk sampah organik.',
  },
  {
    itemId: 'org-04',
    name: 'Kulit jeruk',
    category: 'organik',
    sprite: 'org-04',
    x: 23,
    y: 58,
    rotation: 18,
    hint: 'Kulit jeruk berasal dari tumbuhan sehingga mudah terurai.',
  },
  {
    itemId: 'org-05',
    name: 'Ranting kecil',
    category: 'organik',
    sprite: 'org-05',
    x: 36,
    y: 50,
    rotation: -15,
    hint: 'Ranting kayu adalah sisa tumbuhan yang termasuk sampah organik.',
  },
  {
    itemId: 'org-06',
    name: 'Sisa sayur',
    category: 'organik',
    sprite: 'org-06',
    x: 57,
    y: 75,
    rotation: 8,
    hint: 'Potongan sayur dapat diolah menjadi kompos atau pakan maggot.',
  },
  {
    itemId: 'org-07',
    name: 'Bonggol apel',
    category: 'organik',
    sprite: 'org-07',
    x: 22,
    y: 73,
    rotation: -10,
    hint: 'Sisa buah mudah membusuk dan menyuburkan tanah.',
  },
  {
    itemId: 'org-08',
    name: 'Cangkang telur',
    category: 'organik',
    sprite: 'org-08',
    x: 16,
    y: 85,
    rotation: 12,
    hint: 'Cangkang telur kaya kalsium dan bisa dicampur ke kompos.',
  },

  // Anorganik (8 items)
  {
    itemId: 'anorg-01',
    name: 'Botol plastik',
    category: 'anorganik',
    sprite: 'anorg-01',
    x: 23,
    y: 47,
    rotation: 22,
    hint: 'Plastik butuh ratusan tahun untuk terurai, tetapi bisa didaur ulang.',
  },
  {
    itemId: 'anorg-02',
    name: 'Kaleng minuman',
    category: 'anorganik',
    sprite: 'anorg-02',
    x: 69,
    y: 58,
    rotation: -18,
    hint: 'Kaleng aluminium termasuk anorganik yang bernilai daur ulang tinggi.',
  },
  {
    itemId: 'anorg-03',
    name: 'Kantong plastik',
    category: 'anorganik',
    sprite: 'anorg-03',
    x: 35,
    y: 62,
    rotation: 9,
    hint: 'Kantong kresek sulit hancur di tanah dan termasuk anorganik.',
  },
  {
    itemId: 'anorg-04',
    name: 'Gelas plastik',
    category: 'anorganik',
    sprite: 'anorg-04',
    x: 38,
    y: 86,
    rotation: -14,
    hint: 'Gelas minuman plastik dipilah ke tong anorganik untuk didaur ulang.',
  },
  {
    itemId: 'anorg-05',
    name: 'Botol kaca',
    category: 'anorganik',
    sprite: 'anorg-05',
    x: 10,
    y: 74,
    rotation: 16,
    hint: 'Kaca tidak bisa membusuk secara alami dan bisa dilebur kembali.',
  },
  {
    itemId: 'anorg-06',
    name: 'Bungkus snack',
    category: 'anorganik',
    sprite: 'anorg-06',
    x: 46,
    y: 72,
    rotation: -8,
    hint: 'Kemasan makanan ringan berlapis plastik dan foil adalah sampah anorganik.',
  },
  {
    itemId: 'anorg-07',
    name: 'Kardus bekas',
    category: 'anorganik',
    sprite: 'anorg-07',
    x: 62,
    y: 49,
    rotation: 6,
    hint: 'Kertas dan kardus dikelompokkan ke tong kuning agar bisa didaur ulang.',
  },
  {
    itemId: 'anorg-08',
    name: 'Styrofoam',
    category: 'anorganik',
    sprite: 'anorg-08',
    x: 66,
    y: 72,
    rotation: -11,
    hint: 'Wadah gabus sintetis ini sangat sulit terurai di alam.',
  },

  // B3 (5 items)
  {
    itemId: 'b3-01',
    name: 'Baterai bekas',
    category: 'b3',
    sprite: 'b3-01',
    x: 11,
    y: 61,
    rotation: -20,
    hint: 'Baterai mengandung logam berat beracun yang dapat mencemari air tanah.',
  },
  {
    itemId: 'b3-02',
    name: 'Bohlam bekas',
    category: 'b3',
    sprite: 'b3-02',
    x: 49,
    y: 46,
    rotation: 15,
    hint: 'Lampu bekas memiliki komponen berbahaya dan pecahan kaca berisiko.',
  },
  {
    itemId: 'b3-03',
    name: 'Kaleng cat',
    category: 'b3',
    sprite: 'b3-03',
    x: 34,
    y: 76,
    rotation: -5,
    hint: 'Sisa cat mengandung bahan kimia beracun dan mudah mencemari tanah.',
  },
  {
    itemId: 'b3-04',
    name: 'Obat kedaluwarsa',
    category: 'b3',
    sprite: 'b3-04',
    x: 58,
    y: 63,
    rotation: 11,
    hint: 'Obat rusak atau kedaluwarsa berbahaya jika dibuang sembarangan.',
  },
  {
    itemId: 'b3-05',
    name: 'Semprot nyamuk',
    category: 'b3',
    sprite: 'b3-05',
    x: 58,
    y: 85,
    rotation: -14,
    hint: 'Kaleng aerosol bertekanan mengandung zat kimia racun dan mudah meledak.',
  },
];
