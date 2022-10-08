let button = document.querySelector('button');

function one() {
    // e.preventDefault();
    let person = document.querySelector(".B").value.toUpperCase
    let location = document.querySelector(".C").value

    /console.log(person);
    console.log(location);
    
    if (!person || !location){
       return
    // }else if ( !location) {
    //     return
    // } else if (!person) {
    //     return
 } else {
       return alert("CONGRATULATION " + person + " , YOU HAVE SUCCESSFULLY SUBMITTED YOUR REQUEST   ONE AI IS COMING....")
    }
}
button.addEventListener('click',one)
