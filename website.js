
const stateRetirementAges = {
    "AL": 65, // Alabama
    "AK": 65, // Alaska
    "AZ": 65, // Arizona
    "AR": 65, // Arkansas
    "CA": 65, // California
    "CO": 65, // Colorado
    "CT": 65, // Connecticut
    "DE": 65, // Delaware
    "DC": 65, // District of Columbia
    "FL": 65, // Florida
    "GA": 65, // Georgia
    "HI": 65, // Hawaii
    "ID": 65, // Idaho
    "IL": 65, // Illinois
    "IN": 65, // Indiana
    "IA": 65, // Iowa
    "KS": 65, // Kansas
    "KY": 65, // Kentucky
    "LA": 65, // Louisiana
    "ME": 65, // Maine
    "MD": 65, // Maryland
    "MA": 65, // Massachusetts
    "MI": 65, // Michigan
    "MN": 65, // Minnesota
    "MS": 65, // Mississippi
    "MO": 65, // Missouri
    "MT": 65, // Montana
    "NE": 65, // Nebraska
    "NV": 65, // Nevada
    "NH": 65, // New Hampshire
    "NJ": 65, // New Jersey
    "NM": 65, // New Mexico
    "NY": 65, // New York
    "NC": 65, // North Carolina
    "ND": 65, // North Dakota
    "OH": 65, // Ohio
    "OK": 65, // Oklahoma
    "OR": 65, // Oregon
    "PA": 65, // Pennsylvania
    "RI": 65, // Rhode Island
    "SC": 65, // South Carolina
    "SD": 65, // South Dakota
    "TN": 65, // Tennessee
    "TX": 65, // Texas
    "UT": 65, // Utah
    "VT": 65, // Vermont
    "VA": 65, // Virginia
    "WA": 65, // Washington
    "WV": 65, // West Virginia
    "WI": 65, // Wisconsin
    "WY": 65, // Wyoming
};
const stateIncomeTaxes = {
    "AL": 2,  // Alabama (2% minimum)
    "AK": 0,  // Alaska (no state income tax)
    "AZ": 2.59, // Arizona (2.59% minimum)
    "AR": 2,  // Arkansas (2% minimum)
    "CA": 1,  // California (1% minimum)
    "CO": 4.55, // Colorado (4.55% minimum)
    "CT": 3,  // Connecticut (3% minimum)
    "DE": 2.2, // Delaware (2.2% minimum)
    "DC": 4,  // District of Columbia (4% minimum)
    "FL": 0,  // Florida (no state income tax)
    "GA": 1,  // Georgia (1% minimum)
    "HI": 1.4, // Hawaii (1.4% minimum)
    "ID": 1.6, // Idaho (1.6% minimum)
    "IL": 4.95, // Illinois (4.95% minimum)
    "IN": 3.23, // Indiana (3.23% minimum)
    "IA": 0.33, // Iowa (0.33% minimum)
    "KS": 3.1,  // Kansas (3.1% minimum)
    "KY": 5,  // Kentucky (5% minimum)
    "LA": 2,  // Louisiana (2% minimum)
    "ME": 2,  // Maine (2% minimum)
    "MD": 2,  // Maryland (2% minimum)
    "MA": 5.00, // Massachusetts (5% minimum)
    "MI": 4.25, // Michigan (4.25% minimum)
    "MN": 5.35, // Minnesota (5.35% minimum)
    "MS": 3,  // Mississippi (3% minimum)
    "MO": 1.5,  // Missouri (1.5% minimum)
    "MT": 1,  // Montana (1% minimum)
    "NE": 2.56, // Nebraska (2.56% minimum)
    "NV": 0,  // Nevada (no state income tax)
    "NH": 5,  // New Hampshire (taxes dividends/interest at 5%)
    "NJ": 1.4,  // New Jersey (1.4% minimum)
    "NM": 1.7,  // New Mexico (1.7% minimum)
    "NY": 4,  // New York (4% minimum)
    "NC": 5.25, // North Carolina (5.25% minimum)
    "ND": 1.84, // North Dakota (1.84% minimum)
    "OH": 0.5,  // Ohio (0.5% minimum)
    "OK": 0.5,  // Oklahoma (0.5% minimum)
    "OR": 5,  // Oregon (5% minimum)
    "PA": 3.07, // Pennsylvania (3.07% minimum)
    "RI": 3.75, // Rhode Island (3.75% minimum)
    "SC": 0,  // South Carolina (no state income tax)
    "SD": 0,  // South Dakota (no state income tax)
    "TN": 0,  // Tennessee (no state income tax on wages)
    "TX": 0,  // Texas (no state income tax)
    "UT": 4.95, // Utah (4.95% minimum)
    "VT": 3.35, // Vermont (3.35% minimum)
    "VA": 2,  // Virginia (2% minimum)
    "WA": 0,  // Washington (no state income tax)
    "WV": 3,  // West Virginia (3% minimum)
    "WI": 3.54, // Wisconsin (3.54% minimum)
    "WY": 0   // Wyoming (no state income tax)
};
const stateRetirementSavings = {
    "AL": 800000, // Alabama
    "AK": 1000000, // Alaska
    "AZ": 850000, // Arizona
    "AR": 750000, // Arkansas
    "CA": 1500000, // California
    "CO": 1200000, // Colorado
    "CT": 1300000, // Connecticut
    "DE": 1000000, // Delaware
    "DC": 1400000, // District of Columbia
    "FL": 900000, // Florida
    "GA": 850000, // Georgia
    "HI": 1800000, // Hawaii
    "ID": 800000, // Idaho
    "IL": 1100000, // Illinois
    "IN": 750000, // Indiana
    "IA": 800000, // Iowa
    "KS": 750000, // Kansas
    "KY": 800000, // Kentucky
    "LA": 800000, // Louisiana
    "ME": 850000, // Maine
    "MD": 1300000, // Maryland
    "MA": 1500000, // Massachusetts
    "MI": 900000, // Michigan
    "MN": 1000000, // Minnesota
    "MS": 750000, // Mississippi
    "MO": 850000, // Missouri
    "MT": 800000, // Montana
    "NE": 800000, // Nebraska
    "NV": 900000, // Nevada
    "NH": 1100000, // New Hampshire
    "NJ": 1400000, // New Jersey
    "NM": 850000, // New Mexico
    "NY": 1500000, // New York
    "NC": 900000, // North Carolina
    "ND": 750000, // North Dakota
    "OH": 850000, // Ohio
    "OK": 750000, // Oklahoma
    "OR": 1200000, // Oregon
    "PA": 1000000, // Pennsylvania
    "RI": 1300000, // Rhode Island
    "SC": 800000, // South Carolina
    "SD": 750000, // South Dakota
    "TN": 800000, // Tennessee
    "TX": 950000, // Texas
    "UT": 1000000, // Utah
    "VT": 950000, // Vermont
    "VA": 1200000, // Virginia
    "WA": 1200000, // Washington
    "WV": 750000, // West Virginia
    "WI": 1000000, // Wisconsin
    "WY": 800000, // Wyoming
};
function run(){
    let state=document.getElementById('states').value;
    let age=document.getElementById('age').value;
    let option=document.getElementById("accountpicked").value;
    let contribute=document.getElementById("investment").value;
    let investment=document.getElementById("contribution type").value;
    var total=0;
    var interest=0.03;
    if (!state || !option || isNaN(contribute) || contribute<= 0 || !investment) {
        alert("Please fill out all fields correctly.");
        return;
    }
    if(option==="RIRA"){
        let time=57-age;
        if(investment==0){
            var total=contribute;
            var target=stateRetirementSavings[state]/((1+0.07)**time)


        }
        if(investment>0){
            total=contribute * (((1 + (0.07 / investment)) ** (investment * time) - 1) / (0.07 / investment));
            total=Math.round(total);
            var target = (stateRetirementSavings[state] * (0.07 / investment)) / ((1 + (0.07 / investment)) ** (investment * time) - 1);
        }
        total=total/((1+0.02)**time);
        if(total>=stateRetirementSavings[state]){
            document.getElementById('output').innerHTML =`WOW you did great planning for the future saving a total of $${total} which is enough to live comfortably in the state of ${state} at the age of 57`;
        }
        if(total<stateRetirementSavings[state]){
            target=Math.round(target);
            document.getElementById('output').innerHTML =`You have saved a total of $${total} which is great but accordinng to data to retire at 57 in the state of ${state} you may need $${stateRetirementSavings[state]} so we reccomend upping your contribution to $${target} `;
        }
        return;

    }
    if(option==="TIRA"){

    }
    if(option==="HSA"){

    }
    if(option==="R401k"){

    }

}
document.getElementById('submit').addEventListener('click', run);
