import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import { getVisaRequirement, VISA_COLORS, VISA_TYPES, countryNames, passportNames } from './visaData';

// Using world-atlas TopoJSON - we'll handle different property formats
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Country name to ISO code mapping (for cases where TopoJSON doesn't have ISO codes)
const countryNameToCode = {
  'United States of America': 'US',
  'United States': 'US',
  'Canada': 'CA',
  'Mexico': 'MX',
  'United Kingdom': 'GB',
  'France': 'FR',
  'Germany': 'DE',
  'Italy': 'IT',
  'Spain': 'ES',
  'Japan': 'JP',
  'South Korea': 'KR',
  'Korea, Republic of': 'KR',
  'Singapore': 'SG',
  'Australia': 'AU',
  'New Zealand': 'NZ',
  'Brazil': 'BR',
  'Argentina': 'AR',
  'Chile': 'CL',
  'Thailand': 'TH',
  'Indonesia': 'ID',
  'India': 'IN',
  'China': 'CN',
  'Russia': 'RU',
  'Russian Federation': 'RU',
  'Nepal': 'NP',
  'Bangladesh': 'BD',
  'Sri Lanka': 'LK',
  'Maldives': 'MV',
};

const WorldMap = ({ selectedPassports }) => {
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Helper function to get country code from geography properties
  const getCountryCode = (geo) => {
    const props = geo.properties || {};
    
    // Debug: log first country's properties to see what we have
    if (!window._debugLogged && Object.keys(props).length > 0) {
      console.log('Sample geography properties:', props);
      console.log('Available keys:', Object.keys(props));
      window._debugLogged = true;
    }
    
    // Try different possible property names for ISO country codes
    // Some TopoJSON files use ISO_A2, others use ISO_A3, some use different formats
    let code = props.ISO_A2 || props.iso_a2 || props.ISO_A2_L || props.ISO_A2_E;
    
    // Try ISO_A3 and convert to ISO_A2 if needed (e.g., USA -> US)
    if (!code && props.ISO_A3) {
      const iso3ToIso2 = {
        'USA': 'US', 'CAN': 'CA', 'MEX': 'MX', 'GBR': 'GB', 'FRA': 'FR',
        'DEU': 'DE', 'ITA': 'IT', 'ESP': 'ES', 'JPN': 'JP', 'KOR': 'KR',
        'SGP': 'SG', 'AUS': 'AU', 'NZL': 'NZ', 'BRA': 'BR', 'ARG': 'AR',
        'CHL': 'CL', 'THA': 'TH', 'IDN': 'ID', 'IND': 'IN', 'CHN': 'CN',
        'RUS': 'RU', 'NPL': 'NP', 'BGD': 'BD', 'LKA': 'LK', 'MDV': 'MV'
      };
      code = iso3ToIso2[props.ISO_A3];
    }
    
    // If still no code, try to get it from country name
    if (!code) {
      const name = props.NAME || props.NAME_LONG || props.NAME_EN || props.name || props.ADMIN;
      if (name) {
        code = countryNameToCode[name] || Object.keys(countryNames).find(
          key => countryNames[key].toLowerCase() === name.toLowerCase()
        );
      }
    }
    
    return code || null;
  };

  // Helper function to get country name from geography properties
  const getCountryName = (geo) => {
    const props = geo.properties || {};
    const countryCode = getCountryCode(geo);
    const name = props.NAME || props.NAME_LONG || props.NAME_EN || props.name || props.ADMIN;
    return name || countryNames[countryCode] || countryCode || 'Unknown';
  };

  const getCountryColor = (geo) => {
    const countryCode = getCountryCode(geo);
    
    // Handle null or invalid country codes
    if (!countryCode) {
      return VISA_COLORS.default;
    }
    
    if (!selectedPassports || selectedPassports.length === 0) {
      return VISA_COLORS.default;
    }

    // If multiple passports selected, use the best (most favorable) visa status
    let bestStatus = null;
    let bestPriority = Infinity;

    const statusPriority = {
      [VISA_TYPES.VISA_FREE]: 1,
      [VISA_TYPES.VISA_ON_ARRIVAL]: 2,
      [VISA_TYPES.E_VISA]: 3,
      [VISA_TYPES.VISA_REQUIRED]: 4,
      [VISA_TYPES.NOT_ALLOWED]: 5,
    };

    selectedPassports.forEach(passport => {
      const requirement = getVisaRequirement(passport, countryCode);
      if (requirement && statusPriority[requirement] < bestPriority) {
        bestStatus = requirement;
        bestPriority = statusPriority[requirement];
      }
    });

    return bestStatus ? VISA_COLORS[bestStatus] : VISA_COLORS.default;
  };

  const handleMouseEnter = (geo, event) => {
    const countryCode = getCountryCode(geo);
    const countryName = getCountryName(geo);
    
    setHoveredCountry(countryCode);
    
    if (!selectedPassports || selectedPassports.length === 0) {
      setTooltipContent(countryName || 'Unknown Country');
    } else {
      const requirements = selectedPassports.map(passport => {
        const requirement = getVisaRequirement(passport, countryCode);
        const passportName = passportNames[passport] || countryNames[passport] || passport || 'Unknown';
        const statusText = requirement 
          ? requirement.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
          : 'No Data';
        return `${passportName}: ${statusText}`;
      }).join('\n');
      
      setTooltipContent(`${countryName || 'Unknown Country'}\n${requirements}`);
    }
    
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
    setTooltipContent('');
  };

  return (
    <div className="relative w-full h-full">
      <ComposableMap
        projectionConfig={{
          scale: 147,
          center: [0, 20]
        }}
        className="w-full h-full"
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl} key={selectedPassports?.join(',') || 'none'}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryCode = getCountryCode(geo);
                const isHovered = hoveredCountry === countryCode;
                const fillColor = getCountryColor(geo);
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fillColor}
                    stroke="#ffffff"
                    strokeWidth={isHovered ? 2 : 0.5}
                    style={{
                      default: {
                        fill: fillColor,
                        outline: 'none',
                        transition: 'fill 0.3s ease',
                      },
                      hover: {
                        fill: fillColor,
                        outline: 'none',
                        stroke: '#000000',
                        strokeWidth: 2,
                        cursor: 'pointer',
                      },
                      pressed: {
                        outline: 'none',
                      },
                    }}
                    onMouseEnter={(event) => handleMouseEnter(geo, event)}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      
      {tooltipContent && (
        <div
          className="fixed bg-gray-900 text-white px-3 py-2 rounded shadow-lg text-sm z-50 pointer-events-none whitespace-pre-line"
          style={{
            left: `${tooltipPosition.x + 10}px`,
            top: `${tooltipPosition.y + 10}px`,
            maxWidth: '300px',
          }}
        >
          {tooltipContent}
        </div>
      )}
    </div>
  );
};

export default WorldMap;
