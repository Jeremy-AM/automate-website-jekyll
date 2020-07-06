const ctas = document.querySelectorAll('.cta');

ctas.forEach(cta => {
  cta.addEventListener('click', function(event) {
    const problem = event.currentTarget.parentElement
    problem.classList.add('hidden');
    const solution = event.currentTarget.parentElement.parentElement.querySelector('.solution');
    solution.classList.remove('hidden');

    const ctaBack = solution.querySelector('.cta-back');
    ctaBack.addEventListener('click', function(event) {
      solution.classList.add('hidden');
      problem.classList.remove('hidden');
    });
  });
})


const hiddenQuotes = document.querySelectorAll('.hidden-mobile');
const moreButton = document.querySelector('#more-button');
const topPosition = moreButton.getBoundingClientRect().top + window.pageYOffset

moreButton.addEventListener('click', function() {
  hiddenQuotes.forEach(quote => {
    quote.classList.toggle('hidden');
  });
  if (moreButton.innerText === 'En voir plus') {
    moreButton.innerText = 'En voir moins'
  } else {
    moreButton.innerText = 'En voir plus'
    window.scrollTo({
      top: topPosition
    })
  }
});
