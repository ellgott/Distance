const locs = {
  "Kabul": {
    "country": "Afghanistan",
    "lat": "34.28N",
    "lon": "69.11E"
  },
  "Tirana": {
    "country": "Albania",
    "lat": "41.18N",
    "lon": "19.49E"
  },
  "Algiers": {
    "country": "Algeria",
    "lat": "36.42N",
    "lon": "03.08E"
  },
  "Pago Pago": {
    "country": "American Samoa",
    "lat": "14.16S",
    "lon": "170.43W"
  },
  "Andorra la Vella": {
    "country": "Andorra",
    "lat": "42.31N",
    "lon": "01.32E"
  },
  "Luanda": {
    "country": "Angola",
    "lat": "08.50S",
    "lon": "13.15E"
  },
  "Saint John's": {
    "country": "Antigua and Barbuda",
    "lat": "17.127N",
    "lon": "61.846W"
  },
  "Buenos Aires": {
    "country": "Argentina",
    "lat": "36.30S",
    "lon": "60.00W"
  },
  "Yerevan": {
    "country": "Armenia",
    "lat": "40.10N",
    "lon": "44.31E"
  },
  "Oranjestad": {
    "country": "Aruba",
    "lat": "12.32N",
    "lon": "70.02W"
  },
  "Canberra": {
    "country": "Australia",
    "lat": "35.15S",
    "lon": "149.08E"
  },
  "Vienna": {
    "country": "Austria",
    "lat": "48.12N",
    "lon": "16.22E"
  },
  "Baku": {
    "country": "Azerbaijan",
    "lat": "40.29N",
    "lon": "49.56E"
  },
  "Nassau": {
    "country": "Bahamas",
    "lat": "25.05N",
    "lon": "77.20W"
  },
  "Manama": {
    "country": "Bahrain",
    "lat": "26.10N",
    "lon": "50.30E"
  },
  "Dhaka": {
    "country": "Bangladesh",
    "lat": "23.43N",
    "lon": "90.26E"
  },
  "Bridgetown": {
    "country": "Barbados",
    "lat": "13.05N",
    "lon": "59.30W"
  },
  "Minsk": {
    "country": "Belarus",
    "lat": "53.52N",
    "lon": "27.30E"
  },
  "Brussels": {
    "country": "Belgium",
    "lat": "50.51N",
    "lon": "04.21E"
  },
  "Belmopan": {
    "country": "Belize",
    "lat": "17.18N",
    "lon": "88.30W"
  },
  "Porto Novo": {
    "country": "Benin",
    "lat": "06.23N",
    "lon": "02.42E"
  },
  "Thimphu": {
    "country": "Bhutan",
    "lat": "27.31N",
    "lon": "89.45E"
  },
  "La Paz (administrative) ": {},
  "Sarajevo": {
    "country": "Bosnia and Herzegovina",
    "lat": "43.52N",
    "lon": "18.26E"
  },
  "Gaborone": {
    "country": "Botswana",
    "lat": "24.45S",
    "lon": "25.57E"
  },
  "Brasilia": {
    "country": "Brazil",
    "lat": "15.47S",
    "lon": "47.55W"
  },
  "Road Town": {
    "country": "British Virgin Islands",
    "lat": "18.27N",
    "lon": "64.37W"
  },
  "Bandar Seri Begawan": {
    "country": "Brunei Darussalam",
    "lat": "04.52N",
    "lon": "115.00E"
  },
  "Sofia": {
    "country": "Bulgaria",
    "lat": "42.45N",
    "lon": "23.20E"
  },
  "Ouagadougou": {
    "country": "Burkina Faso",
    "lat": "12.15N",
    "lon": "01.30W"
  },
  "Bujumbura": {
    "country": "Burundi",
    "lat": "03.16S",
    "lon": "29.18E"
  },
  "Phnom Penh": {
    "country": "Cambodia",
    "lat": "11.33N",
    "lon": "104.55E"
  },
  "Yaounde": {
    "country": "Cameroon",
    "lat": "03.50N",
    "lon": "11.35E"
  },
  "Ottawa": {
    "country": "Canada",
    "lat": "45.27N",
    "lon": "75.42W"
  },
  "Praia": {
    "country": "Cape Verde",
    "lat": "15.02N",
    "lon": "23.34W"
  },
  "George Town": {
    "country": "Cayman Islands",
    "lat": "19.20N",
    "lon": "81.24W"
  },
  "Bangui": {
    "country": "Central African Republic",
    "lat": "04.23N",
    "lon": "18.35E"
  },
  "N'Djamena": {
    "country": "Chad",
    "lat": "12.10N",
    "lon": "14.59E"
  },
  "Santiago": {
    "country": "Chile",
    "lat": "33.24S",
    "lon": "70.40W"
  },
  "Beijing": {
    "country": "China",
    "lat": "39.55N",
    "lon": "116.20E"
  },
  "Bogota": {
    "country": "Colombia",
    "lat": "04.34N",
    "lon": "74.00W"
  },
  "Moroni": {
    "country": "Comros",
    "lat": "11.40S",
    "lon": "43.16E"
  },
  "Brazzaville": {
    "country": "Congo",
    "lat": "04.09S",
    "lon": "15.12E"
  },
  "San Jose": {
    "country": "Costa Rica",
    "lat": "09.55N",
    "lon": "84.02W"
  },
  "Yamoussoukro": {
    "country": "Cote d'Ivoire",
    "lat": "06.49N",
    "lon": "05.17W"
  },
  "Zagreb": {
    "country": "Croatia",
    "lat": "45.50N",
    "lon": "15.58E"
  },
  "Havana": {
    "country": "Cuba",
    "lat": "23.08N",
    "lon": "82.22W"
  },
  "Nicosia": {
    "country": "Cyprus",
    "lat": "35.10N",
    "lon": "33.25E"
  },
  "Prague": {
    "country": "Czech Republic",
    "lat": "50.05N",
    "lon": "14.22E"
  },
  "Kinshasa": {
    "country": "Democratic Republic of the Congo",
    "lat": "04.20S",
    "lon": "15.15E"
  },
  "Copenhagen": {
    "country": "Denmark",
    "lat": "55.41N",
    "lon": "12.34E"
  },
  "Djibouti": {
    "country": "Djibouti",
    "lat": "11.08N",
    "lon": "42.20E"
  },
  "Roseau": {
    "country": "Dominica",
    "lat": "15.20N",
    "lon": "61.24W"
  },
  "Santo Domingo": {
    "country": "Dominica Republic",
    "lat": "18.30N",
    "lon": "69.59W"
  },
  "Dili": {
    "country": "East Timor",
    "lat": "08.29S",
    "lon": "125.34E"
  },
  "Quito": {
    "country": "Ecuador",
    "lat": "00.15S",
    "lon": "78.35W"
  },
  "Cairo": {
    "country": "Egypt",
    "lat": "30.01N",
    "lon": "31.14E"
  },
  "San Salvador": {
    "country": "El Salvador",
    "lat": "13.40N",
    "lon": "89.10W"
  },
  "Malabo": {
    "country": "Equatorial Guinea",
    "lat": "03.45N",
    "lon": "08.50E"
  },
  "Asmara": {
    "country": "Eritrea",
    "lat": "15.19N",
    "lon": "38.55E"
  },
  "Tallinn": {
    "country": "Estonia",
    "lat": "59.22N",
    "lon": "24.48E"
  },
  "Addis Ababa": {
    "country": "Ethiopia",
    "lat": "09.02N",
    "lon": "38.42E"
  },
  "Stanley": {
    "country": "Falkland Islands (Malvinas)",
    "lat": "51.40S",
    "lon": "59.51W"
  },
  "Torshavn": {
    "country": "Faroe Islands",
    "lat": "62.05N",
    "lon": "06.56W"
  },
  "Suva": {
    "country": "Fiji",
    "lat": "18.06S",
    "lon": "178.30E"
  },
  "Helsinki": {
    "country": "Finland",
    "lat": "60.15N",
    "lon": "25.03E"
  },
  "Paris": {
    "country": "France",
    "lat": "48.50N",
    "lon": "02.20E"
  },
  "Cayenne": {
    "country": "French Guiana",
    "lat": "05.05N",
    "lon": "52.18W"
  },
  "Papeete": {
    "country": "French Polynesia",
    "lat": "17.32S",
    "lon": "149.34W"
  },
  "Libreville": {
    "country": "Gabon",
    "lat": "00.25N",
    "lon": "09.26E"
  },
  "Banjul": {
    "country": "Gambia",
    "lat": "13.28N",
    "lon": "16.40W"
  },
  "T'bilisi": {
    "country": "Georgia",
    "lat": "41.43N",
    "lon": "44.50E"
  },
  "Berlin": {
    "country": "Germany",
    "lat": "52.30N",
    "lon": "13.25E"
  },
  "Accra": {
    "country": "Ghana",
    "lat": "05.35N",
    "lon": "00.06W"
  },
  "Athens": {
    "country": "Greece",
    "lat": "37.58N",
    "lon": "23.46E"
  },
  "Nuuk": {
    "country": "Greenland",
    "lat": "64.10N",
    "lon": "51.35W"
  },
  "Basse-Terre": {
    "country": "Guadeloupe",
    "lat": "16.00N",
    "lon": "61.44W"
  },
  "Guatemala": {
    "country": "Guatemala",
    "lat": "14.40N",
    "lon": "90.22W"
  },
  "St. Peter Port": {
    "country": "Guernsey",
    "lat": "49.26N",
    "lon": "02.33W"
  },
  "Conakry": {
    "country": "Guinea",
    "lat": "09.29N",
    "lon": "13.49W"
  },
  "Bissau": {
    "country": "Guinea-Bissau",
    "lat": "11.45N",
    "lon": "15.45W"
  },
  "Georgetown": {
    "country": "Guyana",
    "lat": "06.50N",
    "lon": "58.12W"
  },
  "Port-au-Prince": {
    "country": "Haiti",
    "lat": "18.40N",
    "lon": "72.20W"
  },
  "Tegucigalpa": {
    "country": "Honduras",
    "lat": "14.05N",
    "lon": "87.14W"
  },
  "Budapest": {
    "country": "Hungary",
    "lat": "47.29N",
    "lon": "19.05E"
  },
  "Reykjavik": {
    "country": "Iceland",
    "lat": "64.10N",
    "lon": "21.57W"
  },
  "New Delhi": {
    "country": "India",
    "lat": "28.37N",
    "lon": "77.13E"
  },
  "Jakarta": {
    "country": "Indonesia",
    "lat": "06.09S",
    "lon": "106.49E"
  },
  "Tehran": {
    "country": "Iran (Islamic Republic of)",
    "lat": "35.44N",
    "lon": "51.30E"
  },
  "Baghdad": {
    "country": "Iraq",
    "lat": "33.20N",
    "lon": "44.30E"
  },
  "Dublin": {
    "country": "Ireland",
    "lat": "53.21N",
    "lon": "06.15W"
  },
  "Jerusalem": {
    "country": "Israel",
    "lat": "31.71N",
    "lon": "35.10W"
  },
  "Rome": {
    "country": "Italy",
    "lat": "41.54N",
    "lon": "12.29E"
  },
  "Kingston": {
    "country": "Jamaica",
    "lat": "18.00N",
    "lon": "76.50W"
  },
  "Amman": {
    "country": "Jordan",
    "lat": "31.57N",
    "lon": "35.52E"
  },
  "Astana": {
    "country": "Kazakhstan",
    "lat": "51.10N",
    "lon": "71.30E"
  },
  "Nairobi": {
    "country": "Kenya",
    "lat": "01.17S",
    "lon": "36.48E"
  },
  "Tarawa": {
    "country": "Kiribati",
    "lat": "01.30N",
    "lon": "173.00E"
  },
  "Kuwait": {
    "country": "Kuwait",
    "lat": "29.30N",
    "lon": "48.00E"
  },
  "Bishkek": {
    "country": "Kyrgyzstan",
    "lat": "42.54N",
    "lon": "74.46E"
  },
  "Vientiane": {
    "country": "Lao People's Democratic Republic",
    "lat": "17.58N",
    "lon": "102.36E"
  },
  "Riga": {
    "country": "Latvia",
    "lat": "56.53N",
    "lon": "24.08E"
  },
  "Beirut": {
    "country": "Lebanon",
    "lat": "33.53N",
    "lon": "35.31E"
  },
  "Maseru": {
    "country": "Lesotho",
    "lat": "29.18S",
    "lon": "27.30E"
  },
  "Monrovia": {
    "country": "Liberia",
    "lat": "06.18N",
    "lon": "10.47W"
  },
  "Tripoli": {
    "country": "Libyan Arab Jamahiriya",
    "lat": "32.49N",
    "lon": "13.07E"
  },
  "Vaduz": {
    "country": "Liechtenstein",
    "lat": "47.08N",
    "lon": "09.31E"
  },
  "Vilnius": {
    "country": "Lithuania",
    "lat": "54.38N",
    "lon": "25.19E"
  },
  "Luxembourg": {
    "country": "Luxembourg",
    "lat": "49.37N",
    "lon": "06.09E"
  },
  "Macau": {
    "country": "Macao, China",
    "lat": "22.12N",
    "lon": "113.33E"
  },
  "Antananarivo": {
    "country": "Madagascar",
    "lat": "18.55S",
    "lon": "47.31E"
  },
  "Skopje": {
    "country": "Macedonia (Former Yugoslav Republic)",
    "lat": "42.01N",
    "lon": "21.26E"
  },
  "Lilongwe": {
    "country": "Malawi",
    "lat": "14.00S",
    "lon": "33.48E"
  },
  "Kuala Lumpur": {
    "country": "Malaysia",
    "lat": "03.09N",
    "lon": "101.41E"
  },
  "Male": {
    "country": "Maldives",
    "lat": "04.00N",
    "lon": "73.28E"
  },
  "Bamako": {
    "country": "Mali",
    "lat": "12.34N",
    "lon": "07.55W"
  },
  "Valletta": {
    "country": "Malta",
    "lat": "35.54N",
    "lon": "14.31E"
  },
  "Fort-de-France": {
    "country": "Martinique",
    "lat": "14.36N",
    "lon": "61.02W"
  },
  "Nouakchott": {
    "country": "Mauritania",
    "lat": "20.10S",
    "lon": "57.30E"
  },
  "Mamoudzou": {
    "country": "Mayotte",
    "lat": "12.48S",
    "lon": "45.14E"
  },
  "Mexico": {
    "country": "Mexico",
    "lat": "19.20N",
    "lon": "99.10W"
  },
  "Palikir": {
    "country": "Micronesia (Federated States of)",
    "lat": "06.55N",
    "lon": "158.09E"
  },
  "Chisinau": {
    "country": "Moldova, Republic of",
    "lat": "47.02N",
    "lon": "28.50E"
  },
  "Maputo": {
    "country": "Mozambique",
    "lat": "25.58S",
    "lon": "32.32E"
  },
  "Yangon": {
    "country": "Myanmar",
    "lat": "16.45N",
    "lon": "96.20E"
  },
  "Windhoek": {
    "country": "Namibia",
    "lat": "22.35S",
    "lon": "17.04E"
  },
  "Kathmandu": {
    "country": "Nepal",
    "lat": "27.45N",
    "lon": "85.20E"
  },
  "Amsterdam": {
    "country": "Netherlands",
    "lat": "52.23N",
    "lon": "04.54E"
  },
  "Willemstad": {
    "country": "Netherlands Antilles",
    "lat": "12.05N",
    "lon": "69.00W"
  },
  "Noumea": {
    "country": "New Caledonia",
    "lat": "22.17S",
    "lon": "166.30E"
  },
  "Wellington": {
    "country": "New Zealand",
    "lat": "41.19S",
    "lon": "174.46E"
  },
  "Managua": {
    "country": "Nicaragua",
    "lat": "12.06N",
    "lon": "86.20W"
  },
  "Niamey": {
    "country": "Niger",
    "lat": "13.27N",
    "lon": "02.06E"
  },
  "Abuja": {
    "country": "Nigeria",
    "lat": "09.05N",
    "lon": "07.32E"
  },
  "Pyongyang": {
    "country": "North Korea",
    "lat": "39.09N",
    "lon": "125.30E"
  },
  "Saipan": {
    "country": "Northern Mariana Islands",
    "lat": "15.12N",
    "lon": "145.45E"
  },
  "Oslo": {
    "country": "Norway",
    "lat": "59.55N",
    "lon": "10.45E"
  },
  "Masqat": {
    "country": "Oman",
    "lat": "23.37N",
    "lon": "58.36E"
  },
  "Islamabad": {
    "country": "Pakistan",
    "lat": "33.40N",
    "lon": "73.10E"
  },
  "Ngerulmud": {
    "country": "Palau",
    "lat": ")7.5004N",
    "lon": "134.6243E"
  },
  "Panama": {
    "country": "Panama",
    "lat": "09.00N",
    "lon": "79.25W"
  },
  "Port Moresby": {
    "country": "Papua New Guinea",
    "lat": "09.24S",
    "lon": "147.08E"
  },
  "Asuncion": {
    "country": "Paraguay",
    "lat": "25.10S",
    "lon": "57.30W"
  },
  "Lima": {
    "country": "Peru",
    "lat": "12.00S",
    "lon": "77.00W"
  },
  "Manila": {
    "country": "Philippines",
    "lat": "14.40N",
    "lon": "121.03E"
  },
  "Warsaw": {
    "country": "Poland",
    "lat": "52.13N",
    "lon": "21.00E"
  },
  "Lisbon": {
    "country": "Portugal",
    "lat": "38.42N",
    "lon": "09.10W"
  },
  "San Juan": {
    "country": "Puerto Rico",
    "lat": "18.28N",
    "lon": "66.07W"
  },
  "Doha": {
    "country": "Qatar",
    "lat": "25.15N",
    "lon": "51.35E"
  },
  "Seoul": {
    "country": "Republic of Korea",
    "lat": "37.31N",
    "lon": "126.58E"
  },
  "Bucuresti": {
    "country": "Romania",
    "lat": "44.27N",
    "lon": "26.10E"
  },
  "Moskva": {
    "country": "Russian Federation",
    "lat": "55.45N",
    "lon": "37.35E"
  },
  "Kigali": {
    "country": "Rawanda",
    "lat": "01.59S",
    "lon": "30.04E"
  },
  "Basseterre": {
    "country": "Saint Kitts and Nevis",
    "lat": "17.17N",
    "lon": "62.43W"
  },
  "Castries": {
    "country": "Saint Lucia",
    "lat": "14.02N",
    "lon": "60.58W"
  },
  "Saint-Pierre": {
    "country": "Saint Pierre and Miquelon",
    "lat": "46.46N",
    "lon": "56.12W"
  },
  "Kingstown": {
    "country": "Saint Vincent and the Greenadines",
    "lat": "13.10N",
    "lon": "61.10W"
  },
  "Apia": {
    "country": "Samoa",
    "lat": "13.50S",
    "lon": "171.50W"
  },
  "San Marino": {
    "country": "San Marino",
    "lat": "43.55N",
    "lon": "12.30E"
  },
  "Sao Tome": {
    "country": "Sao Tome and Principe",
    "lat": "00.10N",
    "lon": "06.39E"
  },
  "Riyadh": {
    "country": "Saudi Arabia",
    "lat": "24.41N",
    "lon": "46.42E"
  },
  "Dakar": {
    "country": "Senegal",
    "lat": "14.34N",
    "lon": "17.29W"
  },
  "Freetown": {
    "country": "Sierra Leone",
    "lat": "08.30N",
    "lon": "13.17W"
  },
  "Bratislava": {
    "country": "Slovakia",
    "lat": "48.10N",
    "lon": "17.07E"
  },
  "Ljubljana": {
    "country": "Slovenia",
    "lat": "46.04N",
    "lon": "14.33E"
  },
  "Honiara": {
    "country": "Solomon Islands",
    "lat": "09.27S",
    "lon": "159.57E"
  },
  "Mogadishu": {
    "country": "Somalia",
    "lat": "02.02N",
    "lon": "45.25E"
  },
  "Pretoria (administrative)": {},
  "Madrid": {
    "country": "Spain",
    "lat": "40.25N",
    "lon": "03.45W"
  },
  "Khartoum": {
    "country": "Sudan",
    "lat": "15.31N",
    "lon": "32.35E"
  },
  "Paramaribo": {
    "country": "Suriname",
    "lat": "05.50N",
    "lon": "55.10W"
  },
  "Mbabane": {
    "country": "Swaziland",
    "lat": "26.18S",
    "lon": "31.06E"
  },
  "Stockholm": {
    "country": "Sweden",
    "lat": "59.20N",
    "lon": "18.03E"
  },
  "Bern": {
    "country": "Switzerland",
    "lat": "46.57N",
    "lon": "07.28E"
  },
  "Damascus": {
    "country": "Syrian Arab Republic",
    "lat": "33.30N",
    "lon": "36.18E"
  },
  "Dushanbe": {
    "country": "Tajikistan",
    "lat": "38.33N",
    "lon": "68.48E"
  },
  "Bangkok": {
    "country": "Thailand",
    "lat": "13.45N",
    "lon": "100.35E"
  },
  "Lome": {
    "country": "Togo",
    "lat": "06.09N",
    "lon": "01.20E"
  },
  "Nuku'alofa": {
    "country": "Tonga",
    "lat": "21.10S",
    "lon": "174.00W"
  },
  "Tunis": {
    "country": "Tunisia",
    "lat": "36.50N",
    "lon": "10.11E"
  },
  "Ankara": {
    "country": "Turkey",
    "lat": "39.57N",
    "lon": "32.54E"
  },
  "Ashgabat": {
    "country": "Turkmenistan",
    "lat": "38.00N",
    "lon": "57.50E"
  },
  "Funafuti": {
    "country": "Tuvalu",
    "lat": "08.31S",
    "lon": "179.13E"
  },
  "Kampala": {
    "country": "Uganda",
    "lat": "00.20N",
    "lon": "32.30E"
  },
  "Kiev": {
    "country": "Ukraine",
    "lat": "50.30N",
    "lon": "30.28E"
  },
  "Abu Dhabi": {
    "country": "United Arab Emirates",
    "lat": "24.28N",
    "lon": "54.22E"
  },
  "London": {
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "lat": "51.36N",
    "lon": "00.05W"
  },
  "Dodoma": {
    "country": "United Republic of Tanzania",
    "lat": "06.08S",
    "lon": "35.45E"
  },
  "Washington DC": {
    "country": "United States of America",
    "lat": "39.91N",
    "lon": "77.02W"
  },
  "Charlotte Amalie": {
    "country": "United States of Virgin Islands",
    "lat": "18.21N",
    "lon": "64.56W"
  },
  "Montevideo": {
    "country": "Uruguay",
    "lat": "34.50S",
    "lon": "56.11W"
  },
  "Tashkent": {
    "country": "Uzbekistan",
    "lat": "41.20N",
    "lon": "69.10E"
  },
  "Port-Vila": {
    "country": "Vanuatu",
    "lat": "17.45S",
    "lon": "168.18E"
  },
  "Caracas": {
    "country": "Venezuela",
    "lat": "10.30N",
    "lon": "66.55W"
  },
  "Hanoi": {
    "country": "Viet Nam",
    "lat": "21.05N",
    "lon": "105.55E"
  },
  "Belgrade": {
    "country": "Yugoslavia",
    "lat": "44.50N",
    "lon": "20.37E"
  },
  "Lusaka": {
    "country": "Zambia",
    "lat": "15.28S",
    "lon": "28.16E"
  },
  "Harare": {
    "country": "Zimbabwe",
    "lat": "17.43S",
    "lon": "31.02E"
  }
};