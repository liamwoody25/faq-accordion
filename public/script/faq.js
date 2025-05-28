const questionToggle = document.querySelectorAll('.question');


for (const questions of questionToggle) {
const answer = document.querySelector('.answer');

  questions.addEventListener('click', function(){
    
   if ( answer.style.display === 'none') {
    answer.style.display = 'block';
   } else {
    answer.style.display = 'none'
   }
})

}

