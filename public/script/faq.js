const questionToggle = document.querySelectorAll('.question');



questionToggle.addEventListener('click', function(){
const answer = document.querySelectorAll('.answer');
   if ( answer.style.display === 'none') {
    answer.style.display = 'block';
   } else {
    answer.style.display = 'none'
   }
})