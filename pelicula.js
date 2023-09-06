const item =[ //1 armar array objetos
{  id: 1,
    title:'Avengers Endgame',
    year:'2012',
    img:'https://www.ecartelera.com/carteles/8900/8902/041_m.jpg'
},{
    id: 2,
    title:'Harry Potter',
    year:'2015',
    img:'https://es.web.img2.acsta.net/medias/nmedia/18/84/93/87/19765356.jpg'
},{
    id: 3,
    title:'Rec',
    year:'2007',
    img:'https://es.web.img2.acsta.net/medias/nmedia/18/69/51/93/20087127.jpg'
},{
    id: 4,
    title:'Shrek',
    year:'2001',
    img:'https://www.ecartelera.com/carteles/5000/5060/001_m.jpg'
},{ id: 5,
    title:'Trainspotting',
    year:'1997',
    img:'https://www.themoviedb.org/t/p/original/bhY62Dw8iW54DIhxPQerbuB9DOP.jpg'
},{
    id: 6,
    title:'Spider-man HomeComing',
    year:'2017',
    img:'https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_.jpg',
},{
    id: 7,
    title:'The Batman',
    year:'2021',
    img:'https://http2.mlstatic.com/D_NQ_NP_752748-MLA48914506397_012022-O.webp'
},{
    id: 8,
    title:'Taxi Driver',
    year:'1976',
    img:'https://static.displate.com/857x1200/displate/2020-07-06/6378753f0fa7d0cd58d616ed0dd0ef8c_824089360fc99361ea5ce22c58be24af.jpg'
}
];
    
function onload(){
    const lista = document.getElementById("lista");//declarar la funcion y llamar ul

    item.map((item) => { //3 iterar sobre el array
    const listElement = document.createElement("li");

    const title = document.createElement("h3");//4 crear etiquetas/elementos
    const year = document.createElement("label");
    const img = document.createElement("img");


    title.textContent = item.title; //5 asignarles valor
    year.textContent = item.year;
    img.src = item.img;


    listElement.appendChild(title)//6 appendar los elementos a los padres correspondientes
    listElement.appendChild(year)
    listElement.appendChild(img)

    lista.appendChild(listElement)
    })
}
