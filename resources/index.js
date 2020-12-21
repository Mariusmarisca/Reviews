const persons = [
    {
        id: 0,
        imageURL: "assets/speaker-1.png",
        name: "John Wick",
        job: "Assassin",
        review: "JOHN WICK - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 1,
        imageURL: "assets/speaker-2.png",
        name: "Joker",
        job: "Villain",
        review: "JOKER - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
    {
        id: 2,
        imageURL: "assets/speaker-3.png",
        name: "Batman",
        job: "Super Hero",
        review: "BATMAN - Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
    },
    {
        id: 3,
        imageURL: "assets/speaker-4.png",
        name: "Robin",
        job: "Super Hero Assistent",
        review: "ROBIN - There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
]


  const imageReviewer = document.getElementById('imageReviewer');
  const personName = document.getElementById('personName');
  const personJob = document. getElementById('personJob');
  const personReview = document.getElementById('personReview');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const randomBtn = document.getElementById('randomButton');

  let currentItem = 0;

  window.addEventListener('DOMContentLoaded', function(){
      showPerson(currentItem);
      console.log(persons[currentItem]);
  })

 function showPerson(person) {
     let item = persons[person];
     imageReviewer.src = item.imageURL;
     personName.textContent = item.name;
     personJob.textContent = item.job;
     personReview.textContent = item.review;
 } 

 nextBtn.addEventListener('click', function(e){
     e.preventDefault();
     currentItem++;
     if (currentItem > persons.length - 1) {currentItem = 0};
     showPerson(currentItem);
     
 })

 prevBtn.addEventListener('click', function(e){
     e.preventDefault();
     currentItem--;
     if (currentItem < 0) {
         currentItem = persons.length -1;
     }
     showPerson(currentItem);
 })

 randomBtn.addEventListener('click', function(e){
     e.preventDefault();
     currentItem = Math.floor(Math.random() * persons.length);
     showPerson(currentItem);
 });
