import React from "react";

const figureLogo = new URL("./images/figure.png", import.meta.url).href;
const reflectLogo = new URL("./images/reflect.png", import.meta.url).href;
const linceLogo = new URL("./images/lince.png", import.meta.url).href;
const gauntletLogo = new URL("./images/gauntlet.svg", import.meta.url).href;
const hyloLogo = new URL("./images/hylo.svg", import.meta.url).href;
const mapleLogo = new URL("./images/maple.svg", import.meta.url).href;
const unitasLogo = new URL("./images/unitas.svg", import.meta.url).href;
const onreLogo = new URL("./images/onre.svg", import.meta.url).href;
const ethenaLogo = new URL("./images/ethena.png", import.meta.url).href;
const hastraLogo = new URL("./images/hastra.png", import.meta.url).href;
const jupiterLogo = new URL("./images/jupiter.png", import.meta.url).href;
const ondoLogo = new URL("./images/ondo.png", import.meta.url).href;
const standxLogo = new URL("./images/standx.png", import.meta.url).href;
const humaLogo = new URL("./images/huma.svg", import.meta.url).href;
const perenaLogo = new URL("./images/perena.svg", import.meta.url).href;
const solayerLogo = new URL("./images/solayer.svg", import.meta.url).href;
const solomonLogo = new URL("./images/solomon.svg", import.meta.url).href;
const solsticeLogo = new URL("./images/solstice.svg", import.meta.url).href;

export default function App() {
  const treasuryProtocols = [
    { name: "USDY", type: "Ondo", logoSrc: ondoLogo },
    { name: "YLDS", type: "Figure", logoSrc: figureLogo },
    { name: "wYLDS", type: "Hastra", logoSrc: hastraLogo },
    { name: "sUSD", type: "Solayer", logoSrc: solayerLogo },
    { name: "cUSDo", type: "OpenEden" },
    { name: "JupUSD", type: "Jupiter", logoSrc: jupiterLogo },
    { name: "JIUSDC", type: "Jupiter Lend", logoSrc: jupiterLogo },
    { name: "JIUSDT", type: "Jupiter Lend", logoSrc: jupiterLogo },
    { name: "JIEURC", type: "Jupiter Lend", logoSrc: jupiterLogo },
    { name: "JIUSDG", type: "Jupiter Lend", logoSrc: jupiterLogo },
  ];

  const institutionalProtocols = [
    { name: "PST", type: "Huma", logoSrc: humaLogo },
    { name: "syrupUSDC", type: "Maple", logoSrc: mapleLogo },
    { name: "PRIME", type: "Hastra / Figure", logoSrc: hastraLogo },
  ];

  const deltaNeutralProtocols = [
    { name: "USX / eUSX", type: "Solstice", logoSrc: solsticeLogo },
    { name: "sUSDe", type: "Ethena", logoSrc: ethenaLogo },
    { name: "DUSD", type: "StandX", logoSrc: standxLogo },
    { name: "USD*", type: "Perena", logoSrc: perenaLogo },
    { name: "USDC+", type: "Reflect", logoSrc: reflectLogo },
    { name: "sUSDv", type: "Solomon", logoSrc: solomonLogo },
    { name: "hJLP", type: "Gauntlet", logoSrc: gauntletLogo },
    { name: "sHYUSD", type: "Hylo", logoSrc: hyloLogo },
  ];

  const rwaProtocols = [
    { name: "ONyc", type: "OnRe", logoSrc: onreLogo },
    { name: "sUSDu", type: "Unitas", logoSrc: unitasLogo },
    { name: "LSS VB", type: "Lince", logoSrc: linceLogo },
  ];

  const Section = ({
    title,
    accentColor,
    protocols,
    columns,
    apy,
    protocolTagKey = "tag",
    containerClassName = "",
    tileClassName = "",
    logoClassName = "",
    gridClassName = "",
  }: {
    title: string;
    accentColor: string;
    protocols: Array<{ name: string; type: string; tag?: string; logoSrc?: string }>;
    columns: number;
    apy?: string;
    protocolTagKey?: string;
    containerClassName?: string;
    tileClassName?: string;
    logoClassName?: string;
    gridClassName?: string;
  }) => (
    <div
      className={`bg-[#0F172A] border border-[#1E293B] rounded-[10px] p-6 relative flex flex-col ${containerClassName}`}
    >
      {/* Thin top accent border */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[10px]"
        style={{ backgroundColor: accentColor }}
      />

      {/* Section Header with APY */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          <h2 className="text-base font-semibold text-[#F3F4F6] uppercase tracking-wide">
            {title}
          </h2>
        </div>
        {apy && (
          <span
            className="text-xs font-semibold px-3 py-1 rounded"
            style={{ backgroundColor: accentColor, color: "#fff" }}
          >
            {apy}
          </span>
        )}
      </div>

      {/* Protocol Grid */}
      <div
        className={`grid gap-4 flex-1 place-content-center ${gridClassName}`}
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {protocols.map((protocol, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center relative p-3 min-h-[100px] overflow-hidden min-w-0 ${tileClassName}`}
          >
            {protocol[protocolTagKey] && (
              <span
                className="absolute top-1 right-1 text-[9px] font-semibold px-1.5 py-0.5 rounded shrink-0 z-10"
                style={{ backgroundColor: accentColor, color: "#fff" }}
              >
                {protocol[protocolTagKey]}
              </span>
            )}
            {protocol.logoSrc ? (
              <img
                src={protocol.logoSrc}
                alt={protocol.type}
                className={`w-16 h-16 object-contain mb-2 shrink-0 ${logoClassName}`}
              />
            ) : (
              <div
                className={`w-14 h-14 rounded-full bg-[#0F172A] border border-[#1E293B] flex items-center justify-center mb-2 shrink-0 ${logoClassName}`}
              >
                <span className="text-sm font-semibold text-[#64748B]">
                  {protocol.name.substring(0, 2)}
                </span>
              </div>
            )}
            <div className="text-center w-full min-w-0 px-0.5">
              <div className="text-sm font-semibold text-[#E2E8F0] truncate">
                {protocol.name}
              </div>
              <div className="text-xs text-[#64748B] truncate mt-0.5">
                {protocol.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-[1980px] h-[1080px] bg-[#0A0F1C] relative overflow-hidden">
      {/* Subtle radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col px-20 py-12">
        {/* Header: title and attribution on same line */}
        <div className="mb-8">
          <div className="flex items-baseline justify-between gap-6">
            <h1
              className="text-[48px] font-bold text-[#F3F4F6]"
              style={{ letterSpacing: "-0.01em" }}
            >
              Solana Stablecoin Yield Landscape
            </h1>
            <div className="text-right shrink-0">
              <div className="text-sm font-semibold text-[#F3F4F6]">@arifkazi_</div>
              <div className="text-xs text-[#94A3B8]">Research · Altitude</div>
            </div>
          </div>
          <p className="text-sm text-[#94A3B8] font-medium mt-3">
            Organized by yield source and risk profile – Risk
            increases left to right
          </p>
        </div>

        {/* Main Content: 5-5 / 3 | 3 / 8 layout */}
        <div className="flex-1 flex flex-col gap-6 min-h-0">
          {/* Row 1: Treasury full width — 5 + 5 blocks */}
          <Section
            title="TREASURY & RWA-BACKED"
            accentColor="#3A7D44"
            protocols={treasuryProtocols}
            columns={5}
            apy="~4-5% APY"
          />

          {/* Row 2: Left column 3/3, Right column 8 spanning full height */}
          <div className="grid grid-cols-5 grid-rows-2 gap-6 flex-1 min-h-0">
            {/* Left top: Institutional (3) */}
            <div className="col-span-2">
              <Section
                title="INSTITUTIONAL LENDING & PAYFI"
                accentColor="#2C5F9E"
                protocols={institutionalProtocols}
                columns={3}
                apy="~6-13% APY"
                containerClassName="h-full"
              />
            </div>
            {/* Right: Delta-neutral (8) spanning both rows */}
            <div className="col-span-3 row-span-2">
              <Section
                title="DELTA-NEUTRAL & DEFI STRATEGIES"
                accentColor="#5B3C88"
                protocols={deltaNeutralProtocols}
                columns={4}
                apy="~3-30% APY"
                containerClassName="h-full"
              />
            </div>
            {/* Left bottom: RWA (3) with EMERGING badge in header */}
            <div className="col-span-2">
              <Section
                title="RWA & SPECIALIZED"
                accentColor="#9A6C1F"
                protocols={rwaProtocols}
                columns={3}
                apy="EMERGING"
                containerClassName="h-full"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 mt-6 border-t border-[#1E293B]">
          <p className="text-xs text-[#64748B] text-center">
            Data as of Q1 2025 · Not financial advice · Yield estimates are approximations · Risk profiles subject to change · Always DYOR
          </p>
        </div>
      </div>
    </div>
  );
}