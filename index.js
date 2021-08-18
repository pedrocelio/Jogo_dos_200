var inicio = document.querySelector('.inicio')
var foll =document.querySelector('.foll')
var play = document.querySelector('.play')
var inst = document.querySelector('.instr')
var link = document.querySelector('.instr a')
var thank = document.querySelector('.thank')
var start = document.querySelector('.thanks a')
var nivel =document.querySelectorAll('.nivel')
var resposta = document.querySelectorAll('.resposta')
var number =[];
function nao(){
    inicio.style.display = 'none'
    foll.style.display='block'

}
function sim(){
    inicio.style.display = 'none'
    play.style.display = 'block'
}
function sugerir(){
    inst.style.display='block'
    play.style.display='none'
}
function abrir(){
    thank.style.display = 'block'
    play.style.display = 'none'
    
    
}
link.addEventListener('click',(e)=>{
    e.preventDefault()
    inst.style.display='none'
    play.style.display='block'
})
start.addEventListener('click',(e)=>{
    e.preventDefault()
    thank.style.display = 'none'
    
    var computer = Math.floor(Math.random()*10)
    number.push(computer)
    nivel[computer].style.display='block';
    


})
var point = 0;
resposta.forEach((valor,index)=>{
    var res = valor.getAttribute('value')
    valor.addEventListener('click',(e)=>{
        console.log(res)
        if(res == 'errado'){
            for(var i =0;i<nivel.length;i++){
                nivel[i].style.display = 'none'
            }
            document.querySelector('.lose').style.display = 'block'
            document.querySelector('.lose').innerHTML=`
            <div class=' loses'>
            <h2>estava quase</h2>
            <h1>${point}%</h1>
            <h3>segue a pagina,curti os posts e volta para melhorar a sua pontuação</h3>
            <a href='https://www.instagram.com/bit_curioso/'>esta bem</a>
            </div>
            
            `
        }else if(res == 'certo'){
            point+=10;
            if(number.length == 10){
                for(var i =0;i<nivel.length;i++){
                    nivel[i].style.display = 'none'
                }
                document.querySelector('.wins').style.display = 'block'
                document.querySelector('.wins').innerHTML=`
                <div class='win'>
                <h2>Ganhaste,es um Curioso</h2>
                <h1>${point}%</h1>
                <h3>segue a pagina,curti os posts e publique a tua pontuação</h3>
                <a href='https://www.instagram.com/bit_curioso/'>esta bem</a>
            </div>
                `
            }else{
                  for(var i =0;i<nivel.length;i++){
                nivel[i].style.display = 'none'
            }
            
            var laps = Math.floor(Math.random()*10)
            while(number.includes(laps)){
                 var laps = Math.floor(Math.random()*10)
            }
            number.push(laps)
            console.log(laps)
            console.log(number)
           
           
            nivel[laps].style.display='block';
            }
          
        }
    })
})