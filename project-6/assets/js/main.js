
const buttons = document.querySelectorAll("input")
for (const button of buttons) {
  button.addEventListener("blur", function() {
   
 
 if (this.value.length){
   this.classList.add('used');}
 else{
   this.classList.remove('used');
 }
   console.log(this);
   
});
 
}

