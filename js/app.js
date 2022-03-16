const root = document.documentElement;
const background = document.getElementById("background");
const header = document.getElementById("main-header");
const headerLink = document.getElementById("main-header-link");
const box = document.getElementById("box");
const inputBox = document.getElementById("input-box");
const hexCodeInput = document.getElementById("input-field");
const colorText = document.getElementsByClassName("color-text");
const resultText = document.getElementsByClassName("result-text");
const canName = document.getElementById("can-name");
const canHex = document.getElementById("can-hex");

const montanaHexs = new Map();

{
montanaHexs.set("F4E593", "Smash137's Potato");
montanaHexs.set("FEE668", "Easter Yellow");
montanaHexs.set("FEDA16", "Kicking Yellow");
montanaHexs.set("FCC001", "Yellow");
montanaHexs.set("F69E02", "Melon Yellow");
montanaHexs.set("D37E09", "Topaz");
montanaHexs.set("A34C2E", "Hazle");
montanaHexs.set("6F2F23", "Pecan Nut");
montanaHexs.set("602317", "Maroon");
montanaHexs.set("E0A600", "Indianc Spice");
montanaHexs.set("B69822", "Masala");
montanaHexs.set("A18114", "Delhi");
montanaHexs.set("6F592A", "Bombay");
montanaHexs.set("F59F24", "Juice");
montanaHexs.set("EF800D", "Clockwork Orang");
montanaHexs.set("EA640B", "Pure Orange");
montanaHexs.set("E85011", "Halloween");
montanaHexs.set("E3001B", "Code Red");
montanaHexs.set("F08C48", "Tomorrow");
montanaHexs.set("EB6A27", "Atoms's Megablast");
montanaHexs.set("C4091C", "Fire Rose");
montanaHexs.set("6D0827", "Cardinal");
montanaHexs.set("3F2224", "Merlot");
montanaHexs.set("331028", "Cherry");
montanaHexs.set("510129", "Winegum");
montanaHexs.set("F5B8C5", "Miss Piggy");
montanaHexs.set("EF8EB0", "Pink Cadillac");
montanaHexs.set("E74789", "Pink Panther");
montanaHexs.set("C1035E", "Punk Pink");
montanaHexs.set("E94190", "Beast");
montanaHexs.set("AA0673", "Freak");
montanaHexs.set("981569", "Purple Rain");
montanaHexs.set("AD0F6C", "Good Times");
montanaHexs.set("7E154E", "Imperator");
montanaHexs.set("EEC2B9", "Cocktail");
montanaHexs.set("E69E89", "Mr Crab");
montanaHexs.set("E0886A", "Sushi");
montanaHexs.set("E8AAB2", "Patpong");
montanaHexs.set("DC797D", "Pink Lemonade");
montanaHexs.set("D65566", "Lollipop");
montanaHexs.set("AB2841", "Bloody Mary");
montanaHexs.set("9C498C", "Illulison");
montanaHexs.set("90277B", "Magic");
montanaHexs.set("BFA0C3", "Bubble Bath");
montanaHexs.set("B091B9", "Ms Jackson");
montanaHexs.set("834D8D", "Monster");
montanaHexs.set("65307A", "Pimp Violet");
montanaHexs.set("4B1E54", "Galaxy");
montanaHexs.set("AEA1C7", "Lavender");
montanaHexs.set("A48EBA", "Blue Velvet");
montanaHexs.set("605797", "Royal Purple");
montanaHexs.set("524285", "Wizard");
montanaHexs.set("0B093D", "Universe");
montanaHexs.set("A6969C", "Gut");
montanaHexs.set("8B7882", "Kindney");
montanaHexs.set("664B5C", "Liver");
montanaHexs.set("D5B5C5", "Dummy");
montanaHexs.set("926F80", "Plum");
montanaHexs.set("552E3F", "Amethyst");
montanaHexs.set("CED2DA", "Edelgard");
montanaHexs.set("A5B0CB", "Brunhilde");
montanaHexs.set("6F89BC", "Waltraut");
montanaHexs.set("4F5996", "Irmgard");
montanaHexs.set("82C6E3", "Baby Blue");
montanaHexs.set("489FCE", "Light Blue");
montanaHexs.set("2F6EB3", "Horizon");
montanaHexs.set("1F4A8B", "Royal Blue");
montanaHexs.set("113169", "Ultamarine");
montanaHexs.set("051638", "Dark Indigo");
montanaHexs.set("B2C1C0", "Dove");
montanaHexs.set("56666B", "Seal");
montanaHexs.set("3A4857", "Space");
montanaHexs.set("9DAFC4", "Trout");
montanaHexs.set("5D738F", "Marlin");
montanaHexs.set("2F4A65", "Whale");
montanaHexs.set("CDDFF0", "Ice Blue");
montanaHexs.set("A0C3DE", "Lenor");
montanaHexs.set("6C96C2", "Blue Lagoon");
montanaHexs.set("235699", "Knock Out Blue");
montanaHexs.set("273278", "Sorrento Blue");
montanaHexs.set("E2DE53", "Pistachio");
montanaHexs.set("CBD247", "Acid");
montanaHexs.set("AFC63F", "Slimer");
montanaHexs.set("A1A33E", "Oasis");
montanaHexs.set("CDD57A", "Spring");
montanaHexs.set("B9CB49", "Wild Lime");
montanaHexs.set("69A93F", "Irish Green");
montanaHexs.set("387F3C", "Boston");
montanaHexs.set("25592D", "Celtic");
montanaHexs.set("133517", "Banknote");
montanaHexs.set("163B1E", "Tag Green");
montanaHexs.set("61C555", "Hippie");
montanaHexs.set("59B13A", "Mescaline");
montanaHexs.set("488E2B", "Woodstock");
montanaHexs.set("327336", "Plant");
montanaHexs.set("9FCFD8", "Tiffany");
montanaHexs.set("65ABC1", "Cool Cologne");
montanaHexs.set("3A849E", "Mermaid");
montanaHexs.set("163B48", "Neptune");
montanaHexs.set("0D2931", "Riffs");
montanaHexs.set("87D7CE", "Drops");
montanaHexs.set("68C3AD", "Nappies");
montanaHexs.set("408C77", "Surgery");
montanaHexs.set("A3C67F", "E2e Green");
montanaHexs.set("69AC61", "Revolt Green");
montanaHexs.set("377D65", "Atlantis");
montanaHexs.set("CBDAC9", "Olymp");
montanaHexs.set("B8D6C0", "Hope");
montanaHexs.set("78B49B", "Patina");
montanaHexs.set("337565", "Copper Green");
montanaHexs.set("D2D5BE", "Trabi");
montanaHexs.set("BFC69A", "Beetle");
montanaHexs.set("A5AC81", "Reseda");
montanaHexs.set("A7B29E", "Fog");
montanaHexs.set("7B8A7C", "Mist");
montanaHexs.set("505F46", "Storm");
montanaHexs.set("CFC78A", "Bamboo");
montanaHexs.set("A0914C", "Hemp");
montanaHexs.set("8D8541", "Boa");
montanaHexs.set("6D5B3E", "Pan");
montanaHexs.set("B9B545", "Pear Green");
montanaHexs.set("758338", "Lost Island");
montanaHexs.set("575B2A", "Troops");
montanaHexs.set("2D3F20", "Toad");
montanaHexs.set("D5D1B3", "Face");
montanaHexs.set("A3A686", "Hannibal");
montanaHexs.set("818464", "Murdock");
montanaHexs.set("3F3E2C", "B.a Bosko");
montanaHexs.set("EFF1E7", "Jaws");
montanaHexs.set("C7C8BA", "Mouse");
montanaHexs.set("999A93", "Shark");
montanaHexs.set("5F6460", "Rhino");
montanaHexs.set("47403D", "Ant");
montanaHexs.set("C5BBAA", "Gambetta");
montanaHexs.set("9B9285", "Lennox");
montanaHexs.set("7B7269", "Lambrate");
montanaHexs.set("4F4139", "Industriilor");
montanaHexs.set("A59FA2", "Houdini");
montanaHexs.set("837C82", "Morpheus");
montanaHexs.set("565159", "Nostradamus");
montanaHexs.set("A69E9F", "Ghetto");
montanaHexs.set("625B5C", "Dumbo");
montanaHexs.set("342C2D", "Slate");
montanaHexs.set("F0E8C8", "Ivory");
montanaHexs.set("B29353", "Sand");
montanaHexs.set("D4BA87", "Beige");
montanaHexs.set("D3AE96", "Iced Coffe");
montanaHexs.set("C29372", "Cremino");
montanaHexs.set("AA7C5E", "Frappe");
montanaHexs.set("76523A", "Choclate");
montanaHexs.set("44221C", "Jawa");
montanaHexs.set("853332", "Rust");
montanaHexs.set("BEA97B", "Arabian");
montanaHexs.set("A7936E", "Gobi");
montanaHexs.set("8C7654", "Syrian");
montanaHexs.set("976D5D", "After");
montanaHexs.set("EAAF91", "Snail");
montanaHexs.set("CF5B27", "Koi");
montanaHexs.set("AC4E21", "Falling");
montanaHexs.set("542910", "Candy Bar");
montanaHexs.set("4B2622", "Mud");
montanaHexs.set("030506", "Black");
montanaHexs.set("FFFFFF", "Snow White");
montanaHexs.set("FBFCF7", "White");
montanaHexs.set("F6EA4E", "True Yellow");
montanaHexs.set("FDF57A", "True Yel 50%.");
montanaHexs.set("D23274", "True Magenta");
montanaHexs.set("D76697", "True Mag 50%");
montanaHexs.set("52B5CF", "True Cyan");
montanaHexs.set("96CCDA", "True Cyan 50%");
montanaHexs.set("FAE04B", "Power Yellow");
montanaHexs.set("EC6630", "Power Orange");
montanaHexs.set("D03929", "Power Red");
montanaHexs.set("D5528E", "Power Pink");
montanaHexs.set("1A2258", "Power Violet");
montanaHexs.set("225398", "Power Blue");
montanaHexs.set("78AE41", "Power Green");
}

/*function checkEntryHex(hex) {
    if(/^[a-f\dA-F]{6}$/.test(hex)) {
        return true;
    } else {
        return false;
    }
}

function getValidEntryHex(hex) {
    var hex = getEntryHex();
    while(!checkEntryHex(hex)) {
        hex = getEntryHex();
    }
    return hex;
}*/

function computeDistance(hex1, hex2) {
    var rgb1 = hexToRgb(hex1);
    var rgb2 = hexToRgb(hex2);

    var distance = Math.sqrt((rgb1[0]-rgb2[0])*(rgb1[0]-rgb2[0]) + (rgb1[1]-rgb2[1])*(rgb1[1]-rgb2[1]) + (rgb1[2]-rgb2[2])*(rgb1[2]-rgb2[2]));
    return distance;
}

function hexToRgb(hex) {
    var rgb = [];
    rgb[0] = parseInt(hex.substring(0, 2), 16)
    rgb[1] = parseInt(hex.substring(2, 4), 16);
    rgb[2] = parseInt(hex.substring(4, 6), 16);

    return rgb;
}

function getSmallestValue(map) {
    var smallestValue = Number.MAX_VALUE;
    var selectedKey = '';

    map.forEach(function(value, key){
        if (value < smallestValue) {
            smallestValue = value;
            selectedKey = key;
        }
    })
    return [smallestValue, selectedKey];
}

function main(entryHex) {
    //var entryHex = getValidEntryHex();
    var distances = new Map();

    montanaHexs.forEach(function(value, key){
        distances.set(key, computeDistance(key, entryHex));
    });

    var minKeyAndValue = getSmallestValue(distances);

    var resultName = montanaHexs.get(minKeyAndValue[1]);
    var resultHex = minKeyAndValue[1];
    var resultDistance = minKeyAndValue[0];
    return [resultName, resultHex, resultDistance]
}

function hexToHSL_L(H) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length == 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
  
    if (delta == 0)
      h = 0;
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
  
    if (h < 0)
      h += 360;
  
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return l;
}

function checkLAndSetHeaderColor(hex) {
    l = hexToHSL_L("#" + hex);
    if(l >= 50) {
        //if color is light
        root.style.setProperty('--color1', "#000");
        root.style.setProperty('--color1-accent', "#444");
        root.style.setProperty('--color2', "#fff");
    } else {
        //if color is dark
        root.style.setProperty('--color1', "#fff");
        root.style.setProperty('--color1-accent', "#BBB");
        root.style.setProperty('--color2', "#000");
    }
}

hexCodeInput.onclick = function() {
    hexCodeInput.value = "";
}

hexCodeInput.oninput = function() {
    if(hexCodeInput.value.length == 6) {
        //var hex = getValidEntryHex(hexCodeInput);
        box.style.background = "#" + hexCodeInput.value;
        background.style.background = "#" + main(hexCodeInput.value)[1];
        canHex.innerText = main(hexCodeInput.value)[1];
        canName.innerText = main(hexCodeInput.value)[0];
        checkLAndSetHeaderColor(hexCodeInput.value);
    }
}

