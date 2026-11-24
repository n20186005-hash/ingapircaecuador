import { notFound } from "next/navigation";
import { LangProvider } from "@/components/LangProvider";
import { Nav, Footer } from "@/components/SiteChrome";
import { temple } from "@/i18n/sun-temple";

const slug = "nearby/templo-del-sol";
const domain = "https://www.ingapircaecuador.com";
const source = "https://www.patrimoniocultural.gob.ec/complejo-arqueologico-ingapirca/";
const map = "https://www.google.com/maps/search/?api=1&query=Templo+del+Sol+Ingapirca+Cañar+Ecuador";
const labels = {
  en: ["Explore", "Plan your visit", "Architecture and history", "Visitor information", "Walking route", "Before setting out", "Photography", "Where to stay", "Visitor questions", "Directions and reviews", "Map and visitor reviews", "Visitor information from INPC", "Book a visit"],
  es: ["Explorar", "Consejos para la visita", "Arquitectura e historia", "Información práctica", "Recorrido a pie", "Antes de salir", "Fotografía", "Alojamiento", "Preguntas frecuentes", "Cómo llegar y opiniones", "Mapa y opiniones de visitantes", "Información del INPC", "Reservar visita"],
  zh: ["探索太阳神庙", "游览建议", "建筑与历史", "基本信息", "步行游线", "游览须知", "拍照机位", "住宿建议", "常见问题", "交通指南与游客评价", "位置地图与游客评价", "管理方参观说明", "预约入场"]
};
type Params = { params: Promise<{ locale: string }> };
function valid(locale: string): locale is keyof typeof temple { return locale === "en" || locale === "es" || locale === "zh"; }

export async function generateMetadata({ params }: Params) {
  const { locale } = await params;
  if (!valid(locale)) notFound();
  return {title: temple[locale].title, description: temple[locale].intro, alternates: {
    canonical: `${domain}/${locale}/${slug}`,
    languages: Object.fromEntries(Object.keys(temple).map(lang => [lang, `${domain}/${lang}/${slug}`]))
  }};
}

export default async function Page({ params }: Params) {
  const { locale } = await params;
  if (!valid(locale)) notFound();
  const info = temple[locale], t = labels[locale];
  return <LangProvider initialLocale={locale}><Nav/><main lang={locale}>
    <section className="hero">
      <div className="hero-bg" style={{backgroundImage:"url('/nearby/templo-del-sol.webp')"}}/>
      <div className="hero-overlay"/><div className="hero-content">
        <h1 className="hero-title">{info.title}</h1><p className="hero-subtitle">{info.tagline}</p>
        <p>{info.facts[9]}</p><a className="hero-cta" href={map}>{t[10]}</a>
      </div>
    </section>
    <article className="section">
      <h2 className="section-title">{t[0]}</h2><p>{info.intro}</p>
      <h2>{t[1]}</h2><p>{info.tips}</p>
      <h2>{t[2]}</h2><p>{info.about}</p>
      <h2>{t[3]}</h2><table><tbody>{info.facts.map((fact,i)=>i%2===0 && <tr key={fact}><th scope="row">{fact}</th><td>{info.facts[i+1]}</td></tr>)}</tbody></table>
      <p><a href={source}>{t[11]}</a> · <a href="https://reservas.patrimoniocultural.gob.ec/">{t[12]}</a></p>
      <h2>{t[4]}</h2><ol>{info.route.map(step=><li key={step}>{step}</li>)}</ol>
      <h2>{t[5]}</h2><p>{info.notes}</p>
      <h2>{t[6]}</h2><p>{info.photo}</p><figure><img src="/nearby/templo-del-sol.webp" alt={info.title} loading="lazy" style={{maxWidth:"100%"}}/><figcaption><a href="https://commons.wikimedia.org/wiki/File:Templo_del_Sol_de_las_Ruinas_de_Ingapirca.jpg">Edjoerv</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a></figcaption></figure>
      <h2>{t[7]}</h2><p>{info.stay}</p>
      <h2>{t[8]}</h2>{info.faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      <h2>{t[9]}</h2><p>{info.facts[3]}</p><iframe loading="lazy" title={info.title} src="https://maps.google.com/maps?q=Templo+del+Sol+Ingapirca+Ecuador&z=17&output=embed" style={{width:"100%",minHeight:320,border:0}}/><a className="google-maps-btn" href={map}>{t[10]}</a>
    </article>
  </main><Footer/></LangProvider>;
}
