import { AnchorButton, Button } from "@blueprintjs/core";
import { OFFERINGS, type Offering } from "../data/site";
import { Link } from "../router";
import { ServiceMark } from "./Services";

// One page per offering: a dark masthead with the way out to the offering's own website,
// then its story, key facts, a band of headline figures, its detail sections, a closing
// call to action and links to the rest of the group.
export function OfferingPage({ item }: { item: Offering }) {
  const index = OFFERINGS.indexOf(item);
  const others = OFFERINGS.filter((o) => o !== item);
  const ctaIsPage = item.cta.href.startsWith("/");
  const cta = (className: string) =>
    ctaIsPage ? (
      <Link className={`bp6-button bp6-large ${className}`} to={item.cta.href}>
        <span className="bp6-button-text">{item.cta.label}</span>
      </Link>
    ) : (
      <AnchorButton size="large" className={className} text={item.cta.label} href={item.cta.href} />
    );

  return (
    <>
      <section className="ae-op-hero bp6-dark ae-on-dark">
        <div className="ae-hero-scan" />
        <span className="ae-corner tl" />
        <span className="ae-corner tr" />
        <div className="wrap ae-op-hero-inner">
          <nav className="ae-op-crumbs mono" aria-label="Breadcrumb">
            <Link to="/">Aeygis</Link>
            <span aria-hidden="true">/</span>
            <Link to="/#services">Software &amp; Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{item.name}</span>
          </nav>
          <div className="ae-op-hero-grid">
            <div>
              <span className="ae-op-meta mono">
                /0.{index + 1}
                <span className="ae-svc-kind">{item.kind}</span>
              </span>
              <h1 className="ae-op-name">{item.name}</h1>
              <p className="ae-op-tagline">{item.tagline}</p>
              <div className="ae-op-actions">
                {item.website ? (
                  <AnchorButton
                    className="ae-cta"
                    size="large"
                    endIcon="arrow-top-right"
                    text={`Visit the ${item.name} website`}
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                ) : (
                  <Button className="ae-op-soon" size="large" icon="globe-network" text="Website coming soon" disabled />
                )}
                {cta("bp6-minimal ae-op-cta2")}
              </div>
            </div>
            <div className="ae-op-art" aria-hidden="true">
              <ServiceMark kind={item.mark} />
            </div>
          </div>
        </div>
      </section>

      <section className="ae-op-intro">
        <div className="wrap">
          {item.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "ae-op-lead" : undefined}>
              {p}
            </p>
          ))}
          <dl className="ae-op-facts">
            {item.facts.map((f) => (
              <div key={f.label}>
                <dt className="mono caps">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {item.stats && (
        <section className="ae-op-stats" aria-labelledby="op-stats">
          <div className="wrap">
            <h2 id="op-stats" className="mono caps faint">{item.stats.title}</h2>
            <dl>
              {item.stats.items.map((st) => (
                <div key={st.value + st.label}>
                  <dt>{st.value}</dt>
                  <dd>{st.label}</dd>
                </div>
              ))}
            </dl>
            {item.stats.note && <p className="ae-op-stats-note">{item.stats.note}</p>}
          </div>
        </section>
      )}

      {item.sections?.map((s) => (
        <section key={s.title} className="ae-section">
          <div className="wrap">
            <header className="ae-section-head">
              <div>
                <h2>{s.title}</h2>
                {s.lede && <p>{s.lede}</p>}
              </div>
            </header>
            {s.variant === "list" ? (
              <ul className="ae-op-list">
                {s.items.map((it) => (
                  <li key={it.title}>{it.title}</li>
                ))}
              </ul>
            ) : (
              <ol className="ae-op-items">
                {s.items.map((it, i) => (
                  <li key={it.title}>
                    <span className="ae-op-item-label mono">{it.label ?? `/0.${i + 1}`}</span>
                    <h3>{it.title}</h3>
                    {it.body && <p>{it.body}</p>}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>
      ))}

      {item.closing && (
        <section className="ae-op-closing bp6-dark ae-on-dark">
          <div className="wrap ae-op-closing-inner">
            <div>
              <h2>{item.closing.title}</h2>
              <p>{item.closing.body}</p>
            </div>
            {cta("ae-cta")}
          </div>
        </section>
      )}

      <section className="ae-section">
        <div className="wrap">
          <header className="ae-section-head">
            <div>
              <h2>More from Aeygis</h2>
            </div>
          </header>
          <ul className="ae-op-more">
            {others.map((o) => (
              <li key={o.slug}>
                <Link to={`/${o.slug}/`}>
                  <span className="ae-op-more-name">{o.name}</span>
                  <span className="ae-op-more-tag">{o.tagline}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
