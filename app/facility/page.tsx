import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { facilities } from "@/lib/facilities";

const FacilityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border page-hero-gradient py-14 md:py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">Facility</h1>
          <p className="mt-5 max-w-3xl text-base md:text-lg text-white/90 leading-relaxed">
            Explore CEIT rooms and support spaces. Click a facility card to open a full view with complete details.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <Link
                key={facility.slug}
                href={`/facility/${facility.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-foreground">{facility.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{facility.shortDescription}</p>
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
