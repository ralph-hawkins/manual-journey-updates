/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full&#8209;name": "Sarah Philips",

"options&#8209;chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  "ingredientGroups":
    [
      {
        "name": "Alcohols", 
        "ingredients": 
        [
          {
            "amount": "Any", 
            "name": "Alcohol denatured <br> Including any substances used to denature the alcohol",
          },
          {
            "amount": "Any", 
            "name": "Ethanol", 
            "casNumber": "64&#8209;17&#8209;5"
          },
          {
            "amount": "Any", 
            "name": "Isopropanol", 
            "casNumber": "67&#8209;63&#8209;0"
          },
          {
            "amount": "More than 1%&nbsp;w/w", 
            "name": "n&#8209;Butyl alcohol", 
            "casNumber": "71&#8209;36&#8209;3"
          },
          { 
            "amount": "More than 1%&nbsp;w/w", 
            "name": "n&#8209;Propyl alcohol (also known as Propyl alcohol)", 
            "casNumber": "71&#8209;23&#8209;8"
          },
          { 
            "amount": "More than 1%&nbsp;w/w", 
            "name": "t&#8209;Butyl alcohol", 
            "casNumber": "75&#8209;65&#8209;0"
          }
        ]
      },
      {
        "name": "Cresols", 
        "ingredients": 
        [
          {
            "amount": "More than 0.1%&nbsp;w/w", 
            "name": "m&#8209;Cresol", 
            "casNumber": "108&#8209;39&#8209;4"
          },
          {
            "amount": "More than 0.1%&nbsp;w/w", 
            "name": "o&#8209;Cresol", 
            "casNumber": "95&#8209;48&#8209;7"
          },
          {
            "amount": "More than 0.1%&nbsp;w/w", 
            "name": "p&#8209;Cresol", 
            "casNumber": "106&#8209;44&#8209;5"
          },
          {
            "amount": "More than 0.1%&nbsp;w/w", 
            "name": "Mixed Cresols", 
            "casNumber": "1319&#8209;77&#8209;3"
          },
        ]
      },
      {
        "name": "Essential oils, Camphor, Eucalyptol or Menthol",
        "ingredients": 
        [
          {
            "amount": "More than 0.5%&nbsp;w/w", 
            "name": "Essential oils"
          },
          {
            "amount": "More than 0.15%&nbsp;w/w", 
            "name": "Camphor", 
            "casNumber": "464&#8209;49&#8209;3, 76&#8209;22&#8209;2"
          },
          {
            "amount": "More than 0.5%&nbsp;w/w", 
            "name": "Eucalyptol", 
            "casNumber": "470&#8209;82&#8209;6 "
          },
          {
            "amount": "More than 0.5%&nbsp;w/w", 
            "name": "Menthol", 
            "casNumber": "1490&#8209;04&#8209;6, 2216&#8209;51&#8209;5, 89&#8209;78&#8209;1, 15356&#8209;70&#8209;4"
          },
          {
            "amount": "More than 0.5%&nbsp;w/w", 
            "name": "Total amount of essential oils, Camphor, Eucalyptol or Menthol"
          }
        ]
      },
      {
        "name": "Glycols and Glycol ethers", 
        "ingredients": 
        [
          {
            "amount": "More than 1%&nbsp;w/w", 
            "name":"Buteth&#8209;2 acetate", 
            "casNumber": "124&#8209;17&#8209;4" 
          },
          {
            "amount": "More than 1%&nbsp;w/w", 
            "name":"Butoxydiglycol", 
            "casNumber": "112&#8209;34&#8209;5" 
          },
          {
            "amount": "More than 1%&nbsp;w/w", 
            "name":"Butoxyethanol", 
            "casNumber": "111&#8209;76&#8209;2" 
          },
          {
            "amount": "More than 1%&nbsp;w/w", 
            "name":"Butoxyethyl acetate", 
            "casNumber": "112&#8209;07&#8209;02" 
          },
          {
            "amount": "More than 1%&nbsp;w/w", 
            "name":"Diethoxydiglycol", 
            "casNumber": "112&#8209;36&#8209;7" 
          },
          {
            "amount": "More than 10%&nbsp;w/w", 
            "name":"Dipropylene glycol", 
            "casNumber": "110&#8209;98&#8209;5, 25265&#8209;71&#8209;8" 
          },
          {
            "amount": "More than 10%&nbsp;w/w", 
            "name":"Dipropylene glycol dimethyl ether", 
            "casNumber": "111109&#8209;77&#8209;4" 
          },
          {
            "amount": "More than 1%&nbsp;w/w", 
            "name":"Ethoxydiglycol", 
            "casNumber": "111&#8209;90&#8209;0" 
          },
          {
            "amount": "More than 1%&nbsp;w/w", 
            "name":"Ethoxydiglycol acetate", 
            "casNumber": "112&#8209;15&#8209;2" 
          },
          {
            "amount": "More than 1%&nbsp;w/w", 
            "name":"Ethylene glycol only (also known as Glycol)", 
            "casNumber": "107&#8209;21&#8209;1"
          },
          {
            "amount": "More than 10%&nbsp;w/w", 
            "name":"Isobornyl dipropylene glycol ethers", 
            "casNumber": "958872&#8209;63&#8209;4" 
          },
          {
            "amount": "More than 10%&nbsp;w/w", 
            "name":"Methoxyisopropanol", 
            "casNumber": "107&#8209;98&#8209;2" 
          },
          {
            "amount": "More than 10%&nbsp;w/w", 
            "name":"Methoxyisopropyl acetate", 
            "casNumber": "108&#8209;65&#8209;6" 
          },
          {
            "amount": "More than 10%&nbsp;w/w", 
            "name":"PPG&#8209;2 methyl ether", 
            "casNumber": "13429&#8209;07&#8209;7, 34590&#8209;94&#8209;8" 
          },
          {
            "amount": "More than 10%&nbsp;w/w", 
            "name":"PPG&#8209;2 methyl ether acetate", 
            "casNumber": "88917&#8209;22&#8209;0" 
          },
          {
            "amount": "More than 10%&nbsp;w/w", 
            "name":"Propylene glycol", 
            "casNumber": "57&#8209;55&#8209;6" 
          },
          {
            "amount": "More than 10%&nbsp;w/w", 
            "name":"Propylene glycol butyl ether", 
            "casNumber": "5131&#8209;66&#8209;8" 
          }
        ]
      },
      {
        "name": "Hydrocarbon solvents",
        "ingredients": 
        [
          {
            "amount": "More than 5%&nbsp;w/w", 
            "name": "Cyclohexane", 
            "casNumber": "110&#8209;82&#8209;7" 
          },
          {
            "amount": "More than 5%&nbsp;w/w", 
            "name": "Hydrogenated didodecene", 
            "casNumber": "151006&#8209;61&#8209;0" 
          },
          {
            "amount": "More than 5%&nbsp;w/w", 
            "name": "Isopentane ", 
            "casNumber": "78&#8209;78&#8209;4" 
          },
          {
            "amount": "More than 5%&nbsp;w/w", 
            "name": "Pentane", 
            "casNumber": "109&#8209;66&#8209;0" 
          },
          {
            "amount": "More than 5%&nbsp;w/w", 
            "name": "Toluene", 
            "casNumber": "108&#8209;88&#8209;3" 
          },
          {
            "amount": "More than 5%&nbsp;w/w", 
            "name": "Turpentine", 
            "casNumber": "8006&#8209;64&#8209;2, 9005&#8209;90&#8209;7, 8052&#8209;14&#8209;0"
          }
        ]
      },
      {
        "name": "Other",
        "ingredients": 
        [
          {
            "amount": "Any", 
            "name": "Brucine sulfate", 
            "casNumber": "4845&#8209;99&#8209;2"
          },
          {
            "amount": "More than 5%&nbsp;w/w", 
            "name": "Butanone (also known as MEK)  ", 
            "casNumber":"  78&#8209;93&#8209;3" 
          },
          {
            "amount": "More than 1%&nbsp;w/w", 
            "name":" Butyl acetate ", 
            "casNumber":"  123&#8209;86&#8209;4 " 
          },
          {
            "amount": "More than 0.1%&nbsp;w/w", 
            "name": "Butyrolactone", 
            "casNumber":"  96&#8209;48&#8209;0"
          },
          {
            "amount": "More than 0.1%&nbsp;w/w", 
            "name": "Chloroplatinic acid", 
            "casNumber": "16941&#8209;12&#8209;1"
          },
          {
            "amount": "More than 0.1%&nbsp;w/w", 
            "name": "Copper sulphate", 
            "casNumber": "7758&#8209;98&#8209;7"
          },
          {
            "amount": "More than 5%&nbsp;w/w", 
            "name": "Cyclohexanone", 
            "casNumber":"  108&#8209;94&#8209;1 " 
          },
          {
            "amount": "More than 0.1%&nbsp;w/w", 
            "name": "Dimethyltolylamine", 
            "casNumber": "99&#8209;97&#8209;8"
          },
          {
            "amount": "More than 1%&nbsp;w/w", 
            "name":" Ethyl acetate", 
            "casNumber":"  141&#8209;78&#8209;6 " 
          },
          {
            "amount": "More than 5%&nbsp;w/w", 
            "name": "Ethyl ether", 
            "casNumber":"  60&#8209;29&#8209;7" 
          },
          {
            "amount": "More than 0.1%&nbsp;w/w", 
            "name": "Methyl acetate", 
            "casNumber": "79&#8209;20&#8209;9"
          },
          {
            "amount": "More than 5%&nbsp;w/w", 
            "name": "MIBK (also known as Methyl isobutyl ketone) ", 
            "casNumber":"  108&#8209;10&#8209;1 " 
          },
          {
            "amount": "More than 0.1%&nbsp;w/w", 
            "name": "Potassium chlorate", 
            "casNumber": "3811&#8209;04&#8209;9"
          },
          {
            "amount": "More than 0.1%&nbsp;w/w", 
            "name": "Sodium chlorate", 
            "casNumber": "7775&#8209;09&#8209;9"
          },
          {
            "amount": "More than 0.1%&nbsp;w/w", 
            "name": "Triethyl phosphate", 
            "casNumber": "78&#8209;40&#8209;0"
          },
          {
            "amount": "More than 0.2%&nbsp;w/w or 0.09&nbsp;grams", 
            "name": "Vitamin A or any of its derivatives (calculated as Retinol)", 
            "casNumber": "68&#8209;26&#8209;8, 11103&#8209;57&#8209;4" 
          },
          {
            "amount": "More than 0.5%&nbsp;w/w", 
            "name": "Xanthine derivatives (for example, caffeine, theophylline, theobromine, plant extracts containing xanthine derivatives, for example, paulinia cupana (guarana) extracts or powders)" 
          }
        ]
      },
      {
        "name": "Ingredient groups",
        "groupTable": true,
        "ingredients":
        [
          { "amount": "Any", "name": "Alkaline agents (including ammonium hydroxide liberators)" },
          { "amount": "Any", "name": "Cationic surfactants with 3 or 4 chains or groups with a length shorter than Carbon 12 (including straight, branched, cyclic or aromatic groups) if the surfactant is for non&#8209;preservative purposes" },
          { "amount": "Any", "name": "Compounds that release hydrogen peroxide" },
          { "amount": "Any", "name": "Fluoride compound (calculated as fluorine)" }
        ]
      },
      {
        "name": "Any ingredients acting as",
        "groupTable": true,
        "ingredients": 
        [
          { "amount": "Any", "name": "Anti&#8209;dandruff agents" },
          { "amount": "Any", "name": "Anti&#8209;hair loss agents" },
          { "amount": "Any", "name": "Anti&#8209;pigmenting and depigmenting agents" },
          { "amount": "Any", "name": "Chemical exfoliating agents" }
        ]
      }
    ],

  "frameformulations": 
    [
      { 
        "categoryName" : "Skin care",
        "formulations" : [
          { "name" : "Item" },
          { "name" : "Item" }
          ]
      },
      { 
        "categoryName" : "Skin cleansing",
        "formulations" : [
          { "name" : "Item" },
          { "name" : "Item" }
          ]
      },
      { 
        "categoryName" : "Hair removal",
        "formulations" : [
          { "name" : "Item" },
          { "name" : "Item" }
          ]
      },
      { 
        "categoryName" : "Bleach for body hair",
        "formulations" : [
          { "name" : "Item" },
          { "name" : "Item" }
          ]
      },
      { 
        "categoryName" : "Correction of body odour and or perspiration",
        "formulations" : [
          { "name" : "Item" },
          { "name" : "Item" }
          ]
      },
      { 
        "categoryName" : "Shaving products",
        "formulations" : [
          { "name" : "Item" },
          { "name" : "Item" }
          ]
      },
      { 
        "categoryName" : "Make up",
        "formulations" : [
          { "name" : "Item" },
          { "name" : "Item" }
          ]
      },
      { 
        "categoryName" : "Perfumes",
        "formulations" : [
          { "name" : "Item" },
          { "name" : "Item" }
          ]
      },
      { 
        "categoryName" : "Sun products and self tanning products",
        "formulations" : [
          { "name" : "Item" },
          { "name" : "Item" }
          ]
      },
      { 
        "categoryName" : "Hair and scalp care products",
        "formulations" : [
          { "name" : "Item" },
          { "name" : "Item" }
          ]
      },
      {
        "categoryName": "Hair colouring products",
        "categoryNumber": "11",
        "formulations":
        [
          { "name" : "Hair colourant temporary shampoo",
            "number" : "11.1"
          },
          { "name" : "Hair colourant temporary foam lotion",
            "number" : "11.2"
          },
          { "name" : "Hair colourant temporary or semi permanent liquid cream foam",
            "number" : "11.3"
          },
          {
            "name": "Hair colourant (permanent, oxidative type)",
            "url": "11-4-hair-colourant-permanent-oxidative-type",
            "subname": "Type 1: two components - colourant part",
            "number": "11.4",
            "relatedTo": "To be mixed immediately prior to use with oxidative part (11.8-2013 or 11.9-2013)",
            "ingredientsAndLevels": 
              [
                {
                  "ingredient": "Anionic surfactants (for example, ammonium laureth sulfate)",
                  "maxLevel": "20"
                },
                {
                  "ingredient": "Non-ionic surfactants (for example, laureth-12, deceth-3)",
                  "maxLevel": "20"
                },
                {
                  "ingredient": "Amphoteric surfactants (for example, betaine derivatives)",
                  "maxLevel": "20"
                },
                {
                  "ingredient": "Emulsifying agents (for example, ethoxylated long chain alcohols)",
                  "maxLevel": "30"
                },
                {
                  "ingredient": "Soaps (for example, ammonium hydroxide/ethanolamine oleates)",
                  "maxLevel": "30"
                },
                {
                  "ingredient": "Thickeners (for example, carbomer, long chain alcohols)",
                  "maxLevel": "30"
                },
                {
                  "ingredient": "Solvents (for example, propylene glycol, glycerin)",
                  "maxLevel": "20"
                },
                {
                  "ingredient": "Ethanol and/or isopropanol (alcohol, alcohol denat., isopropyl alcohol)",
                  "maxLevel": "16"
                },
                { 
                  "ingredient": "Hair dyeing agent: Primary intermediates (for example, p-phenylenediamines such as p-phenylenediamine and toluene-2,5-diamine, p-aminophenols such as p-aminophenol and 4-amino-m-cresol, heterocyclic diamines such as 1-hydroxyethyl 4,5-diamino pyrazole sulfate)",
                  "maxLevel": "6"
                },
                { 
                  "ingredient": "Hair dyeing agent: Couplers (for example, m-aminophenols such as m-aminophenol and 4-amino-2-hydroxytoluene, m-phenylenediamines such as 2-amino-4-hydroxyethylamino-anisole, resorcinols such as resorcinol and 4-chlororesorcinol, pyridines such as 2,6-dihydroxy-3,4-dimethylpyridine, naphtols such as 1,5-naphthalenediol)",
                  "maxLevel": "6"
                },
                { 
                  "ingredient": "Hair dyeing agent: Directs (for example, HC red no. 3, 2-amino-6-chloro-4-nitrophenol, basic yellow 87)",
                  "maxLevel": "6"
                },
                { 
                  "ingredient": "Alkaline agents (for example, ammonium hydroxide, ethanolamine)",
                  "note": "Maximum concentration of ammonium hydroxide permitted is 6%",
                  "maxLevel": "10"
                },
                { 
                  "ingredient": "Cationic surfactants (for example, dicetyldimonium chloride, PEG-2 oleamine)",
                  "maxLevel": "5"
                },
                { 
                  "ingredient": "Cationic polymers (for example, polyquaternium-6)",
                  "maxLevel": "5"
                },
                { 
                  "ingredient": "Additional ingredients (for example, hair conditioning agents, pearlescent agents)",
                  "maxLevel": "5"
                },
                { 
                  "ingredient": "Antioxidants, reducing agents (for example, ascorbic acid, sodium metabisulfite)",
                  "maxLevel": "3"
                },
                { 
                  "ingredient": "Parfum",
                  "maxLevel": "2"
                },
                { 
                  "ingredient": "Chelating agents (for example, EDTA)",
                  "maxLevel": "1"
                },
                { 
                  "ingredient": "Aqua to",
                  "maxLevel": "100"
                }
              ],
            "pHrules":
              [
                { "pHrule": "pH value: 8 to 11.6" },
                { "pHrule": "pH value of the mixture with oxidative part: 6 to 11.6" }
              ]
            },
            { "name" : "Hair colourant permanent oxidative type type 2 two components colourant part with high level of oils",
              "number" : "11.5"
            },
            { "name" : "Hair colourant permanent oxidative type type 3 multi components colourant part a",
              "number" : "11.6"
            },
            { "name" : "Hair colourant permanent oxidative type type 3 multi components colourant part b",
              "number" : "11.7"
            },
            { "name" : "Dye remover reducing type part a",
              "number" : "11.10"
            },
            { "name" : "Dye remover reducing type part b",
              "number" : "11.11"
            },
            { "name" : "Dye remover oxidative type part a",
              "number" : "11.12"
            },
            { "name" : "Dye remover oxidative type part b",
              "number" : "11.13"
            },
            { "name" : "Skin dye removing cleanser reducing type",
              "number" : "11.14"
            },
            { "name" : "Hair bleach powder",
              "number" : "11.15"
            },
            { "name" : "Hair bleach paste",
              "number" : "11.16"
            },
            { "name" : "Hair bleach oxidative part type 1",
              "number" : "11.17"
            }
          ]
        },
        { 
          "categoryName" : "Hair styling products",
          "formulations" : [
            ]
        },
        { 
          "categoryName" : "Nail varnish",
          "formulations" : [
            ]
        },
        { 
          "categoryName" : "Nail care",
          "formulations" : [
            ]
        },
        { 
          "categoryName" : "Tooth care",
          "formulations" : [
            ]
         }
      ],

    "annexes": 
    [
      { 
        "annexName": "Colourants",
        "annexNumber": "3",
        "chemicals": 
        [
          {
            "chemicalName": "Sodium tris(1,2-naphthoquinone 1-oximato-O,O')ferrate(1-)",
            "colourIndex": "10006",
            "CASnumber": "",
            "ECnumber": "",
            "colour": "Green",
            "productType": "Rinse-off products",
            "maxConcentration": "",
            "other": "",
            "conditions": ""
          },
          {
            "chemicalName": "Trisodium tris[5,6-dihydro-5- (hydroxyimino)-6-oxonaphthalene-2-sulphonato(2-)- N5,O6]ferrate(3-)",
            "colourIndex": "10020",
            "CASnumber": "",
            "ECnumber": "",
            "colour": "Greenw",
            "productType": "Not to be used in products applied on mucous membranes",
            "maxConcentration": "",
            "other": "",
            "conditions": ""
          }
        ] 
      }
    ]

  }
