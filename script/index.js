

const loadCategories = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
    .then(data => displayCategories(data.categories))

}


const displayCategories = (categories) => {

  const btnContainer = document.getElementById('btn-container');

  for (let cate of categories) {

    const btn = document.createElement('div');

    btn.innerHTML = `
            <button class="btn btn-sm font-semibold text-lg hover:bg-[#FF1F3D] text-[#25252570] bg-[#25252515] hover:text-white sm:flex sm:justify-center">
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

  

      
      
      `;

    videoContainer.append(videoCard);



  });
}

loadCategories();
loadVideos();

