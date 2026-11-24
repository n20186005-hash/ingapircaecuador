import {notFound} from 'next/navigation';
import places from '@/i18n/region.json';
import {labels,supported} from '@/i18n/visit-planning';
import {LangProvider} from '@/components/LangProvider';
import {Nav,Footer} from '@/components/SiteChrome';
export async function generateMetadata({params}:{params:Promise<{locale:string}>}) {
  const {locale}=await params;if(!supported(locale))notFound();
  const languages=Object.fromEntries(['en','es','zh'].map(l=>[l,`https://www.ingapircaecuador.com/${l}/nearby`]));
  return {title:labels[locale][1],alternates:{languages,canonical:languages[locale]}};
}
export default async function Directory({params}:{params:Promise<{locale:string}>}) {
  const {locale}=await params;if(!supported(locale))notFound();
  const t=labels[locale];
  return <LangProvider initialLocale={locale}><Nav/><main lang={locale}><section className="hero"><div className="hero-bg" style={{backgroundImage:"url('/nearby/templo-del-sol.webp')"}}/><div className="hero-overlay"/><div className="hero-content"><h1 className="hero-title">{t[0]}</h1><p className="hero-subtitle">{t[1]}</p></div></section><article className="section regional-guide">
  {[false,true].map(urban=><section key={String(urban)}><h2>{urban?t[32]:t[31]}</h2><ul>{!urban&&<li><a href={`/${locale}/nearby/templo-del-sol`}>{t[30]}</a></li>}{Object.entries(places).filter(([slug,p])=>(p.area.includes('Cuenca')||slug==='cajas')===urban).map(([slug,p])=><li key={slug}><a href={`/${locale}/nearby/${slug}`}>{p.copy[locale].name}</a> · {p.area}</li>)}</ul></section>)}
  </article></main><Footer/></LangProvider>;
}
