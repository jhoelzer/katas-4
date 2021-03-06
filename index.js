const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

// 1) Display an array from the cities in gotCitiesCSV
let element1 = document.createElement("span");
let result1 = document.createTextNode(JSON.stringify(gotCitiesCSV.split(",")));
element1.appendChild(result1);
let place1 = document.getElementById("num1");
place1.appendChild(element1);

// 2) Display an array of words from the sentence in bestThing
let element2 = document.createElement("span");
let result2 = document.createTextNode(JSON.stringify(bestThing.split(" ")));
element2.appendChild(result2);
let place2 = document.getElementById("num2");
place2.appendChild(element2);

// 3) Display a string separated by semi-colons instead of commas from gotCitiesCSV
let element3 = document.createElement("span");
let result3 = document.createTextNode(JSON.stringify(gotCitiesCSV.replace(/,/g, ";")));
element3.appendChild(result3);
let place3 = document.getElementById("num3");
place3.appendChild(element3);

// 4) Display a CSV (comma-separated) string from the lotrCitiesArray
let element4 = document.createElement("span");
let result4 = document.createTextNode(lotrCitiesArray.join(", "));
element4.appendChild(result4);
let place4 = document.getElementById("num4");
place4.appendChild(element4);

// 5) Display the first 5 cities in lotrCitiesArray
let element5 = document.createElement("span");
let result5 = document.createTextNode(lotrCitiesArray.slice(0, 5).join(", "));
element5.appendChild(result5);
let place5 = document.getElementById("num5");
place5.appendChild(element5);

// 6) Display the last 5 cities in lotrCitiesArray
let element6 = document.createElement("span");
let result6 = document.createTextNode(lotrCitiesArray.slice(3, lotrCitiesArray.length).join(", "));
// ^ doing 8 or not having anything work as well
element6.appendChild(result6);
let place6 = document.getElementById("num6");
place6.appendChild(element6);

// 7) Display the 3rd to 5th city in lotrCitiesArray
let element7 = document.createElement("span");
let result7 = document.createTextNode(lotrCitiesArray.slice(2, 5).join(", "));
element7.appendChild(result7);
let place7 = document.getElementById("num7");
place7.appendChild(element7);

// 8) Using splice, remove "Rohan" from lotrCitiesArray
let element8 = document.createElement("span");
lotrCitiesArray.splice(2, 1);
let result8 = document.createTextNode(lotrCitiesArray.join(", "));
element8.appendChild(result8);
let place8 = document.getElementById("num8");
place8.appendChild(element8);

// 9) Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray
let element9 = document.createElement("span");
lotrCitiesArray.splice(5, 2);
let result9 = document.createTextNode(lotrCitiesArray.join(", "));
element9.appendChild(result9);
let place9 = document.getElementById("num9");
place9.appendChild(element9);

// 10) Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor"
let element10 = document.createElement("span");
lotrCitiesArray.splice(2, 0, "Rohan");
let result10 = document.createTextNode(lotrCitiesArray.join(", "));
element10.appendChild(result10);
let place10 = document.getElementById("num10");
place10.appendChild(element10);

// 11) Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray
let element11 = document.createElement("span");
lotrCitiesArray.splice(5, 1, "Deadest Marshes");
let result11 = document.createTextNode(lotrCitiesArray.join(", "));
element11.appendChild(result11);
let place11 = document.getElementById("num11");
place11.appendChild(element11);

// 12) Using slice, display the first 14 characters from bestThing
let element12 = document.createElement("span");
let result12 = document.createTextNode(bestThing.slice(0, 14));
element12.appendChild(result12);
let place12 = document.getElementById("num12");
place12.appendChild(element12);

// 13) Using slice, display the last 12 characters from bestThing
let element13 = document.createElement("span");
let result13 = document.createTextNode(bestThing.slice(-12));
element13.appendChild(result13);
let place13 = document.getElementById("num13");
place13.appendChild(element13);

// 14) Using slice, display characters between the 23rd and 38th position of bestThing (i.e., "boolean is even")
let element14 = document.createElement("span");
let result14 = document.createTextNode(bestThing.slice(23, 38));
element14.appendChild(result14);
let place14 = document.getElementById("num14");
place14.appendChild(element14);

// 15) Repeat #13 using substring instead of slice.
let element15 = document.createElement("span");
let result15 = document.createTextNode(bestThing.substring(bestThing.length - 12));
element15.appendChild(result15);
let place15 = document.getElementById("num15");
place15.appendChild(element15);

// 16) Repeat #14 using substr instead of slice.
let element16 = document.createElement("span");
let result16 = document.createTextNode(bestThing.substr(23, 15));
element16.appendChild(result16);
let place16 = document.getElementById("num16");
place16.appendChild(element16);

// 17) Find and display the index of "only" in bestThing
let element17 = document.createElement("span");
let result17 = document.createTextNode(bestThing.indexOf("only"));
element17.appendChild(result17);
let place17 = document.getElementById("num17");
place17.appendChild(element17);

// 18) Find and display the index of the last word in bestThing
let element18 = document.createElement("span");
let result18 = document.createTextNode(bestThing.indexOf("bit"));
element18.appendChild(result18);
let place18 = document.getElementById("num18");
place18.appendChild(element18);

// 19) Find and display all cities from gotCitiesCSV that use double vowels ("aa","ee", etc.)
let cities = gotCitiesCSV.split(",").filter(city => {
    let vowels = ["aa", "ee", "ii", "oo", "uu"]
    for (let vowel of vowels) {
        if (city.includes(vowel)) {
            return true;
        }
    }
    return false;
})
let element19 = document.createElement("span");
let result19 = document.createTextNode(cities.join(", "));
element19.appendChild(result19);
let place19 = document.getElementById("num19");
place19.appendChild(element19);

// 20) Find and display all cities from lotrCitiesArray that end with "or"
let endOr = lotrCitiesArray.filter(end => end.endsWith("or"));
let element20 = document.createElement("span");
let result20 = document.createTextNode(endOr.join(", "));
element20.appendChild(result20);
let place20 = document.getElementById("num20");
place20.appendChild(element20);

// 21) Find and display all the words in bestThing that start with a "b"
let startB = bestThing.split(" ").filter(start => start.startsWith("b"));
let element21 = document.createElement("span");
let result21 = document.createTextNode(startB.join(", "));
element21.appendChild(result21);
let place21 = document.getElementById("num21");
place21.appendChild(element21);

// 22) Display "Yes" or "No" if lotrCitiesArray includes "Mirkwood"
if (lotrCitiesArray.includes("Mirkwood")) {
    let element22 = document.createElement("span");
    let result22 = document.createTextNode("Yes");
    element22.appendChild(result22);
    let place22 = document.getElementById("num22");
    place22.appendChild(element22);
} else {
    let element22 = document.createElement("span");
    let result22 = document.createTextNode("No");
    element22.appendChild(result22);
    let place22 = document.getElementById("num22");
    place22.appendChild(element22);
}

// 23) Display "Yes" or "No" if lotrCitiesArray includes "Hollywood"
if (lotrCitiesArray.includes("Hollywood")) {
    let element23 = document.createElement("span");
    let result23 = document.createTextNode("Yes");
    element23.appendChild(result23);
    let place23 = document.getElementById("num23");
    place23.appendChild(element23);
} else {
    let element23 = document.createElement("span");
    let result23 = document.createTextNode("No");
    element23.appendChild(result23);
    let place23 = document.getElementById("num23");
    place23.appendChild(element23);
}

// 24) Display the index of "Mirkwood" in lotrCitiesArray
let element24 = document.createElement("span");
let result24 = document.createTextNode(lotrCitiesArray.indexOf("Mirkwood"));
element24.appendChild(result24);
let place24 = document.getElementById("num24");
place24.appendChild(element24);

// 25) Find and display the first city in lotrCitiesArray that has more than one word
let twoWord = lotrCitiesArray.filter(city => city.includes(" "));
let element25 = document.createElement("span");
let result25 = document.createTextNode(twoWord);
element25.appendChild(result25);
let place25 = document.getElementById("num25");
place25.appendChild(element25);

// 26) Reverse the order in lotrCitiesArray
let element26 = document.createElement("span");
let result26 = document.createTextNode(lotrCitiesArray.reverse().join(", "));
element26.appendChild(result26);
let place26 = document.getElementById("num26");
place26.appendChild(element26);

// 27) Sort lotrCitiesArray alphabetically
let element27 = document.createElement("span");
let result27 = document.createTextNode(lotrCitiesArray.sort().join(", "));
element27.appendChild(result27);
let place27 = document.getElementById("num27");
place27.appendChild(element27);

// 28) Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)
let element28 = document.createElement("span");
let result28 = document.createTextNode(lotrCitiesArray.sort(function (a, b) {
    return a.length - b.length;
}).join(", "));
element28.appendChild(result28);
let place28 = document.getElementById("num28");
place28.appendChild(element28);

// 29) Using pop, remove the last city from lotrCitiesArray
let element29 = document.createElement("span");
lotrCitiesArray.pop();
let result29 = document.createTextNode("Remaining Cities: " + lotrCitiesArray.join(", "));
element29.appendChild(result29);
let place29 = document.getElementById("num29");
place29.appendChild(element29);

// 30) Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array
let element30 = document.createElement("span");
lotrCitiesArray.push("Deadest Marshes");
let result30 = document.createTextNode(lotrCitiesArray.join(", "));
element30.appendChild(result30);
let place30 = document.getElementById("num30");
place30.appendChild(element30);

// 31) Using shift, remove the first city from lotrCitiesArray
let element31 = document.createElement("span");
lotrCitiesArray.shift();
let result31 = document.createTextNode(lotrCitiesArray.join(", "));
element31.appendChild(result31);
let place31 = document.getElementById("num31");
place31.appendChild(element31);

// 32) Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array
let element32 = document.createElement("span");
lotrCitiesArray.unshift("Rohan");
let result32 = document.createTextNode(lotrCitiesArray.join(", "));
element32.appendChild(result32);
let place32 = document.getElementById("num32");
place32.appendChild(element32);