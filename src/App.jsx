import React, { useState } from 'react';
import WorldMap from './WorldMap';
import { passportNames, countryNames, VISA_TYPES, VISA_COLORS } from './visaData';

// Available passports (all passport types - countries + special passports)
const availablePassports = Object.keys(passportNames).sort((a, b) => 
  passportNames[a].localeCompare(passportNames[b])
);

function App() {
  const [selectedPassports, setSelectedPassports] = useState([]);

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Visa Map
          </h1>
          <p className="mt-2 text-gray-600">
            Select your passport(s) to see where you can travel visa-free or with visa on arrival
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Select Passport(s)
                </h2>
                {selectedPassports.length > 0 && (
                  <button
                    onClick={clearSelection}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear
                  </button>
                )}
              </div>
              
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {availablePassports.map(passportCode => (
                  <label
                    key={passportCode}
                    className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedPassports.includes(passportCode)}
                      onChange={() => handlePassportToggle(passportCode)}
                      className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      {passportNames[passportCode]}
                    </span>
                  </label>
                ))}
              </div>

              {selectedPassports.length > 0 && (
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Selected: {selectedPassports.length} passport(s)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedPassports.map(code => (
                      <span
                        key={code}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {passportNames[code]}
                        <button
                          onClick={() => handlePassportToggle(code)}
                          className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-200"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Legend */}
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Legend
                </h3>
                <div className="space-y-2">
                  {Object.entries(VISA_TYPES).map(([key, value]) => (
                    <div key={key} className="flex items-center">
                      <div
                        className="w-4 h-4 rounded mr-2"
                        style={{ backgroundColor: VISA_COLORS[value] }}
                      />
                      <span className="text-xs text-gray-600">
                        {value === VISA_TYPES.ETA 
                          ? 'ETA (Electronic Travel Authorization)'
                          : value.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <div
                      className="w-4 h-4 rounded mr-2"
                      style={{ backgroundColor: VISA_COLORS.default }}
                    />
                    <span className="text-xs text-gray-600">No Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-[600px] w-full">
                <WorldMap selectedPassports={selectedPassports} />
              </div>
            </div>
            
            {selectedPassports.length === 0 && (
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  💡 Select one or more passports from the sidebar to see visa requirements on the map
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-white border-t py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Note: Visa requirements are subject to change. Always verify with official sources before traveling.
            This is a demonstration with sample data.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
