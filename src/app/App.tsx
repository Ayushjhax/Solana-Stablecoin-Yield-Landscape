import React from "react";

export default function App() {
  const treasuryProtocols = [
    { name: "USDY", type: "Ondo Finance" },
    { name: "FDUSD", type: "First Digital" },
    { name: "WYLDS", type: "Backed Finance" },
    { name: "xUSD", type: "Libre Capital" },
    { name: "CUSD", type: "Coinbase" },
    { name: "JupUSD", type: "Jupiter" },
    { name: "jitUSDC", type: "Jito Labs" },
    { name: "jitNXT", type: "Jito Restaking" },
    { name: "sUSDY", type: "Solayer" },
    { name: "jiUSDx", type: "Jito Premium" },
  ];

  const institutionalProtocols = [
    { name: "FBT", type: "Flux Benji" },
    { name: "Maple", type: "Maple Finance" },
    { name: "PRIME", type: "PayFi Protocol" },
    { name: "Credix", type: "Credit Markets" },
  ];

  const deltaNeutralProtocols = [
    { name: "UST+", type: "Backed Yield" },
    { name: "BSX", type: "BaseX" },
    { name: "sUSDA", type: "Symmetry" },
    { name: "DUSD", type: "Delta Stable" },
    { name: "USDP", type: "Protocol USD" },
    { name: "UXDC", type: "Cross-chain" },
    { name: "sUSD", type: "Synthetix" },
    { name: "UXP", type: "UXD Protocol" },
  ];

  const rwaProtocols = [
    { name: "OUSG", type: "Ondo Short-Term" },
    { name: "sUSDI", type: "Stable Index" },
    { name: "LS VII", type: "Structured" },
    { name: "bLP", type: "LP Vault" },
    { name: "BUIDL", type: "BlackRock" },
    { name: "Parcl", type: "Real Estate" },
  ];

  const Section = ({
    title,
    accentColor,
    protocols,
    columns = 10,
  }) => (
    <div className="bg-[#0F172A] border border-[#1E293B] rounded-[10px] p-8 relative">
      {/* Thin top accent border */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[10px]"
        style={{ backgroundColor: accentColor }}
      />

      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
        <h2 className="text-base font-semibold text-[#F3F4F6] uppercase tracking-wide">
          {title}
        </h2>
      </div>

      {/* Protocol Grid */}
      <div
        className="grid gap-8"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
      >
        {protocols.map((protocol, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Logo Circle */}
            <div className="w-[72px] h-[72px] rounded-full bg-[#111827] border border-[#1E293B] flex items-center justify-center mb-2 transition-all duration-200 hover:border-[#2D3748] cursor-pointer">
              <div className="text-sm font-semibold text-[#64748B]">
                {protocol.name.substring(0, 2)}
              </div>
            </div>

            {/* Protocol Info */}
            <div className="text-center mt-2">
              <div className="text-xs font-semibold text-[#E2E8F0] mb-0.5">
                {protocol.name}
              </div>
              <div className="text-[10px] text-[#64748B] leading-tight">
                {protocol.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-[1920px] h-[1080px] bg-[#0A0F1C] relative overflow-hidden">
      {/* Subtle radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col px-20 py-16">
        {/* Header with More Breathing Room */}
        <div className="mb-12">
          <h1
            className="text-[48px] font-bold text-[#F3F4F6] mb-3"
            style={{ letterSpacing: "-0.01em" }}
          >
            Solana Stablecoin Yield Landscape
          </h1>
          <p className="text-sm text-[#94A3B8] font-medium">
            Organized by yield source and risk profile – Risk
            increases left to right
          </p>
        </div>

        {/* Main Content - Asymmetric Balanced Layout */}
        <div className="flex-1 space-y-6">
          {/* Row 1: Treasury (Full Width) */}
          <Section
            title="TREASURY & RWA-BACKED"
            accentColor="#3A7D44"
            protocols={treasuryProtocols}
            columns={10}
          />

          {/* Row 2: Institutional (40%) + Delta Neutral (60%) */}
          <div className="grid grid-cols-5 gap-6">
            <div className="col-span-2">
              <Section
                title="INSTITUTIONAL LENDING & PAYFI"
                accentColor="#2C5F9E"
                protocols={institutionalProtocols}
                columns={4}
              />
            </div>
            <div className="col-span-3">
              <Section
                title="DELTA-NEUTRAL & DEFI STRATEGIES"
                accentColor="#5B3C88"
                protocols={deltaNeutralProtocols}
                columns={8}
              />
            </div>
          </div>

          {/* Row 3: RWA (Full Width, Slimmer) */}
          <Section
            title="RWA & SPECIALIZED YIELD"
            accentColor="#9A6C1F"
            protocols={rwaProtocols}
            columns={6}
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-8 mt-8 border-t border-[#1E293B]">
          <div className="text-xs text-[#64748B]">
            Data as of Q1 2026
          </div>
          <div className="text-xs text-[#64748B]">
            For informational purposes only. Not financial
            advice.
          </div>
        </div>
      </div>
    </div>
  );
}