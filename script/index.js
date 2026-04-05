

const loadCategories = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
    .then(data => {
      displayCategories(data.categories);

    })

}


const displayCategories = (categories) => {

  const btnContainer = document.getElementById('btn-container');

  for (let cate of categories) {

    const btn = document.createElement('div');

    btn.innerHTML = `
            <button onclick="difference(${cate.category_id})" class="btn btn-sm font-semibold text-lg hover:bg-[#FF1F3D] text-[#25252570] bg-[#25252515] hover:text-white sm:flex sm:justify-center">
              ${cate.category}
            </button>
          `;

    btnContainer.append(btn);

  }
}



// here api call for videos data 

const loadVideos = () => {

  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())
    .then(data => displayVideos(data.videos))

}

const displayVideos = (videos) => {

  const videoContainer = document.getElementById('videosContainer');

  videoContainer.innerHTML="";
  if(videos.length==0){

      videoContainer.innerHTML=`

      <div class="mx-auto col-span-4 mt-10 row-span-4 space-y-3">
        <img src="asset/Icon.png" alt="" class="mx-auto">
        <h1 class="text-center text-2xl font-bold  ">Oops!! Sorry, There is no content here</h1>
       </div>

      `
      return ;
    }

  videos.forEach(element => {

    const videoCard = document.createElement('div');

    




//   {
// "category_id": "1001",
// "video_id": "aaaa",
// "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
// "title": "Shape of You",
// "authors": [
// {
// "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
// "profile_name": "Olivia Mitchell",
// "verified": ""
// }
// ],
// "others": {
// "views": "100K",
// "posted_date": "16278"
// },
// "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

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
        </div>

      `;

    videoContainer.append(videoCard);



  });
}

loadCategories();


// for all click button 

const allBtn =document.getElementById('allVideo').addEventListener('click',()=>{
    loadVideos();
});


// for difference videoDisplay 

const difference = (categoryID)=>{

  console.log(categoryID)
  
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${categoryID}`;
  fetch(url)
  .then(response => response.json())
  .then(data => displayVideos(data.category))


}

