import { Breed } from './types';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAYX7SzRhlgCACGQ0vahA3GRrMz-WFgZvQYwF64jxgPGaoYUS3rZdCg3SFCgdKMGl-8nQCS56PLhPaRggsF0opgPUpvmyQLRXgf-0v8isCEz5n8_UWD2Rs7SCYdg8Iv6MaPwmGRPfkwTU1Ep-ueFkO91ycnDYdGyhvwOnp3m7n-acuFdNOe0GNiHKS31AwCm-r1o_vec3VHBeSaXlhpjtGhXmsr7U2OlBtpuo-A4jy6KdRGuaivl_EQBqY5kTA9AjO5w6mfxmNEkqI";

export const BREEDS: Breed[] = [
  {
    id: 'ragdoll',
    name: 'Ragdoll',
    description: 'The Gentle Giant',
    longDescription: 'Docile and affectionate, Ragdolls love to be held and are perfect lap cats. They are known for their striking blue eyes and color-point coat.',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSLd2N3LwnY5SooaDll3TRwDCyBrXo7JpsRLKtQpJE2VtzDdt-kiW9B5JeASMYX1WxPGUNEE-H-MMnzPG_177Nxx04KzEBvTGx4WQ5YDAnCPDg5ksEo_-JNDu6Q2L0CfnWQnCyiXFnsDVNL-eKcaARwRKRg4NINSDPOhvqE4o-KQ0ZGfdnk950S83PxUJfgwByiuLXtyo_rQtcAe299rdAfOkRTFlex3aaiUJj6lUYX_95xNnZDcyWzhxvjWYIvGYo3RZXTzR80hs",
    rating: 4.9,
    tags: ['Calm', 'Friendly', 'Affectionate', 'Long Coat'],
    coatLength: 'Long',
    size: 'Large',
    activityLevel: 'Low'
  },
  {
    id: 'maine-coon',
    name: 'Maine Coon',
    description: 'Large & Loving',
    longDescription: 'Known as the "gentle giant," the Maine Coon is friendly, affectionate, and goofy. They are one of the largest domesticated cat breeds.',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsyH2LDWDbSYVot77OMJicrf4CUBeyW6A6vl94S3gfll3xxmdgcFekBbyq30Vy2qABy1THkhEtFd6xpUEXD-_hQ3fcOm1n35yEKfD2rSpiGMyeFfugo0NLrVHEi_OTAerXN7jtCq0vn-xLCR_r4gHX6gdI7YARjr9NqgZsatMW1KrETe_Kt34QPRY9NEUQMm6Q3oexI0T-cvqgz3pZevKhBIG_yBFBEK4QHMysiGlIGVMpQ_Klb8o4B5cZ3wKiJNxwkRpy9X5W2Yc",
    rating: 4.8,
    tags: ['Big', 'Fluffy', 'Intelligent', 'Friendly'],
    badges: ['POPULAR'],
    coatLength: 'Long',
    size: 'Large',
    activityLevel: 'Medium'
  },
  {
    id: 'siamese',
    name: 'Siamese',
    description: 'Vocal & Social',
    longDescription: 'Vocal, social, and intelligent. Siamese cats form strong bonds with their owners and love to be the center of attention.',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCmQFiccWhuvTFGSy9ufVeKb-nZHt7WWx8wTGbeg0d7SCqyXD_gjFFVbJ5OMLgz6kGS6bKVaOhCk9d4MjwRPNfrISJ0Yzl4AYWq8zgV4aHmhMmTSHtRIJ9SsYtFZuF5iDQtjqOBK1eyBDYQEzifoaxnR3qmB57abTebWOgWcNwUWR1EW-pR-P75MJfAF0s2O6L-uIDRA23GlC8e_vA2DkhUdLYnWDVdcOpGSxDUkAYxkKRwraM8MD4Hw_oZMvvkYrRC_5cN_pi9JM",
    rating: 4.7,
    tags: ['Smart', 'Active', 'Vocal', 'Short Coat'],
    coatLength: 'Short',
    size: 'Medium',
    activityLevel: 'High'
  },
  {
    id: 'scottish-fold',
    name: 'Scottish Fold',
    description: 'Sweet Tempered',
    longDescription: 'Famous for their folded ears and owl-like appearance. They are sweet-tempered companions that thrive on human interaction.',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIxlEP9VPWcZ0_mhWZtavCF0iPh0tKmrmHyE3oCS0H4r6gG9cPbHQsvN5YIxDUuYbp-P5OKmcBODUdGLbQhCEbEg5uHHhn10FS_j-OEs5rjAfbPa667BWJ-dUnFU6QXkJRTGozGfWBJGNYaQBa1GoL8Uf-sDrx9e5l9j1GdeDpAyJEOwjA_MdZWThJilPmDycZ_Gpy_3GdSgeOc8US17SGbR_gcp0cY0rVO2RS3jeRVGqXjxwHY71IlYIq5GOorBJ-JF5juGLTBBY",
    rating: 4.9,
    tags: ['Loyal', 'Quiet', 'Sweet'],
    coatLength: 'Short',
    size: 'Medium',
    activityLevel: 'Low'
  },
  {
    id: 'british-shorthair',
    name: 'British Shorthair',
    description: 'Easygoing & Dense',
    longDescription: 'Known for their chunky bodies and dense coats. They are easygoing, dignified, and not overly demanding of attention.',
    image: "https://picsum.photos/id/40/800/600", // Placeholder matching theme
    rating: 4.6,
    tags: ['Easygoing', 'Loyal', 'Dense Coat'],
    coatLength: 'Short',
    size: 'Medium',
    activityLevel: 'Low'
  },
  {
    id: 'bengal',
    name: 'Bengal',
    description: 'Wild Appearance',
    longDescription: 'Highly energetic and playful with a stunning wild appearance. Requires plenty of mental and physical stimulation.',
    image: "https://picsum.photos/id/219/800/600", // Tiger-like placeholder
    rating: 4.8,
    tags: ['Energetic', 'Playful', 'Wild Look'],
    badges: ['RARE'],
    isRare: true,
    coatLength: 'Short',
    size: 'Medium',
    activityLevel: 'High'
  },
  {
    id: 'sphynx',
    name: 'Sphynx',
    description: 'Hairless & Warm',
    longDescription: 'Distinctive hairless breed. Very affectionate, energetic, and craves human warmth. Needs regular skin care.',
    image: "https://picsum.photos/id/65/800/600", // Placeholder
    rating: 4.5,
    tags: ['Hairless', 'Social', 'Hypoallergenic'],
    coatLength: 'Short',
    size: 'Medium',
    activityLevel: 'High'
  },
  {
    id: 'persian',
    name: 'Persian',
    description: 'Glamorous & Quiet',
    longDescription: 'The Glamorous Persian is known for their flowing coat and sweet, pansy-like face. They prefer a quiet environment.',
    image: "https://picsum.photos/id/1025/800/600", // Dog placeholder actually, but let's pretend its a fluffy animal
    rating: 4.7,
    tags: ['Fluffy', 'Quiet', 'High Maintenance'],
    coatLength: 'Long',
    size: 'Medium',
    activityLevel: 'Low'
  }
];