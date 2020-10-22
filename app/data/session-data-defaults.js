/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

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
        "categoryNumber": 1,
        "formulations" : [
          {
            "name": "Skin care cream, lotion, or gel",
            "url": "1-1-skin-care-cream-lotion-gel.html",
            "number": 1,
            "ingredientsAndLevels": [
                { "ingredient": "Oils (for example, vegetable and/or mineral), waxes and fats (for example, long chain alcohols)", 
                  "maxLevel": "30" 
                },
                { "ingredient": "Silicones including volatile silicones", 
                  "ingredientExample": "Cyclopentasiloxane, dimethicone",
                  "maxLevel": "20" 
                },
                { "ingredient": "Humectants", 
                  "ingredientExample": "Glycerin, propylene glycol, PEG",
                  "maxLevel": "20" 
                },
                { "ingredient": "Thickeners", 
                  "ingredientExample": "Carbomer, xanthan gum",
                  "maxLevel": "12" 
                },
                { "ingredient": "Ethanol (alcohol, alcohol denat.)", 
                  "maxLevel": "10" 
                },
                { "ingredient": "Additional ingredients", 
                  "ingredientExample": "Vitamins, antioxidants, plant extracts",
                  "maxLevel": "10" 
                },
                { "ingredient": "Bulking agents", 
                  "ingredientExample": "Talc, silica, nylon powder",
                  "maxLevel": "5" 
                },
                { "ingredient": "UV filters", 
                  "maxLevel": "5" 
                },
                { "ingredient": "Emulsifying agents, anionic / amphoteric / non-ionic surfactants", 
                  "ingredientExample": "PEG stearate, ceteareth",
                  "maxLevel": "5" 
                },
                { "ingredient": "Preservatives, antimicrobials", 
                  "maxLevel": "2" 
                },
                { "ingredient": "Colourants", 
                  "maxLevel": "2" 
                },
                { "ingredient": "Parfum", 
                  "maxLevel": "1" 
                },
                { "ingredient": "Aqua", 
                  "maxLevel": "100" 
                }
              ]
          },
          {
            "name": "Skin care cream, lotion, or gel — with high level of silicones",
            "url": "#",
            "number": 2,
            "ingredientsAndLevels": [
                {
                  "ingredient" : "Silicones including volatile silicones",
                  "ingredientExample": "cyclopentasiloxane, dimethicone",
                  "maxLevel": 50
                  },
                  {
                  "ingredient" : "Oils (for example, vegetable and/or mineral), waxes and fats (for example, long chain alcohols)",
                  "maxLevel": 40
                  },
                  {
                  "ingredient" : "Ethanol (alcohol, alcohol denat.)",
                  "maxLevel": 25
                  },
                  {
                  "ingredient" : "Humectants",
                  "ingredientExample": "glycerin, propylene glycol, PEG",
                  "maxLevel": 20
                  },
                  {
                  "ingredient" : "Additional ingredients",
                  "ingredientExample": "plant extracts, vitamins",
                  "maxLevel": 10
                  },
                  {
                  "ingredient" : "Bulking agents",
                  "ingredientExample": "starch, kaolin, talc",
                  "maxLevel": 5
                  },
                  {
                  "ingredient" : "Emulsifying agents, anionic / amphoteric / non-ionic surfactants",
                  "ingredientExample": "sorbitan sesquioleate, sorbitan stearate",
                  "maxLevel": 5
                  },
                  {
                  "ingredient" : "Thickeners",
                  "ingredientExample": "cellulose gum",
                  "maxLevel": 5
                  },
                  {
                  "ingredient" : "UV filters",
                  "maxLevel": 5
                  },
                  {
                  "ingredient" : "Preservatives, antimicrobials",
                  "maxLevel": 2
                  },
                  {
                  "ingredient" : "Colorants",
                  "maxLevel": 2
                  },
                  {
                  "ingredient" : "Parfum",
                  "maxLevel": 1
                  },
                  {
                  "ingredient" : "Aqua to",
                  "maxLevel": 10
                  }
            ]
          },
          {
            "name": "Skin care cream, lotion, or gel — with high level of humectants",
            "url": "#",
            "number": 3,
            "ingredientsAndLevels": 
            [
              { 
                "ingredient": "Humectants",
                "ingredientExample": "glycerin, propylene glycol, PEG",
                "maxLevel": 50
              },
              { 
                "ingredient": "Oils (for example, vegetable and/or mineral), waxes and fats (for example, long chain alcohols)",
                "maxLevel": 40
              },
              { 
                "ingredient": "Silicones including volatile silicones",
                "ingredientExample": "cyclopentasiloxane, dimethicone",
                "maxLevel": 20
              },
              { 
                "ingredient": "Ethanol (alcohol, alcohol denat.)",
                "maxLevel": 20
              },
              { 
                "ingredient": "Emulsifying agents, anionic / amphoteric / non-ionic surfactants",
                "ingredientExample": "glyceryl stearate, sodium cocoyl isethionate",
                "maxLevel": 10
              },
              { 
                "ingredient": "Bulking agents",
                "ingredientExample": "silica, talc",
                "maxLevel": 10
              },
              { 
                "ingredient": "UV filters",
                "maxLevel": 5
              },
              { 
                "ingredient": "Film forming polymers",
                "ingredientExample": "PVP",
                "maxLevel": 5
              },
              { 
                "ingredient": "Additional ingredients",
                "ingredientExample": "vitamins, plant extracts",
                "maxLevel": 5
              },
              { 
                "ingredient": "Thickeners",
                "ingredientExample": "carbomer",
                "maxLevel": 5
              },
              { 
                "ingredient": "Preservatives, antimicrobials",
                "maxLevel": 2
              },
              { 
                "ingredient": "Colorants",
                "maxLevel": 2
              },
              { 
                "ingredient": "Parfum",
                "maxLevel": 1
              },
              { 
                "ingredient": "Aqua to",
                "maxLevel": 100
              }
            ]
          },
          {
            "name": "Skin care cream, lotion, or gel — with high level of bulking agents",
            "url": "#",
            "number": 4,
            "ingredientsAndLevels": [
              { "ingredient": "Oils (for example, vegetable and/or mineral), waxes and fats for example,long chain alcohols )",
                "maxLevel": 60 },
              { "ingredient": "Thickeners",
                "ingredientExample": "bentonite, carbomer, cellulose",
                "maxLevel": 60 },
              { "ingredient": "Humectants",
                "ingredientExample": "glycerin, propylene glycol",
                "maxLevel": 40 },
              { "ingredient": "Bulking agents",
                "ingredientExample": "starch, zinc oxide, kaolin",
                "maxLevel": 40 },
              { "ingredient": "Emulsifying agents, anionic / amphoteric / non-ionic surfactants",
                "ingredientExample": "glyceryl stearate, sodium laureth sulfate",
                "maxLevel": 25 },
              { "ingredient": "Ethanol (alcohol, alcohol denat.)",
                "maxLevel": 20 },
              { "ingredient": "Silicones including volatile silicones",
                "ingredientExample": "cyclopentasiloxane, dimethicone",
                "maxLevel": 20 },
              { "ingredient": "UV filters",
                "maxLevel": 5 },
              { "ingredient": "Additional ingredients",
                "ingredientExample": "plant extracts, antioxidants, chelating agents",
                "maxLevel": 5 },
              { "ingredient": "Preservatives, antimicrobials",
                "maxLevel": 2 },
              { "ingredient": "Colorants",
                "maxLevel": 2 },
              { "ingredient": "Parfum",
                "maxLevel": 1 },
              { "ingredient": "Aqua to",
                "maxLevel": 100 }
            ]
          },
          {
            "name": "Skin care cream, lotion, or gel — with high level of fatty compounds",
            "url": "#",
            "number": 5,
            "ingredientsAndLevels": []
          },
          {
            "name": "Skin care cream, lotion, or gel — with high level of fatty compounds",
            "url": "#",
            "number": 6,
            "ingredientsAndLevels": []
          },
          {
            "name": "Skin care cream, lotion, or gel — with high level of UV filters",
            "url": "#",
            "number": 7,
            "ingredientsAndLevels": []
          },
          {
            "name": "Zinc oxide based cream",
            "url": "#",
            "number": 7,
            "ingredientsAndLevels": []
          },
          {
            "name": "Skin gel (hydro-alcoholic based)",
            "url": "#",
            "number": 7,
            "ingredientsAndLevels": []
          },
          { 
            "name": "Tonic, cosmetic water",
            "url": "#",
            "number": 7,
            "ingredientsAndLevels": []
          },
          { 
            "name": "Chemical exfoliation products",
            "url": "#",
            "number": 7,
            "ingredientsAndLevels": []
          },
          { 
            "name": "Skin care (silicone based)",
            "url": "#",
            "number": 7,
            "ingredientsAndLevels": []
          },
          { 
            "name": "Petroleum jelly",
            "url": "#",
            "number": 7,
            "ingredientsAndLevels": []
          },
          { 
            "name": "Talcum powder (loose or pressed)",
            "url": "#",
            "number": 7,
            "ingredientsAndLevels": []
          },
          { 
            "name": "Lip care (stick, cream, gel)",
            "url": "#",
            "number": 7,
            "ingredientsAndLevels": []
          }
        ]
      },
      { 
        "categoryName" : "Skin cleansing",
        "categoryNumber": 2,
        "formulations" : [
          {
            "name": "Liquid soap",
            "url": "2-09-liquid-soap.html",
            "number": 9,
            "note": "Liquid ‘soaps’ may be soap based, totally synthetic based or a combination of both soap and synthetic.",
            "ingredientsAndLevels": [
                {
                  "ingredient": "Anionic / amphoteric surfactants",
                  "ingredientExample": "Laureth sulfate, betaine",
                  "maxLevel": "40"
                },
                {
                  "ingredient": "Non-ionic surfactants",
                  "ingredientExample": "Glucose derivatives",
                  "maxLevel": "40"
                },
                {
                  "ingredient": "Soaps (sodium, potassium or triethanolamine)",
                  "maxLevel": "20"
                },
                {
                  "ingredient": "Emollients",
                  "ingredientExample": "PEG-7, glyceryl cocoate",
                  "maxLevel": "20"
                },
                {
                  "ingredient": "Humectants",
                  "ingredientExample": "Glycerin, propylene glycol, sorbitol",
                  "maxLevel": "20"
                },
                {
                  "ingredient": "Thickeners",
                  "ingredientExample": "Sodium chloride, hydroxycellulose derivatives",
                  "maxLevel": "5"
                },
                {
                  "ingredient": "Additional ingredients",
                  "ingredientExample": "Plant extracts, UV filters",
                  "maxLevel": "5"
                },
                {
                  "ingredient": "Pearlescent agents",
                  "ingredientExample": "Glycol distearate, glycol stearate",
                  "maxLevel": "5"
                },
                {
                  "ingredient": "Skin conditioning agents",
                  "ingredientExample": "Cationic cellulose",
                  "maxLevel": "5"
                },
                {
                  "ingredient": "Parfum",
                  "maxLevel": "5"
                },
                {
                  "ingredient": "Preservatives, antimicrobials",
                  "maxLevel": "2"
                },
                {
                  "ingredient": "Colourants",
                  "maxLevel": "1"
                },
                {
                  "ingredient": "Aqua", 
                  "maxLevel": "100"
                }
            ]
          },
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
        "categoryName" : "Shaving",
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
        "categoryName" : "Sun and self tanning",
        "formulations" : [
          { "name" : "Item" },
          { "name" : "Item" }
          ]
      },
      { 
        "categoryName" : "Hair and scalp care",
        "formulations" : [
          { "name" : "Item" },
          { "name" : "Item" }
          ]
      },
      {
        "categoryName": "Hair colouring",
        "categoryNumber": 11,
        "formulations":
        [
          { "name" : "Hair colourant temporary shampoo",
            "number" : 1
          },
          { "name" : "Hair colourant temporary foam lotion",
            "number" : 2
          },
          { "name" : "Hair colourant temporary or semi permanent liquid cream foam",
            "number" : 3
          },
          {
            "name": "Hair colourant (permanent, oxidative type)",
            "url": "11-4-hair-colourant-permanent-oxidative-type",
            "subname": "Type 1: two components - colourant part",
            "number": 4,
            "relatedTo": "To be mixed immediately prior to use with oxidative part (11.8-2013 or 11.9-2013)",
            "ingredientsAndLevels": 
              [
                {
                  "ingredient": "Anionic surfactants",
                  "ingredientExample": "Ammonium laureth sulfate",
                  "maxLevel": "20"
                },
                {
                  "ingredient": "Non-ionic surfactants",
                  "ingredientExample": "Laureth&#8209;12, deceth&#8209;3",
                  "maxLevel": "20"
                },
                {
                  "ingredient": "Amphoteric surfactants",
                  "ingredientExample": "Betaine derivatives",
                  "maxLevel": "20"
                },
                {
                  "ingredient": "Emulsifying agents",
                  "ingredientExample": "Ethoxylated long chain alcohols",
                  "maxLevel": "30"
                },
                {
                  "ingredient": "Soaps",
                  "ingredientExample": "Ammonium hydroxide/ethanolamine oleates",
                  "maxLevel": "30"
                },
                {
                  "ingredient": "Thickeners",
                  "ingredientExample": "Carbomer, long chain alcohols",
                  "maxLevel": "30"
                },
                {
                  "ingredient": "Solvents",
                  "ingredientExample": "Propylene glycol, glycerin",
                  "maxLevel": "20"
                },
                {
                  "ingredient": "Ethanol and/or isopropanol (alcohol, alcohol denat., isopropyl alcohol)",
                  "maxLevel": "16"
                },
                { 
                  "ingredient": "Hair dyeing agent: Primary intermediates",
                  "ingredientExample": "p&#8209;phenylenediamines such as p&#8209;phenylenediamine and toluene&#8209;2,5&#8209;diamine, p&#8209;aminophenols such as p&#8209;aminophenol and 4&#8209;amino&#8209;m&#8209;cresol, heterocyclic diamines such as 1&#8209;hydroxyethyl 4,5&#8209;diamino pyrazole sulfate",
                  "maxLevel": "6"
                },
                { 
                  "ingredient": "Hair dyeing agent: Couplers",
                  "ingredientExample": "m&#8209;aminophenols such as m&#8209;aminophenol and 4&#8209;amino&#8209;2&#8209;hydroxytoluene, m&#8209;phenylenediamines such as 2&#8209;amino&#8209;4&#8209;hydroxyethylamino&#8209;anisole, resorcinols such as resorcinol and 4&#8209;chlororesorcinol, pyridines such as 2,6&#8209;dihydroxy&#8209;3,4&#8209;dimethylpyridine, naphtols such as 1,5&#8209;naphthalenediol",
                  "maxLevel": "6"
                },
                { 
                  "ingredient": "Hair dyeing agent: Directs",
                  "ingredientExample": "HC red no. 3, 2&#8209;amino&#8209;6&#8209;chloro&#8209;4&#8209;nitrophenol, basic yellow 87",
                  "maxLevel": "6"
                },
                { 
                  "ingredient": "Alkaline agents",
                  "ingredientExample": "Ammonium hydroxide, ethanolamine",
                  "note": "Maximum concentration of ammonium hydroxide permitted is 6%",
                  "maxLevel": "10"
                },
                { 
                  "ingredient": "Cationic surfactants",
                  "ingredientExample": "Dicetyldimonium chloride, PEG&#8209;2 oleamine",
                  "maxLevel": "5"
                },
                { 
                  "ingredient": "Cationic polymers",
                  "ingredientExample": "Polyquaternium&#8209;6",
                  "maxLevel": "5"
                },
                { 
                  "ingredient": "Additional ingredients",
                  "ingredientExample": "Hair conditioning agents, pearlescent agents",
                  "maxLevel": "5"
                },
                { 
                  "ingredient": "Antioxidants, reducing agents",
                  "ingredientExample": "Ascorbic acid, sodium metabisulfite",
                  "maxLevel": "3"
                },
                { 
                  "ingredient": "Parfum",
                  "maxLevel": "2"
                },
                { 
                  "ingredient": "Chelating agents",
                  "ingredientExample": "EDTA",
                  "maxLevel": "1"
                },
                { 
                  "ingredient": "Aqua to",
                  "maxLevel": "100"
                }
              ],
            "pHrules":
              [
                { "pHrule": "item before mixing: 8 to 11.6" },
                { "pHrule": "mixture with oxidative part: 6 to 11.6" }
              ]
            },
            { "name" : "Hair colourant permanent oxidative type type 2 two components colourant part with high level of oils",
              "number" : 5
            },
            { "name" : "Hair colourant permanent oxidative type type 3 multi components colourant part a",
              "number" : 6
            },
            { "name" : "Hair colourant permanent oxidative type type 3 multi components colourant part b",
              "number" : 7
            },
            { "name" : "Dye remover reducing type part a",
              "number" : 10
            },
            { "name" : "Dye remover reducing type part b",
              "number" : 11
            },
            { "name" : "Dye remover oxidative type part a",
              "number" : 12
            },
            { "name" : "Dye remover oxidative type part b",
              "number" : 13
            },
            { "name" : "Skin dye removing cleanser reducing type",
              "number" : 14
            },
            { "name" : "Hair bleach powder",
              "number" : 15
            },
            { "name" : "Hair bleach paste",
              "number" : 16
            },
            { "name" : "Hair bleach oxidative part type 1",
              "number" : 17
            }
          ]
        },
        { 
          "categoryName" : "Hair styling",
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
            "productType": "Rinse-off",
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
            "productType": "Not to be used in applied on mucous membranes",
            "maxConcentration": "",
            "other": "",
            "conditions": ""
          }
        ] 
      }
    ]

  }
