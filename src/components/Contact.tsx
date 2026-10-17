import { useState, type FormEvent } from "react";
import { Button, Callout, FormGroup, HTMLSelect, Icon, InputGroup, TextArea } from "@blueprintjs/core";
import { CONTACT_EMAIL, OFFERINGS } from "../data/site";
import { SectionHead } from "./SectionHead";

// FormSubmit relays each submission to the inbox as an email; no server of our own needed.
// The first submission sends a one-time activation email to CONTACT_EMAIL that must be confirmed.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export function Contact() {
  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", division: "Not sure", notes: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [honey, setHoney] = useState("");
  const set = (k: keyof typeof form) => (e: { currentTarget: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.currentTarget.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Website enquiry: ${form.division} | ${form.org}`,
          _template: "table",
          _honey: honey,
          Name: form.name,
          Organization: form.org,
          email: form.email,
          Phone: form.phone,
          Offering: form.division,
          Message: form.notes,
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || String(data?.success) !== "true") throw new Error(data?.message ?? res.statusText);
      setStatus("sent");
      setForm((f) => ({ ...f, notes: "" }));
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="ae-section" id="contact">
      <div className="wrap">
        <SectionHead title="Let's talk." />
        <div className="ae-contact">
          <div className="ae-panel">
            <div className="ae-panel-head">
              <span className="title mono caps">
                <Icon icon="info-sign" size={12} /> Get in touch
              </span>
            </div>
            <div className="ae-panel-body ae-contact-copy">
              <h3>Tell us what you are working on.</h3>
              <p>
                Share a few details about your organization and what you need. We route it to the right team and get
                back to you.
              </p>
              <dl className="ae-kv">
                <dt>Inbox</dt>
                <dd>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </dd>
                <dt>Offerings</dt>
                <dd>{OFFERINGS.map((o) => o.name).join(" · ")}</dd>
                <dt>Security</dt>
                <dd>CPCSC Level 1 readiness</dd>
              </dl>
            </div>
          </div>

          <form className="ae-panel ae-form" onSubmit={submit}>
            <div className="ae-panel-head">
              <span className="title mono caps">
                <Icon icon="form" size={12} /> Enquiry
              </span>
              <span className="mono faint">FORM-01</span>
            </div>
            <div className="ae-panel-body">
              {status === "sent" && (
                <Callout intent="success" icon="tick" compact style={{ marginBottom: 10 }}>
                  Thanks, your message has been sent. We will reply to {form.email}.
                </Callout>
              )}
              {status === "error" && (
                <Callout intent="danger" icon="error" compact style={{ marginBottom: 10 }}>
                  Your message could not be sent. Please try again, or email us at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </Callout>
              )}
              {/* Spam trap: hidden from people, filled in by bots. */}
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: "none" }}
                value={honey}
                onChange={(e) => setHoney(e.currentTarget.value)}
              />
              <div className="ae-form-row">
                <FormGroup label="Name" labelFor="f-name">
                  <InputGroup id="f-name" required value={form.name} onChange={set("name")} />
                </FormGroup>
                <FormGroup label="Organization" labelFor="f-org">
                  <InputGroup id="f-org" required value={form.org} onChange={set("org")} />
                </FormGroup>
              </div>
              <div className="ae-form-row">
                <FormGroup label="Email" labelFor="f-email">
                  <InputGroup id="f-email" type="email" required leftIcon="envelope" value={form.email} onChange={set("email")} />
                </FormGroup>
                <FormGroup label="Phone (optional)" labelFor="f-phone">
                  <InputGroup id="f-phone" type="tel" leftIcon="phone" value={form.phone} onChange={set("phone")} />
                </FormGroup>
              </div>
              <FormGroup label="Offering" labelFor="f-division">
                <HTMLSelect
                  id="f-division"
                  fill
                  options={["Not sure", ...OFFERINGS.map((o) => o.name)]}
                  value={form.division}
                  onChange={set("division")}
                />
              </FormGroup>
              <FormGroup label="How can we help?" labelFor="f-notes">
                <TextArea id="f-notes" fill rows={5} required value={form.notes} onChange={set("notes")} />
              </FormGroup>
              <Button type="submit" className="ae-cta" endIcon="send-message" text="Send message" loading={status === "sending"} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
