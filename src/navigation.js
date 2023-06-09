cardButton.addEventListener('click', () => {
    location.hash = `#tableinfo`;
})
logoHeader.addEventListener('click', () => {
    location.hash = `#home`;
    location.reload();
})
enterTableButton.addEventListener('click', () => {
    location.hash = `#table`;
    location.reload();
})
createTableButton.addEventListener('click', () => {
    location.hash = `#table`;
    location.reload();
})

createTableTitle.addEventListener('click', createTableSelect, false)
enterTableTitle.addEventListener('click', enterTableSelect, false)
tableAddressInput.addEventListener('keyup', function () {  
    let tableAddress = tableAddressInput.value;
    tableAddress = tableAddress.replace(/\W|_/g, '');
    tableAddressInput.value = tableAddress;
});
window.addEventListener('DOMContentLoaded', navigate, false)
window.addEventListener('hashchange', navigate, false)



function navigate() {
    
    console.log({location});

    if (location.hash.startsWith('#tableinfo')) {
        createTablePage()
    } else if (location.hash.startsWith('#table')) {
        tablePage()
    } else if (location.hash.startsWith('#movie=')) {
        console.log('Pending')
    } else if (location.hash.startsWith('#category=')) {
        console.log('Pending')
    } else {
        homePage()
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function homePage() {
    console.log('HOME PAGE')

    headerSection.classList.remove('hidden');
    alertSection.classList.remove('hidden');
    restaurantSliderSection.classList.remove('hidden');
    miniAppsSection.classList.remove('hidden');
    searchBarSection.classList.remove('hidden');
    userTableSection.classList.add('hidden');
    peopleSection.classList.add('hidden');
    closureSection.classList.add('hidden');

    resCardTop.classList.remove('!h-20');
    resCardBottomLeftTextLocation.classList.remove('!w-60');
    resCardBottomRight.classList.remove('!hidden');

}

function createTablePage() {
    console.log('TABLE INFO')

    headerSection.classList.remove('hidden');
    alertSection.classList.add('hidden');
    restaurantSliderSection.classList.remove('hidden');
    miniAppsSection.classList.add('hidden');
    searchBarSection.classList.add('hidden');
    userTableSection.classList.remove('hidden');
    peopleSection.classList.add('hidden');
    closureSection.classList.add('hidden');

    resCardsSliderOthers.forEach((card) => {
        card.innerHTML=""
    });
    resCardsSlider.classList.remove('overflow-x-auto');
    resCardTop.classList.add('!h-20');
    resCardBottomLeftTextLocation.classList.add('!w-60');
    resCardBottomRight.classList.add('!hidden');
}

function tablePage() {
    console.log('TABLE PAGE')

    headerSection.classList.remove('hidden');
    alertSection.classList.remove('hidden');
    restaurantSliderSection.classList.remove('hidden');
    miniAppsSection.classList.remove('hidden');
    searchBarSection.classList.add('hidden');
    userTableSection.classList.add('hidden');
    peopleSection.classList.remove('hidden');
    closureSection.classList.remove('hidden');

    resCardsSliderOthers.forEach((card) => {
        card.innerHTML=""
    });
    resCardsSlider.classList.remove('overflow-x-auto');
    resCardTop.classList.add('!h-20');
    resCardBottomLeftTextLocation.classList.remove('!w-60');
    resCardBottomRight.classList.remove('!hidden');

}

function createTableSelect() {
    createTableText.classList.remove('hidden')
    enterTableText.classList.add('hidden')
    createTableTitle.classList.add('bg-primary')
    createTableTitle.classList.remove('bg-blue-200')
    createTableTitle.classList.add('text-white')
    createTableTitle.classList.remove('text-blue-50')
    enterTableTitle.classList.remove('bg-primary')
    enterTableTitle.classList.add('bg-blue-200')
    enterTableTitle.classList.remove('text-white')
    enterTableTitle.classList.add('text-blue-50')
    tableType.setAttribute('value', 'new-table')
    tableAddressInput.value=''
    createTableButton.classList.remove('hidden')
    enterTableButton.classList.add('hidden')
    createTableInstructions.classList.remove('hidden')
}

function enterTableSelect() {
    createTableText.classList.add('hidden')
    enterTableText.classList.remove('hidden')
    enterTableTitle.classList.add('bg-primary')
    enterTableTitle.classList.remove('bg-blue-200')
    enterTableTitle.classList.add('text-white')
    enterTableTitle.classList.remove('text-blue-50')
    createTableTitle.classList.remove('bg-primary')
    createTableTitle.classList.add('bg-blue-200')
    createTableTitle.classList.remove('text-white')
    createTableTitle.classList.add('text-blue-50')
    tableType.setAttribute('value', 'existing-table')
    tableAddressInput.value=''
    createTableButton.classList.add('hidden')
    enterTableButton.classList.remove('hidden')
    createTableInstructions.classList.add('hidden')
}

// function chooseRestaurant() {

//     const movieContainer = document.createElement("div");
   

// }


// {
//     const movieContainer = document.createElement("div");
//     movieContainer.classList.add("movie-container");

//     const movieImg = document.createElement("img");
//     movieImg.classList.add("movie-img");
//     movieImg.setAttribute("alt", movie.title);
//     movieImg.addEventListener("click", () => {
//         location.hash = `#movie=${movie.id}`;
//       });
//     const movieBtn = document.createElement('button');
//     movieBtn.classList.add('movie-btn');

//     likedMoviesList()[movie.id] && movieBtn.classList.add('movie-btn--liked');
//     movieBtn.addEventListener('click', () => {
//         movieBtn.classList.toggle('movie-btn--liked');
//         likeMovie(movie);
//     });
    
//     if (movie.poster_path != null ){
//         movieImg.setAttribute(
//             lazyLoad ? "img-data" : "src",
//             `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
//         );
//         if (lazyLoad) {
//             observer.observe(movieImg);
//         }
//     } else {
//         movieImg.setAttribute(
//             lazyLoad ? "img-data" : "src",
//             `https://thumbs.dreamstime.com/b/error-d-people-upset-metaphor-43976249.jpg`
//         );
//             if (lazyLoad) {
//                 observer.observe(movieImg);
//             }
//         }
//     movieContainer.appendChild(movieImg);
//     movieContainer.appendChild(movieBtn);
//     container.appendChild(movieContainer);
//   }


// NEEDS REPLACEMENT!!

// headerSection.classList.remove('header-container--long');
// headerSection.style.background = '';
// arrowBtn.classList.add('inactive');
// arrowBtn.classList.remove('header-arrow--white');
// headerTitle.classList.remove('inactive');
// headerCategoryTitle.classList.add('inactive');
// searchForm.classList.remove('inactive');
// language.classList.remove('inactive');

// trendingPreviewSection.classList.remove('inactive');
// likedMoviesSection.classList.remove('inactive');
// categoriesPreviewSection.classList.remove('inactive');
// genericSection.classList.add('inactive')
// movieDetailSection.classList.add('inactive')