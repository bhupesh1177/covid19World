var covid19Data = [
    {"value": 4033, "id": "AF", "population": 37172386, "countryName": "Afghanistan", "firstCase": "2020-02-25"},
    {"value": 856, "id": "AL", "population": 2866376, "countryName": "Albania", "firstCase": "2020-03-09"},
    {"value": 5558, "id": "DZ", "population": 42228429, "countryName": "Algeria", "firstCase": "2020-02-26"},
    {"value": 754, "id": "AD", "population": 77006, "countryName": "Andorra", "firstCase": "2020-03-03"},
    {"value": 43, "id": "AO", "population": 30809762, "countryName": "Angola", "firstCase": "2020-03-22"},
    {"value": 25, "id": "AG", "population": 96286, "countryName": "Antigua_and_Barbuda", "firstCase": "2020-03-15"},
    {"value": 5763, "id": "AR", "population": 44494502, "countryName": "Argentina", "firstCase": "2020-03-04"},
    {"value": 3175, "id": "AM", "population": 2951776, "countryName": "Armenia", "firstCase": "2020-03-01"},
    {"value": 101, "id": "AW", "population": 105845, "countryName": "Aruba", "firstCase": "2020-03-13"},
    {"value": 6929, "id": "AU", "population": 24992369, "countryName": "Australia", "firstCase": "2020-01-25"},
    {"value": 15777, "id": "AT", "population": 8847037, "countryName": "Austria", "firstCase": "2020-02-26"},
    {"value": 2422, "id": "AZ", "population": 9942334, "countryName": "Azerbaijan", "firstCase": "2020-02-29"},
    {"value": 92, "id": "BS", "population": 385640, "countryName": "Bahamas", "firstCase": "2020-03-16"},
    {"value": 4774, "id": "BH", "population": 1569439, "countryName": "Bahrain", "firstCase": "2020-02-24"},
    {"value": 13770, "id": "BD", "population": 161356039, "countryName": "Bangladesh", "firstCase": "2020-03-09"},
    {"value": 84, "id": "BB", "population": 286641, "countryName": "Barbados", "firstCase": "2020-03-18"},
    {"value": 22052, "id": "BY", "population": 9485386, "countryName": "Belarus", "firstCase": "2020-02-28"},
    {"value": 52596, "id": "BE", "population": 11422068, "countryName": "Belgium", "firstCase": "2020-02-04"},
    {"value": 18, "id": "BZ", "population": 383071, "countryName": "Belize", "firstCase": "2020-03-24"},
    {"value": 284, "id": "BJ", "population": 11485048, "countryName": "Benin", "firstCase": "2020-03-17"},
    {"value": 118, "id": "BM", "population": 63968, "countryName": "Bermuda", "firstCase": "2020-03-20"},
    {"value": 7, "id": "BT", "population": 754394, "countryName": "Bhutan", "firstCase": "2020-03-06"},
    {"value": 2437, "id": "BO", "population": 11353142, "countryName": "Bolivia", "firstCase": "2020-03-12"},
    {"value": 2070, "id": "BA", "population": 3323929, "countryName": "Bosnia_and_Herzegovina", "firstCase": "2020-03-06"},
    {"value": 23, "id": "BW", "population": 2254126, "countryName": "Botswana", "firstCase": "2020-04-01"},
    {"value": 155939, "id": "BR", "population": 209469333, "countryName": "Brazil", "firstCase": "2020-02-26"},
    {"value": 7, "id": "VG", "population": 29802, "countryName": "British_Virgin_Islands", "firstCase": "2020-03-27"},
    {"value": 141, "id": "BN", "population": 428962, "countryName": "Brunei_Darussalam", "firstCase": "2020-03-10"},
    {"value": 1955, "id": "BG", "population": 7024216, "countryName": "Bulgaria", "firstCase": "2020-03-08"},
    {"value": 748, "id": "BF", "population": 19751535, "countryName": "Burkina_Faso", "firstCase": "2020-03-11"},
    {"value": 19, "id": "BI", "population": 11175378, "countryName": "Burundi", "firstCase": "2020-04-01"},
    {"value": 122, "id": "KH", "population": 16249798, "countryName": "Cambodia", "firstCase": "2020-01-28"},
    {"value": 2274, "id": "CM", "population": 25216237, "countryName": "Cameroon", "firstCase": "2020-03-07"},
    {"value": 67702, "id": "CA", "population": 37058856, "countryName": "Canada", "firstCase": "2020-01-26"},
    {"value": 236, "id": "CV", "population": 543767, "countryName": "Cape_Verde", "firstCase": "2020-03-21"},
    {"value": 81, "id": "KY", "population": 64174, "countryName": "Cayman_Islands", "firstCase": "2020-03-20"},
    {"value": 143, "id": "CF", "population": 4666377, "countryName": "Central_African_Republic", "firstCase": "2020-03-16"},
    {"value": 322, "id": "TD", "population": 15477751, "countryName": "Chad", "firstCase": "2020-03-20"},
    {"value": 27219, "id": "CL", "population": 18729160, "countryName": "Chile", "firstCase": "2020-03-04"},
    {"value": 83991, "id": "CN", "population": 1392730000, "countryName": "China", "firstCase": "2019-12-31"},
    {"value": 10495, "id": "CO", "population": 49648685, "countryName": "Colombia", "firstCase": "2020-03-07"},
    {"value": 11, "id": "KM", "population": 832322, "countryName": "Comoros", "firstCase": "2020-05-02"},
    {"value": 287, "id": "CG", "population": 5244363, "countryName": "Congo", "firstCase": "2020-03-16"},
    {"value": 780, "id": "CR", "population": 4999441, "countryName": "Costa_Rica", "firstCase": "2020-03-07"},
    {"value": 1667, "id": "CI", "population": 25069229, "countryName": "Cote_dIvoire", "firstCase": "2020-03-12"},
    {"value": 2176, "id": "HR", "population": 4089400, "countryName": "Croatia", "firstCase": "2020-02-26"},
    {"value": 1754, "id": "CU", "population": 11338138, "countryName": "Cuba", "firstCase": "2020-03-12"},
    {"value": 16, "id": "CW", "population": 159849, "countryName": "Curau00c3u00a7ao", "firstCase": "2020-03-13"},
    {"value": 892, "id": "CY", "population": 1189265, "countryName": "Cyprus", "firstCase": "2020-03-10"},
    {"value": 8095, "id": "CZ", "population": 10625695, "countryName": "Czechia", "firstCase": "2020-03-02"},
    {"value": 991, "id": "CD", "population": 84068091, "countryName": "Democratic_Republic_of_the_Congo", "firstCase": "2020-03-11"},
    {"value": 10319, "id": "DK", "population": 5797446, "countryName": "Denmark", "firstCase": "2020-02-27"},
    {"value": 1189, "id": "DJ", "population": 958920, "countryName": "Djibouti", "firstCase": "2020-03-19"},
    {"value": 16, "id": "DM", "population": 71625, "countryName": "Dominica", "firstCase": "2020-03-23"},
    {"value": 9882, "id": "DO", "population": 10627165, "countryName": "Dominican_Republic", "firstCase": "2020-03-02"},
    {"value": 29071, "id": "EC", "population": 17084357, "countryName": "Ecuador", "firstCase": "2020-03-01"},
    {"value": 8964, "id": "EG", "population": 98423595, "countryName": "Egypt", "firstCase": "2020-02-15"},
    {"value": 889, "id": "SV", "population": 6420744, "countryName": "El_Salvador", "firstCase": "2020-03-19"},
    {"value": 439, "id": "GQ", "population": 1308974, "countryName": "Equatorial_Guinea", "firstCase": "2020-03-15"},
    {"value": 1733, "id": "EE", "population": 1320884, "countryName": "Estonia", "firstCase": "2020-02-28"},
    {"value": 163, "id": "SZ", "population": 1367000, "countryName": "Eswatini", "firstCase": "2020-03-15"},
    {"value": 210, "id": "ET", "population": 109224559, "countryName": "Ethiopia", "firstCase": "2020-03-14"},
    {"value": 187, "id": "FO", "population": 48497, "countryName": "Faroe_Islands", "firstCase": "2020-03-20"},
    {"value": 18, "id": "FJ", "population": 883483, "countryName": "Fiji", "firstCase": "2020-03-20"},
    {"value": 5880, "id": "FI", "population": 5518050, "countryName": "Finland", "firstCase": "2020-01-30"},
    {"value": 138854, "id": "FR", "population": 66987244, "countryName": "France", "firstCase": "2020-01-25"},
    {"value": 60, "id": "PF", "population": 277679, "countryName": "French_Polynesia", "firstCase": "2020-03-19"},
    {"value": 661, "id": "GA", "population": 2119275, "countryName": "Gabon", "firstCase": "2020-03-13"},
    {"value": 20, "id": "GM", "population": 2280102, "countryName": "Gambia", "firstCase": "2020-03-18"},
    {"value": 626, "id": "GE", "population": 3731000, "countryName": "Georgia", "firstCase": "2020-02-27"},
    {"value": 169218, "id": "DE", "population": 82927922, "countryName": "Germany", "firstCase": "2020-01-28"},
    {"value": 4263, "id": "GH", "population": 29767108, "countryName": "Ghana", "firstCase": "2020-03-13"},
    {"value": 146, "id": "GI", "population": 33718, "countryName": "Gibraltar", "firstCase": "2020-03-20"},
    {"value": 2710, "id": "EL", "population": 10727668, "countryName": "Greece", "firstCase": "2020-02-27"},
    {"value": 11, "id": "GL", "population": 56025, "countryName": "Greenland", "firstCase": "2020-03-20"},
    {"value": 21, "id": "GD", "population": 111454, "countryName": "Grenada", "firstCase": "2020-03-23"},
    {"value": 151, "id": "GU", "population": 165768, "countryName": "Guam", "firstCase": "2020-03-19"},
    {"value": 967, "id": "GT", "population": 17247807, "countryName": "Guatemala", "firstCase": "2020-03-15"},
    {"value": 252, "id": "GG", "population": 63026, "countryName": "Guernsey", "firstCase": "2020-03-20"},
    {"value": 2042, "id": "GN", "population": 12414318, "countryName": "Guinea", "firstCase": "2020-03-14"},
    {"value": 641, "id": "GW", "population": 1874309, "countryName": "Guinea_Bissau", "firstCase": "2020-03-27"},
    {"value": 97, "id": "GY", "population": 779004, "countryName": "Guyana", "firstCase": "2020-03-13"},
    {"value": 151, "id": "HT", "population": 11123176, "countryName": "Haiti", "firstCase": "2020-03-20"},
    {"value": 12, "id": "VA", "population": 1000, "countryName": "Holy_See", "firstCase": "2020-03-07"},
    {"value": 1830, "id": "HN", "population": 9587522, "countryName": "Honduras", "firstCase": "2020-03-12"},
    {"value": 3263, "id": "HU", "population": 9768785, "countryName": "Hungary", "firstCase": "2020-03-05"},
    {"value": 1801, "id": "IS", "population": 353574, "countryName": "Iceland", "firstCase": "2020-02-29"},
    {"value": 62939, "id": "IN", "population": 1352617328, "countryName": "India", "firstCase": "2020-01-30"},
    {"value": 13645, "id": "ID", "population": 267663435, "countryName": "Indonesia", "firstCase": "2020-03-02"},
    {"value": 106220, "id": "IR", "population": 81800269, "countryName": "Iran", "firstCase": "2020-02-20"},
    {"value": 2679, "id": "IQ", "population": 38433600, "countryName": "Iraq", "firstCase": "2020-02-25"},
    {"value": 22760, "id": "IE", "population": 4853506, "countryName": "Ireland", "firstCase": "2020-03-01"},
    {"value": 330, "id": "IM", "population": 84077, "countryName": "Isle_of_Man", "firstCase": "2020-03-21"},
    {"value": 16454, "id": "IL", "population": 8883800, "countryName": "Israel", "firstCase": "2020-02-22"},
    {"value": 218268, "id": "IT", "population": 60431283, "countryName": "Italy", "firstCase": "2020-01-31"},
    {"value": 498, "id": "JM", "population": 2934855, "countryName": "Jamaica", "firstCase": "2020-03-12"},
    {"value": 15747, "id": "JP", "population": 126529100, "countryName": "Japan", "firstCase": "2020-01-15"},
    {"value": 293, "id": "JE", "population": 106800, "countryName": "Jersey", "firstCase": "2020-03-20"},
    {"value": 522, "id": "JO", "population": 9956011, "countryName": "Jordan", "firstCase": "2020-03-03"},
    {"value": 5036, "id": "KZ", "population": 18276499, "countryName": "Kazakhstan", "firstCase": "2020-03-15"},
    {"value": 649, "id": "KE", "population": 51393010, "countryName": "Kenya", "firstCase": "2020-03-14"},
    {"value": 870, "id": "XK", "population": 1845300, "countryName": "Kosovo", "firstCase": "2020-03-16"},
    {"value": 7623, "id": "KW", "population": 4137309, "countryName": "Kuwait", "firstCase": "2020-02-24"},
    {"value": 1002, "id": "KG", "population": 6315800, "countryName": "Kyrgyzstan", "firstCase": "2020-03-19"},
    {"value": 19, "id": "LA", "population": 7061507, "countryName": "Laos", "firstCase": "2020-03-25"},
    {"value": 930, "id": "LV", "population": 1926542, "countryName": "Latvia", "firstCase": "2020-03-03"},
    {"value": 809, "id": "LB", "population": 6848925, "countryName": "Lebanon", "firstCase": "2020-02-22"},
    {"value": 199, "id": "LR", "population": 4818977, "countryName": "Liberia", "firstCase": "2020-03-17"},
    {"value": 64, "id": "LY", "population": 6678567, "countryName": "Libya", "firstCase": "2020-03-25"},
    {"value": 83, "id": "LI", "population": 37910, "countryName": "Liechtenstein", "firstCase": "2020-03-05"},
    {"value": 1444, "id": "LT", "population": 2789533, "countryName": "Lithuania", "firstCase": "2020-02-28"},
    {"value": 3877, "id": "LU", "population": 607728, "countryName": "Luxembourg", "firstCase": "2020-03-01"},
    {"value": 193, "id": "MG", "population": 26262368, "countryName": "Madagascar", "firstCase": "2020-03-21"},
    {"value": 56, "id": "MW", "population": 18143315, "countryName": "Malawi", "firstCase": "2020-04-03"},
    {"value": 6589, "id": "MY", "population": 31528585, "countryName": "Malaysia", "firstCase": "2020-01-25"},
    {"value": 790, "id": "MV", "population": 515696, "countryName": "Maldives", "firstCase": "2020-03-08"},
    {"value": 692, "id": "ML", "population": 19077690, "countryName": "Mali", "firstCase": "2020-03-26"},
    {"value": 490, "id": "MT", "population": 483530, "countryName": "Malta", "firstCase": "2020-03-08"},
    {"value": 8, "id": "MR", "population": 4403319, "countryName": "Mauritania", "firstCase": "2020-03-15"},
    {"value": 332, "id": "MU", "population": 1265303, "countryName": "Mauritius", "firstCase": "2020-03-20"},
    {"value": 33460, "id": "MX", "population": 126190788, "countryName": "Mexico", "firstCase": "2020-02-29"},
    {"value": 4867, "id": "MD", "population": 3545883, "countryName": "Moldova", "firstCase": "2020-03-08"},
    {"value": 96, "id": "MC", "population": 38682, "countryName": "Monaco", "firstCase": "2020-02-29"},
    {"value": 42, "id": "MN", "population": 3170208, "countryName": "Mongolia", "firstCase": "2020-03-10"},
    {"value": 324, "id": "ME", "population": 622345, "countryName": "Montenegro", "firstCase": "2020-03-18"},
    {"value": 11, "id": "MS", "population": 5900, "countryName": "Montserrat", "firstCase": "2020-03-21"},
    {"value": 5910, "id": "MA", "population": 36029138, "countryName": "Morocco", "firstCase": "2020-03-03"},
    {"value": 87, "id": "MZ", "population": 29495962, "countryName": "Mozambique", "firstCase": "2020-03-23"},
    {"value": 178, "id": "MM", "population": 53708395, "countryName": "Myanmar", "firstCase": "2020-03-24"},
    {"value": 109, "id": "NP", "population": 28087871, "countryName": "Nepal", "firstCase": "2020-01-25"},
    {"value": 42382, "id": "NL", "population": 17231017, "countryName": "Netherlands", "firstCase": "2020-02-28"},
    {"value": 18, "id": "NC", "population": 284060, "countryName": "New_Caledonia", "firstCase": "2020-03-21"},
    {"value": 1144, "id": "NZ", "population": 4885500, "countryName": "New_Zealand", "firstCase": "2020-02-28"},
    {"value": 16, "id": "NI", "population": 6465513, "countryName": "Nicaragua", "firstCase": "2020-03-19"},
    {"value": 815, "id": "NE", "population": 22442948, "countryName": "Niger", "firstCase": "2020-03-21"},
    {"value": 4151, "id": "NG", "population": 195874740, "countryName": "Nigeria", "firstCase": "2020-02-28"},
    {"value": 1622, "id": "MK", "population": 2082958, "countryName": "North_Macedonia", "firstCase": "2020-02-27"},
    {"value": 16, "id": "MP", "population": 56882, "countryName": "Northern_Mariana_Islands", "firstCase": "2020-03-31"},
    {"value": 8069, "id": "NO", "population": 5314336, "countryName": "Norway", "firstCase": "2020-02-27"},
    {"value": 3224, "id": "OM", "population": 4829483, "countryName": "Oman", "firstCase": "2020-02-25"},
    {"value": 29465, "id": "PK", "population": 212215030, "countryName": "Pakistan", "firstCase": "2020-02-27"},
    {"value": 547, "id": "PS", "population": 4569087, "countryName": "Palestine", "firstCase": "2020-03-06"},
    {"value": 8282, "id": "PA", "population": 4176873, "countryName": "Panama", "firstCase": "2020-03-10"},
    {"value": 8, "id": "PG", "population": 8606316, "countryName": "Papua_New_Guinea", "firstCase": "2020-03-21"},
    {"value": 689, "id": "PY", "population": 6956071, "countryName": "Paraguay", "firstCase": "2020-03-08"},
    {"value": 65015, "id": "PE", "population": 31989256, "countryName": "Peru", "firstCase": "2020-03-07"},
    {"value": 10610, "id": "PH", "population": 106651922, "countryName": "Philippines", "firstCase": "2020-01-30"},
    {"value": 15651, "id": "PL", "population": 37978548, "countryName": "Poland", "firstCase": "2020-03-04"},
    {"value": 27406, "id": "PT", "population": 10281762, "countryName": "Portugal", "firstCase": "2020-03-03"},
    {"value": 2173, "id": "PR", "population": 3195153, "countryName": "Puerto_Rico", "firstCase": "2020-03-28"},
    {"value": 21331, "id": "QA", "population": 2781677, "countryName": "Qatar", "firstCase": "2020-03-01"},
    {"value": 15131, "id": "RO", "population": 19473936, "countryName": "Romania", "firstCase": "2020-02-27"},
    {"value": 198676, "id": "RU", "population": 144478050, "countryName": "Russia", "firstCase": "2020-02-01"},
    {"value": 280, "id": "RW", "population": 12301939, "countryName": "Rwanda", "firstCase": "2020-03-15"},
    {"value": 15, "id": "KN", "population": 52441, "countryName": "Saint_Kitts_and_Nevis", "firstCase": "2020-03-26"},
    {"value": 18, "id": "LC", "population": 181889, "countryName": "Saint_Lucia", "firstCase": "2020-03-15"},
    {"value": 17, "id": "VC", "population": 110210, "countryName": "Saint_Vincent_and_the_Grenadines", "firstCase": "2020-03-13"},
    {"value": 637, "id": "SM", "population": 33785, "countryName": "San_Marino", "firstCase": "2020-02-28"},
    {"value": 208, "id": "ST", "population": 211028, "countryName": "Sao_Tome_and_Principe", "firstCase": "2020-04-09"},
    {"value": 37136, "id": "SA", "population": 33699947, "countryName": "Saudi_Arabia", "firstCase": "2020-03-03"},
    {"value": 1634, "id": "SN", "population": 15854360, "countryName": "Senegal", "firstCase": "2020-03-03"},
    {"value": 10032, "id": "RS", "population": 6982084, "countryName": "Serbia", "firstCase": "2020-03-07"},
    {"value": 11, "id": "SC", "population": 96762, "countryName": "Seychelles", "firstCase": "2020-03-15"},
    {"value": 291, "id": "SL", "population": 7650154, "countryName": "Sierra_Leone", "firstCase": "2020-04-01"},
    {"value": 22460, "id": "SG", "population": 5638676, "countryName": "Singapore", "firstCase": "2020-01-24"},
    {"value": 76, "id": "SX", "population": 41486, "countryName": "Sint_Maarten", "firstCase": "2020-03-03"},
    {"value": 1455, "id": "SK", "population": 5447011, "countryName": "Slovakia", "firstCase": "2020-03-07"},
    {"value": 1454, "id": "SI", "population": 2067372, "countryName": "Slovenia", "firstCase": "2020-03-05"},
    {"value": 997, "id": "SO", "population": 15008154, "countryName": "Somalia", "firstCase": "2020-03-17"},
    {"value": 9420, "id": "ZA", "population": 57779622, "countryName": "South_Africa", "firstCase": "2020-03-06"},
    {"value": 10874, "id": "KR", "population": 51635256, "countryName": "South_Korea", "firstCase": "2020-01-20"},
    {"value": 143, "id": "SS", "population": 10975920, "countryName": "South_Sudan", "firstCase": "2020-04-06"},
    {"value": 223578, "id": "ES", "population": 46723749, "countryName": "Spain", "firstCase": "2020-02-01"},
    {"value": 847, "id": "LK", "population": 21670000, "countryName": "Sri_Lanka", "firstCase": "2020-01-28"},
    {"value": 1164, "id": "SD", "population": 41801533, "countryName": "Sudan", "firstCase": "2020-03-14"},
    {"value": 10, "id": "SR", "population": 575991, "countryName": "Suriname", "firstCase": "2020-03-15"},
    {"value": 25921, "id": "SE", "population": 10183175, "countryName": "Sweden", "firstCase": "2020-02-01"},
    {"value": 30168, "id": "CH", "population": 8516543, "countryName": "Switzerland", "firstCase": "2020-02-26"},
    {"value": 47, "id": "SY", "population": 16906283, "countryName": "Syria", "firstCase": "2020-03-23"},
    {"value": 440, "id": "TW", "population": 23780452, "countryName": "Taiwan", "firstCase": "2020-01-21"},
    {"value": 612, "id": "TJ", "population": 9100837, "countryName": "Tajikistan", "firstCase": "2020-05-01"},
    {"value": 3004, "id": "TH", "population": 69428524, "countryName": "Thailand", "firstCase": "2020-01-13"},
    {"value": 24, "id": "TL", "population": 1267972, "countryName": "Timor_Leste", "firstCase": "2020-03-22"},
    {"value": 153, "id": "TG", "population": 7889094, "countryName": "Togo", "firstCase": "2020-03-07"},
    {"value": 116, "id": "TT", "population": 1389858, "countryName": "Trinidad_and_Tobago", "firstCase": "2020-03-13"},
    {"value": 1032, "id": "TN", "population": 11565204, "countryName": "Tunisia", "firstCase": "2020-03-03"},
    {"value": 137115, "id": "TR", "population": 82319724, "countryName": "Turkey", "firstCase": "2020-03-12"},
    {"value": 12, "id": "TC", "population": 31458, "countryName": "Turks_and_Caicos_islands", "firstCase": "2020-03-25"},
    {"value": 116, "id": "UG", "population": 42723139, "countryName": "Uganda", "firstCase": "2020-03-22"},
    {"value": 14710, "id": "UA", "population": 44622516, "countryName": "Ukraine", "firstCase": "2020-03-04"},
    {"value": 17417, "id": "AE", "population": 9630959, "countryName": "United_Arab_Emirates", "firstCase": "2020-01-27"},
    {"value": 215260, "id": "UK", "population": 66488991, "countryName": "United_Kingdom", "firstCase": "2020-01-31"},
    {"value": 509, "id": "TZ", "population": 56318348, "countryName": "United_Republic_of_Tanzania", "firstCase": "2020-03-17"},
    {"value": 1309541, "id": "US", "population": 327167434, "countryName": "United_States_of_America", "firstCase": "2020-01-21"},
    {"value": 69, "id": "VI", "population": 106977, "countryName": "United_States_Virgin_Islands", "firstCase": "2020-03-24"},
    {"value": 702, "id": "UY", "population": 3449299, "countryName": "Uruguay", "firstCase": "2020-03-15"},
    {"value": 2387, "id": "UZ", "population": 32955400, "countryName": "Uzbekistan", "firstCase": "2020-03-16"},
    {"value": 402, "id": "VE", "population": 28870195, "countryName": "Venezuela", "firstCase": "2020-03-15"},
    {"value": 288, "id": "VN", "population": 95540395, "countryName": "Vietnam", "firstCase": "2020-01-24"},
    {"value": 34, "id": "YE", "population": 28498687, "countryName": "Yemen", "firstCase": "2020-04-10"},
    {"value": 252, "id": "ZM", "population": 17351822, "countryName": "Zambia", "firstCase": "2020-03-19"},
    {"value": 36, "id": "ZW", "population": 14439018, "countryName": "Zimbabwe", "firstCase": "2020-03-21"}
]