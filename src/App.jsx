import React, { useMemo, useState } from 'react';
import WorldMap from './WorldMap';
import { passportNames, countryNames, VISA_TYPES, VISA_COLORS, getVisaRequirement, computePassportPowerScore } from './visaData';

const availablePassports = Object.keys(passportNames).sort((a, b) => 
  passportNames[a].localeCompare(passportNames[b])
);

function App() {
  const [selectedPassports, setSelectedPassports] = useState([]);
  const passportPowerScore = useMemo(
    () => computePassportPowerScore(selectedPassports),
    [selectedPassports]
  );

  const visaFreeCount = useMemo(() => {
    if (!selectedPassports.length) {
      return 0;
    }

    const statusPriority = {
      [VISA_TYPES.RIGHT_OF_ABODE]: 0,
      [VISA_TYPES.VISA_FREE]: 1,
      [VISA_TYPES.ETA]: 2,
      [VISA_TYPES.VISA_ON_ARRIVAL]: 3,
      [VISA_TYPES.E_VISA]: 4,
      [VISA_TYPES.VISA_REQUIRED]: 5,
      [VISA_TYPES.TRAVEL_RESTRICTED]: 6,
    };

    return Object.keys(countryNames).reduce((count, countryCode) => {
      let bestStatus = null;
      let bestPriority = Infinity;

      selectedPassports.forEach(passport => {
        const requirement = getVisaRequirement(passport, countryCode);
        if (requirement && statusPriority[requirement] < bestPriority) {
          bestStatus = requirement;
          bestPriority = statusPriority[requirement];
        }
      });

      return bestStatus === VISA_TYPES.VISA_FREE || bestStatus === VISA_TYPES.RIGHT_OF_ABODE
        ? count + 1
        : count;
    }, 0);
  }, [selectedPassports]);

  const handlePassportToggle = (passportCode) => {
    setSelectedPassports(prev => {
      if (prev.includes(passportCode)) {
        return prev.filter(p => p !== passportCode);
      } else {
        return [...prev, passportCode];
      }
    });
  };

  const clearSelection = () => {
    setSelectedPassports([]);
  };

  return (
    <div className="min-h-screen bg-dots bg-gradient-to-br from-slate-100 via-sky-50/80 to-teal-50/90">
      <header className="relative overflow-hidden border-b border-slate-200/50 bg-gradient-to-r from-slate-800 via-slate-700 to-sky-800 shadow-xl header-pattern">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/20 px-3 py-1 text-xs font-medium text-sky-200">
                Visa access, simplified
              </div>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl drop-shadow-sm">
                Visa Map
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
                Select your passport(s) to instantly see where you can travel visa-free, with
                visa on arrival, or via an electronic travel authorization.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-sm text-slate-200 shadow-lg backdrop-blur-sm">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-sky-200/90">Passports</span>
                <span className="text-xl font-bold text-white">
                  {selectedPassports.length || 'None'}
                </span>
              </div>
              <div className="h-10 w-px bg-white/30" />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-sky-200/90">Visa-Free</span>
                <span className="text-xl font-bold text-white">
                  {visaFreeCount}
                </span>
              </div>
              {passportPowerScore != null && (
                <>
                  <div className="h-10 w-px bg-white/30" />
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-sky-200/90">Passport Power</span>
                    <span className="text-xl font-bold text-white">
                      {passportPowerScore.toFixed(1)}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="sticky top-6 rounded-2xl border border-slate-200/60 bg-white/95 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-800">
                  Select Passport(s)
                </h2>
                {selectedPassports.length > 0 && (
                  <button
                    onClick={clearSelection}
                    className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-slate-400 hover:bg-slate-200 hover:text-slate-800"
                  >
                    Clear
                  </button>
                )}
              </div>
              
              <div className="space-y-1 max-h-[420px] overflow-y-auto pr-1">
                {availablePassports.map(passportCode => (
                  <label
                    key={passportCode}
                    className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-slate-700 transition hover:border-sky-200 hover:bg-sky-50/70 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedPassports.includes(passportCode)}
                      onChange={() => handlePassportToggle(passportCode)}
                      className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 focus:ring-2"
                    />
                    <span className="leading-snug">
                      {passportNames[passportCode]}
                    </span>
                  </label>
                ))}
              </div>

              {selectedPassports.length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-200/70">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">
                    Selected {selectedPassports.length}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedPassports.map(code => (
                      <span
                        key={code}
                        className="inline-flex items-center gap-2 rounded-full border border-sky-300/70 bg-sky-100 px-3 py-1.5 text-xs font-medium text-sky-800"
                      >
                        {passportNames[code]}
                        <button
                          onClick={() => handlePassportToggle(code)}
                          className="inline-flex items-center justify-center rounded-full border border-transparent px-1 text-sky-700 transition hover:bg-sky-200/70"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Passport Power explanation */}
              {selectedPassports.length > 0 && passportPowerScore != null && (
                <div className="mt-6 pt-6 border-t border-slate-200/70">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                    Passport Power
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Score = (Σ weight per destination ÷ N) × 100. Higher = better visa-free access.
                    Weights: visa-free +1, ETA +0.9, VoA +0.75, e-visa +0.65, required 0, restricted −1.
                  </p>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-slate-200/70">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">
                  Legend
                </h3>
                <div className="space-y-2">
                  {Object.entries(VISA_TYPES).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2 text-xs text-slate-600">
                      <div
                        className="h-3.5 w-3.5 shrink-0 rounded shadow-sm"
                        style={{ backgroundColor: VISA_COLORS[value] }}
                      />
                      <span>
                        {value === VISA_TYPES.ETA 
                          ? 'ETA (Electronic Travel Authorization)'
                          : value === VISA_TYPES.RIGHT_OF_ABODE
                          ? 'Right of Abode'
                          : value.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <div
                      className="h-3.5 w-3.5 shrink-0 rounded shadow-sm"
                      style={{ backgroundColor: VISA_COLORS.default }}
                    />
                    <span>No Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200/60 bg-white/95 shadow-xl shadow-slate-200/50 overflow-hidden ring-1 ring-slate-900/5">
              <div className="flex items-center justify-between border-b border-slate-200/60 bg-gradient-to-r from-slate-50 to-sky-50/50 px-6 py-4">
                <div>
                  <p className="text-sm font-semibold text-slate-800">World Map</p>
                  <p className="text-xs text-slate-500">Hover a country to see its visa status.</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live view
                </div>
              </div>
              <div className="h-[620px] w-full map-ocean-bg">
                <WorldMap selectedPassports={selectedPassports} />
              </div>
            </div>
            
            {selectedPassports.length === 0 && (
              <div className="mt-4 rounded-2xl border border-sky-300/60 bg-gradient-to-r from-sky-50 to-teal-50/50 px-5 py-4 text-sm text-sky-800 shadow-sm">
                <span className="font-semibold">Tip:</span> Select one or more passports to see
                visa requirements directly on the map.
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="mt-12 border-t border-slate-200/60 bg-white/60 py-6 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-500">
            Note: Visa requirements are subject to change. Always verify with official sources before traveling.
            This is a demonstration with sample data.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
