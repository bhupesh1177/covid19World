var economyData = [
    {"id": "AF", "prevYearGDP": 3.037, "currYearGDP": -3.007},
    {"id": "AL", "prevYearGDP": 2.214, "currYearGDP": -5.006},
    {"id": "DZ", "prevYearGDP": 0.7, "currYearGDP": -5.157},
    {"id": "AO", "prevYearGDP": -1.503, "currYearGDP": -1.374},
    {"id": "AG", "prevYearGDP": 5.264, "currYearGDP": -9.998},
    {"id": "AR", "prevYearGDP": -2.163, "currYearGDP": -5.719},
    {"id": "AM", "prevYearGDP": 7.597, "currYearGDP": -1.479},
    {"id": "AW", "prevYearGDP": 0.4, "currYearGDP": -13.7},
    {"id": "AU", "prevYearGDP": 1.847, "currYearGDP": -6.665},
    {"id": "AT", "prevYearGDP": 1.585, "currYearGDP": -6.997},
    {"id": "AZ", "prevYearGDP": 2.25, "currYearGDP": -2.184},
    {"id": "BS", "prevYearGDP": 1.801, "currYearGDP": -8.325},
    {"id": "BH", "prevYearGDP": 1.819, "currYearGDP": -3.59},
    {"id": "BD", "prevYearGDP": 7.879, "currYearGDP": 2.019},
    {"id": "BB", "prevYearGDP": -0.098, "currYearGDP": -7.6},
    {"id": "BY", "prevYearGDP": 1.222, "currYearGDP": -5.992},
    {"id": "BE", "prevYearGDP": 1.365, "currYearGDP": -6.924},
    {"id": "BZ", "prevYearGDP": 0.297, "currYearGDP": -11.997},
    {"id": "BJ", "prevYearGDP": 6.397, "currYearGDP": 4.519},
    {"id": "BT", "prevYearGDP": 5.335, "currYearGDP": 2.671},
    {"id": "BO", "prevYearGDP": 2.8, "currYearGDP": -2.9},
    {"id": "BA", "prevYearGDP": 2.7, "currYearGDP": -5},
    {"id": "BW", "prevYearGDP": 2.966, "currYearGDP": -5.379},
    {"id": "BR", "prevYearGDP": 1.133, "currYearGDP": -5.303},
    {"id": "BN", "prevYearGDP": 3.869, "currYearGDP": 1.297},
    {"id": "BG", "prevYearGDP": 3.372, "currYearGDP": -4},
    {"id": "BF", "prevYearGDP": 5.689, "currYearGDP": 1.996},
    {"id": "BI", "prevYearGDP": 1.772, "currYearGDP": -5.542},
    {"id": "CV", "prevYearGDP": 5.458, "currYearGDP": -4.04},
    {"id": "KH", "prevYearGDP": 7.045, "currYearGDP": -1.587},
    {"id": "CM", "prevYearGDP": 3.747, "currYearGDP": -1.215},
    {"id": "CA", "prevYearGDP": 1.636, "currYearGDP": -6.226},
    {"id": "CF", "prevYearGDP": 2.97, "currYearGDP": 1.044},
    {"id": "TD", "prevYearGDP": 2.96, "currYearGDP": -0.158},
    {"id": "CL", "prevYearGDP": 1.124, "currYearGDP": -4.486},
    {"id": "CN", "prevYearGDP": 6.11, "currYearGDP": 1.181},
    {"id": "CO", "prevYearGDP": 3.322, "currYearGDP": -2.386},
    {"id": "KM", "prevYearGDP": 1.866, "currYearGDP": -1.16},
    {"id": "CD", "prevYearGDP": 4.381, "currYearGDP": -2.239},
    {"id": "CG", "prevYearGDP": -0.902, "currYearGDP": -2.277},
    {"id": "CR", "prevYearGDP": 2.084, "currYearGDP": -3.292},
    {"id": "CI", "prevYearGDP": 6.9, "currYearGDP": 2.7},
    {"id": "HR", "prevYearGDP": 2.919, "currYearGDP": -9.024},
    {"id": "CY", "prevYearGDP": 3.23, "currYearGDP": -6.471},
    {"id": "CZ", "prevYearGDP": 2.566, "currYearGDP": -6.5},
    {"id": "DK", "prevYearGDP": 2.367, "currYearGDP": -6.5},
    {"id": "DJ", "prevYearGDP": 7.498, "currYearGDP": 1},
    {"id": "DM", "prevYearGDP": 9.205, "currYearGDP": -4.677},
    {"id": "DO", "prevYearGDP": 5.071, "currYearGDP": -0.965},
    {"id": "EC", "prevYearGDP": 0.054, "currYearGDP": -6.271},
    {"id": "EG", "prevYearGDP": 5.558, "currYearGDP": 1.952},
    {"id": "SV", "prevYearGDP": 2.385, "currYearGDP": -5.44},
    {"id": "GQ", "prevYearGDP": -6.096, "currYearGDP": -5.492},
    {"id": "ER", "prevYearGDP": 3.836, "currYearGDP": 0.109},
    {"id": "EE", "prevYearGDP": 4.334, "currYearGDP": -7.5},
    {"id": "SZ", "prevYearGDP": 1.037, "currYearGDP": -0.941},
    {"id": "ET", "prevYearGDP": 8.967, "currYearGDP": 3.237},
    {"id": "FJ", "prevYearGDP": 0.5, "currYearGDP": -5.8},
    {"id": "FI", "prevYearGDP": 0.98, "currYearGDP": -6.031},
    {"id": "FR", "prevYearGDP": 1.31, "currYearGDP": -7.18},
    {"id": "GA", "prevYearGDP": 3.402, "currYearGDP": -1.196},
    {"id": "GM", "prevYearGDP": 5.975, "currYearGDP": 2.5},
    {"id": "GE", "prevYearGDP": 5.148, "currYearGDP": -3.999},
    {"id": "DE", "prevYearGDP": 0.565, "currYearGDP": -6.952},
    {"id": "GH", "prevYearGDP": 6.113, "currYearGDP": 1.487},
    {"id": "EL", "prevYearGDP": 1.87, "currYearGDP": -10.04},
    {"id": "GD", "prevYearGDP": 3.142, "currYearGDP": -8.001},
    {"id": "GT", "prevYearGDP": 3.57, "currYearGDP": -1.963},
    {"id": "GN", "prevYearGDP": 5.645, "currYearGDP": 2.92},
    {"id": "GW", "prevYearGDP": 4.6, "currYearGDP": -1.5},
    {"id": "GY", "prevYearGDP": 4.663, "currYearGDP": 52.768},
    {"id": "HT", "prevYearGDP": -1.197, "currYearGDP": -4},
    {"id": "HN", "prevYearGDP": 2.651, "currYearGDP": -2.35},
    {"id": "HK", "prevYearGDP": -1.188, "currYearGDP": -4.821},
    {"id": "HU", "prevYearGDP": 4.928, "currYearGDP": -3.1},
    {"id": "IS", "prevYearGDP": 1.919, "currYearGDP": -7.206},
    {"id": "IN", "prevYearGDP": 4.228, "currYearGDP": 1.871},
    {"id": "ID", "prevYearGDP": 5.025, "currYearGDP": 0.499},
    {"id": "IR", "prevYearGDP": -7.586, "currYearGDP": -5.985},
    {"id": "IQ", "prevYearGDP": 3.914, "currYearGDP": -4.723},
    {"id": "IE", "prevYearGDP": 5.543, "currYearGDP": -6.781},
    {"id": "IL", "prevYearGDP": 3.503, "currYearGDP": -6.288},
    {"id": "IT", "prevYearGDP": 0.301, "currYearGDP": -9.134},
    {"id": "JM", "prevYearGDP": 0.97, "currYearGDP": -5.605},
    {"id": "JP", "prevYearGDP": 0.654, "currYearGDP": -5.163},
    {"id": "JO", "prevYearGDP": 2.021, "currYearGDP": -3.735},
    {"id": "KZ", "prevYearGDP": 4.5, "currYearGDP": -2.53},
    {"id": "KE", "prevYearGDP": 5.626, "currYearGDP": 1.01},
    {"id": "KI", "prevYearGDP": 2.297, "currYearGDP": 0.001},
    {"id": "KR", "prevYearGDP": 2.033, "currYearGDP": -1.178},
    {"id": "XK", "prevYearGDP": 4.0, "currYearGDP": -5},
    {"id": "KW", "prevYearGDP": 0.734, "currYearGDP": -1.107},
    {"id": "KG", "prevYearGDP": 4.468, "currYearGDP": -4.044},
    {"id": "LA", "prevYearGDP": 4.72, "currYearGDP": 0.723},
    {"id": "LV", "prevYearGDP": 2.197, "currYearGDP": -8.608},
    {"id": "LB", "prevYearGDP": -6.513, "currYearGDP": -12.019},
    {"id": "LS", "prevYearGDP": 1.196, "currYearGDP": -5.208},
    {"id": "LR", "prevYearGDP": -2.516, "currYearGDP": -2.501},
    {"id": "LY", "prevYearGDP": 9.89, "currYearGDP": -58.662},
    {"id": "LT", "prevYearGDP": 3.914, "currYearGDP": -8.086},
    {"id": "LU", "prevYearGDP": 2.298, "currYearGDP": -4.898},
    {"id": "MO", "prevYearGDP": -4.711, "currYearGDP": -29.616},
    {"id": "MG", "prevYearGDP": 4.758, "currYearGDP": 0.39},
    {"id": "MW", "prevYearGDP": 4.5, "currYearGDP": 1},
    {"id": "MY", "prevYearGDP": 4.33, "currYearGDP": -1.7},
    {"id": "MV", "prevYearGDP": 5.657, "currYearGDP": -8.074},
    {"id": "ML", "prevYearGDP": 5.1, "currYearGDP": 1.532},
    {"id": "MT", "prevYearGDP": 4.384, "currYearGDP": -2.814},
    {"id": "MH", "prevYearGDP": 2.411, "currYearGDP": -0.24},
    {"id": "MR", "prevYearGDP": 5.861, "currYearGDP": -1.986},
    {"id": "MU", "prevYearGDP": 3.482, "currYearGDP": -6.8},
    {"id": "MX", "prevYearGDP": -0.146, "currYearGDP": -6.63},
    {"id": "FM", "prevYearGDP": 1.183, "currYearGDP": -0.384},
    {"id": "MD", "prevYearGDP": 3.58, "currYearGDP": -3},
    {"id": "MN", "prevYearGDP": 5.099, "currYearGDP": -1},
    {"id": "ME", "prevYearGDP": 3.609, "currYearGDP": -8.976},
    {"id": "MA", "prevYearGDP": 2.203, "currYearGDP": -3.744},
    {"id": "MZ", "prevYearGDP": 2.224, "currYearGDP": 2.2},
    {"id": "MM", "prevYearGDP": 6.5, "currYearGDP": 1.799},
    {"id": "NA", "prevYearGDP": -1.395, "currYearGDP": -2.484},
    {"id": "NR", "prevYearGDP": 0.959, "currYearGDP": -1.675},
    {"id": "NP", "prevYearGDP": 7.051, "currYearGDP": 2.509},
    {"id": "NL", "prevYearGDP": 1.811, "currYearGDP": -7.493},
    {"id": "NZ", "prevYearGDP": 2.18, "currYearGDP": -7.212},
    {"id": "NI", "prevYearGDP": -3.879, "currYearGDP": -6},
    {"id": "NE", "prevYearGDP": 5.829, "currYearGDP": 0.953},
    {"id": "NG", "prevYearGDP": 2.208, "currYearGDP": -3.41},
    {"id": "MK", "prevYearGDP": 3.551, "currYearGDP": -4},
    {"id": "NO", "prevYearGDP": 1.151, "currYearGDP": -6.269},
    {"id": "OM", "prevYearGDP": 0.469, "currYearGDP": -2.844},
    {"id": "PK", "prevYearGDP": 3.294, "currYearGDP": -1.547},
    {"id": "PW", "prevYearGDP": 0.5, "currYearGDP": -11.949},
    {"id": "PA", "prevYearGDP": 3.006, "currYearGDP": -2.05},
    {"id": "PG", "prevYearGDP": 5.026, "currYearGDP": -0.961},
    {"id": "PY", "prevYearGDP": 0.2, "currYearGDP": -1},
    {"id": "PE", "prevYearGDP": 2.162, "currYearGDP": -4.534},
    {"id": "PH", "prevYearGDP": 5.905, "currYearGDP": 0.648},
    {"id": "PL", "prevYearGDP": 4.095, "currYearGDP": -4.579},
    {"id": "PT", "prevYearGDP": 2.157, "currYearGDP": -8},
    {"id": "PR", "prevYearGDP": 2.0, "currYearGDP": -6},
    {"id": "QA", "prevYearGDP": 0.066, "currYearGDP": -4.345},
    {"id": "RO", "prevYearGDP": 4.078, "currYearGDP": -5},
    {"id": "RU", "prevYearGDP": 1.336, "currYearGDP": -5.466},
    {"id": "RW", "prevYearGDP": 10.063, "currYearGDP": 3.5},
    {"id": "WS", "prevYearGDP": 3.464, "currYearGDP": -3.668},
    {"id": "SM", "prevYearGDP": 1.1, "currYearGDP": -12.17},
    {"id": "ST", "prevYearGDP": 1.302, "currYearGDP": -6},
    {"id": "SA", "prevYearGDP": 0.331, "currYearGDP": -2.283},
    {"id": "SN", "prevYearGDP": 5.287, "currYearGDP": 2.992},
    {"id": "RS", "prevYearGDP": 4.187, "currYearGDP": -3.016},
    {"id": "SC", "prevYearGDP": 3.901, "currYearGDP": -10.835},
    {"id": "SL", "prevYearGDP": 5.124, "currYearGDP": -2.314},
    {"id": "SG", "prevYearGDP": 0.733, "currYearGDP": -3.47},
    {"id": "SK", "prevYearGDP": 2.276, "currYearGDP": -6.2},
    {"id": "SI", "prevYearGDP": 2.443, "currYearGDP": -8.039},
    {"id": "SB", "prevYearGDP": 1.24, "currYearGDP": -2.07},
    {"id": "SO", "prevYearGDP": 2.9, "currYearGDP": -2.5},
    {"id": "ZA", "prevYearGDP": 0.153, "currYearGDP": -5.801},
    {"id": "SS", "prevYearGDP": 11.283, "currYearGDP": 4.893},
    {"id": "ES", "prevYearGDP": 1.977, "currYearGDP": -8},
    {"id": "LK", "prevYearGDP": 2.283, "currYearGDP": -0.536},
    {"id": "KN", "prevYearGDP": 2.909, "currYearGDP": -8.1},
    {"id": "LC", "prevYearGDP": 1.729, "currYearGDP": -8.496},
    {"id": "VC", "prevYearGDP": 0.4, "currYearGDP": -4.547},
    {"id": "SD", "prevYearGDP": -2.521, "currYearGDP": -7.222},
    {"id": "SR", "prevYearGDP": 2.3, "currYearGDP": -4.9},
    {"id": "SE", "prevYearGDP": 1.232, "currYearGDP": -6.788},
    {"id": "CH", "prevYearGDP": 0.917, "currYearGDP": -5.966},
    {"id": "SY", "prevYearGDP": 0.0, "currYearGDP": 0},
    {"id": "TW", "prevYearGDP": 2.714, "currYearGDP": -4.031},
    {"id": "TJ", "prevYearGDP": 7.5, "currYearGDP": 1},
    {"id": "TZ", "prevYearGDP": 6.269, "currYearGDP": 2.013},
    {"id": "TH", "prevYearGDP": 2.372, "currYearGDP": -6.662},
    {"id": "TL", "prevYearGDP": 3.1, "currYearGDP": -3},
    {"id": "TG", "prevYearGDP": 5.3, "currYearGDP": 1},
    {"id": "TO", "prevYearGDP": -0.141, "currYearGDP": -1.245},
    {"id": "TT", "prevYearGDP": -0.002, "currYearGDP": -4.54},
    {"id": "TN", "prevYearGDP": 1.043, "currYearGDP": -4.276},
    {"id": "TR", "prevYearGDP": 0.937, "currYearGDP": -4.998},
    {"id": "TM", "prevYearGDP": 6.347, "currYearGDP": 1.845},
    {"id": "TV", "prevYearGDP": 6.0, "currYearGDP": -0.953},
    {"id": "UG", "prevYearGDP": 4.92, "currYearGDP": 3.52},
    {"id": "UA", "prevYearGDP": 3.173, "currYearGDP": -7.731},
    {"id": "AE", "prevYearGDP": 1.292, "currYearGDP": -3.492},
    {"id": "UK", "prevYearGDP": 1.409, "currYearGDP": -6.502},
    {"id": "US", "prevYearGDP": 2.334, "currYearGDP": -5.907},
    {"id": "UY", "prevYearGDP": 0.222, "currYearGDP": -3},
    {"id": "UZ", "prevYearGDP": 5.6, "currYearGDP": 1.8},
    {"id": "VU", "prevYearGDP": 2.91, "currYearGDP": -3.269},
    {"id": "VE", "prevYearGDP": -35.0, "currYearGDP": -15},
    {"id": "VN", "prevYearGDP": 7.017, "currYearGDP": 2.7},
    {"id": "YE", "prevYearGDP": 2.1, "currYearGDP": -3},
    {"id": "ZM", "prevYearGDP": 1.52, "currYearGDP": -3.507},
    {"id": "ZW", "prevYearGDP": -8.276, "currYearGDP": -7.383}
]