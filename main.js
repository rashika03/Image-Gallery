console.log("Hello Gallery !");

// Initialisation
const forwardButton = document.getElementById("forwardbtn");
const previousButton = document.getElementById("previousbtn");
const displayPicture = document.getElementById("displaypic");


// Image Names 
let image_names = [
                    "https://images.unsplash.com/photo-1622954174793-7471c88ca90b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                    "https://images.unsplash.com/photo-1620912189875-3fdb2380621b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
                    "https://images.unsplash.com/photo-1624409330593-7893ff293e7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                    "https://images.unsplash.com/photo-1543328011-2272b1a4a00b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                    "https://images.unsplash.com/photo-1618224706414-92301b84910d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    ];


// Counter
let i = 0;

// let max = 5;


// Increment !
let incrementPhotos = ()=>{
    if(i === image_names.length){
        i = 0;
    }else{
        // displayPicture.src = "images/" + image_names[i];
        displayPicture.src = image_names[i];
        i++;
        console.log("Value of i :",i);
    }
}

// Decrement !
let decrementPhotos = ()=>{
    console.log(i);
    if(i>=1){
        i--;
    }else{
        i=0;
    }

    // displayPicture.src = "images/" + image_names[i];
    displayPicture.src = image_names[i];

    console.log("Value of i :",i);
}


forwardButton.addEventListener("click",incrementPhotos);
previousButton.addEventListener("click",decrementPhotos);

