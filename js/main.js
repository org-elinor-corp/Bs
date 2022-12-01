window.addEventListener('scroll',function(){
   var scro=window.scrollY;
      if (scro >= 200){
         this.document.getElementById('headder').className='active';
         this.document.getElementById('logo').classList="active";
         this.document.getElementById("fetureleft").classList='left active';
         this.document.getElementById("fetureright").classList='right active';
      }else{
         this.document.getElementById('headder').className='none';
         this.document.getElementById('logo').className='none';
      };
      
   })
function ShowMenu(){     
        document.getElementById('main').style.top = (document.getElementById('main').style.top  == '-150%') ? '20px' : '-150%';
   }

   var slider=document.getElementById("review-silde");
   let slideleft =document.querySelector("#slide-left");
   let slideright =document.querySelector("#slide-right");
   slideright.onclick =ReviewSlideright;
   slideleft.onclick =ReviewSlideleft;
   function ReviewSlideleft(){
      if( slider.className=='one')
         slider.className='two';

      console.log("slide left");    
   }
   function ReviewSlideright(){
      if( slider.className=='two')
         slider.className='one';
     }
   
   