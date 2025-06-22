import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [result, setResult] = useState(null);

  const isAffiliate = (url) => {
    const affiliates = ["ref", "aff", "affiliate", "amazon.com", "clickbank.net", "shareasale.com", "impact.com"];
    return affiliates.some(k => url.includes(k));
  };

  const handleGenerate = () => {
    const desc = `Call us today at ${phone} or visit our website: ${website}\n\nLooking for ${title}? We offer professional local service tailored to your needs. Trust our team to deliver top‑notch quality with a focus on customer satisfaction.\n\nContact us now for a free quote or consultation.`;
    const hashtags = "#LocalService #SEO #SmallBusiness";
    const tags = "local business, seo, small business marketing, video description, youtube tags, google rankings, optimized content, service near me, trusted providers, affordable service";
    const aff = isAffiliate(website)
      ? "\n\n*Disclosure: This video may contain affiliate links. If you purchase through them, we may earn a commission at no additional cost to you.*"
      : "";

    setResult({
      description: desc + aff,
      hashtags,
      tags
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
        <h1 className="text-2xl font-bold">Local Video SEO Pack Generator</h1>
        <input className="w-full border px-2 py-1" placeholder="Video Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input className="w-full border px-2 py-1" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
        <input className="w-full border px-2 py-1" placeholder="Website (affiliate or regular)" value={website} onChange={e => setWebsite(e.target.value)} />
        <button className="w-full bg-blue-600 text-white py-2 rounded" onClick={handleGenerate}>
          Generate SEO Pack
        </button>

        {result && (
          <div className="border-t pt-4 space-y-4">
            <div>
              <h2 className="font-semibold">📄 Description</h2>
              <textarea className="w-full border p-2" rows={6} readOnly value={result.description} />
            </div>
            <div>
              <h2 className="font-semibold">🏷️ Hashtags</h2>
              <textarea className="w-full border p-2" rows={1} readOnly value={result.hashtags} />
            </div>
            <div>
              <h2 className="font-semibold">🔖 Tags</h2>
              <textarea className="w-full border p-2" rows={2} readOnly value={result.tags} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
