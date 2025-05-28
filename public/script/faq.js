const questionToggle = document.querySelector('.question-panel');



  const answer = document.querySelector('.answer');
  
  
  

  questionToggle.addEventListener('click', function(){
    for (let i = 0; i < answer.length; i++) {
      answer[i].style.display = 'none'
    }
   if ( answer.style.display === 'none') {
    answer.style.display = 'block';
   } else {
    answer.style.display = 'none'
   }
})

