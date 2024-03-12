function Character(name, strenght ,health){

    this.name=name;
    this.strenght=strenght;
    this.health=health;
    this.elements= new elementsUI(this.name);
    
}

function elementsUI(name){
    this.attackBtn=document.querySelector(`#${name}-attack`);
    this.healthBtn=document.querySelector(`#${name}-make-health`);
    this.progress=document.querySelector(`.${name}-health span`);
    this.alive=document.querySelector(`#${name}-alive`);
    this.percentage=document.querySelector( `#${name}-percentage`);
}
//attack function 
Character.prototype.attack=function(competitor){
    if(competitor.health>0){
      competitor.health -= this.strenght ;
      competitor.elements.progress.style.width=`${competitor.health}%`;
      competitor.elements.percentage.innerHTML=`${competitor.health} %`;
    }
    else{
        competitor.elements.attackBtn.remove();
        competitor.elements.healthBtn.remove();
        competitor.elements.alive.innerHTML=`${competitor.name} is died`;
    }

}
/*Character.prototype.status=function (){
    console.log(`name:${this.name}`);
    console.log(`strenght:${this.strenght}`);
    console.log(`health:${this.health}`);
}*/

//makeHealth function
Character.prototype.makeHealth=function(){
    if(this.health<100)
    {
        this.health+=10
        this.elements.progress.style.width=`${this.health}%`;
        
        this.elements.percentage.innerHTML=`${this.health} %`;

    }
    if(this.health>100){
     this.health=100;
     this.elements.percentage.innerHTML=`${this.health} %`;
    }

}
let naruto=new Character('naruto',10,100);
let sasaki=new Character('sasaki',5,100);

naruto.elements.attackBtn.addEventListener('click',function(){
  naruto.attack(sasaki);
 
})
sasaki.elements.attackBtn.addEventListener('click',function(){
    sasaki.attack(naruto);
   
  })
naruto.elements.healthBtn.addEventListener('click',function(){
    naruto.makeHealth();
})
sasaki.elements.healthBtn.addEventListener('click',function(){
    sasaki.makeHealth();
})

