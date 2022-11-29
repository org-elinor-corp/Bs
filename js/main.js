window.addEventListener('scroll',function(){
   var scro=window.scrollY;
      console.log(scro);
      if (scro >= 200){
         this.document.getElementById('headder').className='active';
         this.document.getElementById('logo').classList="active";
         this.document.getElementById("fetureleft").classList='left active';
         this.document.getElementById("fetureright").classList='right active';
      }else{
         this.document.getElementById('headder').className='none';
         this.document.getElementById('logo').className='none';
      };
      if (scro >= 470){
      }
      
   })
   this.document.getElementById('icon').addEventListener(onclick,ShowMenu);
      function ShowMenu(){     
        document.getElementById('main').style.top = (document.getElementById('main').style.top  == '-150%') ? '20px' : '-150%';
      }