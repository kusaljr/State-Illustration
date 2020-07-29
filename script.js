
function statefunct(nameState) {
    var data = [ 
      {
        "name" : "Bagmati",  
        "desc": "Worst state ever",
        "image-source": "https://pristinenepal.com/wp-content/uploads/2019/08/pristine-nepal-kathmandu-durbar-square-758x540.jpg"

      }, 
      {  
        "name" : "Province No. 2", 
        "desc": "Madhesi mug haru",
        "image-source": "https://media-cdn.tripadvisor.com/media/photo-s/16/a9/7a/fb/the-beautiful-janaki.jpg"

      }, 
      {
        "name" : "Gandaki",
        "desc" : "Greatest State of all Time",
        "image-source": "https://media-cdn.tripadvisor.com/media/photo-s/10/c2/a0/18/annapurna-circuit.jpg"
  
      },
      {
        "name" : "Province No. 1",
        "desc" : "Everyone are illiterate here.",
        "image-source": "https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg"

      },
      {
        "name" : "Sudurpashchim",
        "desc" : "Completely irrelevent place. 99% people have no kidney.",
        "image-source": "https://www.nepalwonderstreks.com/wp-content/uploads/2018/12/khapatad-2.jpg"
 
      },
      {
        "name" : "Province No. 5",
        "desc" : "Somehow relevant because there's National Park. Else SHit!" , 
        "image-source": "https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/bardia-cover.jpg"
      },
      {
        "name" : "Karnali",
        "desc" : "Only relevant because of Yarsagumba. Else noone cares about this place.",
        "image-source": "https://i.pinimg.com/originals/7f/0e/f8/7f0ef858e2a86f79e14d1508bbd64f70.jpg"
  
      }
     ];
      
      
      const container = document.getElementById('container');
      
     
      var result = data.filter(x => x.name ===nameState);
      console.log(result);
        // Create card element
      const card = document.createElement('div');
      card.classList = 'card-body';
      
        // Construct card content
      const content = `
        <div class="card">
        <div class="card__image-container">
          <img class="card__image" src="${result[0]["image-source"]}" alt="">
        </div>
         
         <svg class="card__svg" viewBox="0 0 800 500">
   
           <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
           <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
         </svg>
       
        <div class="card__content">
          <h1 class="card__title">${result[0].name}</h1>
        <p>${result[0].desc}</p>
       </div>
     </div>
        `;
      
        // Append newyly created card element to the container
        container.innerHTML = content;
      }

      statefunct('Province No. 1');