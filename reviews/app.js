const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

const personImage = document.getElementById('person-img');
const personName = document.getElementById('info__name');
const personJob = document.getElementById('info__job');
const personText = document.getElementById('info__text');

const btns = document.querySelectorAll('.btn');

let index = 3;

renderingInfo();



btns.forEach((btn) => {
    btn.addEventListener('click', () =>{
        if(btn.classList.contains('next-btn')){
            if(index === reviews.length -1 ){
                index = 0;
            } else {
                index++;
            }
        }

        if(btn.classList.contains('prev-btn')){
            if(index === 0 ){
                index = reviews.length -1;
            } else {
                index--;
            }
        }

        renderingInfo();
    })
})


function renderingInfo(){
const person = reviews[index];
console.log(personName.innerHTML);
personImage.src = person.img;
personName.innerHTML = person.name;
personJob.innerHTML = person.job;
personText.innerHTML = person.text;

}


  