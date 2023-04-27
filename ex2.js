function enviar(){
    var data = new Date()
    var adata = data.getFullYear()

    var fano = document.getElementById('ano')
    var titulo = document.getElementById('titulo')
    var img = document.createElement('img')
    

    
        if(fano.value < 1905){
            alert('[ERRO]opa opa opa, vc nn é a pessoa mais velha do mundo')
        }
        if(fano.value > adata){
            alert('[ERRO] opa opa opa engraçadinho, vc nn nasceu no futuro')
        }
        else{
            
            var idade = adata - Number(fano.value)
            var hehe = document.getElementsByName('hihi')
            var sexo = ''
          
            if(hehe[0].checked){
                sexo = ('Homem')
             if(idade > 0 && idade <10){
                    img.setAttribute('src' , 'bb-homem-1.jpg')
                }
                else if(idade < 18){
                    img.setAttribute('src' , 'jovem.jpg')
                }
                else if (idade <=50 && idade >= 18){
                    img.setAttribute('src' , 'adulto.jpg')
                }
                else{
                    img.setAttribute('src' , 'idoso-homem.jpg')
                }
            
            } else {
                sexo = ('Mulher')
                if(idade < 10){
                    img.setAttribute('src' , 'bb-mulher.jpg')
                }
                else if(idade < 18){
                    img.setAttribute('src' , 'jovem-mulher.jpg')
                }
                else if(idade <= 50 && idade >= 18){
                    img.setAttribute('src' , 'adulta-mulher.jpg')
                }
                else{
                    img.setAttribute('src' , 'idosa.jpg')
                }
            }
            var foto = document.getElementById('foto')

            foto.innerHTML= `<h2>${sexo} de ${idade} anos</h2>` 
            foto.appendChild(img)
            
        }
}





