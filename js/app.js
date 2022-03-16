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
montanaHexs.set("FFDA15", "Kicking Yellow");
montanaHexs.set("FCC000", "Yellow");
montanaHexs.set("F59E01", "Melon Yellow");
montanaHexs.set("D37E0A", "Topaz");
montanaHexs.set("A34C2E", "Hazle");
montanaHexs.set("6F2F23", "Pecan Nut");
montanaHexs.set("612316", "Maroon");
montanaHexs.set("E0A600", "Indian Spice");
montanaHexs.set("B69822", "Masala");
montanaHexs.set("A18114", "Delhi");
montanaHexs.set("6F592A", "Bombay");
montanaHexs.set("F49F24", "Juice");
montanaHexs.set("EF800D", "Clockwork Orange");
montanaHexs.set("EA640C", "Pure Orange");
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
montanaHexs.set("AA0073", "Freak");
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
montanaHexs.set("6BC8E7", "Baby Blue");
montanaHexs.set("00A2D3", "Light Blue");
montanaHexs.set("0070B8", "Horizon");
montanaHexs.set("054B90", "Royal Blue");
montanaHexs.set("00326D", "Ultamarine");
montanaHexs.set("00173A", "Dark Indigo");
montanaHexs.set("AEC2C0", "Dove");
montanaHexs.set("52676C", "Seal");
montanaHexs.set("364958", "Space");
montanaHexs.set("98B0C6", "Trout");
montanaHexs.set("577492", "Marlin");
montanaHexs.set("264B68", "Whale");
montanaHexs.set("C9E0F2", "Ice Blue");
montanaHexs.set("97C4E1", "Lenor");
montanaHexs.set("5F97C6", "Blue Lagoon");
montanaHexs.set("00579E", "Knock Out Blue");
montanaHexs.set("24327D", "Sorrento Blue");
montanaHexs.set("E3DE2A", "Pistachio");
montanaHexs.set("C9D215", "Acid");
montanaHexs.set("A9C707", "Slimer");
montanaHexs.set("A1A324", "Oasis");
montanaHexs.set("CBD56C", "Spring");
montanaHexs.set("B5CC22", "Wild Lime");
montanaHexs.set("51AB27", "Irish Green");
montanaHexs.set("008132", "Boston");
montanaHexs.set("025A27", "Celtic");
montanaHexs.set("003613", "Banknote");
montanaHexs.set("003C1A", "TAG Green");




montanaHexs.set("28C842", "Hippie");
montanaHexs.set("29B419", "Mescaline");
montanaHexs.set("25900C", "Woodstock");
montanaHexs.set("00752D", "Plant");
montanaHexs.set("91D1DA", "Tiffany");
montanaHexs.set("4AADC4", "Cool Cologne");
montanaHexs.set("0086A1", "Mermaid");
montanaHexs.set("013C4A", "Neptune");
montanaHexs.set("002A32", "Riffs");
montanaHexs.set("6BDBCF", "Drops");
montanaHexs.set("3DC6AC", "Nappies");
montanaHexs.set("0C8E76", "Surgery");
montanaHexs.set("9AC776", "E2E Green");
montanaHexs.set("50AE58", "Revolt Green");
montanaHexs.set("007F64", "Atlantis");
montanaHexs.set("C7DBC8", "Olymp");
montanaHexs.set("B0D7BE", "Hope");
montanaHexs.set("64B699", "Patina");
montanaHexs.set("007764", "Copper Green");
montanaHexs.set("D1D5BC", "Trabi");
montanaHexs.set("BEC695", "Beetle");
montanaHexs.set("A3AC7C", "Reseda");
montanaHexs.set("A5B29C", "Fog");
montanaHexs.set("778B7B", "Mist");
montanaHexs.set("4C6043", "Storm");
montanaHexs.set("D1C782", "Bamboo");
montanaHexs.set("A3903F", "Hemp");
montanaHexs.set("8F8534", "Boa");
montanaHexs.set("705A39", "Pan");
montanaHexs.set("BAB526", "Pear Green");
montanaHexs.set("718428", "Lost Island");
montanaHexs.set("565B21", "Troops");
montanaHexs.set("28401C", "Toad");
montanaHexs.set("D6D1AF", "Face");
montanaHexs.set("A2A682", "Hannibal");
montanaHexs.set("808460", "Murdock");
montanaHexs.set("3F3E2A", "B.A Bosko");
montanaHexs.set("EEF1E6", "Jaws");
montanaHexs.set("C7C8B8", "Mouse");
montanaHexs.set("999A92", "Shark");
montanaHexs.set("5E6460", "Rhino");
montanaHexs.set("48403D", "Ant");
montanaHexs.set("C7BBA8", "Gambetta");
montanaHexs.set("9D9283", "Lennox");
montanaHexs.set("7D7268", "Lambrate");
montanaHexs.set("524038", "Industriilor");
montanaHexs.set("A69FA2", "Houdini");
montanaHexs.set("847C82", "Morpheus");
montanaHexs.set("57515A", "Nostradamus");
montanaHexs.set("A89E9F", "Ghetto");
montanaHexs.set("645B5C", "Dumbo");
montanaHexs.set("352C2D", "Slate");
montanaHexs.set("F2E8C4", "Ivory");
montanaHexs.set("B89247", "Sand");
montanaHexs.set("D9B980", "Beige");
montanaHexs.set("DAAC92", "Iced Coffe");
montanaHexs.set("CB916C", "Cremino");
montanaHexs.set("B27A59", "Frappé");
montanaHexs.set("7C5035", "Chocolate");
montanaHexs.set("49201A", "Jawa");
montanaHexs.set("902C2E", "Rust");
montanaHexs.set("C2A875", "Arabian");
montanaHexs.set("AB9269", "Gobi");
montanaHexs.set("90754F", "Syrian");
montanaHexs.set("9F6B5A", "After");
montanaHexs.set("F5AC8C", "Snail");
montanaHexs.set("DF5105", "Koi");
montanaHexs.set("B94709", "Falling");
montanaHexs.set("5B2607", "Candy Bar");
montanaHexs.set("512320", "Mud");
montanaHexs.set("030506", "Black");
montanaHexs.set("FFFFFF", "Snow White");
montanaHexs.set("FBFCF6", "White");
montanaHexs.set("F9E900", "True Yellow");
montanaHexs.set("FFF562", "True Yel 50%");
montanaHexs.set("E51175", "True Magenta");
montanaHexs.set("E75D98", "True Mag. 50%");
montanaHexs.set("00B8D2", "True Cyan");
montanaHexs.set("86CEDC", "True Cyan 50%");
montanaHexs.set("FFDF00", "Power Yellow");
montanaHexs.set("FF5A10", "Power Orange");
montanaHexs.set("E22218", "Power Red");
montanaHexs.set("E64690", "Power Pink");
montanaHexs.set("18225B", "Power Violet");
montanaHexs.set("00549D", "Power Blue");
montanaHexs.set("67B028", "Power Green");
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

