/* ═══════════════════════════════════════════════════════
   DATA – OVNotes
   Innehåller all kategori- och sektionsdata.
   Konsumeras av app.js som global variabel CATEGORIES.
═══════════════════════════════════════════════════════ */
const CATEGORIES = [
  {
    id: 'avvisa',
    name: 'Avvisa\nAvlägsna\nOmhänderta',
    icon: 'resources/images/remove_person.svg',
    special: null,
    sections: [
      {
        id: 'avvisande',
        title: 'Avvisande',
        lawTag: '13 § polislagen',
        desc: 'Avvisande är den minst ingripande åtgärden enligt 13 § polislagen. Ordningsvakten uppmanar en person att lämna en plats när personen stör ordningen eller riskerar att orsaka en störning.',
        bullets: [
          'Syfte: Stoppa eller förebygga ordningsstörning.',
          'Krav: Personen stör ordningen eller utgör omedelbar risk.',
          'Karaktär: Verbal uppmaning – ingen fysisk förflyttning.',
          'Proportionalitet: Används när verbal uppmaning bedöms räcka.',
          'Förstadie: Ska prövas innan avlägsnande eller omhändertagande.',
        ],
        report: {
          title: 'Avvisande – Rapportmall',
          cbs: [
            { id: 'av_13a', label: '13 § PL – Ordningsstörning',                        tmpl: '13 § polislagen – Ordningsstörning' },
            { id: 'av_13b', label: '13 § PL – Överhängande fara för ordningsstörning',  tmpl: '13 § polislagen – Överhängande fara för ordningsstörning' },
            { id: 'av_ovl', label: '29 § PL – Ordningsvaktens befogenhet tillämpas',    tmpl: '29 § polislagen – Ordningsvaktens befogenhet tillämpas' },
          ]
        }
      },
      {
        id: 'avlagsnade',
        title: 'Avlägsnande',
        lawTag: '13 § polislagen',
        desc: 'Avlägsnande innebär att ordningsvakten fysiskt avlägsnar en person från platsen. Används när avvisning inte följs eller inte bedöms räcka.',
        bullets: [
          'Förutsättning: Avvisning otillräcklig eller ignorerad.',
          'Fysisk åtgärd: Personen escorteras med minsta nödvändiga kraft.',
          'Tidsbegränsning: Pågår inte längre än nödvändigt.',
          'Proportionalitet: Minsta möjliga kraft tillämpas alltid.',
          'Efterföljande: Vid misslyckande kan omhändertagande bli aktuellt.',
        ],
        report: {
          title: 'Avlägsnande – Rapportmall',
          cbs: [
            { id: 'al_13', label: '13 § PL – Ordningsstörning',                    tmpl: '13 § polislagen – Ordningsstörning' },
            { id: 'al_19', label: '19 § PL – Skyddsvisitation genomförd',           tmpl: '19 § polislagen – Skyddsvisitation genomförd' },
            { id: 'al_24', label: '24 § PL – Omhändertagande av farliga föremål',  tmpl: '24 § polislagen – Omhändertagande av farliga föremål' },
            { id: 'al_27', label: '27 kap. 1 § RB – Beslag vid brottsmisstanke',   tmpl: '27 kap. 1 § rättegångsbalken – Beslag vid brottsmisstanke' },
          ]
        }
      },
      {
        id: 'omhandertagande',
        title: 'Tillfälligt omhändertagande',
        lawTag: '13–14 § polislagen',
        desc: 'Tillfälligt omhändertagande är den mest ingripande åtgärden. Används när avvisning och avlägsnande inte räcker. Personen hålls kvar tills ordningen återställts eller polisen anländer.',
        bullets: [
          'Förutsättning: Avvisning och avlägsnande är otillräckliga.',
          'Syfte: Upprätthålla ordningen och förhindra fortsatt störning.',
          'Skyddsvisitation: Ska alltid genomföras vid omhändertagande.',
          'Polisanmälan: Polisen ska underrättas omedelbart.',
          'Tidsbegränsning: Ska upphöra så snart skälet bortfallit.',
        ],
        report: {
          title: 'Tillfälligt omhändertagande – Rapportmall',
          cbs: [
            { id: 'oh_13',  label: '13 § PL – Ordningsstörning (upprepat/allvarligt)',  tmpl: '13 § polislagen – Upprepat eller allvarligt ordningsstörande beteende' },
            { id: 'oh_14',  label: '14 § PL – Tillfälligt omhändertagande',             tmpl: '14 § polislagen – Tillfälligt omhändertagande' },
            { id: 'oh_lob', label: '1 § LOB – Uppenbart berusad person',                tmpl: '1 § LOB – Uppenbart berusad person' },
            { id: 'oh_19',  label: '19 § PL – Skyddsvisitation genomförd',              tmpl: '19 § polislagen – Skyddsvisitation genomförd' },
            { id: 'oh_24',  label: '24 § PL – Omhändertagande av farliga föremål',      tmpl: '24 § polislagen – Omhändertagande av farliga föremål' },
          ]
        }
      }
    ]
  },
  {
    id: 'vald',
    name: 'Våld &\nTvång',
    icon: 'resources/images/warning-triangle.svg',
    special: null,
    sections: [
      {
        id: 'proportionellt',
        title: 'Proportionell våldsanvändning',
        lawTag: '10 § polislagen',
        desc: '10 § polislagen reglerar rätten att använda tvång i tjänsten. Allt tvång måste vara proportionellt i förhållande till situationens allvar. Ordningsvakten har samma skyldighet som polisen.',
        bullets: [
          'Proportionalitet: Tvånget får inte överstiga vad som är nödvändigt.',
          'Nödvändighet: Åtgärden måste vara nödvändig för syftet.',
          'Minsta ingrepp: Minst ingripande åtgärd ska väljas.',
          'Laga befogenhet: Måste ha lagstöd för ingripandet.',
          'Omedelbar fara: Utökat utrymme vid fara för liv och hälsa.',
        ],
        report: {
          title: 'Våldsanvändning – Rapportmall',
          cbs: [
            { id: 'va_10',  label: '10 § PL – Proportionellt tvång i tjänsten',        tmpl: '10 § polislagen – Proportionellt tvång i tjänsten' },
            { id: 'va_nb1', label: '24 kap. 1 § BrB – Nödvärn',                        tmpl: '24 kap. 1 § brottsbalken – Nödvärn' },
            { id: 'va_nb2', label: '24 kap. 2 § BrB – Nödvärn till skydd för annan',  tmpl: '24 kap. 2 § brottsbalken – Nödvärn till skydd för annan' },
            { id: 'va_nod', label: '24 kap. 4 § BrB – Nöd',                            tmpl: '24 kap. 4 § brottsbalken – Nöd' },
          ]
        }
      },
      {
        id: 'nodvarn',
        title: 'Nödvärn',
        lawTag: '24 kap. 1 § brottsbalken',
        desc: 'Nödvärn är en rättfärdigningsgrund som ger rätt att försvara sig – eller annan – mot ett påbörjat eller överhängande brottsligt angrepp. Försvarshandlingen måste vara uppenbart försvarlig.',
        bullets: [
          'Angrepp: Ska vara påbörjat eller överhängande och brottsligt.',
          'Försvarlig: Handlingen ska vara uppenbart försvarlig.',
          'Nödvärnsexcess: Ursäktlig överskridning kan ge strafflindring.',
          'Skydd för annan: 24 kap. 2 § BrB ger rätt att försvara annan.',
          'Tidsgräns: Rätten upphör när angreppet avvärjts.',
        ],
        report: {
          title: 'Nödvärn – Rapportmall',
          cbs: [
            { id: 'nv_1',  label: '24 kap. 1 § BrB – Nödvärn (eget angrepp)',         tmpl: '24 kap. 1 § brottsbalken – Nödvärn mot angrepp på den egna personen' },
            { id: 'nv_2',  label: '24 kap. 2 § BrB – Nödvärn (skydd för annan)',      tmpl: '24 kap. 2 § brottsbalken – Nödvärn till skydd för annan' },
            { id: 'nv_4',  label: '24 kap. 4 § BrB – Nöd',                            tmpl: '24 kap. 4 § brottsbalken – Nöd' },
            { id: 'nv_10', label: '10 § PL – Proportionellt tvång (kompletterande)',   tmpl: '10 § polislagen – Proportionellt tvång (kompletterande grund)' },
          ]
        }
      },
      {
        id: 'lagabefogenhet',
        title: 'Laga befogenhet',
        lawTag: '10 § PL / 24 kap. BrB',
        desc: 'Laga befogenhet innebär att ordningsvakten handlar inom ramen för sina lagstadgade befogenheter. Åtgärder med laga befogenhet är lagliga om de utförs proportionellt och dokumenteras.',
        bullets: [
          'Lagstöd: Varje åtgärd måste ha stöd i lag.',
          'Befogenhet: Ordningsvakten måste ha den aktuella befogenheten.',
          'Proportionalitet: Gäller alltid, även med laga befogenhet.',
          'Personligt ansvar: Ordningsvakten bär personligt ansvar för sina handlingar.',
        ],
        report: {
          title: 'Laga befogenhet – Rapportmall',
          cbs: [
            { id: 'lb_10', label: '10 § PL – Våldsanvändning med laga befogenhet',    tmpl: '10 § polislagen – Våldsanvändning med laga befogenhet' },
            { id: 'lb_13', label: '13 § PL – Ordningsstörning (grundåtgärd)',         tmpl: '13 § polislagen – Ordningsstörning som grundåtgärd' },
            { id: 'lb_24', label: '24 kap. 7 § RB – Envarsgripande tillämpades',     tmpl: '24 kap. 7 § rättegångsbalken – Envarsgripande tillämpades' },
          ]
        }
      }
    ]
  },
  {
    id: 'gripande',
    name: 'Gripande',
    icon: 'resources/images/walking.svg',
    special: null,
    sections: [
      {
        id: 'envarsgripande',
        title: 'Envarsgripande',
        lawTag: '24 kap. 7 § rättegångsbalken',
        desc: 'Envarsgripande ger rätt för envar – inklusive ordningsvakter – att gripa en person som begår ett brott med fängelse i straffskalan, om personen påträffas på bar gärning eller flyende fot.',
        bullets: [
          'Brottet: Måste ha fängelse i straffskalan (ej enbart böter).',
          'Tidpunkt: På bar gärning eller omedelbart flyende.',
          'Rymningsrisk: Konkret risk att personen undkommer.',
          'Minimalt tvång: Endast nödvändigt tvång är tillåtet.',
          'Omedelbar överlämning: Personen ska skyndsamt lämnas till polisen.',
        ],
        report: {
          title: 'Envarsgripande – Rapportmall',
          cbs: [
            { id: 'eg_7a', label: '24 kap. 7 § 1 st. RB – Brott med fängelse i straffskalan', tmpl: '24 kap. 7 § 1 st. rättegångsbalken – Brottet har fängelse i straffskalan' },
            { id: 'eg_7b', label: '24 kap. 7 § 2 st. RB – Påträffad på bar gärning/flyende',  tmpl: '24 kap. 7 § 2 st. rättegångsbalken – Person påträffad på bar gärning eller flyende fot' },
            { id: 'eg_8',  label: '24 kap. 8 § RB – Överlämning till polisen',                tmpl: '24 kap. 8 § rättegångsbalken – Person överlämnad till polisen' },
            { id: 'eg_19', label: '19 § PL – Skyddsvisitation vid gripande',                  tmpl: '19 § polislagen – Skyddsvisitation genomförd vid gripandet' },
          ]
        }
      },
      {
        id: 'eftergripande',
        title: 'Förfarande efter gripande',
        lawTag: '24 kap. 8 § rättegångsbalken',
        desc: 'Efter ett envarsgripande är ordningsvakten skyldig att skyndsamt överlämna den gripne till polisen. Personen får inte hållas kvar längre än nödvändigt.',
        bullets: [
          'Skyldighet: Den gripne ska omedelbart överlämnas till polis.',
          'Skyndsamt: Ingen onödig fördröjning får ske.',
          'Information: Personen ska informeras om varför hen hålls.',
          'Tillsyn: Personen hålls under tillsyn tills polisen anländer.',
        ],
        report: {
          title: 'Förfarande efter gripande – Rapportmall',
          cbs: [
            { id: 'fg_8',  label: '24 kap. 8 § RB – Överlämning till polisen',        tmpl: '24 kap. 8 § rättegångsbalken – Person skyndsamt överlämnad till polisen' },
            { id: 'fg_19', label: '19 § PL – Skyddsvisitation under väntan',           tmpl: '19 § polislagen – Skyddsvisitation genomförd under väntan på polis' },
          ]
        }
      }
    ]
  },
  {
    id: 'visitation',
    name: 'Visitation',
    icon: 'resources/images/hand.svg',
    special: null,
    sections: [
      {
        id: 'skyddsvisitation',
        title: 'Skyddsvisitation',
        lawTag: '19 § polislagen',
        desc: 'Skyddsvisitation ger ordningsvakter rätt att kontrollera att en person inte bär vapen eller farliga föremål, i samband med ett ingripande.',
        bullets: [
          'Syfte: Säkerställa att personen inte bär vapen.',
          'Tillfälle: Vid avvisning, avlägsnande, omhändertagande eller gripande.',
          'Omfattning: Ytlig undersökning av kläder och medförda föremål.',
          'Kön: Ska utföras av person av samma kön om möjligt.',
          'Fynd: Farliga föremål omhändertas enligt 24 § PL.',
        ],
        report: {
          title: 'Skyddsvisitation – Rapportmall',
          cbs: [
            { id: 'sv_19', label: '19 § PL – Skyddsvisitation (säkerhetsåtgärd)',        tmpl: '19 § polislagen – Skyddsvisitation genomförd som säkerhetsåtgärd' },
            { id: 'sv_24', label: '24 § PL – Omhändertagande av farliga föremål',        tmpl: '24 § polislagen – Farliga föremål omhändertagna' },
            { id: 'sv_27', label: '27 kap. 1 § RB – Beslag av brottsrelaterade föremål', tmpl: '27 kap. 1 § rättegångsbalken – Beslag av brottsrelaterade föremål' },
          ]
        }
      },
      {
        id: 'ytligvisitation',
        title: 'Ytlig kroppsvisitation',
        lawTag: '20 a § polislagen',
        desc: '20 a § polislagen möjliggör ytlig kroppsvisitation på allmän plats för att söka efter vapen. Kräver beslut av polismyndighet (s.k. zonvisitation).',
        bullets: [
          'Beslut: Kräver beslut av polismyndighet.',
          'Plats: Avgränsat område med förhöjd risk för våldsbrott.',
          'Ordningsvaktens roll: Kan assistera polisen vid genomförandet.',
          'Ytlig: Kläder, tillgängliga fickor och väskor.',
        ],
        report: {
          title: 'Ytlig kroppsvisitation – Rapportmall',
          cbs: [
            { id: 'yv_20a', label: '20 a § PL – Ytlig kroppsvisitation (polisens beslut)', tmpl: '20 a § polislagen – Ytlig kroppsvisitation enligt polismyndighetens beslut' },
            { id: 'yv_19',  label: '19 § PL – Kompletterande skyddsvisitation',            tmpl: '19 § polislagen – Kompletterande skyddsvisitation' },
            { id: 'yv_24',  label: '24 § PL – Omhändertagande av hittade föremål',         tmpl: '24 § polislagen – Omhändertagande av hittade föremål' },
          ]
        }
      },
      {
        id: 'husrannsakan',
        title: 'Husrannsakan',
        lawTag: '28 kap. 11 § rättegångsbalken',
        desc: '28 kap. 11 § RB medger i brådskande fall husrannsakan utan domstolsbeslut om det finns skäl att tro att ett allvarligt brott begåtts. Ska omedelbart anmälas till polisen.',
        bullets: [
          'Brådskande fall: Dröjsmål innebär fara för utredningen.',
          'Allvarligt brott: Minst 2 år fängelse i straffskalan krävs.',
          'Omedelbar anmälan: Ska genast anmälas till polisen.',
          'Protokoll: Ska upprättas omedelbart efter åtgärden.',
        ],
        report: {
          title: 'Husrannsakan – Rapportmall',
          cbs: [
            { id: 'hr_11', label: '28 kap. 11 § RB – Husrannsakan (brådskande fall)',  tmpl: '28 kap. 11 § rättegångsbalken – Husrannsakan i brådskande fall' },
            { id: 'hr_7',  label: '24 kap. 7 § RB – Envarsgripande i samband',        tmpl: '24 kap. 7 § rättegångsbalken – Envarsgripande i samband med husrannsakan' },
            { id: 'hr_27', label: '27 kap. 1 § RB – Beslag av hittade föremål',       tmpl: '27 kap. 1 § rättegångsbalken – Beslag av hittade föremål' },
          ]
        }
      }
    ]
  },
  {
    id: 'lob',
    name: 'LOB',
    icon: 'resources/images/glass-half-alt.svg',
    special: null,
    sections: [
      {
        id: 'lob-foruts',
        title: 'Förutsättningar för LOB',
        lawTag: '1 § LOB',
        desc: 'Lagen (1976:511) om omhändertagande av berusade personer (LOB) ger möjlighet att omhänderta en person som är uppenbart påverkad och inte kan ta hand om sig själv eller utgör en risk.',
        bullets: [
          'Uppenbar påverkan: Personen ska vara uppenbart berusad.',
          'Fara för sig själv: Kan inte ta hand om sig eller är i fara.',
          'Fara för annan: Utgör risk för omgivningens säkerhet.',
          'Ordningsstörning: Stör den allmänna ordningen.',
          'Polisens beslut: Polisen fattar beslut om LOB – ordningsvakten tillkallar.',
        ],
        report: {
          title: 'LOB – Förutsättningar – Rapportmall',
          cbs: [
            { id: 'lf_1a', label: '1 § LOB – Uppenbart berusad, fara för sig själv',   tmpl: '1 § LOB – Person uppenbart berusad och utgör fara för sig själv' },
            { id: 'lf_1b', label: '1 § LOB – Uppenbart berusad, fara för annan',       tmpl: '1 § LOB – Person uppenbart berusad och utgör fara för annan' },
            { id: 'lf_1c', label: '1 § LOB – Uppenbart berusad, ordningsstörning',     tmpl: '1 § LOB – Person uppenbart berusad och stör allmän ordning' },
            { id: 'lf_13', label: '13 § PL – Ordningsstörning (kompletterande grund)', tmpl: '13 § polislagen – Ordningsstörning (kompletterande grund)' },
          ]
        }
      },
      {
        id: 'lob-forfarande',
        title: 'Förfarande vid LOB',
        lawTag: '4–7 §§ LOB',
        desc: 'Förfarandet vid LOB-omhändertagande regleras i 4–7 §§. Ordningsvaktens roll är att assistera och dokumentera. Polisen ansvarar för omhändertagandet.',
        bullets: [
          'Polisens ansvar: Polisen fattar beslut och ansvarar för omhändertagandet.',
          'Läkarkontroll: Ska erbjudas om personens tillstånd kräver det.',
          'Tillsyn: Kontinuerlig tillsyn under omhändertagandet.',
          'Frigivning: Ska ske när skälen bortfallit, normalt inom 8 timmar.',
        ],
        report: {
          title: 'LOB – Förfarande – Rapportmall',
          cbs: [
            { id: 'lpf_4',  label: '4 § LOB – Omhändertagandebeslut av polisen',          tmpl: '4 § LOB – Omhändertagande beslutat av polisen' },
            { id: 'lpf_5',  label: '5 § LOB – Läkarkontroll erbjuden/genomförd',          tmpl: '5 § LOB – Läkarkontroll erbjuden/genomförd' },
            { id: 'lpf_6',  label: '6 § LOB – Kontinuerlig tillsyn genomförd',            tmpl: '6 § LOB – Kontinuerlig tillsyn genomförd' },
            { id: 'lpf_19', label: '19 § PL – Skyddsvisitation vid LOB-omhändertagande',  tmpl: '19 § polislagen – Skyddsvisitation genomförd vid LOB-omhändertagande' },
          ]
        }
      }
    ]
  },
  {
    id: 'beslag',
    name: 'Beslag',
    icon: 'resources/images/box3d-point.svg',
    special: null,
    sections: [
      {
        id: 'beslag-grund',
        title: 'Beslag',
        lawTag: '27 kap. 1 § rättegångsbalken',
        desc: 'Beslag innebär att föremål med bevisvärde eller som kan förverkas tas om hand. Envar kan ta provisoriskt beslag i brådskande fall och ska omedelbart anmäla detta till polisen.',
        bullets: [
          'Bevisföremål: Föremål med bevisvärde i brottmål.',
          'Förverkningsföremål: Föremål som kan förverkas.',
          'Provisoriskt beslag: Envar kan i brådskande fall ta provisoriskt beslag.',
          'Omedelbar anmälan: Ska omedelbart anmälas till polisen.',
          'Kvitto: Ska utfärdas till den föremålet tagits från.',
        ],
        report: {
          title: 'Beslag – Rapportmall',
          cbs: [
            { id: 'bs_1a',  label: '27 kap. 1 § RB – Beslag (bevisföremål)',            tmpl: '27 kap. 1 § rättegångsbalken – Beslag av bevisföremål' },
            { id: 'bs_1b',  label: '27 kap. 1 § RB – Beslag (förverkningsföremål)',     tmpl: '27 kap. 1 § rättegångsbalken – Beslag av föremål som kan förverkas' },
            { id: 'bs_10',  label: '27 kap. 10 § RB – Beslagsprotokoll upprättat',      tmpl: '27 kap. 10 § rättegångsbalken – Beslagsprotokoll upprättat' },
            { id: 'bs_pol', label: 'Polisen underrättad om beslaget',                    tmpl: 'Polisen omedelbart underrättad om beslaget' },
          ]
        }
      },
      {
        id: 'farliga-foremal',
        title: 'Omhändertagande av farliga föremål',
        lawTag: '24 § polislagen',
        desc: 'Enligt 24 § polislagen får ordningsvakter omhänderta föremål som kan användas som vapen, om det finns konkret risk att föremålet används för våldsbrott.',
        bullets: [
          'Farliga föremål: Vapen eller föremål som kan användas som vapen.',
          'Konkret risk: Risk att föremålet används vid våldsbrott.',
          'Omhändertagande: Föremålet tas och lämnas till polisen snarast.',
          'Kvitto: Ska utfärdas till den föremålet tagits från.',
        ],
        report: {
          title: 'Farliga föremål – Rapportmall',
          cbs: [
            { id: 'ff_24',  label: '24 § PL – Omhändertagande av farligt föremål',     tmpl: '24 § polislagen – Omhändertagande av farligt föremål' },
            { id: 'ff_19',  label: '19 § PL – Föremål hittades vid skyddsvisitation',  tmpl: '19 § polislagen – Föremål hittades vid skyddsvisitation' },
            { id: 'ff_27',  label: '27 kap. 1 § RB – Beslag (vid brottsmisstanke)',    tmpl: '27 kap. 1 § rättegångsbalken – Beslag vid brottsmisstanke' },
            { id: 'ff_pol', label: 'Polisen underrättad och föremål överlämnat',        tmpl: 'Polisen underrättad och föremålet överlämnat' },
          ]
        }
      }
    ]
  },
  { id: 'sjukvard', name: 'Sjukvård', icon: 'resources/images/pharmacy-cross-tag.svg', special: 'med-sheet', sections: [] },
  { id: 'faq',      name: 'FAQ',      icon: 'resources/images/glasses.svg',             special: 'faq-sheet', sections: [] }
];

/* ═══════════════════════════════════════════════════════
   FAQ DATA – importerad från FAQ/faq.csv
   Format: { q: 'Fråga', a: 'Svar', cat: 'Kategori' }
═══════════════════════════════════════════════════════ */
const FAQ_ITEMS = [
  // PL 13
  { q: 'Vilka tre kriterier krävs för PL 13?',          a: 'Stör ordningen; avvärja brott; omedelbar fara',              cat: 'PL 13' },
  { q: 'När ska avvisning användas?',                    a: 'När personen kan lämna frivilligt',                          cat: 'PL 13' },
  { q: 'När ska avlägsnande användas?',                  a: 'När personen vägrar lämna och stör ordningen',               cat: 'PL 13' },
  { q: 'När får omhändertagande användas enligt PL 13?', a: 'Vid fortsatt störning eller fara',                           cat: 'PL 13' },
  { q: 'Får du avlägsna en person som skriker i galleria?', a: 'Ja enligt PL 13',                                        cat: 'PL 13' },
  { q: 'Får du identifiera vid avlägsnande?',            a: 'Endast om nödvändigt',                                       cat: 'PL 13' },
  { q: 'När är identitet inte nödvändig vid PL 13?',    a: 'När identiteten inte påverkar åtgärden',                     cat: 'PL 13' },
  { q: 'Får du använda våld vid avlägsnande?',           a: 'Ja enligt PL 10',                                            cat: 'PL 13' },
  { q: 'När ska polis kontaktas vid PL 13?',             a: 'Vid upprepad störning eller brott',                          cat: 'PL 13' },
  { q: 'Vad är syftet med PL 13?',                      a: 'Återställa ordning och säkerhet',                            cat: 'PL 13' },
  { q: 'Får du avlägsna vid brott mot ordningsregler?',  a: 'Ja om ordningen störs',                                     cat: 'PL 13' },
  { q: 'Vad ska dokumenteras vid PL 13?',               a: 'Avlägsnande/omhändertagande enligt FAP 670',                 cat: 'PL 13' },
  // PL 19
  { q: 'Vad är syftet med visitation enligt PL 19?',    a: 'Söka vapen eller fastställa identitet',                      cat: 'PL 19' },
  { q: 'När får du visitera vid avlägsnande?',           a: 'I anslutning till ingripandet',                              cat: 'PL 19' },
  { q: 'Får visitation ske efter åtgärden?',             a: 'Nej',                                                        cat: 'PL 19' },
  { q: 'När får du visitera för identitet?',             a: 'Vid gripande/omhändertagande/avlägsnande',                   cat: 'PL 19' },
  { q: 'Får du visitera vid envarsgripande?',            a: 'Ja',                                                         cat: 'PL 19' },
  { q: 'Vad gör du med icke-brottsliga föremål?',       a: 'Tar hand om och återlämnar',                                 cat: 'PL 19' },
  { q: 'När ska visitation ske i enskilt utrymme?',      a: 'Vid väsentlig omfattning',                                   cat: 'PL 19' },
  { q: 'Får du använda våld vid visitation?',            a: 'Endast enligt PL 10',                                        cat: 'PL 19' },
  { q: 'När ska visitation dokumenteras?',               a: 'Vid väsentlig omfattning',                                   cat: 'PL 19' },
  { q: 'Får du visitera för ID-handling?',               a: 'Ja om nödvändigt',                                           cat: 'PL 19' },
  { q: 'När är ID-visitation inte nödvändig?',           a: 'Vid avlägsnande utan identitetsbehov',                       cat: 'PL 19' },
  { q: 'Vad är skyddsvisitation?',                       a: 'Snabb kontroll för farliga föremål',                         cat: 'PL 19' },
  // PL 10
  { q: 'När får du använda våld enligt PL 10?',          a: 'När det är försvarligt och nödvändigt',                      cat: 'PL 10' },
  { q: 'Får du använda oförsvarligt våld?',              a: 'Nej',                                                        cat: 'PL 10' },
  { q: 'När får handfängsel användas?',                  a: 'Vid flyktfara eller våldsrisk',                              cat: 'PL 10' },
  { q: 'Vad är proportionalitet?',                       a: 'Åtgärden får inte vara mer ingripande än nödvändigt',        cat: 'PL 10' },
  { q: 'Vad är behovsprincipen?',                        a: 'Mildaste medel ska användas',                                cat: 'PL 10' },
  { q: 'När ska våld rapporteras?',                      a: 'Vid all tvångsanvändning',                                   cat: 'PL 10' },
  { q: 'Får du använda våld vid LOB?',                   a: 'Endast enligt PL 10',                                        cat: 'PL 10' },
  { q: 'När får du använda våld vid PL 13?',             a: 'Vid motstånd',                                               cat: 'PL 10' },
  { q: 'Vad är nödvärn?',                                a: 'Rätt att avvärja brottsligt angrepp',                        cat: 'PL 10' },
  { q: 'Vad är nöd?',                                    a: 'Åtgärd för att avvärja fara',                                cat: 'PL 10' },
  // LOB
  { q: 'Vilka kriterier krävs för LOB?',                 a: 'Fara för sig själv; andra; kan ej ta hand om sig själv',     cat: 'LOB' },
  { q: 'Får du ta alkohol i beslag vid LOB?',            a: 'Nej',                                                        cat: 'LOB' },
  { q: 'Vad gör du efter LOB?',                          a: 'Informera; visitera; kontakta polis; övervaka',              cat: 'LOB' },
  { q: 'Får du visitera vid LOB?',                       a: 'Ja enligt PL 19',                                            cat: 'LOB' },
  { q: 'Får du transportera LOB-person?',                a: 'Ja med tillstånd',                                           cat: 'LOB' },
  { q: 'Får LOB ske i bostad?',                          a: 'Nej',                                                        cat: 'LOB' },
  { q: 'Var får LOB ske i flerfamiljshus?',              a: 'Trapphus och innergård',                                     cat: 'LOB' },
  { q: 'Vad ska tas om hand vid LOB?',                   a: 'Alkohol/berusningsmedel',                                    cat: 'LOB' },
  { q: 'När ska polis kontaktas vid LOB?',               a: 'Omedelbart',                                                 cat: 'LOB' },
  { q: 'Vad ska dokumenteras vid LOB?',                  a: 'Enligt FAP 670',                                             cat: 'LOB' },
  { q: 'Får du använda våld vid LOB?',                   a: 'Endast enligt PL 10',                                        cat: 'LOB' },
  { q: 'Vad är syftet med LOB?',                         a: 'Skydda personen och andra',                                  cat: 'LOB' },
  // Beslag
  { q: 'När får du ta alkohol i beslag enligt OL 4:4?',  a: 'Vid förtäring av alkohol >2,25%',                           cat: 'Beslag' },
  { q: 'Får du beslagta alkohol vid LOB?',               a: 'Nej',                                                        cat: 'Beslag' },
  { q: 'När får du beslagta alkohol enligt 1958 års lag?', a: 'Vid brott mot OL 2:16/18 eller OL 4:4',                   cat: 'Beslag' },
  { q: 'Får du förstöra beslagtagna alkohol?',           a: 'Endast efter beslut av polis',                               cat: 'Beslag' },
  { q: 'Vad innebär bevisligen förstöra?',               a: 'Dokumentera förstörandet',                                   cat: 'Beslag' },
  { q: 'Får du beslagta alkohol från sällskapet?',       a: 'Ja om de kan antas dricka den',                             cat: 'Beslag' },
  { q: 'När ska beslag rapporteras?',                    a: 'Omedelbart',                                                 cat: 'Beslag' },
  { q: 'Får du beslagta narkotika?',                     a: 'Ja vid konkret innehav',                                     cat: 'Beslag' },
  { q: 'Får du beslagta farliga föremål?',               a: 'Ja enligt PL 19',                                            cat: 'Beslag' },
  { q: 'Vad är syftet med beslag?',                      a: 'Säkerhet och bevisning',                                     cat: 'Beslag' },
  { q: 'När får du inte ta beslag?',                     a: 'Vid LOB-omhändertagande',                                    cat: 'Beslag' },
  { q: 'Vad gör du efter beslag?',                       a: 'Dokumentera och kontakta polis',                             cat: 'Beslag' },
  // Gripande
  { q: 'När får du envarsgripa?',                        a: 'Vid pågående brott eller färsk gärning',                     cat: 'Gripande' },
  { q: 'Får du gripa vid misstanke om eget bruk?',       a: 'Nej',                                                        cat: 'Gripande' },
  { q: 'Får du gripa vid konkret narkotikainnehav?',     a: 'Ja',                                                         cat: 'Gripande' },
  { q: 'Vad gör du efter gripande?',                     a: 'Visitera; bevaka; kontakta polis',                           cat: 'Gripande' },
  { q: 'När får du använda våld vid gripande?',          a: 'Enligt PL 10',                                               cat: 'Gripande' },
  { q: 'Vad är färsk gärning?',                          a: 'Brottet har just begåtts',                                   cat: 'Gripande' },
  { q: 'Vad är pågående brott?',                         a: 'Brottet sker i stunden',                                     cat: 'Gripande' },
  { q: 'Får du gripa vid ordningsstörning?',             a: 'Endast om brott begås',                                      cat: 'Gripande' },
  { q: 'När ska gripande dokumenteras?',                 a: 'Enligt FAP 670',                                             cat: 'Gripande' },
  { q: 'Vad är syftet med envarsgripande?',              a: 'Hålla kvar misstänkt tills polis tar över',                  cat: 'Gripande' },
  // Ordningslagen
  { q: 'Kräver danstillställning tillstånd?',            a: 'Nej endast anmälan',                                         cat: 'Ordningslagen' },
  { q: 'Vad får du göra vid brott mot OL 4 kap?',        a: 'Avvisa eller avlägsna',                                     cat: 'Ordningslagen' },
  { q: 'Får du neka tillträde i kollektivtrafik?',        a: 'Ja vid berusning eller ordningsrisk',                       cat: 'Ordningslagen' },
  { q: 'Vad är lättdryck?',                              a: '≤2,25% alkohol',                                             cat: 'Ordningslagen' },
  { q: 'Vad är folköl?',                                 a: '2,25–3,5%',                                                  cat: 'Ordningslagen' },
  { q: 'Vad är starköl?',                                a: '>3,5%',                                                      cat: 'Ordningslagen' },
  { q: 'Får du beslagta alkohol i kollektivtrafik?',     a: 'Ja',                                                         cat: 'Ordningslagen' },
  { q: 'Vad är trafiktjänsteman?',                       a: 'Förare eller ordningsansvarig',                              cat: 'Ordningslagen' },
  { q: 'Vad är förbjudet på idrottsanläggning?',         a: 'Beträda plan; kasta föremål; maskering',                    cat: 'Ordningslagen' },
  { q: 'Vad är straffet för bengaler?',                  a: 'Böter eller fängelse 6 månader',                             cat: 'Ordningslagen' },
  { q: 'Får OV arbeta högriskmatch utan AMF?',           a: 'Ja',                                                         cat: 'Ordningslagen' },
  { q: 'Vem ansvarar för ordningen vid tillställning?',  a: 'Arrangören',                                                 cat: 'Ordningslagen' },
  // LOV/FAP
  { q: 'När ska OV underrätta polisen?',                 a: 'Vid förhållanden av betydelse',                              cat: 'LOV/FAP' },
  { q: 'Vad ska dokumenteras enligt FAP 670?',           a: 'Beslag; gripande; avlägsnande; omhändertagande',             cat: 'LOV/FAP' },
  { q: 'Får polis vara ordningsvakt?',                   a: 'Nej',                                                        cat: 'LOV/FAP' },
  { q: 'Kan förordnande återkallas?',                    a: 'Ja',                                                         cat: 'LOV/FAP' },
  { q: 'Vad är OV:s huvuduppgift?',                      a: 'Upprätthålla ordning och trygghet',                          cat: 'LOV/FAP' },
  { q: 'När ska visitation rapporteras?',                a: 'Vid väsentlig omfattning',                                   cat: 'LOV/FAP' },
  { q: 'När ska beslag rapporteras?',                    a: 'Omedelbart',                                                 cat: 'LOV/FAP' },
  { q: 'Vad är LOV 15 §?',                              a: 'Proportionalitet',                                           cat: 'LOV/FAP' },
  { q: 'Vad är LOV 16 §?',                              a: 'Befogenheter',                                               cat: 'LOV/FAP' },
  { q: 'Vad är LOV 17 §?',                              a: 'Tystnadsplikt',                                              cat: 'LOV/FAP' },
];
