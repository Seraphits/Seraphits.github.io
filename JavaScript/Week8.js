var my_array = new Array();

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
function addWord() {
    var my_form_value
    console.log(my_form_value);
    var x = document.getElementById("specific_element").value;
    console.log(x);
    x=parseInt(x);
    console.log(x);
    my_array.push(prompt("Push another city to the end of the array"));
    alert("After push the cities are " + my_array );
    output_array()
};

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
    out.innerHTML = "My array had these elements in it: " + word_string;
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