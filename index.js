

const searchBook=()=> {

   //const searchFieldText= document.getElementById('button');
const searchField= document.getElementById('search-field');
  const searchFieldText= searchField.value;

 console.log( searchFieldText, 'button clicked');
  // console.log( 'button clicked');

   searchField.value= '';

   const url= `https://openlibrary.org/search.json?q=${searchFieldText}`
   fetch (url)
   .then (response=>response.json())
   .then(data=>displayBookDetails(data.docs));

}



const displayBookDetails=(docs)=>{

    console.log(docs);

     const searchResult= document.getElementById('search-result');
     //const div= document.createElement('div');
     //div.classList.add('card');
     
     //const publishers = details.alert(publisher);

    for(const details of docs ){
        
     console.log(details.title);
     console.log(details.author_name);
     

   const div= document.createElement('div');
   //div.classList.add('card');

     div.innerHTML=
     `
     
   <div onclick="loadSingleBook(${docs.key})" class="card h-100">
           <img  src=" https://covers.openlibrary.org/b/id/${details.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            
                 <h5 class="card-title">Book Details</h5>
                 <p class="card-text">
                 Title: ${details.title} <br> 
                 Author Name: ${details.author_name[0]}   <br> 
                 Publisher: ${details.publisher.slice(0,1)}     <br> 
                 First Publish Year: ${details.first_publish_year}  <br>  
        First Publish Place: ${details.publish_place[0]}  <br> 
                 Subject: ${details.subject[0, 5]}  <br> 
                 Language: ${details.language.slice(0,1)}  <br> 
                  
                 </p>         
          <div >
                <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
 </div>         
     
     `

   searchResult.appendChild(div);



    }
};

const loadSingleBook=(key)=>{

    

    console.log(key);

const url= `https://openlibrary.org/search.json?q=${key
}`;
 fetch(url)
 .then(response=>response.json())
 .then(data=>loadKey(data.docs));

}

loadSingleBook();

const loadKey=(details)=>{

    console.log(details.key);

    const singleBook= document.getElementById('book-details')
    const div= document.createElement('div');
    div.classList.add('card');
    div.innerHTML= `

    
             <img src="
             ${details.cover_i}" class="card-img-top rounded-circle " alt="...">
        <div class="card-body">
            <p>
                 Title: ${details.title} <br> 
                 Author Name: ${details.author_name}   <br> 
                 Publisher: ${details.publisher}     <br> 
                 First Publish Year: ${details.first_publish_year} 

                 </p>
        </div>
  </div>
  
  `


    
          
    
    singleBook.appendChild(div);
};
