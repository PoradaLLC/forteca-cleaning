"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, type ContactFormData } from "@/lib/validators";
import { Send, Loader2, CheckCircle } from "lucide-react";

const services = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out Cleaning",
  "Post-Construction Cleaning",
  "Vacation Rental Turnover",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send message");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-12 text-center shadow-sm ring-1 ring-brand-primary/5">
        <CheckCircle size={48} className="text-green-500" />
        <h3 className="font-serif text-2xl font-bold text-brand-primary">
          Thank You!
        </h3>
        <p className="text-brand-text">
          We&apos;ve received your message and will get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-primary/5 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-brand-primary"
          >
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none"
            placeholder="John Smith"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-brand-primary"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-brand-primary"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none"
            placeholder="(570) 555-0123"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-1.5 block text-sm font-medium text-brand-primary"
          >
            Service Needed *
          </label>
          <select
            id="service"
            {...register("service")}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-500">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-brand-primary"
        >
          Project Details *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none"
          placeholder="Tell us about your property and cleaning needs..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-accent-light disabled:opacity-50 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
