
    let count1=0;
    let count2=0;
    let count3=0;
    let count4=0;
    let count5=0;
    let count6=0;
    let count7=0;
    let count8=0;
    document.getElementById("card-1").addEventListener("click", function (e) {

    //  let ppp=document.getElementById("p").getAttribute("id");
    //  console.log(ppp)
    // event.stopImmediatePropagation();
// if( ppp==="p"){
//event.target.parentElement.classList.toggle("card-1");
    // }
    e.target.classList.toggle("card-1");
            if(count1%2==0){
                document.getElementById("card-text-1").style.color="#1771e6";
             }
             else{
                document.getElementById("card-text-1").style.color="rgba(128, 128, 128, 0.932)";
             }
         count1++;
         
        });

    document.getElementById("card-2").addEventListener("click", function (e) {
            e.target.classList.toggle("card-2");
            if(count2%2==0){
                document.getElementById("card-text-2").style.color="#4ec1f2";
             }
             else{
                document.getElementById("card-text-2").style.color="rgba(128, 128, 128, 0.932)";
             }
         count2++;
        });
    document.getElementById("card-3").addEventListener("click", function (e) {
            e.target.classList.toggle("card-3");
            if(count3%2==0){
                document.getElementById("card-text-3").style.color="#c3006e";
             }
             else{
                document.getElementById("card-text-3").style.color="rgba(128, 128, 128, 0.932)";
             }
         count3++;
        });


    document.getElementById("card-4").addEventListener("click", function (e) {
            e.target.classList.toggle("card-4");
            if(count4%2==0){
                document.getElementById("card-text-4").style.color="#016193";
             }
             else{
                document.getElementById("card-text-4").style.color="rgba(128, 128, 128, 0.932)";
             }
         count4++;
        });

    document.getElementById("card-5").addEventListener("click", function (e) {
            e.target.classList.toggle("card-5");
            if(count5%2==0){
                document.getElementById("card-text-5").style.color="#1fc75f";
             }
             else{
                document.getElementById("card-text-5").style.color="rgba(128, 128, 128, 0.932)";
             }
         count5++;
        });
    document.getElementById("card-6").addEventListener("click", function (e) {
            e.target.classList.toggle("card-6");
            if(count6%2==0){
                document.getElementById("card-text-6").style.color="#D1463B";
             }
             else{
                document.getElementById("card-text-6").style.color="rgba(128, 128, 128, 0.932)";
             }
         count6++;
        });

    document.getElementById("card-7").addEventListener("click", function (e) {
            e.target.classList.toggle("card-7");
            if(count7%2==0){
                document.getElementById("card-text-7").style.color="#F24100";
             }
             else{
                document.getElementById("card-text-7").style.color="rgba(128, 128, 128, 0.932)";
             }
         count7++;
        });
    document.getElementById("card-8").addEventListener("click", function (e) {
            e.target.classList.toggle("card-8");
            if(count8%2==0){
                document.getElementById("card-text-8").style.color="#B12825";
             }
             else{
                document.getElementById("card-text-8").style.color="rgba(128, 128, 128, 0.932)";
             }
         count8++;
        });
// document.getElementById("p").addEventListener("click",function(){
    
// })
    






    
   
