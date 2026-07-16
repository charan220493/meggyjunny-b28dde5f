export type Resource = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string[];
};

export const resourceCategories = [
  "All",
  "Feeding",
  "Sleep",
  "Self-Care",
  "Baby Development",
  "Postpartum",
];

export const resources: Resource[] = [
  {
    slug: "newborn-feeding-basics",
    title: "Newborn Feeding: A Gentle Beginner's Guide",
    category: "Feeding",
    readTime: "6 min read",
    excerpt:
      "From latch tips to bottle rhythms, learn how to nourish your newborn with confidence in those first tender weeks.",
    image:
      "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=800&h=600&fit=crop",
    content: [
      "The first weeks of feeding your baby can feel like learning a new language. Whether you're breastfeeding, bottle-feeding, or doing a mix of both, remember that fed is best — and calm is contagious.",
      "Look for early hunger cues before crying: rooting, hand-to-mouth motions, and lip smacking. Feeding on cue (rather than a strict schedule) helps establish supply and trust.",
      "Most newborns eat 8–12 times in 24 hours. Cluster feeding in the evenings is completely normal and does not mean you don't have enough milk.",
      "If you're pumping, aim to match your baby's feeds and store milk in small 2–4 oz portions. Freshly pumped milk is safe at room temperature for up to 4 hours.",
      "Trust your instincts, and reach out to a lactation consultant or pediatrician early if something feels off. Small adjustments can make a big difference.",
    ],
  },
  {
    slug: "sleep-in-the-fourth-trimester",
    title: "Sleep in the Fourth Trimester",
    category: "Sleep",
    readTime: "5 min read",
    excerpt:
      "Why newborns sleep the way they do — and gentle rhythms that help the whole family rest a little more.",
    image:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop",
    content: [
      "For the first 12 weeks, your baby is adjusting to life outside the womb. Short sleep cycles, frequent waking, and day-night confusion are all developmentally normal.",
      "Create a simple cue-based rhythm: dim lights and low voices at night, natural light and gentle activity during the day. Babies learn circadian rhythm from your environment.",
      "Safe sleep basics: baby on their back, on a firm flat surface, with no loose blankets, bumpers, or toys. Room-sharing (not bed-sharing) is recommended for the first 6 months.",
      "Contact naps count as real sleep — for both of you. In these early weeks, prioritize rest over routine.",
      "By 3–4 months, you can begin gentle rhythms like a consistent bedtime wind-down. Consistency matters more than perfection.",
    ],
  },
  {
    slug: "postpartum-recovery-week-by-week",
    title: "Postpartum Recovery, Week by Week",
    category: "Postpartum",
    readTime: "7 min read",
    excerpt:
      "What healing really looks like in the first six weeks, and how to advocate for the care you deserve.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=600&fit=crop",
    content: [
      "Weeks 1–2: Rest is medicine. Your body is healing from what is essentially a major event, whether you had a vaginal birth or a cesarean. Hydrate, eat warm nourishing foods, and accept every offer of help.",
      "Weeks 3–4: Bleeding (lochia) should be tapering. Gentle walks are wonderful, but avoid heavy lifting or intense exercise. Emotional waves are normal — the baby blues affect up to 80% of new parents.",
      "Weeks 5–6: Your six-week check-up is a starting point, not a finish line. Ask about pelvic floor therapy, mental health, and returning to activity — regardless of what your provider brings up.",
      "Warning signs that need immediate care: heavy bleeding soaking a pad in an hour, severe headache, chest pain, calf pain or swelling, fever, or thoughts of harming yourself or your baby.",
      "Full recovery often takes 12 months, not 6 weeks. Be as gentle with yourself as you are with your baby.",
    ],
  },
  {
    slug: "gentle-self-care-for-new-moms",
    title: "Gentle Self-Care for New Moms",
    category: "Self-Care",
    readTime: "4 min read",
    excerpt:
      "Tiny, doable rituals that help you feel like yourself — no bubble baths or spare time required.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    content: [
      "Self-care in the newborn stage isn't about spa days. It's about micro-moments that keep you grounded: a glass of water within reach, sunlight on your face, a deep breath before you respond.",
      "The basics matter most: eat something every 3 hours, drink water each time you feed baby, and get outside for 10 minutes daily. These three habits protect your mood more than any supplement.",
      "Accept help specifically. 'Can you fold that laundry?' or 'Please bring dinner Tuesday' is easier for loved ones to answer than 'Let me know if you need anything.'",
      "Move gently when you're ready. Stretching, walking, and pelvic floor breathing rebuild strength without pressure.",
      "Talk to someone — a friend, a therapist, a support line. Isolation is one of the biggest risk factors for postpartum mood disorders.",
    ],
  },
  {
    slug: "reading-with-your-baby",
    title: "Reading With Your Baby From Day One",
    category: "Baby Development",
    readTime: "4 min read",
    excerpt:
      "Why board books matter so early, and simple ways to build a lifelong love of stories.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop",
    content: [
      "Babies who are read to daily hear millions more words by kindergarten. But the magic isn't in the words — it's in your voice, your rhythm, and the closeness of the moment.",
      "For 0–3 months: high-contrast black-and-white books support visual development. Read anything aloud — even your grocery list works.",
      "For 3–9 months: touch-and-feel and mirror books invite curiosity. Expect your baby to chew the corners. That's engagement.",
      "For 9–18 months: sturdy board books with simple, repetitive text help language click into place. Let them turn the pages, even out of order.",
      "Pick 5 minutes a day — before nap, after bath, whenever fits — and protect it. Consistency builds the ritual.",
    ],
  },
  {
    slug: "developmental-milestones-year-one",
    title: "Developmental Milestones in Year One",
    category: "Baby Development",
    readTime: "6 min read",
    excerpt:
      "A calm, non-comparison guide to what your baby may be doing — and when to check in with your pediatrician.",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&h=600&fit=crop",
    content: [
      "Milestones are windows, not deadlines. Two healthy babies can hit the same skill months apart and both be perfectly on track.",
      "By 3 months: lifts head during tummy time, smiles socially, coos and makes eye contact.",
      "By 6 months: rolls both directions, sits with support, reaches for objects, babbles with consonants.",
      "By 9 months: sits unsupported, begins to crawl or scoot, responds to their name, plays peekaboo.",
      "By 12 months: pulls to stand or takes first steps, says 1–2 words with meaning, waves, points to ask for things.",
      "When to check in: no social smile by 3 months, not rolling by 6 months, not sitting by 9 months, or a loss of previously acquired skills at any age.",
    ],
  },
];
