"use client";

import { useState } from "react";

type OrgNodeProps = {
  name: string;
  role: string;
  compact?: boolean;
};

const OrgNode = ({ name, role, compact = false }: OrgNodeProps) => (
  <div
    className={[
      "mx-auto flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm",
      compact ? "w-[300px]" : "w-[360px]",
    ].join(" ")}
  >
    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-border bg-muted text-[11px] font-semibold text-muted-foreground">
      Image
    </div>
    <div className="text-left">
      <p className="text-sm font-bold text-foreground leading-tight">{name}</p>
      <p className="text-xs text-muted-foreground leading-tight mt-1">{role}</p>
    </div>
  </div>
);

type AdministrationTab = "Board of Regents" | "Organizational Chart";

const administrationTabs: AdministrationTab[] = ["Board of Regents", "Organizational Chart"];

const AdministrationPage = () => {
  const [activeTab, setActiveTab] = useState<AdministrationTab>("Board of Regents");

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border page-hero-gradient py-14 md:py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">Administration</h1>
          <p className="mt-5 max-w-3xl text-base md:text-lg text-white/90 leading-relaxed">
            Meet the administrators and school officials who lead CEIT programs, student services, and institutional development.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-12">
          <div className="flex flex-wrap gap-0">
            {administrationTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm md:text-base font-semibold border transition ${
                    isActive
                      ? "bg-[hsl(var(--navy-deep))] text-white border-[hsl(var(--navy-deep))]"
                      : "bg-secondary text-muted-foreground border-border hover:bg-secondary/70"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="mt-5 rounded-lg border border-border bg-secondary/30 p-6 md:p-8 text-center">
            {activeTab === "Board of Regents" ? (
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Board of Regents</h2>
                <div className="mt-8 space-y-6 max-w-3xl mx-auto">
                  <div>
                    <p className="text-sm md:text-base uppercase tracking-wide font-semibold text-muted-foreground">Chairman</p>
                    <p className="mt-2 text-xl md:text-2xl font-bold text-foreground">CITY MAYOR WESLIE T. GATCHALIAN</p>
                  </div>

                  <div>
                    <p className="text-sm md:text-base uppercase tracking-wide font-semibold text-muted-foreground">Chairman</p>
                    <p className="mt-2 text-xl md:text-2xl font-bold text-foreground">ATTY. DANILO L. CONCEPCION</p>
                  </div>

                  <div>
                    <p className="text-sm md:text-base uppercase tracking-wide font-semibold text-muted-foreground">Vice-Chairman</p>
                    <p className="mt-2 text-xl md:text-2xl font-bold text-foreground">DR. NEDEÑA C. TORRALBA</p>
                  </div>

                  <div>
                    <p className="text-sm md:text-base uppercase tracking-wide font-semibold text-muted-foreground">
                      PLV President, Members
                    </p>
                    <ul className="mt-3 space-y-2 text-base md:text-lg text-foreground">
                      <li>REGENT LORENA C. NATIVIDAD-BORJA</li>
                      <li>REGENT FLORO P. ALEJO</li>
                      <li>REGENT WILFREDO E. CABRAL</li>
                      <li>REGENT ANGELECA SJ. VILLENA</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm md:text-base uppercase tracking-wide font-semibold text-muted-foreground">Members</p>
                    <p className="mt-2 text-lg md:text-xl font-semibold text-foreground">ATTY. ALLAN ROULLO YAP</p>
                  </div>

                  <div>
                    <p className="text-sm md:text-base uppercase tracking-wide font-semibold text-muted-foreground">Board Secretary</p>
                    <p className="mt-2 text-lg md:text-xl font-semibold text-foreground">ADELIA E. SORIANO</p>
                  </div>

                  <div>
                    <p className="text-sm md:text-base uppercase tracking-wide font-semibold text-muted-foreground">Board Treasurer</p>
                    <p className="mt-2 text-lg md:text-xl font-semibold text-foreground">ULYSSES HERMOGENES C. AGUILAR</p>
                  </div>

                  <div>
                    <ul className="mt-2 space-y-2 text-base md:text-lg text-foreground">
                      <li>ELIZABETH A. CHONGCO</li>
                      <li>PIA FEBES P. AQUINO</li>
                      <li>FLOCERFIDA D. VILLAMAR</li>
                      <li>ERLINDO C. DIONISIO</li>
                      <li>LEONORA B. KATALBAS</li>
                      <li>ANA MARIA C. FERNANDEZ</li>
                      <li>CAROLINA V. SANTIAGO</li>
                      <li>LANILYN A. DEROÑA</li>
                    </ul>
                    <p className="mt-4 text-sm md:text-base uppercase tracking-wide font-semibold text-muted-foreground">
                      Technical Working Group
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Organizational Chart</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  College of Engineering and Information Technology
                </p>

                <div className="mt-12 overflow-x-auto pb-4">
                  <div className="mx-auto min-w-[1040px]">
                    <OrgNode name="Dr. Nedena C. Torralba" role="University President" />
                    <div className="mx-auto h-10 w-px bg-border" />

                    <OrgNode name="Dr. Michville Rivera" role="Vice President for Academic Affairs" />
                    <div className="mx-auto h-10 w-px bg-border" />

                    <div className="flex items-center justify-center gap-6">
                      <OrgNode name="Engr. Jordan N. Velasco" role="Dean, College of CEIT" compact />
                      <OrgNode name="Norie Caunda" role="Secretary, College of CEIT" compact />
                    </div>

                    <div className="mx-auto h-8 w-px bg-border" />
                    <div className="mx-auto h-px w-[680px] bg-border" />

                    <div className="mx-auto mb-2 flex w-[680px] justify-between">
                      <div className="h-8 w-px bg-border" />
                      <div className="h-8 w-px bg-border" />
                      <div className="h-8 w-px bg-border" />
                    </div>

                    <div className="flex justify-center gap-10">
                      <OrgNode name="Engr. John Alvarado" role="Civil Engineering Department Chairperson" compact />
                      <OrgNode name="Dr. Ana Santiago" role="Electrical Engineering Department Chairperson" compact />
                      <OrgNode name="Mr. Ricardo Delacruz" role="Information Technology Department Chairperson" compact />
                    </div>

                    <div className="mx-auto mt-2 mb-2 flex w-[980px] justify-between px-[100px]">
                      <div className="h-8 w-px bg-border" />
                      <div className="h-8 w-px bg-border" />
                      <div className="h-8 w-px bg-border" />
                    </div>

                    <div className="flex justify-center gap-10">
                      <OrgNode name="Engr. Darryl John Bandino" role="CE Department Research Coordinator" compact />
                      <OrgNode name="Engr. Erica Cruz" role="EE Department Research Coordinator" compact />
                      <OrgNode name="Patrick Luan Francisco" role="IT Department Research Coordinator" compact />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdministrationPage;
