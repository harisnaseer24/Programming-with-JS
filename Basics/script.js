


let movies = [
    "The Meg 2",
    "The Meg",
    "Extraction 2",
    "Mission Impossible: Dead Reckoning",
    "Mission Impossible: Ghost Protocol",
    "Mission Impossible: Rogue Nation",
    "The Avengers:End Game",
    "Money Heist",
    "Barbie",
    "The Avengers:Age of Ultron",
    "The Avengers:Infinity War",
    "The Quantum Paradox",
    "Midnight Mirage",
    "Echoes of Eternity",
    "Nebula's Embrace",
    "Enigma Chronicles",
    "Radiant Requiem",
    "Shadow of Serenity",
    "Shattered Dimensions",
    "Celestial Odyssey",
    "Veil of Whispers",
    "Elysium Enigma",
    "Luminous Legacy",
    "Tempest Tango",
    "Ascension Protocol",
    "Chronicles of the Cosmos",
    "Solstice Symphony",
    "Beyond the Horizon",
    "Nebulous Nexus",
    "Aetherium Secrets",
    "Serendipity's Song",
    "Aurora Ascending",
    "Stellar Alchemy",
    "Dreamweaver's Dilemma",
    "Quantum Quicksilver",
    "Echoes from Tomorrow",
    "Midnight Metropolis",
    "Odyssey of Oracles",
    "Prism's Peril",
    "Nebula Noir",
    "Arcane Amalgam",
    "Echoes in Eternity",
    "Paradox Pandora",
    "Enchanted Eclipse",
    "Whispers in the Void",
    "Twilight Traverse",
    "Ephemeral Elysium",
    "Ethereal Enchantment",
    "Synchronicity Saga",
    "Echoes of the Nebula",
    "Midnight Monolith",
    "Zodiac Zenith",
    "Celestial Cipher",
    "Portal to Eternity",
    "Nova's Nexus",
    "Solitary Stardust",
    "Enigma of Echoes",
    "Nebula's End",
    "Whispering Shadows",
    "Quantum Quandary",
    "Aeon Arcana",
    "Twilight's Lullaby",
    "Stellar Mirage",
    "Chrono Crucible",
    "Prism's Pathway",
    "Labyrinth of Light",
    "Ethereal Echo",
    "Whispers of Infinity",
    "Enchanted Echoes",
    "Nova Nostalgia",
    "Galaxy's Grasp",
    "Veil of Vision",
    "Ephemeral Embrace",
    "Twilight Threnody",
    "Ethereal Odyssey",
    "Siren's Solace",
    "Quantum Quasar",
    "Arcane Aurora",
    "Midnight Muse",
    "Prism's Passage",
    "Enigma Entwined",
    "Celestial Caravan",
    "Nebula's Nocturne",
    "Echoes of Eden",
    "Aetherium Alchemy",
    "Stellar Soliloquy",
    "Enchanted Enigma",
    "Whispers in Wilderness",
    "Twilight Triad",
    "Luminous Labyrinth",
    "Ethereal Eclipse",
    "Nebula's Nexus",
    "Aurora's Arc",
    "Quantum Quest",
    "Prism's Prism",
    "Enchanted Odyssey",
    "Celestial Cascade",
    "Echoes of Empyrean",
    "Ethereal Equinox",
    "Twilight Travellers",
    "Nebula Nectar",
    "Quantum Quiescence",
    "Stellar Serenade",
    "Enchanted Echoes",
    "Arcane Allegory",
    "Celestial Chronograph",
    "Prism's Paradox",
    "Ephemeral Eden",
    "Nebula's Nexus",
    "Twilight Tapestry",
    "Echoes of Endeavor"
  ];
  function capitalizeWords(inputString) {
    const words = inputString.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
  }

// map method
  let newmovies = movies.map((a) => {
    return a.toLowerCase();
  });



  let msg = document.createElement("h1");
  msg.innerHTML = "Search your Movies here 😎";
  document.body.appendChild(msg);
  function Search() {
    
    let query = document.getElementById("search").value;
    let lowerCaseQuery = query.toLowerCase();
    // let upperCaseQuery = query.toUpperCase();
    // let result =newmovies.includes(lowerCaseQuery);
    // console.log(result)
    let result =newmovies.filter((arr)=>{
        if(arr.includes(lowerCaseQuery))
        {
            return arr
        }
        // return(arr.includes(lowerCaseQuery))
    });
    
    // console.log(result)

   
    if (result.length>0) {
        msg.innerHTML =""
    result.forEach(a => {
     
        msg.innerHTML += `
      <li> ${capitalizeWords(a)}</li>`
    })
     
    } else{
      msg.innerHTML = "Oops not found 😢";
    }
    if(query==""){
  msg.innerHTML=""
     
    }
   
  }

 
  //arr.join converts an array into string including all elements with the anything ("here")
  // let allmovies=movies.join("")
  // console.log(allmovies);
  // console.log(typeof(allmovies));

//   arr.filter return an array having element fullfiling condition

//   // map method
//   let newmovies = movies.map((a) => {
//     return a.toLowerCase();
//   }); 
//   console.log(newmovies);
// //entries method
// let entrymovies = movies.entries()
//   for (const f of entrymovies) {
//     document.write(f)
//   }
// reduce method
// let array=movies.reduce((movie,movie2)=>{
//   return movie+movie2
// })
// console.log(array);
// let btn=document.getElementById("searchBtn");
// btn.addEventListener("click",()=>{let query = document.getElementById("search").value;
// let lowerCaseQuery = query.toLowerCase();
// let upperCaseQuery = query.toUpperCase();
// // let result =newmovies.includes(lowerCaseQuery);
// // console.log(result)
// let result =newmovies.filter((arr)=>{
//     if(arr.includes(lowerCaseQuery||upperCaseQuery))
//     {
//         return arr
//     }
//     // return(arr.includes(lowerCaseQuery))
// });

// console.log(result)

// let count = 0;
// for (let i = 0; i < newmovies.length; i++) {
//   if (lowerCaseQuery == newmovies[i]) {
//     count++;
//     var findindex = [];
//     findindex.push(i)
//   }
// }
// if (count > 0) {
//   msg.innerHTML = `${newmovies[findindex[0]]} movie is here😍`;
// } else {
//   msg.innerHTML = "Oops not found 😢";
// }

// });