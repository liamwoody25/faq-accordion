const questionToggle = document.querySelectorAll('.question-panel');



  const answer = document.getElementsByTagName('div');

  questionToggle.addEventListener('click', function(){
   for (let i = 0; i < answer.length; i++) {
    answer[i].style.display = 'none'
   }
})

 if ( answer.style.display === 'none') {
    answer.style.display = 'block';
   } else {
    answer.style.display = 'none'
   }
