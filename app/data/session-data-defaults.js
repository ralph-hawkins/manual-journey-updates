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
        "amountGroups": 
        [
          {
            "amount": "Any amount of:",
            "ingredients": [
              { "name": "Ethanol", "casNumber": "64&#8209;17&#8209;5" },
              { "name": "Alcohol", "casNumber": "64&#8209;17&#8209;5"},
              { "name": "Alcohol denatured" },
              { "name": "Isopropanol", "casNumber": "67&#8209;63&#8209;0"}
            ]
          },
          {
            "amount": "Above 1% w/w:",
            "ingredients": 
            [
              { "name": "n&#8209;Butyl alcohol", "casNumber": "71&#8209;36&#8209;3" },
              { "name": "n&#8209;Propyl alcohol (also known as Propyl alcohol)", "casNumber": "71&#8209;23&#8209;8" },
              { "name": "t&#8209;Butyl alcohol", "casNumber": "75&#8209;65&#8209;0" }
            ]
          }
        ]
      },
      {
        "name": "Essential oils (Camphor, Menthol or Eucalyptol)",
        "note": "Any idividual essential oil above 0.5% (w/w) or if the total amount of essential oils is above 0.5% (w/w).",
        "amountGroups": 
        [
          {
            "amount": "Above 0.15% w/w:",
            "ingredients": [
              { "name": "Camphor", "casNumber": "464&#8209;49&#8209;3, 76&#8209;22&#8209;2" }
            ]
          }
        ]
      },
      {
        "name": "Glycols and glycol ethers",
        "amountGroups": 
        [
          {
            "amount": "Above 1% w/w:",
            "ingredients": [
              { "name":"Buteth&#8209;2 acetate", "casNumber": "124&#8209;17&#8209;4" },
              { "name":"Butoxydiglycol", "casNumber": "112&#8209;34&#8209;5" },
              { "name":"Butoxyethanol", "casNumber": "111&#8209;76&#8209;2" },
              { "name":"Butoxyethyl acetate", "casNumber": "112&#8209;07&#8209;02" },
              { "name":"Diethoxydiglycol", "casNumber": "112&#8209;36&#8209;7" },
              { "name":"Ethoxydiglycol", "casNumber": "111&#8209;90&#8209;0" },
              { "name":"Ethoxydiglycol acetate", "casNumber": "112&#8209;15&#8209;2" },
              { "name":"Ethylene glycol only (also known as Glycol)", "casNumber": "107&#8209;21&#8209;1"}
            ]
          },
          {
            "amount": "Above 10% w/w:",
            "ingredients": [
              { "name":"Dipropylene glycol", "casNumber": "110&#8209;98&#8209;5, 25265&#8209;71&#8209;8" },
              { "name":"Dipropylene glycol dimethyl ether", "casNumber": "111109&#8209;77&#8209;4" },
              { "name":"Isobornyl dipropylene glycol ethers", "casNumber": "958872&#8209;63&#8209;4" },
              { "name":"Methoxyisopropanol", "casNumber": "107&#8209;98&#8209;2" },
              { "name":"Methoxyisopropyl acetate", "casNumber": "108&#8209;65&#8209;6" },
              { "name":"PPG&#8209;2 methyl ether", "casNumber": "13429&#8209;07&#8209;7, 34590&#8209;94&#8209;8" },
              { "name":"PPG&#8209;2 methyl ether acetate", "casNumber": "88917&#8209;22&#8209;0" },
              { "name":"Propylene glycol", "casNumber": "57&#8209;55&#8209;6" },
              { "name":"Propylene glycol butyl ether", "casNumber": "5131&#8209;66&#8209;8" }
            ]
          }
        ]
      },
      {
        "name": "Hydrocarbon solvents",
        "amountGroups": 
        [
          {
            "amount": "Above 5% w/w:",
            "ingredients": [
              { "name": "Cyclohexane", "casNumber": "110&#8209;82&#8209;7" },
              { "name": "Hydrogenated didodecene", "casNumber": "151006&#8209;61&#8209;0" },
              { "name": "Isopentane ", "casNumber": "78&#8209;78&#8209;4" },
              { "name": "Pentane", "casNumber": "109&#8209;66&#8209;0" },
              { "name": "Toluene", "casNumber": "108&#8209;88&#8209;3" },
              { "name": "Turpentine", "casNumber": "8006&#8209;64&#8209;2, 9005&#8209;90&#8209;7, 8052&#8209;14&#8209;0"}
            ]
          }
        ]
      },
      {
        "name": "Other",
        "amountGroups":
        [
          {
            "amount": "Any amount of:",
            "ingredients": [
              { "name": "Brucine Sulfate", "casNumber": "4845&#8209;99&#8209;2" }
            ]
          },
          {
            "amount": "Above 0.1% w/w:",
            "ingredients": [
              { "name": "Butyrolactone", "casNumber":"  96&#8209;48&#8209;0" },
              { "name": "Chloroplatinic acid", "casNumber": "16941&#8209;12&#8209;1" },
              { "name": "Copper sulphate", "casNumber": "7758&#8209;98&#8209;7" },
              { "name": "Dimethyltolylamine", "casNumber": "99&#8209;97&#8209;8" },
              { "name": "Methyl acetate", "casNumber": "79&#8209;20&#8209;9" },
              { "name": "Potassium chlorate", "casNumber": "3811&#8209;04&#8209;9" },
              { "name": "Sodium chlorate", "casNumber": "7775&#8209;09&#8209;9" },
              { "name": "Triethyl phosphate", "casNumber": "78&#8209;40&#8209;0" },
              { "name": "m&#8209;Cresol", "casNumber": "108&#8209;39&#8209;4" },
              { "name": "o&#8209;Cresol", "casNumber": "95&#8209;48&#8209;7" },
              { "name": "p&#8209;Cresol", "casNumber": "106&#8209;44&#8209;5" },
              { "name": "Mixed Cresols", "casNumber": "1319&#8209;77&#8209;3" }
            ]
          },
          {
            "amount": "Above 0.2% w/w or 0.09 grams:",
            "ingredients": [
              { "name": "Vitamin A or any of its derivatives (calculated as Retinol)", "casNumber": "68&#8209;26&#8209;8, 11103&#8209;57&#8209;4" }
            ]
          },
          {
            "amount": "Above 0.5% w/w:",
            "ingredients": [
              { "name": "Xanthine derivatives (for example, caffeine, theophylline, theobromine, plant extracts containing xanthine derivatives e.g. paulinia cupana (guarana) extracts or powders)" }
            ]
          },
          {
            "amount": "Above 1% w/w:",
            "ingredients": [
              { "name":" Butyl acetate ", "casNumber":"  123&#8209;86&#8209;4 " },
              { "name":" Ethyl acetate ", "casNumber":"  141&#8209;78&#8209;6 " }
            ]
          },
          {
            "amount": "Above 5% w/w:",
            "ingredients": [
              { "name": "Cyclohexanone ", "casNumber":"  108&#8209;94&#8209;1 " },
              { "name": "Ethyl ether ", "casNumber":"  60&#8209;29&#8209;7" },
              { "name": "MEK (also known as Butanone)  ", "casNumber":"  78&#8209;93&#8209;3" },
              { "name": "MIBK (also known as Methyl isobutyl ketone) ", "casNumber":"  108&#8209;10&#8209;1 " }
            ]
          }
        ]
      },
      {
        "name": "Any ingredients classified as",
        "amountGroups":
        [
          {
            "ingredients": [
              { "name": "Alkaline agents (including ammonium hydroxide liberators)" },
              { "name": "Anti&#8209;dandruff agents" },
              { "name": "Anti&#8209;hair loss agents" },
              { "name": "Anti&#8209;pigmenting and depigmenting agents" },
              { "name": "Cationic surfactants with 3 or 4 chains or groups with a length shorter than Carbon 12 (including straight, branched, cyclic or aromatic groups) if the surfactant is for non&#8209;preservative purposes" },
              { "name": "Chemical exfoliating agents" },
              { "name": "Compounds that release hydrogen peroxide" },
              { "name": "Fluoride compound (calculated as fluorine)" }
            ] 
          }
        ]
      }
    ]
}
