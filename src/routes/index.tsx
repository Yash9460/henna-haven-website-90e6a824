import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Instagram, Facebook, Youtube, MessageCircle, MapPin, Mail, Star, Sparkles, Crown, Heart, Plane } from "lucide-react";
import logo from "@/assets/logo.jpg";
import hero from "@/assets/hero-mehndi.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kapil Mehandi Art Jaipur — Best Bridal Mehndi Artist" },
      { name: "description", content: "Award-winning bridal & celebrity mehndi artist in Jaipur. Destination weddings, sangeet, baby shower & engagement mehndi designs by Kapil Mehandi Art." },
      { property: "og:title", content: "Kapil Mehandi Art — Best Bridal Mehndi Artist in Jaipur" },
      { property: "og:description", content: "Celebrity & bridal mehndi artist serving Jaipur and destination weddings worldwide." },
    ],
  }),
  component: Home,
});

const NAV = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

const PHONE = "+917742469032";
const WHATSAPP = `https://wa.me/917742469032`;

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Home() {
  useScrollReveal();
  return (
    <div id="home" className="min-h-screen text-foreground">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h(); window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <button onClick={() => go("home")} className="flex items-center gap-3 group">
          <img src={logo} alt="Kapil Mehandi Art" className="w-12 h-12 rounded-full ring-2 ring-gold/50 group-hover:ring-gold transition" />
          <div className="leading-tight text-left">
            <div className="font-display text-xl text-gold-gradient font-semibold tracking-wide">Kapil Mehandi Art</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Jaipur · Since 2010</div>
          </div>
        </button>
        <ul className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <li key={n.id}>
              <button onClick={() => go(n.id)} className="text-sm uppercase tracking-widest text-foreground/80 hover:text-gold transition relative group">
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>
        <a href={`tel:${PHONE}`} className="hidden lg:inline-flex btn-gold px-5 py-2.5 rounded-full text-sm font-medium items-center gap-2">
          <Phone className="w-4 h-4" /> Book Now
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-gold p-2" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <ul className="px-6 py-4 space-y-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <button onClick={() => go(n.id)} className="w-full text-left py-3 px-2 text-foreground/90 hover:text-gold border-b border-border/50">{n.label}</button>
              </li>
            ))}
            <li className="pt-3">
              <a href={`tel:${PHONE}`} className="btn-gold w-full inline-flex justify-center px-5 py-3 rounded-full text-sm font-medium items-center gap-2">
                <Phone className="w-4 h-4" /> Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Bridal mehndi" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/5 text-gold text-xs uppercase tracking-[0.3em] mb-6 animate-shimmer">
            <Sparkles className="w-3.5 h-3.5" /> Celebrity Mehndi Artist
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-semibold">
            The Art of <span className="text-gold-gradient italic">Mehndi</span><br />
            Crafted by Kapil
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
            Best bridal mehndi artist in Jaipur — designing timeless henna for brides, celebrities and destination weddings across the globe.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold px-7 py-3.5 rounded-full font-medium inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> Book Your Bridal Slot
            </a>
            <a href="#gallery" className="btn-outline-gold px-7 py-3.5 rounded-full font-medium inline-flex items-center gap-2">
              View Portfolio
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span>4,960+ happy clients & followers</span>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-square max-w-md ml-auto animate-float">
            <div className="absolute inset-0 rounded-full bg-gold/20 blur-3xl" />
            <img src={logo} alt="Logo" className="relative w-full h-full object-cover rounded-full ring-1 ring-gold/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const data = [
    { n: "15+", l: "Years Experience" },
    { n: "2000+", l: "Bridal Mehndi" },
    { n: "50+", l: "Destination Weddings" },
    { n: "100%", l: "Natural Henna" },
  ];
  return (
    <section className="py-16 border-y border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {data.map((d) => (
          <div key={d.l} className="text-center">
            <div className="font-display text-4xl md:text-5xl text-gold-gradient font-semibold">{d.n}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{d.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={g1} alt="About" className="rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] w-full" loading="lazy" />
          <div className="absolute -bottom-6 -right-6 bg-card border border-gold/30 rounded-xl px-6 py-4 shadow-xl hidden md:block">
            <div className="text-gold-gradient font-display text-3xl">15+ Yrs</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">of artistry</div>
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-gold">About the Artist</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 font-semibold">
            Painting stories in <span className="text-gold-gradient italic">henna</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Founded by <span className="text-foreground font-medium">Kapil</span> in Mansarovar, Jaipur, Kapil Mehandi Art is a celebration of traditional Rajasthani henna craftsmanship blended with contemporary design. Specialising in bridal, celebrity and destination wedding mehndi, every design is hand-crafted with 100% natural henna for the deepest, longest-lasting stain.
          </p>
          <ul className="mt-8 space-y-3">
            {["Professional Bridal Specialist", "Trusted by celebrities & influencers", "Available for destination weddings globally", "100% organic, chemical-free henna"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-foreground/90">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: Crown, title: "Bridal Mehndi", desc: "Signature full-arm bridal designs with intricate Rajasthani & contemporary motifs." },
    { icon: Heart, title: "Engagement & Sangeet", desc: "Elegant designs perfect for sangeet, ring ceremony and pre-wedding events." },
    { icon: Sparkles, title: "Baby Shower / Godh Bharai", desc: "Soft, blessing-themed mehndi to celebrate the mother-to-be." },
    { icon: Star, title: "Celebrity & Influencer", desc: "Exclusive mehndi sessions for celebrities, models and influencers." },
    { icon: Plane, title: "Destination Weddings", desc: "Travel anywhere in India & abroad for your big day — fully equipped team." },
    { icon: Sparkles, title: "Arabic & Modern Designs", desc: "Trendy Arabic, minimalist and mandala designs for parties & festivals." },
  ];
  return (
    <section id="services" className="py-24 md:py-32 bg-card/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 font-semibold">A design for <span className="text-gold-gradient italic">every occasion</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative p-8 rounded-2xl bg-background/60 border border-border hover:border-gold/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.25)]">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-primary-foreground transition">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type Category = "All" | "Bridal" | "Arabic" | "Simple" | "Sangeet";
const GALLERY: { src: string; cat: Exclude<Category, "All"> }[] = [
  { src: g1, cat: "Bridal" },
  { src: g2, cat: "Arabic" },
  { src: g3, cat: "Bridal" },
  { src: g4, cat: "Simple" },
  { src: g5, cat: "Sangeet" },
  { src: g6, cat: "Arabic" },
];
const CATS: Category[] = ["All", "Bridal", "Arabic", "Simple", "Sangeet"];

function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? GALLERY : GALLERY.filter((g) => g.cat === active);
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 font-semibold">Signature <span className="text-gold-gradient italic">creations</span></h2>
          <p className="mt-4 text-sm text-muted-foreground">Explore designs by category</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative px-5 py-2 rounded-full text-xs md:text-sm uppercase tracking-widest border transition-all duration-300 ${
                active === c
                  ? "btn-gold border-transparent scale-105"
                  : "border-border text-foreground/70 hover:border-gold/60 hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div key={active} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {filtered.map((g, i) => (
            <div
              key={`${active}-${i}`}
              className="group relative overflow-hidden rounded-2xl border border-border animate-fade-in opacity-0"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "forwards" }}
            >
              <img src={g.src} alt={`${g.cat} mehndi design`} loading="lazy" className="w-full h-full object-cover aspect-[4/5] group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-gold font-display text-lg">{g.cat}</span>
                <Sparkles className="w-5 h-5 text-gold animate-shimmer" />
              </div>
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur border border-gold/30 text-[10px] uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition duration-500">
                {g.cat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Testimonials() {
  const list = [
    { name: "Priya Sharma", role: "Bride · Udaipur", text: "Kapil ji ne meri shaadi ki mehndi itni khoobsurat lagayi ki sab dekhte reh gaye! Colour bhi 15 din tak rich rha." },
    { name: "Ananya Kapoor", role: "Bride · Jaipur", text: "Absolutely stunning bridal mehndi. The detailing on my arms looked like jewellery. Highly recommend!" },
    { name: "Riya Mehta", role: "Sangeet · Mumbai", text: "He flew to Mumbai for our sangeet and designed mehndi for the entire family. Pure perfection." },
    { name: "Sneha Iyer", role: "Destination Bride · Bali", text: "From Jaipur to Bali — Kapil and his team were professional, punctual and the designs were breathtaking." },
    { name: "Aditi Singh", role: "Influencer", text: "The most detailed arabic mehndi I've ever had. The stain came out so dark — exactly what I wanted." },
    { name: "Megha Verma", role: "Engagement", text: "Loved the modern mandala design Kapil created for my engagement. Got compliments all night!" },
    { name: "Ishita Rao", role: "Bride · Delhi", text: "Worth every rupee. The team is so calm and patient. My bridal mehndi was a dream come true." },
    { name: "Pooja Agarwal", role: "Baby Shower", text: "Soft, elegant design for my godh bharai — exactly the vibe I wanted. Thank you Kapil ji!" },
  ];
  const loop = [...list, ...list];
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card/40 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-gold">Love Notes</span>
        <h2 className="font-display text-4xl md:text-5xl mt-3 font-semibold">Words from our <span className="text-gold-gradient italic">brides</span></h2>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <article key={i} className="w-[320px] md:w-[400px] shrink-0 p-7 rounded-2xl bg-background/70 border border-border backdrop-blur">
              <div className="flex gap-1 text-gold mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm md:text-base text-foreground/90 leading-relaxed italic">"{t.text}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="font-display text-lg text-gold">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Get in touch</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 font-semibold">Book your <span className="text-gold-gradient italic">mehndi</span> session</h2>
          <p className="mt-5 text-muted-foreground">Slots fill up fast for the wedding season. Drop us a message on WhatsApp for instant booking & quotes.</p>
          <div className="mt-10 space-y-5">
            <ContactRow icon={Phone} label="Call us" value="+91 77424 69032" href={`tel:${PHONE}`} />
            <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat with Kapil" href={WHATSAPP} />
            <ContactRow icon={MapPin} label="Studio" value="Mansarovar, Jaipur, Rajasthan" />
            <ContactRow icon={Mail} label="Email" value="kapilmehandiart@gmail.com" href="mailto:kapilmehandiart@gmail.com" />
          </div>
          <div className="mt-10 flex items-center gap-3">
            <SocialIcon Icon={Instagram} href="https://instagram.com/kapil_mehandi_art_jaipur" />
            <SocialIcon Icon={Facebook} href="https://facebook.com/kapilrajputmehandiartists" />
            <SocialIcon Icon={Youtube} href="https://youtube.com/@kapilmehandiartjaipur" />
            <SocialIcon Icon={MessageCircle} href={WHATSAPP} />
          </div>
        </div>
        <form className="p-8 md:p-10 rounded-2xl bg-card border border-border" onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP, "_blank"); }}>
          <h3 className="font-display text-2xl font-semibold">Quick Enquiry</h3>
          <p className="text-sm text-muted-foreground mt-1">We'll get back within 30 minutes.</p>
          <div className="mt-6 space-y-4">
            <Field label="Your Name" type="text" placeholder="Enter your name" />
            <Field label="Phone" type="tel" placeholder="+91 ..." />
            <Field label="Occasion" type="text" placeholder="Bridal / Sangeet / Engagement..." />
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea rows={4} placeholder="Tell us about your event date & city" className="mt-2 w-full bg-background/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-gold transition text-sm" />
            </div>
            <button className="btn-gold w-full py-3.5 rounded-full font-medium inline-flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" /> Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input {...rest} className="mt-2 w-full bg-background/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-gold transition text-sm" />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const Inner = (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary-foreground transition">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-foreground/90">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{Inner}</a> : Inner;
}

function SocialIcon({ Icon, href }: { Icon: typeof Instagram; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-border hover:border-gold hover:text-gold flex items-center justify-center text-foreground/80 transition">
      <Icon className="w-5 h-5" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-9 h-9 rounded-full ring-1 ring-gold/40" />
          <span className="font-display text-lg text-gold-gradient">Kapil Mehandi Art</span>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Kapil Mehandi Art, Jaipur. Crafted with henna & love.</p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full btn-gold flex items-center justify-center shadow-2xl">
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
