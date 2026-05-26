import { useEffect, useState } from 'react'

const WHATSAPP_URL = 'https://wa.me/5492246508672?text=Hola%20AMAF%2C%20quiero%20consultar%20por%20sus%20servicios'
const EMAIL = 'info@amaf.com.ar'
const PHONE_DISPLAY = '+54 2246 15-508672'
const PHONE_ALT = '02246 521921'
const LOCATION = 'Partido de La Costa, Buenos Aires'

const NAV = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#segmentos', label: 'Para quién' },
  { href: '#por-que', label: 'Por qué AMAF' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
]

const SERVICIOS = [
  {
    key: 'fibra',
    titulo: 'Fibra óptica · FTTH / FTTX',
    desc: 'Diseño, tendido, fusiones, ODF y certificación. Redes troncales y de distribución para ISP, barrios privados e industria.',
    bullets: ['Tendido aéreo y subterráneo', 'Fusiones y empalmes certificados', 'ODF etiquetado y documentado', 'Mantenimiento correctivo 24/7'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M3 12c3 0 4-4 9-4s6 4 9 4M3 18c3 0 4-4 9-4s6 4 9 4M3 6c3 0 4-4 9-4s6 4 9 4" />
      </svg>
    ),
  },
  {
    key: 'starlink',
    titulo: 'Starlink industrial y rural',
    desc: 'Instalación y configuración profesional de Starlink en entornos exigentes: viento, polvo, altura y operación continua.',
    bullets: ['Montaje certificado en altura', 'Aislación contra interferencias', 'Routing y red interna estable', 'Soporte y monitoreo continuo'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M2 12a10 10 0 0 1 20 0M5 12a7 7 0 0 1 14 0M8 12a4 4 0 0 1 8 0M12 12v8M9 20h6" />
      </svg>
    ),
  },
  {
    key: 'cctv',
    titulo: 'CCTV y videovigilancia',
    desc: 'Cámaras IP y analíticas inteligentes para hogares, comercios e industrias. Certificación oficial Dahua.',
    bullets: ['Cámaras 4K día y noche', 'Visualización remota en vivo', 'Analítica con detección IA', 'NVR con respaldo y grabación'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M3 7h13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3z" />
        <path d="M18 10l3-2v8l-3-2M7 21h6" />
      </svg>
    ),
  },
  {
    key: 'alarmas',
    titulo: 'Alarmas y control de acceso',
    desc: 'Centrales de alarma a medida con monitoreo 24/7. Certificación Garnet Academy. Aviso inmediato a fuerzas de seguridad.',
    bullets: ['Diseño según el inmueble', 'Sensores perimetrales e interiores', 'App de control en tu celular', 'Respuesta y aviso a policía'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
]

const SEGMENTOS = [
  {
    titulo: 'Hogares',
    desc: 'Conectividad y seguridad para tu familia: cámaras, alarmas y red estable.',
    icon: '🏠',
    color: 'from-cyan-accent/20 to-cyan-accent/5',
  },
  {
    titulo: 'Comercios',
    desc: 'Control y monitoreo 24/7 + redes confiables para tu negocio.',
    icon: '🏪',
    color: 'from-gold-accent/20 to-gold-accent/5',
  },
  {
    titulo: 'Industrias e ISP',
    desc: 'Fibra troncal, FTTH, enlaces inalámbricos y Starlink para operación crítica.',
    icon: '🏭',
    color: 'from-cyan-deep/30 to-cyan-deep/5',
  },
  {
    titulo: 'Flotas y vehículos',
    desc: 'Rastreo GPS y monitoreo de unidades para empresas con flota.',
    icon: '🚗',
    color: 'from-cyan-accent/20 to-cyan-accent/5',
  },
]

const CIFRAS = [
  { num: '+10', label: 'años de trayectoria' },
  { num: '+500', label: 'proyectos ejecutados' },
  { num: '24/7', label: 'monitoreo y soporte' },
  { num: '4', label: 'certificaciones oficiales' },
]

const CERTIFICACIONES = [
  { nombre: 'Dahua', desc: 'Líder mundial en videovigilancia IoT' },
  { nombre: 'Garnet Academy', desc: 'Fabricante argentino de alarmas profesionales' },
  { nombre: 'TP-Link', desc: 'Networking certificado desde 1996' },
  { nombre: 'GLC', desc: 'Soluciones ópticas y de fibra' },
]

const TESTIMONIOS = [
  {
    texto: 'Nos resolvieron pérdidas de señal críticas. La red quedó estable y preparada para crecer.',
    autor: 'ISP Local',
    lugar: 'San Clemente del Tuyú',
  },
  {
    texto: 'Nos instalaron las cámaras de forma rápida y profesional. Analizaron el lugar y cubrieron cada zona crítica.',
    autor: 'Santa Maria Group',
    lugar: 'Santa Teresita',
  },
  {
    texto: 'Nos entregaron el ODF listo para operar, con etiquetado claro y cero inconvenientes. Muy recomendable.',
    autor: 'SetCar',
    lugar: 'San Clemente',
  },
]

const COBERTURA = [
  'San Clemente del Tuyú',
  'Santa Teresita',
  'Mar del Tuyú',
  'Las Toninas',
  'San Bernardo',
  'Mar de Ajó',
  'Pinamar',
  'Villa Gesell',
]

const GALERIA = [
  { cat: 'CCTV', titulo: 'Cámaras IP perimetrales', desc: 'Cobertura completa con visión nocturna' },
  { cat: 'Fibra óptica', titulo: 'Tendido FTTH', desc: 'Red troncal para ISP local' },
  { cat: 'Alarmas', titulo: 'Central Garnet', desc: 'Sistema monitoreado 24/7' },
  { cat: 'Racks', titulo: 'Cableado estructurado', desc: 'Rack profesional documentado' },
  { cat: 'Starlink', titulo: 'Instalación industrial', desc: 'Montaje certificado en altura' },
  { cat: 'Control de acceso', titulo: 'Lectores biométricos', desc: 'Acceso por huella y tarjeta' },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-950/90 backdrop-blur-md border-b border-cyan-accent/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center group">
          <img
            src="/logo.png"
            alt="AMAF Soluciones"
            className="w-11 h-11 md:w-12 md:h-12 object-contain drop-shadow-[0_4px_12px_rgba(34,211,238,0.25)]"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-sm text-slate-300 hover:text-cyan-accent transition-colors">
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-cyan-accent hover:bg-cyan-deep text-navy-950 hover:text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all hover:shadow-lg hover:shadow-cyan-accent/30"
        >
          Solicitar presupuesto
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H4a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 010-1.414z" />
          </svg>
        </a>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-md border-t border-cyan-accent/10 mt-3">
          <ul className="px-6 py-4 space-y-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-slate-200 hover:text-cyan-accent"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="block bg-cyan-accent text-navy-950 font-semibold px-5 py-3 rounded-lg text-center mt-2"
              >
                Solicitar presupuesto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/portada-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-65 pointer-events-none"
      >
        <source src="/portada.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-navy-950/70 to-navy-950 pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 gradient-radial pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-cyan-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-deep/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse" />
          <span className="text-xs md:text-sm text-cyan-accent font-medium tracking-wide uppercase">
            Soluciones de Infraestructura y Conectividad
          </span>
        </div>

        <h1 className="font-display font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 animate-fade-up-delay-1">
          Ingeniería en{' '}
          <span className="bg-gradient-to-r from-cyan-accent to-cyan-deep bg-clip-text text-transparent">
            redes y seguridad
          </span>
          <br className="hidden md:block" /> de alta capacidad
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-fade-up-delay-2">
          Diseñamos, instalamos y mantenemos fibra óptica, redes industriales, Starlink, CCTV y alarmas.
          Soluciones confiables para <span className="text-white font-semibold">industria, ISP, comercios y hogares</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-up-delay-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-accent hover:bg-cyan-deep text-navy-950 hover:text-white font-semibold px-7 py-4 rounded-lg transition-all hover:shadow-2xl hover:shadow-cyan-accent/40 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Solicitar presupuesto
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 border border-slate-600 hover:border-cyan-accent text-slate-200 hover:text-cyan-accent px-7 py-4 rounded-lg transition-all"
          >
            Ver servicios
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-10 border-t border-slate-800">
          {CIFRAS.map((c) => (
            <div key={c.label} className="text-center">
              <div className="font-display font-bold text-3xl md:text-4xl bg-gradient-to-r from-cyan-accent to-cyan-deep bg-clip-text text-transparent">
                {c.num}
              </div>
              <div className="text-xs md:text-sm text-slate-400 mt-1">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CertBar() {
  return (
    <section className="relative py-12 bg-navy-900/40 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-500 mb-8">
          Certificaciones oficiales
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {CERTIFICACIONES.map((c) => (
            <div
              key={c.nombre}
              className="group bg-navy-800/40 border border-slate-800 hover:border-cyan-accent/40 rounded-xl p-5 transition-all"
            >
              <div className="font-display font-bold text-white text-xl md:text-2xl group-hover:text-cyan-accent transition-colors">
                {c.nombre}
              </div>
              <div className="text-xs text-slate-400 mt-1">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Servicios() {
  return (
    <section id="servicios" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-accent text-sm uppercase tracking-[0.3em] mb-3">Servicios</p>
          <h2 className="font-display font-bold text-white text-3xl md:text-5xl mb-4 tracking-tight">
            Soluciones integrales en un solo equipo
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ingeniería, ejecución y soporte. Provisión de materiales bajo un mismo servicio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICIOS.map((s) => (
            <article
              key={s.key}
              className="group relative bg-navy-900/60 border border-slate-800 hover:border-cyan-accent/40 rounded-2xl p-8 transition-all hover:shadow-2xl hover:shadow-cyan-accent/10 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-accent/5 rounded-full blur-3xl group-hover:bg-cyan-accent/15 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-accent/20 to-cyan-deep/20 border border-cyan-accent/30 flex items-center justify-center text-cyan-accent mb-5">
                  {s.icon}
                </div>
                <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3">{s.titulo}</h3>
                <p className="text-slate-400 mb-5">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-cyan-accent mt-0.5 flex-shrink-0">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-accent hover:text-white text-sm font-semibold group/btn"
                >
                  Consultar por este servicio
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform">
                    <path d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H4a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 010-1.414z" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Segmentos() {
  return (
    <section id="segmentos" className="py-24 bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-accent text-sm uppercase tracking-[0.3em] mb-3">Para quién trabajamos</p>
          <h2 className="font-display font-bold text-white text-3xl md:text-5xl mb-4 tracking-tight">
            Soluciones adaptadas a tu realidad
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SEGMENTOS.map((s) => (
            <div
              key={s.titulo}
              className={`relative bg-gradient-to-br ${s.color} bg-navy-800/40 border border-slate-800 hover:border-cyan-accent/40 rounded-xl p-6 transition-all hover:-translate-y-1 group`}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{s.titulo}</h3>
              <p className="text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PorQue() {
  return (
    <section id="por-que" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-cyan-accent text-sm uppercase tracking-[0.3em] mb-3">Por qué AMAF</p>
            <h2 className="font-display font-bold text-white text-3xl md:text-5xl mb-6 tracking-tight">
              Tecnología que protege.<br />
              <span className="bg-gradient-to-r from-cyan-accent to-cyan-deep bg-clip-text text-transparent">
                Conectividad que avanza.
              </span>
            </h2>
            <p className="text-slate-300 text-lg mb-6">
              Más de 10 años trabajando en redes, fibra óptica y seguridad electrónica en la Costa Atlántica.
              Construimos cada proyecto sobre tres pilares: <span className="text-white font-semibold">responsabilidad,
              confianza y capacitación constante</span>.
            </p>

            <ul className="space-y-4">
              {[
                { t: 'Equipo técnico certificado', d: 'Dahua, Garnet Academy, TP-Link y GLC' },
                { t: 'Servicio integral', d: 'Ingeniería + provisión + ejecución bajo un mismo proveedor' },
                { t: 'Soporte 24/7', d: 'Asesoramiento y respuesta inmediata ante eventos' },
                { t: 'Cobertura toda la Costa', d: 'San Clemente, Santa Teresita, Pinamar, Villa Gesell y más' },
              ].map((item) => (
                <li key={item.t} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-accent/10 border border-cyan-accent/30 flex items-center justify-center text-cyan-accent">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{item.t}</div>
                    <div className="text-sm text-slate-400">{item.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-accent/20 via-cyan-deep/10 to-navy-900 border border-cyan-accent/20 p-8 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-accent/20 rounded-full blur-3xl" />
              <div className="relative h-full flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-4">
                  {CIFRAS.map((c) => (
                    <div
                      key={c.label}
                      className="bg-navy-900/60 backdrop-blur-sm border border-cyan-accent/20 rounded-2xl p-5"
                    >
                      <div className="font-display font-bold text-3xl md:text-4xl text-cyan-accent">{c.num}</div>
                      <div className="text-xs md:text-sm text-slate-300 mt-1">{c.label}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-navy-900/60 backdrop-blur-sm border border-cyan-accent/20 rounded-2xl p-5">
                  <div className="text-xs uppercase tracking-widest text-cyan-accent mb-2">Pilares</div>
                  <div className="font-display font-bold text-white text-lg">
                    Responsabilidad · Confianza · Capacitación
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Galeria() {
  return (
    <section id="galeria" className="py-24 bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-cyan-accent text-sm uppercase tracking-[0.3em] mb-3">Galería de trabajos</p>
            <h2 className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight">
              Instalaciones reales y comprobables
            </h2>
          </div>
          <p className="text-slate-400 mt-4 md:mt-0 md:max-w-md">
            Lo que hacemos, con orden, precisión y resultados visibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALERIA.map((g, i) => (
            <div
              key={g.titulo}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-accent/40 transition-all"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br"
                style={{
                  background: `linear-gradient(135deg, hsl(${190 + i * 12} 70% 20%), hsl(${210 + i * 8} 60% 12%))`,
                }}
              />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-accent/20 backdrop-blur-sm border border-cyan-accent/30 text-cyan-accent text-xs font-medium">
                  {g.cat}
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5">
                <h3 className="font-display font-bold text-white text-lg">{g.titulo}</h3>
                <p className="text-slate-300 text-sm">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-cyan-accent hover:text-white transition-colors"
          >
            Pedinos fotos de proyectos similares al tuyo
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H4a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 010-1.414z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function Testimonios() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIOS.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-cyan-accent text-sm uppercase tracking-[0.3em] mb-3">Clientes</p>
        <h2 className="font-display font-bold text-white text-3xl md:text-5xl mb-12 tracking-tight">
          Lo que dicen quienes ya trabajaron con nosotros
        </h2>

        <div className="relative bg-navy-900/60 border border-slate-800 rounded-3xl p-8 md:p-12">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cyan-accent flex items-center justify-center text-navy-950">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <div className="text-cyan-accent text-xl mb-4">★★★★★</div>
          <p className="text-white text-lg md:text-2xl font-display mb-6 min-h-[120px]">
            "{TESTIMONIOS[idx].texto}"
          </p>
          <div className="font-semibold text-cyan-accent">{TESTIMONIOS[idx].autor}</div>
          <div className="text-sm text-slate-400">{TESTIMONIOS[idx].lugar}</div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${
                i === idx ? 'w-8 bg-cyan-accent' : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Cobertura() {
  return (
    <section className="py-20 bg-navy-900/40 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-cyan-accent text-sm uppercase tracking-[0.3em] mb-3">Cobertura</p>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4 tracking-tight">
              Trabajamos en toda la Costa Atlántica
            </h2>
            <p className="text-slate-400 mb-6">
              Partido de La Costa y zona de influencia. Si tu localidad no aparece en la lista,
              consultanos igual: cubrimos proyectos en toda la provincia de Buenos Aires.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-accent hover:bg-cyan-deep text-navy-950 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              Consultar por mi zona
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {COBERTURA.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2 bg-navy-800/40 border border-slate-800 rounded-lg px-4 py-3"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-cyan-accent flex-shrink-0">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate-200">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contacto() {
  const [enviado, setEnviado] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const nombre = f.get('nombre')
    const tel = f.get('tel')
    const mensaje = f.get('mensaje')
    const texto = `Hola AMAF, soy ${nombre} (${tel}). ${mensaje}`
    window.open(`https://wa.me/5492246508672?text=${encodeURIComponent(texto)}`, '_blank')
    setEnviado(true)
  }

  return (
    <section id="contacto" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 gradient-radial pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-cyan-accent text-sm uppercase tracking-[0.3em] mb-3">Contacto</p>
          <h2 className="font-display font-bold text-white text-3xl md:text-5xl mb-4 tracking-tight">
            Pedinos tu presupuesto sin cargo
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Respondemos en el día. Te asesoramos sin compromiso y armamos una propuesta a medida.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 bg-navy-900/60 border border-slate-800 hover:border-cyan-accent/40 rounded-xl p-5 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-accent/10 border border-cyan-accent/30 flex items-center justify-center text-cyan-accent flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-cyan-accent mb-1">WhatsApp</div>
                <div className="font-display font-bold text-white text-lg">{PHONE_DISPLAY}</div>
                <div className="text-sm text-slate-400 mt-1">Click para chatear · Respuesta en el día</div>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-start gap-4 bg-navy-900/60 border border-slate-800 hover:border-cyan-accent/40 rounded-xl p-5 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-accent/10 border border-cyan-accent/30 flex items-center justify-center text-cyan-accent flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
                  <path d="M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7a2 2 0 012-2h14a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-cyan-accent mb-1">Email</div>
                <div className="font-display font-bold text-white text-lg">{EMAIL}</div>
                <div className="text-sm text-slate-400 mt-1">Para consultas técnicas y comerciales</div>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-navy-900/60 border border-slate-800 rounded-xl p-5">
              <div className="w-12 h-12 rounded-lg bg-cyan-accent/10 border border-cyan-accent/30 flex items-center justify-center text-cyan-accent flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-cyan-accent mb-1">Ubicación</div>
                <div className="font-display font-bold text-white text-lg">{LOCATION}</div>
                <div className="text-sm text-slate-400 mt-1">Tel. alt: {PHONE_ALT}</div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 bg-navy-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-slate-400 mb-2 block">Nombre</label>
                <input
                  name="nombre"
                  required
                  className="w-full bg-navy-950 border border-slate-700 focus:border-cyan-accent rounded-lg px-4 py-3 text-white outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-slate-400 mb-2 block">Teléfono</label>
                <input
                  name="tel"
                  required
                  type="tel"
                  className="w-full bg-navy-950 border border-slate-700 focus:border-cyan-accent rounded-lg px-4 py-3 text-white outline-none transition-colors"
                  placeholder="+54 9..."
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-slate-400 mb-2 block">
                ¿En qué te podemos ayudar?
              </label>
              <textarea
                name="mensaje"
                required
                rows="4"
                className="w-full bg-navy-950 border border-slate-700 focus:border-cyan-accent rounded-lg px-4 py-3 text-white outline-none transition-colors resize-none"
                placeholder="Contanos brevemente tu proyecto, ubicación y necesidad..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-cyan-accent hover:bg-cyan-deep text-navy-950 hover:text-white font-semibold px-6 py-4 rounded-lg transition-all hover:shadow-2xl hover:shadow-cyan-accent/30"
            >
              Enviar por WhatsApp
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H4a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 010-1.414z" />
              </svg>
            </button>
            {enviado && (
              <p className="text-xs text-cyan-accent text-center">
                Se abrió WhatsApp en una pestaña nueva. Si no, escribinos a {EMAIL}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="AMAF Soluciones"
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-white text-lg tracking-tight">AMAF</span>
                <span className="text-[10px] text-cyan-accent/80 uppercase tracking-[0.2em]">Soluciones</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Ingeniería en redes, fibra óptica y seguridad electrónica para industria, ISP y residencial
              en toda la Costa Atlántica de Buenos Aires.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {SERVICIOS.map((s) => (
                <li key={s.key}>
                  <a href="#servicios" className="hover:text-cyan-accent transition-colors">{s.titulo}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-cyan-accent transition-colors">WhatsApp: {PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-cyan-accent transition-colors">{EMAIL}</a></li>
              <li>{LOCATION}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between gap-4 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} AMAF Soluciones Técnicas. Todos los derechos reservados.</div>
          <div>Tecnología que protege, conectividad que avanza.</div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 transition-all"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    </a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-200">
      <Nav />
      <Hero />
      <CertBar />
      <Servicios />
      <Segmentos />
      <PorQue />
      <Galeria />
      <Testimonios />
      <Cobertura />
      <Contacto />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
