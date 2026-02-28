import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { facilities } from "@/lib/facilities";

type FacilityDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const FacilityDetailPage = async ({ params }: FacilityDetailPageProps) => {
  const { slug } = await params;
  const facility = facilities.find((item) => item.slug === slug);

  if (!facility) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-secondary/30 py-12 md:py-14">
        <div className="mx-auto max-w-[1400px] px-5 md:px-12">
          <Link
            href="/facility"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Facility Gallery
          </Link>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-foreground">{facility.title}</h1>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="relative w-full aspect-[16/9] bg-muted">
              <Image src={facility.image} alt={facility.title} fill className="object-cover" />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">{facility.fullDescription}</p>
            </div>
          </div>

          {facility.galleryImages && facility.galleryImages.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-foreground">Facility Photos</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {facility.galleryImages.map((img, index) => (
                  <div key={`${img}-${index}`} className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                    <div className="relative aspect-[16/10] w-full bg-muted">
                      <Image
                        src={img}
                        alt={`${facility.title} photo ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FacilityDetailPage;
