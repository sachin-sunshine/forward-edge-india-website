"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  organization: string;
  message: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState("submitting");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setSubmitState("success");
    setForm({ name: "", email: "", organization: "", message: "" });
  };

  const inputClass =
    "w-full bg-white border border-slate-300 text-slate-800 placeholder-slate-400 text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#C9952A] focus:ring-1 focus:ring-[#C9952A] transition-colors";

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#C9952A]" />
            <span className="text-[#C9952A] text-xs font-semibold tracking-[0.2em] uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight mb-4">
            Contact Us
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Whether you represent a government department, a multilateral organisation, or a civil
            society body, we&rsquo;d be glad to explore how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Form — takes 3 of 5 cols */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-slate-200 rounded-sm p-6 md:p-8 shadow-sm">
              {submitState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[#0A1628] font-bold text-xl">Message Received</h3>
                  <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                    Thank you for reaching out. A member of our team will respond within 2 business
                    days.
                  </p>
                  <button
                    onClick={() => setSubmitState("idle")}
                    className="mt-2 text-[#C9952A] text-sm font-semibold hover:underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide"
                      >
                        Full Name <span className="text-[#C9952A]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide"
                      >
                        Email Address <span className="text-[#C9952A]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@organisation.gov.in"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide"
                    >
                      Organisation / Department
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="Ministry of Finance, Govt. of India"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide"
                    >
                      Message <span className="text-[#C9952A]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your requirement or question..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitState === "submitting"}
                    className="w-full sm:w-auto bg-[#0A1628] hover:bg-[#112240] disabled:bg-slate-400 text-white font-semibold text-sm px-8 py-3.5 rounded-sm transition-colors duration-200 tracking-wide inline-flex items-center justify-center gap-2"
                  >
                    {submitState === "submitting" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-slate-400 text-xs">
                    By submitting this form you agree to our privacy policy. We do not share your
                    information with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Info panel — takes 2 of 5 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Office address */}
            <div className="bg-[#0A1628] text-white rounded-sm p-6">
              <h3 className="text-[#C9952A] text-xs font-bold uppercase tracking-widest mb-4">
                New Delhi Office
              </h3>
              <div className="flex gap-3 mb-4">
                <svg className="w-5 h-5 text-[#C9952A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="not-italic text-slate-300 text-sm leading-relaxed">
                  4th Floor, Kailash Building<br />
                  26 Kasturba Gandhi Marg<br />
                  Connaught Place<br />
                  New Delhi — 110 001
                </address>
              </div>
              <div className="flex gap-3 mb-3">
                <svg className="w-5 h-5 text-[#C9952A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:contact@forwardedgeindia.com"
                  className="text-slate-300 text-sm hover:text-[#C9952A] transition-colors"
                >
                  contact@forwardedgeindia.com
                </a>
              </div>
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-[#C9952A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="tel:+911123414000"
                  className="text-slate-300 text-sm hover:text-[#C9952A] transition-colors"
                >
                  +91 11 2341 4000
                </a>
              </div>
            </div>

            {/* Response time box */}
            <div className="border border-slate-200 bg-white rounded-sm p-5">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[#0A1628] font-semibold text-sm">We typically respond within 2 business days</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                For urgent government or multilateral engagement enquiries, please mention &ldquo;URGENT&rdquo;
                in the subject of your email.
              </p>
            </div>

            {/* Regions served */}
            <div className="border border-slate-200 bg-white rounded-sm p-5">
              <h4 className="text-[#0A1628] font-bold text-xs uppercase tracking-wider mb-3">
                Regions We Serve
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "New Delhi",
                  "Rajasthan",
                  "Maharashtra",
                  "Kerala",
                  "Tamil Nadu",
                  "Northeast India",
                  "Odisha",
                  "Bangladesh",
                  "Sri Lanka",
                  "Nepal",
                ].map((region) => (
                  <span
                    key={region}
                    className="text-xs text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-sm"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
