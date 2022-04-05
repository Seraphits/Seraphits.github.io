// setup array for spelling list
var my_array = new Array();
// Brings up prompts to type in spelling words to make list when the button is pressed
function create_list() {
    if(my_array.length==0) {
      var my_form_value = document.getElementById("number_of_elements");
        console.log(my_form_value);  
        var how_many_elements;
        how_many_elements = parseInt(my_form_value.value);
        console.log(how_many_elements);
   
        for (var i=0; i<how_many_elements; i++)
        {
            my_array[i] = prompt("Type album name here");  
            console.log(my_array);  
            output_array()
        }  
    }
    else
    {
        alert("You've already created your collection of albums.  Please use another function.");
    }
};
// Function to allow you to press a button to add one word at a time to the spelling list in case you forgot when you initially set up a list
function addWord() {
    var array_length, newAlbumTitle;
    array_length = my_array.length;
    newAlbumTitle = prompt("Input another album number to the array");
    my_array[array_length]= newAlbumTitle;
    alert("You added " + newAlbumTitle + " to the array.");
    output_array()
};
// Function that adds the output to the page.
function output_array() {
    word_string = new String();
    console.log("start word:" + word_string);
    for (var i=0; i<my_array.length; i++)
    {
        if (i == my_array.length-1)
        {
            word_string += "and ";
            word_string += my_array[i];
            console.log("word list:" + word_string);

        }
        else
        {
        word_string += my_array[i];
        word_string += ", ";
        }
    }
    // alert("My array had these elements in it: " + word_string);
    var out = document.getElementById("output");
    out.innerHTML = "Spelling List: " + word_string;
};

// createList.addEventListener('click', output_array());

// newWord.addEventListener('click', output_array());

// createList.addEventListener('click', function() {
//     word_string = new String();
//     console.log("start word:" + word_string);
//     for (var i=0; i<my_array.length; i++)
//     {
//         if (i == my_array.length-1)
//         {
//             word_string += "and ";
//             word_string += my_array[i];
//             console.log("word list:" + word_string);

//         }
//         else
//         {
//         word_string += my_array[i];
//         word_string += ", ";
//         }
//     }
//     // alert("My array had these elements in it: " + word_string);
//     var out = document.getElementById("output");
//     out.innerHTML = "My array had these elements in it: " + word_string;
// })

// newWord.addEventListener('click', function() {
//     word_string = new String();
//     console.log("start word:" + word_string);
//     for (var i=0; i<my_array.length; i++)
//     {
//         if (i == my_array.length-1)
//         {
//             word_string += "and ";
//             word_string += my_array[i];
//             console.log("word list:" + word_string);

//         }
//         else
//         {
//         word_string += my_array[i];
//         word_string += ", ";
//         }
//     }
//     // alert("My array had these elements in it: " + word_string);
//     var out = document.getElementById("output");
//     out.innerHTML = "My array had these elements in it: " + word_string;
// })