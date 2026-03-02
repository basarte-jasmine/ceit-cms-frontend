import Image from "next/image";
import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { facilities } from "@/lib/facilities";

const FacilityPage = () => {
  const visibleFacilities = facilities.filter((facility) => facility.slug !== "ceit-building");

  return (
    <div className="min-h-screen bg-[#f2f4fb]">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden py-16 md:py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/banner_facility.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/85 via-[#0d1f3c]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f2f4fb] to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-12">
          <div
            className="flex items-center gap-2 text-white/50 text-xs mb-4 uppercase tracking-widest"
            style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
          >
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-[#ef8a22]">›</span>
            <span className="text-white/80">Facility</span>
          </div>
          <h1 className="relative text-5xl md:text-6xl font-extrabold text-white">Facility</h1>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#ef8a22] to-transparent" />
          <p className="relative mt-4 max-w-3xl text-base md:text-lg text-white/85 leading-relaxed">
            Explore CEIT rooms and support spaces. Click a facility card to open a full view with complete details.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-12">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-5 h-5 text-[#ef8a22]" />
            <span
              className="text-xs font-bold uppercase tracking-widest text-[#ef8a22]"
              style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
            >
              Campus Spaces
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#dfe3ef] to-transparent" />
            <span
              className="text-xs text-[#4e5a7b]"
              style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
            >
              {visibleFacilities.length} facilities
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleFacilities.map((facility) => (
              <Link
                key={facility.slug}
                href={`/facility/${facility.slug}`}
                className="group block overflow-hidden rounded-2xl border border-[#dfe3ef] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e8ecf7]">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.05]"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f2b55]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Arrow on hover */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-[#1f2b55]" />
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 relative overflow-hidden">
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-5 right-5 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to right, #ef8a22, transparent)" }}
                  />

                  <h2 className="text-lg font-extrabold text-[#1f2b55] leading-tight group-hover:text-[#1f2b55] transition-colors">
                    {facility.title}
                  </h2>
                  <p className="mt-2 text-sm text-[#4e5a7b] leading-relaxed line-clamp-2">
                    {facility.shortDescription}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#ef8a22] opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300"
                    style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default FacilityPage;
