
const loadCategories = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
    .then(data => {
      displayCategories(data.categories);

    })

}

const removeActiveClass = () => {
  const activeBtn = document.getElementsByClassName("active");

  for (btn of activeBtn) {
    btn.classList.remove("active");
  }

}


const displayCategories = (categories) => {

  const btnContainer = document.getElementById('btn-container');

  for (let cate of categories) {

    const btn = document.createElement('div');

    btn.innerHTML = `
            <button id="btn${cate.category_id}" onclick="difference(${cate.category_id})" class="btn btn-sm font-semibold text-lg hover:bg-[#FF1F3D] text-[#25252570] bg-[#25252515] hover:text-white sm:flex sm:justify-center">
              ${cate.category}
            </button>
          `;

    btnContainer.append(btn);

  }
}

// here start show details button to show details

const loadDetails = (videoId) => {

  const url = ` https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
  fetch(url)
    .then(response => response.json())
    .then(data => displayDetails(data));

}

const displayDetails = (data) => {

  console.log(data);
  const detailsContainer = document.getElementById('videoDetails').showModal();
  
  detailsContainer.innerHTML = `
      <div>

      <img
      src="${data.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    
  </div>
      
      </div>
      
      `
}


// here api call for videos data 

const loadVideos = () => {

  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())
    .then(data => {
      removeActiveClass();

      document.getElementById('allVideo').classList.add("active");

      displayVideos(data.videos)
    })

}



const displayVideos = (videos) => {

  const videoContainer = document.getElementById('videosContainer');

  videoContainer.innerHTML = "";
  if (videos.length == 0) {

    videoContainer.innerHTML = `

      <div class="mx-auto col-span-4 mt-10 row-span-4 space-y-3">
        <img src="asset/Icon.png" alt="" class="mx-auto">
        <h1 class="text-center text-2xl font-bold  ">Oops!! Sorry, There is no content here</h1>
       </div>

      `
    return;
  }

  videos.forEach(element => {

    const videoCard = document.createElement('div');



    videoCard.innerHTML = `

     <div class="card bg-base-100 shadow-sm">
            <figure class="relative">
                <img class="w-full h-[200px] object-cover" src="${element.thumbnail}" alt="thumbnail" />
                <span class="absolute bg-black text-white px-1 rounded-md bottom-1 right-3">3hrs 56 min ago</span>
            </figure>

            <div class=" flex py-2 gap-x-2  ">

               
                    <div class="avatar ">
                        <div class="ring-primary ring-offset-base-100 w-12 h-12 rounded-full ring-offset-2">
                            <img src="${element.authors[0].profile_picture}" />
                        </div>
                    </div>
               

                <div class="">
                    <h3 class="font-bold text-lg ">${element.title}</h3>
                    <p class="text-[#17171770]">${element.authors[0].profile_name}</p>
                    <p class="text-[#17171770] flex gap-x-1">${element.others.views} <img src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt="" class="w-6 h-6"></p>
                </div>
            </div>

            <button onclick="loadDetails('${element.video_id}')" class="btn font-bold text-lg w-40 mx-auto my-5">Show Details</button>
        </div>

      `;

    videoContainer.append(videoCard);


  });
}

loadCategories();




// for difference videoDisplay 

const difference = (categoryID) => {

  console.log(categoryID)

  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${categoryID}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {

      removeActiveClass();
      const activeBtn = document.getElementById(`btn${categoryID}`);
      activeBtn.classList.add("active");
      displayVideos(data.category)


    })


}





