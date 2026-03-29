
  const loadCategories =()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(response =>response.json())
        .then(data => displayCategories(data.categories))

  }


  const displayCategories =(categories)=>{

    const btnContainer = document.getElementById('btn-container');

    for (let cate of categories){

        const btn = document.createElement('div');

         btn.innerHTML = `
            <button class="btn btn-sm font-semibold text-lg hover:bg-[#FF1F3D] text-[#25252570] bg-[#25252515] hover:text-white sm:flex sm:justify-center">
              ${cate.category}
            </button>
          `;

           btnContainer.append(btn);

    }
  }

  loadCategories();
