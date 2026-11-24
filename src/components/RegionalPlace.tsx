import { notFound } from 'next/navigation';
import { LangProvider } from '@/components/LangProvider';
import { Nav, Footer } from '@/components/SiteChrome';
import places from '@/i18n/region.json';
import { access, labels, languageNames, supported, trips } from '@/i18n/visit-planning';

type Params = { params: Promise<{locale: string; slug: string}> };
const domain = 'https://www.ingapircaecuador.com';
function lookup(slug: string) {
  if (!Object.hasOwn(places, slug)) notFound();
  return places[slug as keyof typeof places];
}
export async function placeMetadata({params}: Params) {
  const {locale,slug} = await params;
  if (!supported(locale)) notFound();
  const p = lookup(slug).copy[locale];
  return {title:p.name,description:p.intro, alternates:{canonical:`${domain}/${locale}/nearby/${slug}`,languages:Object.fromEntries(languageNames.map(l=>[l,`${domain}/${l}/nearby/${slug}`]))}};
}
export default async function PlacePage({params}: Params) {
  const {locale,slug}=await params;
  if (!supported(locale)) notFound();
  const place=lookup(slug), copy=place.copy[locale], t=labels[locale], [kind,hours,fee,notice]=access[place.category][locale];
  const urban=place.area.includes('Cuenca')||slug==='cajas', trip=trips[locale];
  const image=`/nearby/${slug}.webp`, location=place.pin||place.query;
  const map='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(place.query);
  const facts=[[t[7],copy.name],[t[8],place.area+', Ecuador'],[t[9],kind],[t[10],place.credit==='Prefectura del Cañar'?place.credit:urban?'Fundación Municipal Turismo para Cuenca':place.credit]];
  return <LangProvider initialLocale={locale}><Nav/><main lang={locale}>
    <section className="hero"><div className="hero-bg" style={{backgroundImage:`url('${image}')`}}/><div className="hero-overlay"/><div className="hero-content">
      <h1 className="hero-title">{copy.name}</h1><p className="hero-subtitle">{kind} · {place.area}</p>
      <p><a href={map}>{t[19]} ↗</a> · <a href="#hours">{t[11]}</a></p><a className="hero-cta" href="#directions">{t[20]} ↓</a>
    </div></section>
    <article className="section regional-guide">
      <p><a href={`/${locale}/nearby`}>{t[0]}</a> / {copy.name}</p>
      <section><h2>{t[2]}</h2><p>{copy.intro}</p></section>
      <section><h2>{t[3]}</h2><p>{copy.steps[0]}</p><p>{urban?trip.city:trip.rural}</p></section>
      <section><h2>{t[4]}</h2><p>{copy.steps[1]}</p></section>
      <section><h2>{t[5]}</h2><p>{copy.name} · {place.area}, {t[29]} · {kind}</p><a href={place.source}>{t[27]} ↗</a></section>
      <section><h2>{t[6]}</h2><table><tbody>{facts.map(([k,v])=><tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>)}<tr><th>{t[34]}</th><td><a href={map}>{copy.name} ↗</a></td></tr></tbody></table></section>
      <section id="hours"><h2>{t[11]}</h2><p>{hours}</p></section>
      <section><h2>{t[12]}</h2><p>{fee}</p></section>
      <section><h2>{t[13]}</h2><p>{urban?trip.city:trip.rural}</p><a href={map}>{place.area} ↗</a></section>
      <section><h2>{t[14]}</h2><p>{copy.observe}</p></section>
      <section><h2>{t[15]}</h2><ol>{copy.steps.map((step)=><li key={step}>{step.replace(/^[a-záéíóúñ]/u,c=>c.toLocaleUpperCase(locale))}</li>)}</ol></section>
      <section><h2>{t[16]}</h2><p>{notice}</p></section>
      <figure><img src={image} alt={copy.name} loading="lazy" width="1000" height="600"/><figcaption><a href={place.attribution}>{place.credit}</a> · {copy.name}</figcaption></figure>
      <section><h2>{t[17]}</h2><p>{copy.photo}</p></section>
      <section><h2>{t[18]}</h2><p>{urban?trip.cityStay:trip.ruralStay}</p></section>
      <section><h2>{t[19]}</h2><p>{t[26]}</p><a href={map}>{t[25]} ↗</a></section>
      <section><h2>{t[21]}</h2>{[[t[22],copy.steps.join(' → ')],[t[23],hours+' '+fee],[t[24],copy.photo]].map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
      <section id="directions"><h2>{t[20]}</h2><p>{place.area}, Ecuador</p><iframe title={copy.name} loading="lazy" src={'https://maps.google.com/maps?q='+encodeURIComponent(location)+'&z=15&output=embed'}/><a href={map}>{t[25]} ↗</a></section>
      <a href={`/${locale}/nearby`}>{t[28]}</a>
    </article></main><Footer/></LangProvider>;
}
