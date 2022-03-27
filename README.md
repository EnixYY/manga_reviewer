# Manga reviewer

## Motivation
During my time learning in General Assembly, my friends were telling me about the mangas that I have been missing out however sometimes our views does not match so I created this app to seek out other reviews on the manga. Also to keep track of my own reading reviews to the mangas that I like.

## Build status
Currently the app is done on phase 1 where the search and home page is completed. However search validations are not done yet. Also favourite list for the user is also in the mist of constructing. Below are the scope of my app.

### List of things to work on

#### Must do (MVP)
1. Make a home page with a top 9 manga hero image and also able to populate recommended manga with reviews. (Done)

2. Search function that connects to myAnimeList review page. (Done without validation)

#### Can do (Stretch goals)
1. Have carousel for the top 9 hero image. (Done)

2. Make a dropdown list for genre search in the search function. (Done without validation)

3. Allow app to be resposive and displayable in a mobile setting. Make navbar responsive. Burger menu when mobile view.

4. Add in favourite list and being able to add own reviews to favourited manga.

## Screenshots
#### HeroImage Carousel
<img width="1512" alt="HeroImage with navbar" src="https://user-images.githubusercontent.com/26226289/160269124-c95e54ee-2a59-4edd-959a-77ebbfe21156.png">

#### Recommendation with top reviews from other users
<img width="1512" alt="recommendations" src="https://user-images.githubusercontent.com/26226289/160269127-a5ad27e9-74ad-4f6b-822a-8a99b05ffa5e.png">

#### Search with list of genre
<img width="1512" alt="Search" src="https://user-images.githubusercontent.com/26226289/160269128-e3ec8927-411c-4d22-bbee-9795290576e4.png">

## Tech & Framework used

1. React.Js
- States and Props
- UseEffect
- Router 6

2. Npm Elastic Carousel

## Features
For the search function we can search using the list of genres first then further search using the input.

Next big feature will be being able to favourite manga and add your own review. (Work in progress)

## API Reference
Jikan API version 4
https://jikan.moe/

## How to use
Please visit https://mangareviewer.netlify.app/Home to access the app.

Carousel consist of top 10 manga from myanimelist database.

Home page will have recommended mangas with top reviews from other users that is from myanimelist database.

Search page will have function to search by title. We can also search by genre using the list and further search using the input to narrow down our search.
