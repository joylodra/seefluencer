"use client";

import { useState } from "react";

type FieldErrors = {
  email: string;
  phoneNumber: string;
};

// Full list of country codes
const countryCodes = [
  { code: "+1", country: "United States" },
  { code: "+7", country: "Russia" },
  { code: "+20", country: "Egypt" },
  { code: "+27", country: "South Africa" },
  { code: "+30", country: "Greece" },
  { code: "+31", country: "Netherlands" },
  { code: "+32", country: "Belgium" },
  { code: "+33", country: "France" },
  { code: "+34", country: "Spain" },
  { code: "+36", country: "Hungary" },
  { code: "+39", country: "Italy" },
  { code: "+40", country: "Romania" },
  { code: "+41", country: "Switzerland" },
  { code: "+43", country: "Austria" },
  { code: "+44", country: "United Kingdom" },
  { code: "+45", country: "Denmark" },
  { code: "+46", country: "Sweden" },
  { code: "+47", country: "Norway" },
  { code: "+48", country: "Poland" },
  { code: "+49", country: "Germany" },
  { code: "+51", country: "Peru" },
  { code: "+52", country: "Mexico" },
  { code: "+53", country: "Cuba" },
  { code: "+54", country: "Argentina" },
  { code: "+55", country: "Brazil" },
  { code: "+56", country: "Chile" },
  { code: "+57", country: "Colombia" },
  { code: "+58", country: "Venezuela" },
  { code: "+60", country: "Malaysia" },
  { code: "+61", country: "Australia" },
  { code: "+62", country: "Indonesia" },
  { code: "+63", country: "Philippines" },
  { code: "+64", country: "New Zealand" },
  { code: "+65", country: "Singapore" },
  { code: "+66", country: "Thailand" },
  { code: "+81", country: "Japan" },
  { code: "+82", country: "South Korea" },
  { code: "+84", country: "Vietnam" },
  { code: "+86", country: "China" },
  { code: "+90", country: "Turkey" },
  { code: "+91", country: "India" },
  { code: "+92", country: "Pakistan" },
  { code: "+93", country: "Afghanistan" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+95", country: "Myanmar" },
  { code: "+98", country: "Iran" },
  { code: "+211", country: "South Sudan" },
  { code: "+212", country: "Morocco" },
  { code: "+213", country: "Algeria" },
  { code: "+216", country: "Tunisia" },
  { code: "+218", country: "Libya" },
  { code: "+220", country: "Gambia" },
  { code: "+221", country: "Senegal" },
  { code: "+222", country: "Mauritania" },
  { code: "+223", country: "Mali" },
  { code: "+224", country: "Guinea" },
  { code: "+225", country: "Ivory Coast" },
  { code: "+226", country: "Burkina Faso" },
  { code: "+227", country: "Niger" },
  { code: "+228", country: "Togo" },
  { code: "+229", country: "Benin" },
  { code: "+230", country: "Mauritius" },
  { code: "+231", country: "Liberia" },
  { code: "+232", country: "Sierra Leone" },
  { code: "+233", country: "Ghana" },
  { code: "+234", country: "Nigeria" },
  { code: "+235", country: "Chad" },
  { code: "+236", country: "Central African Republic" },
  { code: "+237", country: "Cameroon" },
  { code: "+238", country: "Cape Verde" },
  { code: "+239", country: "Sao Tome and Principe" },
  { code: "+240", country: "Equatorial Guinea" },
  { code: "+241", country: "Gabon" },
  { code: "+242", country: "Congo" },
  { code: "+243", country: "Democratic Republic of the Congo" },
  { code: "+244", country: "Angola" },
  { code: "+245", country: "Guinea-Bissau" },
  { code: "+248", country: "Seychelles" },
  { code: "+249", country: "Sudan" },
  { code: "+250", country: "Rwanda" },
  { code: "+251", country: "Ethiopia" },
  { code: "+252", country: "Somalia" },
  { code: "+253", country: "Djibouti" },
  { code: "+254", country: "Kenya" },
  { code: "+255", country: "Tanzania" },
  { code: "+256", country: "Uganda" },
  { code: "+257", country: "Burundi" },
  { code: "+258", country: "Mozambique" },
  { code: "+260", country: "Zambia" },
  { code: "+261", country: "Madagascar" },
  { code: "+262", country: "Reunion" },
  { code: "+263", country: "Zimbabwe" },
  { code: "+264", country: "Namibia" },
  { code: "+265", country: "Malawi" },
  { code: "+266", country: "Lesotho" },
  { code: "+267", country: "Botswana" },
  { code: "+268", country: "Eswatini" },
  { code: "+269", country: "Comoros" },
  { code: "+298", country: "Faroe Islands" },
  { code: "+299", country: "Greenland" },
  { code: "+350", country: "Gibraltar" },
  { code: "+351", country: "Portugal" },
  { code: "+352", country: "Luxembourg" },
  { code: "+353", country: "Ireland" },
  { code: "+354", country: "Iceland" },
  { code: "+355", country: "Albania" },
  { code: "+356", country: "Malta" },
  { code: "+357", country: "Cyprus" },
  { code: "+358", country: "Finland" },
  { code: "+359", country: "Bulgaria" },
  { code: "+370", country: "Lithuania" },
  { code: "+371", country: "Latvia" },
  { code: "+372", country: "Estonia" },
  { code: "+373", country: "Moldova" },
  { code: "+374", country: "Armenia" },
  { code: "+375", country: "Belarus" },
  { code: "+376", country: "Andorra" },
  { code: "+377", country: "Monaco" },
  { code: "+378", country: "San Marino" },
  { code: "+380", country: "Ukraine" },
  { code: "+381", country: "Serbia" },
  { code: "+382", country: "Montenegro" },
  { code: "+383", country: "Kosovo" },
  { code: "+385", country: "Croatia" },
  { code: "+386", country: "Slovenia" },
  { code: "+387", country: "Bosnia and Herzegovina" },
  { code: "+389", country: "North Macedonia" },
  { code: "+420", country: "Czech Republic" },
  { code: "+421", country: "Slovakia" },
  { code: "+423", country: "Liechtenstein" },
  { code: "+852", country: "Hong Kong" },
  { code: "+853", country: "Macau" },
  { code: "+855", country: "Cambodia" },
  { code: "+856", country: "Laos" },
  { code: "+880", country: "Bangladesh" },
  { code: "+960", country: "Maldives" },
  { code: "+961", country: "Lebanon" },
  { code: "+962", country: "Jordan" },
  { code: "+963", country: "Syria" },
  { code: "+964", country: "Iraq" },
  { code: "+965", country: "Kuwait" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+967", country: "Yemen" },
  { code: "+968", country: "Oman" },
  { code: "+970", country: "Palestine" },
  { code: "+971", country: "United Arab Emirates" },
  { code: "+972", country: "Israel" },
  { code: "+973", country: "Bahrain" },
  { code: "+974", country: "Qatar" },
  { code: "+975", country: "Bhutan" },
  { code: "+976", country: "Mongolia" },
  { code: "+977", country: "Nepal" },
  { code: "+992", country: "Tajikistan" },
  { code: "+993", country: "Turkmenistan" },
  { code: "+994", country: "Azerbaijan" },
  { code: "+995", country: "Georgia" },
  { code: "+996", country: "Kyrgyzstan" },
  { code: "+998", country: "Uzbekistan" },
];

const SeefluencerForm = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    countryCode: "+62", // Default to Indonesia
    phoneNumber: "",
    reason: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    email: "",
    phoneNumber: "",
  });
  const [whatsAppLink, setWhatsAppLink] = useState<string | null>(null);
  const [trackingFired, setTrackingFired] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhoneNumber = (phone: string) => /^\d{10,15}$/.test(phone); // 10–15 digits, no "+" in the number

  // Track "InitiateCheckout" when user starts interacting with the form
  const handleInteraction = () => {
    if (!trackingFired && typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "InitiateCheckout", {
        content_name: "User Started Registration",
        value: 0.0,
        currency: "USD",
      });
      setTrackingFired(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Reset field-specific errors on change
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    handleInteraction();
  };

  const getWhatsAppLink = (formData: any) => {
    const salesTeam = [
      "+6285175449955", // Michelle
      "+6285165864726", // Vidi
    ];

    const randomIndex = Math.floor(Math.random() * salesTeam.length);
    const salesNumber = salesTeam[randomIndex];

    const message = `Halo, saya ingin mendaftar bootcamp ONLINE di Seefluencer. Berikut adalah data saya:
- Nama: ${formData.nama}
- Email: ${formData.email}
- Nomor WhatsApp: ${formData.countryCode}${formData.phoneNumber}
- Alasan: ${formData.reason}`;

    return `https://wa.me/${salesNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "Registration Completed",
          value: 6499000,
          currency: "IDR",
        });
      }

      // Validate and submit form data
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          whatsapp: `${formData.countryCode}${formData.phoneNumber}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        // Generate WhatsApp link and save it in state
        const whatsAppLink = getWhatsAppLink(formData);
        setWhatsAppLink(whatsAppLink);
        setSubmitted(true);

        // Open WhatsApp link in a new tab immediately
        window.open(whatsAppLink, "_blank");
      } else {
        throw new Error(result.error || "Terjadi kesalahan.");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {submitted ? (
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center">
              <div className="bg-green-100 p-4 rounded-full">
                <svg
                  className="w-16 h-16 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold ">🎉 Pendaftaran Berhasil!</h2>
            <p className="text-gray-600 text-sm">
              Terima kasih telah mendaftar ke bootcamp online di Seefluencer.
              Klik tombol di bawah untuk menghubungi tim sales kami melalui
              WhatsApp.
            </p>
            <a
              href={whatsAppLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.371 0 0 5.371 0 12c0 2.092.542 4.054 1.488 5.777L0 24l6.395-1.472A11.913 11.913 0 0012 24c6.629 0 12-5.371 12-12S18.629 0 12 0zm5.902 17.592c-.25.7-1.445 1.362-2.006 1.453-.514.084-1.187.118-1.916-.118-.438-.144-.999-.327-1.701-.634-2.994-1.273-4.946-4.408-5.1-4.619-.153-.21-1.214-1.606-1.214-3.066 0-1.46.766-2.179 1.036-2.477.27-.297.59-.372.79-.372.197 0 .394.002.568.01.184.007.429-.07.673.517.25.6.856 2.075.929 2.225.073.15.122.325.024.52-.1.195-.153.316-.306.486-.15.17-.316.38-.451.51-.152.154-.31.32-.133.627.177.306.786 1.3 1.689 2.1 1.162 1.017 2.14 1.33 2.443 1.482.305.153.487.127.665-.077.177-.205.762-.879.965-1.18.203-.303.407-.252.679-.151.273.1 1.732.817 2.033.963.3.146.5.22.572.341.071.122.071.702-.178 1.402z" />
              </svg>
              Hubungi via WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-2xl font-bold text-center mb-4">
              Form Pendaftaran Bootcamp Online Seefluencer
            </h1>

            {/* Nama */}
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-700"
              >
                Nama
              </label>
              <input
                id="nama"
                name="nama"
                type="text"
                required
                value={formData.nama}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-[#0b64be] focus:border-[#0b64be]"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-[#0b64be] focus:border-[#0b64be]"
              />
              {fieldErrors.email && (
                <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
              )}
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nomor WhatsApp
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="block w-full sm:w-1/3 px-4 py-2 border rounded-md focus:ring-[#0b64be] focus:border-[#0b64be]"
                >
                  {countryCodes.map(({ code, country }) => (
                    <option key={code} value={code}>
                      {code} ({country})
                    </option>
                  ))}
                </select>
                <input
                  name="phoneNumber"
                  type="tel"
                  placeholder="8123456789"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="block w-full sm:flex-1 px-4 py-2 border rounded-md focus:ring-[#0b64be] focus:border-[#0b64be]"
                />
              </div>
              {fieldErrors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {fieldErrors.phoneNumber}
                </p>
              )}
            </div>

            {/* Reason */}
            <div>
              <label
                htmlFor="reason"
                className="block text-sm font-medium text-gray-700"
              >
                Kenapa anda mau join bootcamp online di Seefluencer?
              </label>
              <textarea
                id="reason"
                name="reason"
                required
                value={formData.reason}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-[#0b64be] focus:border-[#0b64be] h-32"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 text-white rounded-md shadow ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#0b64be] hover:shadow-lg transition"
              }`}
            >
              {loading ? "Sending..." : "Apply Now"}
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default SeefluencerForm;
