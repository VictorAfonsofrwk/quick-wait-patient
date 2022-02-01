export interface IPlaceModel {
    id: string;
    type: string;
    place_type: ["poi"];
    relevance: number;
    properties: {
        foursquare: string;
        landmark: true;
        category: string;
        maki: string;
        address?: string;
    };
    "text_pt-PT": string;
    "place_name_pt-PT": string;
    text: string;
    place_name: string;
    /**
     * O Array deve ser exatamente nesse ordem:
     * @ longitude, latatiude
     */
    center: Array<number>;
    geometry: {
        /**
         * O Array deve ser exatamente nesse ordem:
         * @ longitude, latatiude
         */
        coordinates: Array<number>;
        type: "Point";
    };
    context: Array<{
        id: string;
        short_code?: string;
        wikidata?: string;
        "text_pt-PT"?: string;
        "language_pt-PT"?: string;
        text: string;
        language?: string;
    }>;
}

export const mockedplaces: Array<IPlaceModel> = [
    {
        id: "poi.1065151939176",
        type: "Feature",
        place_type: ["poi"],
        relevance: 1,
        properties: {
            foursquare: "4fb2be42e4b01462ac5b9025",
            landmark: true,
            category: "hospital, clinic, medical center",
            maki: "hospital",
        },
        "text_pt-PT": "Hospital de Upala",
        "place_name_pt-PT":
            "Hospital de Upala, Upala, Alajuela 21301, Costa Rica",
        text: "Hospital de Upala",
        place_name: "Hospital de Upala, Upala, Alajuela 21301, Costa Rica",
        center: [-85.024312, 10.897712],
        geometry: {
            coordinates: [-85.024312, 10.897712],
            type: "Point",
        },
        context: [
            {
                id: "postcode.13249025894122640",
                "text_pt-PT": "21301",
                text: "21301",
            },
            {
                id: "place.12010734574580120",
                "text_pt-PT": "Upala",
                text: "Upala",
            },
            {
                id: "region.10233680623896850",
                short_code: "CR-A",
                wikidata: "Q502188",
                "text_pt-PT": "Alajuela",
                "language_pt-PT": "pt",
                text: "Alajuela",
                language: "pt",
            },
            {
                id: "country.9179111388611280",
                wikidata: "Q800",
                short_code: "cr",
                "text_pt-PT": "Costa Rica",
                "language_pt-PT": "pt",
                text: "Costa Rica",
                language: "pt",
            },
        ],
    },
    {
        id: "poi.635655163902",
        type: "Feature",
        place_type: ["poi"],
        relevance: 0.5,
        properties: {
            foursquare: "4f60a252e4b05c3a92bebbb5",
            landmark: true,
            category: "hospital, clinic, medical center",
            maki: "hospital",
        },
        "text_pt-PT": "Hospital Ermírio Coutinho",
        "place_name_pt-PT":
            "Hospital Ermírio Coutinho, Nazaré da Mata, Pernambuco, Brasil",
        text: "Hospital Ermírio Coutinho",
        place_name:
            "Hospital Ermírio Coutinho, Nazaré da Mata, Pernambuco, Brasil",
        center: [-35.22885, -7.744132],
        geometry: {
            coordinates: [-35.22885, -7.744132],
            type: "Point",
        },
        context: [
            {
                id: "place.12594317552667860",
                wikidata: "Q1811182",
                "text_pt-PT": "Nazaré da Mata",
                "language_pt-PT": "pt",
                text: "Nazaré da Mata",
                language: "pt",
            },
            {
                id: "region.9940443777725670",
                short_code: "BR-PE",
                wikidata: "Q40942",
                "text_pt-PT": "Pernambuco",
                "language_pt-PT": "pt",
                text: "Pernambuco",
                language: "pt",
            },
            {
                id: "country.9531777110682710",
                wikidata: "Q155",
                short_code: "br",
                "text_pt-PT": "Brasil",
                "language_pt-PT": "pt",
                text: "Brasil",
                language: "pt",
            },
        ],
    },
    {
        id: "poi.1194000944554",
        type: "Feature",
        place_type: ["poi"],
        relevance: 0.5,
        properties: {
            foursquare: "4ce6b429595cb1f71deabd14",
            landmark: true,
            category: "hospital, clinic, medical center",
            maki: "hospital",
        },
        "text_pt-PT": "Ambulatorio de Andoain",
        "place_name_pt-PT":
            "Ambulatorio de Andoain, Andoáin, Guipúscoa 20140, Espanha",
        text: "Ambulatorio de Andoain",
        place_name: "Ambulatorio de Andoain, Andoáin, Guipúscoa 20140, Espanha",
        center: [-2.022127, 43.221354],
        geometry: {
            coordinates: [-2.022127, 43.221354],
            type: "Point",
        },
        context: [
            {
                id: "neighborhood.17722799904971690",
                "text_pt-PT": "Venta Berri",
                "language_pt-PT": "es",
                text: "Venta Berri",
                language: "es",
            },
            {
                id: "postcode.12052564954708240",
                "text_pt-PT": "20140",
                text: "20140",
            },
            {
                id: "place.12052564955268310",
                wikidata: "Q1598976",
                "text_pt-PT": "Andoáin",
                "language_pt-PT": "es",
                text: "Andoáin",
                language: "es",
            },
            {
                id: "region.11380405584406680",
                short_code: "ES-SS",
                wikidata: "Q95010",
                "text_pt-PT": "Guipúscoa",
                "language_pt-PT": "pt",
                text: "Guipúscoa",
                language: "pt",
            },
            {
                id: "country.3373497261570100",
                wikidata: "Q29",
                short_code: "es",
                "text_pt-PT": "Espanha",
                "language_pt-PT": "pt",
                text: "Espanha",
                language: "pt",
            },
        ],
    },
    {
        id: "poi.51539655861",
        type: "Feature",
        place_type: ["poi"],
        relevance: 0.5,
        properties: {
            foursquare: "4b8b6365f964a520489e32e3",
            landmark: true,
            address: "Maradu",
            category: "hospital, clinic, medical center",
            maki: "hospital",
        },
        "text_pt-PT": "Lakeshore Hospital",
        "place_name_pt-PT":
            "Lakeshore Hospital, Maradu, Ernakulam, Kerala, Índia",
        text: "Lakeshore Hospital",
        place_name: "Lakeshore Hospital, Maradu, Ernakulam, Kerala, Índia",
        center: [76.319184, 9.918972],
        geometry: {
            coordinates: [76.319184, 9.918972],
            type: "Point",
        },
        context: [
            {
                id: "neighborhood.7104622965812860",
                "text_pt-PT": "Nettoor",
                text: "Nettoor",
            },
            {
                id: "locality.7104622964933710",
                "text_pt-PT": "Maradu",
                text: "Maradu",
            },
            {
                id: "place.10155596616086260",
                wikidata: "Q1025408",
                "text_pt-PT": "Ernakulam",
                "language_pt-PT": "pt",
                text: "Ernakulam",
                language: "pt",
            },
            {
                id: "district.8554492989086260",
                wikidata: "Q1356097",
                "text_pt-PT": "Ernakulam",
                "language_pt-PT": "it",
                text: "Ernakulam",
                language: "it",
            },
            {
                id: "region.9962073091978210",
                short_code: "IN-KL",
                wikidata: "Q1186",
                "text_pt-PT": "Kerala",
                "language_pt-PT": "pt",
                text: "Kerala",
                language: "pt",
            },
            {
                id: "country.2782945337",
                wikidata: "Q668",
                short_code: "in",
                "text_pt-PT": "Índia",
                "language_pt-PT": "pt",
                text: "Índia",
                language: "pt",
            },
        ],
    },
    {
        id: "poi.223338388405",
        type: "Feature",
        place_type: ["poi"],
        relevance: 0.5,
        properties: {
            foursquare: "4d7c2cc218a1ba7a2a124115",
            landmark: true,
            address: "Claro M. Recto Ave.",
            category: "hospital, clinic, medical center",
            maki: "hospital",
        },
        "text_pt-PT": "San Antonio Medical Center",
        "place_name_pt-PT":
            "San Antonio Medical Center, Claro M. Recto Ave., Lipa, Batangas 4217, Filipinas",
        text: "San Antonio Medical Center",
        place_name:
            "San Antonio Medical Center, Claro M. Recto Ave., Lipa, Batangas 4217, Filipinas",
        center: [121.165314, 13.942208],
        geometry: {
            coordinates: [121.165314, 13.942208],
            type: "Point",
        },
        context: [
            {
                id: "postcode.11068691745835680",
                "text_pt-PT": "4217",
                text: "4217",
            },
            {
                id: "locality.16757837158292610",
                "text_pt-PT": "Poblacion Barangay 9-A",
                text: "Poblacion Barangay 9-A",
            },
            {
                id: "place.10488407399619890",
                wikidata: "Q1725",
                "text_pt-PT": "Lipa",
                "language_pt-PT": "pt",
                text: "Lipa",
                language: "pt",
            },
            {
                id: "region.4659196666959750",
                short_code: "PH-BTG",
                wikidata: "Q13744",
                "text_pt-PT": "Batangas",
                "language_pt-PT": "pt",
                text: "Batangas",
                language: "pt",
            },
            {
                id: "country.13684120028213680",
                wikidata: "Q928",
                short_code: "ph",
                "text_pt-PT": "Filipinas",
                "language_pt-PT": "pt",
                text: "Filipinas",
                language: "pt",
            },
        ],
    },
    {
        id: "poi.68719534642",
        type: "Feature",
        place_type: ["poi"],
        relevance: 0.5,
        properties: {
            foursquare: "4c7e78096d79bfb79f799fb9",
            landmark: true,
            address: "JP Laurel Highway",
            category: "hospital, clinic, medical center",
            maki: "hospital",
        },
        "text_pt-PT": "Metro Lipa Medical Center",
        "place_name_pt-PT":
            "Metro Lipa Medical Center, JP Laurel Highway, Lipa, Batangas 4217, Filipinas",
        text: "Metro Lipa Medical Center",
        place_name:
            "Metro Lipa Medical Center, JP Laurel Highway, Lipa, Batangas 4217, Filipinas",
        center: [121.166428, 13.968367],
        geometry: {
            coordinates: [121.166428, 13.968367],
            type: "Point",
        },
        context: [
            {
                id: "postcode.11068691745835680",
                "text_pt-PT": "4217",
                text: "4217",
            },
            {
                id: "locality.11972737329453580",
                "text_pt-PT": "Marauoy",
                text: "Marauoy",
            },
            {
                id: "place.10488407399619890",
                wikidata: "Q1725",
                "text_pt-PT": "Lipa",
                "language_pt-PT": "pt",
                text: "Lipa",
                language: "pt",
            },
            {
                id: "region.4659196666959750",
                short_code: "PH-BTG",
                wikidata: "Q13744",
                "text_pt-PT": "Batangas",
                "language_pt-PT": "pt",
                text: "Batangas",
                language: "pt",
            },
            {
                id: "country.13684120028213680",
                wikidata: "Q928",
                short_code: "ph",
                "text_pt-PT": "Filipinas",
                "language_pt-PT": "pt",
                text: "Filipinas",
                language: "pt",
            },
        ],
    },
    {
        id: "poi.1142461326364",
        type: "Feature",
        place_type: ["poi"],
        relevance: 0.5,
        properties: {
            foursquare: "51709af2e4b0199cb472f0a3",
            landmark: true,
            category: "hospital, clinic, medical center",
            maki: "hospital",
        },
        "text_pt-PT": "Ospital Ng Lipa",
        "place_name_pt-PT": "Ospital Ng Lipa, Lipa, Batangas 4217, Filipinas",
        text: "Ospital Ng Lipa",
        place_name: "Ospital Ng Lipa, Lipa, Batangas 4217, Filipinas",
        center: [121.162163, 13.957097],
        geometry: {
            coordinates: [121.162163, 13.957097],
            type: "Point",
        },
        context: [
            {
                id: "postcode.11068691745835680",
                "text_pt-PT": "4217",
                text: "4217",
            },
            {
                id: "locality.11972737329453580",
                "text_pt-PT": "Marauoy",
                text: "Marauoy",
            },
            {
                id: "place.10488407399619890",
                wikidata: "Q1725",
                "text_pt-PT": "Lipa",
                "language_pt-PT": "pt",
                text: "Lipa",
                language: "pt",
            },
            {
                id: "region.4659196666959750",
                short_code: "PH-BTG",
                wikidata: "Q13744",
                "text_pt-PT": "Batangas",
                "language_pt-PT": "pt",
                text: "Batangas",
                language: "pt",
            },
            {
                id: "country.13684120028213680",
                wikidata: "Q928",
                short_code: "ph",
                "text_pt-PT": "Filipinas",
                "language_pt-PT": "pt",
                text: "Filipinas",
                language: "pt",
            },
        ],
    },
    {
        id: "poi.541165950084",
        type: "Feature",
        place_type: ["poi"],
        relevance: 0.5,
        properties: {
            foursquare: "4dcbb0257d8b84bcd558fe89",
            landmark: true,
            address: "I.P Extension",
            category: "hospital, clinic, medical center",
            maki: "hospital",
        },
        "text_pt-PT": "Max Super Speciality Hospital",
        "place_name_pt-PT":
            "Max Super Speciality Hospital, I.P Extension, Nova Deli, Deli, Índia",
        text: "Max Super Speciality Hospital",
        place_name:
            "Max Super Speciality Hospital, I.P Extension, Nova Deli, Deli, Índia",
        center: [77.309674, 28.633111],
        geometry: {
            coordinates: [77.309674, 28.633111],
            type: "Point",
        },
        context: [
            {
                id: "neighborhood.16185071261844490",
                "text_pt-PT": "Indraprastha Extension",
                text: "Indraprastha Extension",
            },
            {
                id: "locality.7057017253605350",
                "text_pt-PT": "Patparganj",
                text: "Patparganj",
            },
            {
                id: "place.8915687851165670",
                wikidata: "Q987",
                "text_pt-PT": "Nova Deli",
                "language_pt-PT": "pt",
                text: "Nova Deli",
                language: "pt",
            },
            {
                id: "district.9693529938467900",
                wikidata: "Q107960",
                "text_pt-PT": "Delhi oriental",
                "language_pt-PT": "es",
                text: "Delhi oriental",
                language: "es",
            },
            {
                id: "region.9972194009026890",
                short_code: "IN-DL",
                wikidata: "Q1353",
                "text_pt-PT": "Deli",
                "language_pt-PT": "pt",
                text: "Deli",
                language: "pt",
            },
            {
                id: "country.2782945337",
                wikidata: "Q668",
                short_code: "in",
                "text_pt-PT": "Índia",
                "language_pt-PT": "pt",
                text: "Índia",
                language: "pt",
            },
        ],
    },
    {
        id: "poi.343597422411",
        type: "Feature",
        place_type: ["poi"],
        relevance: 0.5,
        properties: {
            foursquare: "4ea21c0302d529c1167db45b",
            landmark: true,
            address: "F. Manalo St.",
            category: "hospital, clinic, medical center",
            maki: "hospital",
        },
        "text_pt-PT": "N.L. Villa Medical Center",
        "place_name_pt-PT":
            "N.L. Villa Medical Center, F. Manalo St., Lipa, Batangas 4217, Filipinas",
        text: "N.L. Villa Medical Center",
        place_name:
            "N.L. Villa Medical Center, F. Manalo St., Lipa, Batangas 4217, Filipinas",
        center: [121.165441, 13.93879],
        geometry: {
            coordinates: [121.165441, 13.93879],
            type: "Point",
        },
        context: [
            {
                id: "postcode.11068691745835680",
                "text_pt-PT": "4217",
                text: "4217",
            },
            {
                id: "locality.5127027906557780",
                "text_pt-PT": "Poblacion Barangay 11",
                text: "Poblacion Barangay 11",
            },
            {
                id: "place.10488407399619890",
                wikidata: "Q1725",
                "text_pt-PT": "Lipa",
                "language_pt-PT": "pt",
                text: "Lipa",
                language: "pt",
            },
            {
                id: "region.4659196666959750",
                short_code: "PH-BTG",
                wikidata: "Q13744",
                "text_pt-PT": "Batangas",
                "language_pt-PT": "pt",
                text: "Batangas",
                language: "pt",
            },
            {
                id: "country.13684120028213680",
                wikidata: "Q928",
                short_code: "ph",
                "text_pt-PT": "Filipinas",
                "language_pt-PT": "pt",
                text: "Filipinas",
                language: "pt",
            },
        ],
    },
    {
        id: "poi.609885356627",
        type: "Feature",
        place_type: ["poi"],
        relevance: 0.5,
        properties: {
            foursquare: "4f3ebe9ae4b0250ce8f5f2df",
            landmark: true,
            address: "J.P. Laurel St., Bgy. 7",
            category: "hospital, clinic, medical center",
            maki: "hospital",
        },
        "text_pt-PT": "Lipa City District Hospital",
        "place_name_pt-PT":
            "Lipa City District Hospital, J.P. Laurel St., Bgy. 7, Lipa, Batangas 4217, Filipinas",
        text: "Lipa City District Hospital",
        place_name:
            "Lipa City District Hospital, J.P. Laurel St., Bgy. 7, Lipa, Batangas 4217, Filipinas",
        center: [121.159003, 13.933731],
        geometry: {
            coordinates: [121.159003, 13.933731],
            type: "Point",
        },
        context: [
            {
                id: "postcode.11068691745835680",
                "text_pt-PT": "4217",
                text: "4217",
            },
            {
                id: "locality.7334064943383720",
                "text_pt-PT": "San Sebastian",
                text: "San Sebastian",
            },
            {
                id: "place.10488407399619890",
                wikidata: "Q1725",
                "text_pt-PT": "Lipa",
                "language_pt-PT": "pt",
                text: "Lipa",
                language: "pt",
            },
            {
                id: "region.4659196666959750",
                short_code: "PH-BTG",
                wikidata: "Q13744",
                "text_pt-PT": "Batangas",
                "language_pt-PT": "pt",
                text: "Batangas",
                language: "pt",
            },
            {
                id: "country.13684120028213680",
                wikidata: "Q928",
                short_code: "ph",
                "text_pt-PT": "Filipinas",
                "language_pt-PT": "pt",
                text: "Filipinas",
                language: "pt",
            },
        ],
    },
];