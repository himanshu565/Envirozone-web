"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Building2,
  Headphones,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiry: "",
    message: "",
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      alert("Your message has been sent successfully!");

      // Clear the form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        inquiry: "",
        message: "",
      });

      console.log(data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="bg-white">
      {/* Keep the rest of your existing JSX exactly as it is */}
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-emerald-900 via-teal-800 to-slate-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold text-white">
            Contact Envirozone
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
            Have questions about our Continuous Emission Monitoring Systems,
            Data Loggers, CPCB connectivity or environmental monitoring
            solutions? Our experts are here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div className="flex gap-5">
                <div className="rounded-xl bg-emerald-100 p-4">
                  <Phone className="h-6 w-6 text-emerald-700" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Phone
                  </h3>
                  <p className="text-slate-600">
                    +91 9811138349
                  </p>
                  <p className="text-slate-600">
                    +91 9811138359
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="rounded-xl bg-emerald-100 p-4">
                  <Mail className="h-6 w-6 text-emerald-700" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Email
                  </h3>

                  <p className="text-slate-600">
                    sales@envirozone.in
                  </p>

                  <p className="text-slate-600">
                    support@envirozone.in
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="rounded-xl bg-emerald-100 p-4">
                  <MapPin className="h-6 w-6 text-emerald-700" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Office
                  </h3>

                  <p className="text-slate-600 leading-7">
                    Envirozone Instruments and Equipment Pvt. Ltd.
                    <br />
                    New Delhi,
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="rounded-xl bg-emerald-100 p-4">
                  <Clock className="h-6 w-6 text-emerald-700" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Business Hours
                  </h3>

                  <p className="text-slate-600">
                    Monday – Saturday
                  </p>

                  <p className="text-slate-600">
                    9:00 AM – 6:30 PM
                  </p>
                </div>
              </div>

            </div>

            {/* Support Card */}

            <div className="mt-12 rounded-2xl border bg-emerald-50 p-8">
              <div className="mb-4 flex items-center gap-3">
                <Headphones className="text-emerald-700" />
                <h3 className="text-xl font-semibold">
                  24×7 Technical Support
                </h3>
              </div>

              <p className="text-slate-600">
                Existing customers can reach our support engineers for
                installation, troubleshooting, calibration assistance and
                CPCB/SPCB connectivity issues.
              </p>
            </div>

          </div>

          {/* Contact Form */}

          <div className="rounded-3xl border bg-white p-8 shadow-xl">

            <div className="mb-8 flex items-center gap-3">
              <Building2 className="text-emerald-700" />
              <h2 className="text-2xl font-bold">
                Send us a Message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid gap-6 md:grid-cols-2">
                <input
  type="text"
  placeholder="Full Name"
  value={formData.name}
  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value,
    })
  }
  className="rounded-xl border p-4 outline-none focus:border-emerald-500"
/>




<input
  type="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
  className="rounded-xl border p-4 outline-none focus:border-emerald-500"
/>

              </div>
<input
  type="text"
  placeholder="Company Name"
  value={formData.company}
  onChange={(e) =>
    setFormData({
      ...formData,
      company: e.target.value,
    })
  }
  className="w-full rounded-xl border p-4 outline-none focus:border-emerald-500"
/>

             <input
  type="tel"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value,
    })
  }
  className="w-full rounded-xl border p-4 outline-none focus:border-emerald-500"
/>

<select
  value={formData.inquiry}
  onChange={(e) =>
    setFormData({
      ...formData,
      inquiry: e.target.value,
    })
  }
  className="w-full rounded-xl border p-4 outline-none focus:border-emerald-500"
>
  <option value="">Select Inquiry Type</option>
  <option value="CEMS">CEMS</option>
  <option value="CEQMS">CEQMS</option>
  <option value="Data Logger">Data Logger</option>
  <option value="CPCB Connectivity">CPCB Connectivity</option>
  <option value="Calibration">Calibration</option>
  <option value="AMC">AMC</option>
  <option value="Other">Other</option>
</select>

              <textarea
  rows={6}
  placeholder="Tell us about your requirement..."
  value={formData.message}
  onChange={(e) =>
    setFormData({
      ...formData,
      message: e.target.value,
    })
  }
  className="w-full rounded-xl border p-4 outline-none focus:border-emerald-500"
/>

<button
  type="submit"
  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:bg-emerald-700"
>
  Send Message
  <Send size={18} />
</button>

            </form>

          </div>

        </div>
      </section>

      {/* Map */}

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <iframe
            title="Google Map" 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d218.69534174004855!2d77.15632322069816!3d28.715796156166466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1784741904023!5m2!1sen!2sus"  width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              className="border-0"></iframe>

          </div>
        </div>
      </section>
    </main>
  );
}