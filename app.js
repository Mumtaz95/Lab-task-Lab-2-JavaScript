var br = "</br>"
    /*1. Declare an empty array using JS literal notation to store
    student names in future. */
var studentNames = [];
/*2. Declare an empty array using JS object notation to store
student names in future. */
//-----Skipped
/*3. Declare and initialize a strings array. */
var stringsArray = ["Mumtaz", "Shahzaib", "Faiyaz", "Basit", "Owais"];
/*4. Declare and initialize a numbers array.*/
var numbersArray = [1, 22, 34, 55, 68];
/*5. Declare and initialize a boolean array.*/
var boolArray = [true, false];
/* 6. Declare and initialize a mixed array. */
var mixArray = ["Mumtaz Ahmed", "22", true];
/*7. Declare and Initialize an array and store available mobile
networks in Pakistan. */
var networksPakistan = ["Telenor", "Jazz", "Waird", "Zong", "Ufone"]
    /*8. Declare and Initialize an array and store available education
    qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
    M. Phil., PhD). Show the listed qualifications in your browser
    like:*/
var eduPakistan = ["SSC", "HSC", "BSC", "BS", "BE", "MS", "ME", "M.Phil", "P.hD"];
document.write("<b>Qualifications in Pakistan:</b>" + br + br);
document.write("1) " + eduPakistan[0] + br);
document.write("2) " + eduPakistan[1] + br);
document.write("3) " + eduPakistan[2] + br);
document.write("4) " + eduPakistan[3] + br);
document.write("5) " + eduPakistan[4] + br);
document.write("6) " + eduPakistan[5] + br);
document.write("7) " + eduPakistan[6] + br);
document.write("8) " + eduPakistan[7] + br + br);
/*9. Declare and initialize an empty array to store top movies of
2015. Add movies one by one in an array. Display the elements
& length of array in your browser. (Use array’s length method) */
var movies15 = [];
movies15[0] = "Avengers: Age of Ultron";
movies15[1] = "Spetre";
movies15[2] = "Jurrasic World";
movies15[3] = "Inside Out";
document.write("<b>Top Movies of 2015:</b>" + br);
document.write("1) " + movies15[0] + br);
document.write("2) " + movies15[1] + br);
document.write("3) " + movies15[2] + br);
document.write("4) " + movies15[3] + br);
document.write("<b>The length of the Array: " + movies15.length + "</b>" + br + br);
/*10. Declare and Initialize an array with your favorite cars. Show
a. First index of the array
b. Car at first index of the array
c. Last index of the array
d. Car at last index of the array*/
var favCars = ["Honda Civic", "Ford Mustang", "Dodge Charger", "Chervolet Camaro"];
document.write("<b>Favorite Cars:</b> " + br);
document.write("First Index of the Array: 0" + br);
document.write("Car at the first index of the Array: " + favCars[0] + br);
document.write("Last index of the array: 3" + br);
document.write("Car at last index of the Array: " + favCars[3] + br + br);
/* 11. Write a program to store 3 student names in an array. Take
another array to store score of these three students. Assume
that total marks are 500 for each student, display the scores &
percentages of students like:*/
var stuName = ["Ali", "Shahzaib", "Muzammil"];
var stuScore = [450, 480, 400];
var totalScore = 500;
document.write("Score of " + stuName[0] + " is " + stuScore[0] + " & the percentage is: " + ((stuScore[0] / totalScore) * 100) + "%" + br);
document.write("Score of " + stuName[1] + " is " + stuScore[1] + " & the percentage is: " + ((stuScore[1] / totalScore) * 100) + "%" + br);
document.write("Score of " + stuName[2] + " is " + stuScore[2] + " & the percentage is: " + ((stuScore[2] / totalScore) * 100) + "%" + br);
/*12. Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end &
add that color to the end of the array. Display the updated
array in your browser.
c. Add two more color to the beginning of the array. Display
the updated array in your browser.
 d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color &
color name. Then add the color to desired position/index. Display the updated array in your browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.*/
//Task a
var colors = ["Red", "Blue", "Green", "Yellow"];
alert(colors);
var desireStartColorUser = prompt("Enter the color you want at the beginning: ");
if (desireStartColorUser == "Blue") {
    // alert(colors[1]+" "+colors[0]+" "+colors[2]);
    colors.shift();
    colors.push("Red");
    alert(colors);
} else if (desireStartColorUser == "Red") {
    // alert(colors[0]+" "+colors[1]+" "+colors[2]);
    alert(colors);
} else if (desireStartColorUser == "Green") {
    // alert(colors[2]);
    colors.splice(2, 1);
    colors.unshift("Green");
    alert(colors);
} else if (desireStartColorUser == "Yellow") {
    colors.unshift("Yellow");
    colors.pop();
    alert(colors);
} else {
    alert("Try Again!");
}
//Task b
var colors = ["Red", "Blue", "Green", "Yellow"];
var desireEndColorUser = prompt("Enter the color you want to the end: ")
if (desireEndColorUser == "Red") {
    colors.push(colors[0]);
    colors.shift();
    alert(colors);
} else if (desireEndColorUser == "Blue") {
    colors.push(colors[1]);
    colors.splice(1, 1);
    alert(colors);
} else if (desireEndColorUser == "Green") {
    colors.push(colors[2]);
    colors.splice(2, 1);
    alert(colors);
} else if (desireEndColorUser == "Yellow") {
    alert(colors);
} else {
    alert("Try Again!");
}
//Task c
colors.unshift("Megenta", "Purple");
alert("After adding two new colors, here is the updated array:\n" + colors);
//Task d
colors.shift();
alert("After deleting the first color, the updated array is:\n " + colors);
//Task e
colors.pop();
alert("After deleting the last color, the updated array is: \n" + colors);
//Task f
var userAddIndexNum = +prompt("Enter the index at which you want to add the color:", "0");
var userAddColor = prompt("Enter the Name of the color:", "Color");
colors.splice(userAddIndexNum, 0, userAddColor);
alert(colors);
//Task g
var userRemoveIndexNum = +prompt("Enter the index from which you want to delete the color: ", "0");
var userNoOfIndexRemoveNum = +prompt("Enter the no. of colors you want to remove from the current index: ", "0");
alert(colors);
/*3. Write a program to store student scores in an array & sort
the array in ascending order using Array’s sort method. */
var studentScoreArray = [46, 86, 13, 26, 78, 98, 45, 21, 12, 32, 65, 44, 65];
document.write(br + "<b>This is an Array of student scores:</b> " + br + studentScoreArray + br);
var ascendingSortedScoreArray = studentScoreArray.sort(function(a, b) {
    return a - b
});
document.write("<b>And this is the same Array sorted in ascending order(using array sort method):</b> " + br + ascendingSortedScoreArray + br);
/*14. Write a program to sort the below mentioned array: */
var fruits = ["Strawberry", "Apple", "Orange", "Banana"];
document.write("<b>This is an Array of Fruits:</b> " + br + fruits + br + br);
var sortedFruits = fruits.sort();
fruits.reduceRight;
document.write("<b>This is the same Array but sorted(using sort and reduceRight function)</b>" + br + sortedFruits + br);
/*15. Write a program to initialize an array with city names. Copy
3 array elements from cities array to selectedCities array. */
var citiesArray = ["Karachi", "Hyderabad", "Sukkur", "Islamabad", "Quetta", "Lahore"];
var selectedCitiesArray = citiesArray.slice(2, 4);
document.write("<b>Cities List:</b>" + br + citiesArray + br);
document.write("<b>Selected Cities List:</b>" + br + selectedCitiesArray + br + br);
/*16. Write a program to create a single string from the below
mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method) */
var arrCat = ["This", "is", "my", "cat"];
document.write("<b>Array:</b> " + br + arrCat + br);
document.write("<b>String:</b> " + br + arrCat.join(" ") + br + br);
/*17. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they were
stored. (FIFO-First In First Out) */
var arrFifoDevices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("<b>Devices:</b>" + br + arrFifoDevices + br);
for (var i = 0; i <= arrFifoDevices.length - 1; i++) {
    document.write("Out :" + br + arrFifoDevices[i] + br);
}
/*18. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In-First
Out) */
var arrLifoDevices = [];
arrLifoDevices.push("Keyboard");
arrLifoDevices.push("Mouse");
arrLifoDevices.push("Printer");
arrLifoDevices.push("Monitor");
document.write(br + "<b>Devices(LIFO) :</b>" + br + arrLifoDevices);
document.write(br + "Out" + br + arrLifoDevices.pop());
document.write(br + "Out" + br + arrLifoDevices.pop());
document.write(br + "Out" + br + arrLifoDevices.pop());
document.write(br + "Out" + br + arrLifoDevices.pop());
/*19. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
the following dropdown/select menu in your browser using
document.write() method: */
var arrMoiles = ["Apple", "Samsung", "Motorola", "Nokia"];
document.write(br + '<select name="devices"> <option value="Apple">' + arrMoiles[0] + '</option> <option value="Samsung">' + arrMoiles[1] + '</option><option value="Motorola">' + arrMoiles[2] + '</option><option value="Nokia">' + arrMoiles[3] + '</option></select>' + br + br);
/*20. Declare and initialize an empty multidimensional array.
(Array of arrays) */
var arrmulti = [
    [],
    [],
    []
];
/*21. Declare and initialize a multidimensional array representing
the following matrix: */
var arrmulti2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (var j = 0; j <= arrmulti2.length - 1; j++) {
    document.write(arrmulti2[j] + br);
}