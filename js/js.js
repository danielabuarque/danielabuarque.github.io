// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// A parte de jQuery que faz aparecer uma seta do lado direito está sendo feita a partir da linha 11 até 22
// A função que valida o CPF está sendo feita a partir da linha 45 até 102
// A função que valida o CNPJ está sendo feita a partir da linha 107 até 138



// Function that shows and hide arrow button
$(window).scroll(function(){
    if($(this).scrollTop()>=400){
      $('.show-btn').show();
    }else{
      $('.show-btn').hide();
    }
  });

  // Click on the button to scroll to the top
  $('.show-btn').click(function(){
    $('html,body').animate({scrollTop: 0},1200);
  });



// Function that makes cpf and cnpj inputs disabled
$(document).ready(function() {
    $('#cpf').attr("disabled", true);
    $('#cnpj').attr("disabled", true);

    $('#company').on('change', function() {
       if(this.value == 'sim'){
        $('#cpf').attr("disabled", true);
        $('#cnpj').attr("disabled", false);
       }
        else{
          $('#cnpj').attr("disabled", true);
           $('#cpf').attr("disabled", false);
        }

    });
});

  // Function that validates CPF
  function valCPF() {
        var cpf_pattern = /^[0-9]{11}$/;
        var aux=document.getElementById('cpf');
        var res=cpf_pattern.test(aux.value);
        var strCpf = document.getElementById('cpf').value;
        
        var soma = 0;
        var resto;
        

        if (strCpf == "00000000000" || strCpf == "11111111111" || strCpf == "22222222222" || strCpf == "33333333333" || strCpf == "44444444444" || strCpf == "55555555555" || strCpf == "66666666666" || strCpf == "77777777777" || strCpf == "88888888888" || strCpf == "99999999999" || strCpf.length != 11 || !res) {
            alert("CPF Inválido");
            aux.value="";
            return false;
        }

        for (i = 1; i <= 9; i++) {
            soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
        }

        resto = soma % 11;

        if (resto == 10 || resto == 11 || resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }

        if (resto != parseInt(strCpf.substring(9, 10))) {
            alert("CPF Válido");
            aux.value=aux.value.match(/(\d{0,9})(\d{0,2})/).slice(1).join('-');
            return false;
        }

        soma = 0;

        for (i = 1; i <= 10; i++) {
            soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
        }

        resto = soma % 11;

        if (resto == 10 || resto == 11 || resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }

        if (resto != parseInt(strCpf.substring(10, 11))) {
            alert("CPF Inválido");
            aux.value="";
        } else{
          alert("CPF VÁLIDO");
          aux.value=aux.value.match(/(\d{0,9})(\d{0,2})/).slice(1).join('-');
        return true;
        }

        }


// Function that validates CNPJ

function valCNPJ() {
    var cnpj_pattern = /^[0-9]{14}$/;
    var aux=document.getElementById('cnpj');
    var res=cnpj_pattern.test(aux.value);
    console.log(res);
    var cnpj = document.getElementById('cnpj').value;

    if(cnpj.length!=14){
      alert("CNPJ Inválido");
        aux.value="";
        return false;
    } 

    if (cnpj == "00000000000000" || cnpj == "11111111111111" || cnpj == "22222222222222" || cnpj == "33333333333333" || cnpj == "44444444444444" || cnpj == "55555555555555" || cnpj == "66666666666666" || cnpj == "77777777777777" || cnpj == "88888888888888" || cnpj == "99999999999999"){
      alert("CNPJ Inválido");
        aux.value="";
        return false;
    }

    if(res){
      aux.value=aux.value
        .match(/(\d{0,8})(\d{0,6})/).slice(1).join('-');
        alert('CNPJ é válido!');
    }
    else{
      alert("CNPJ Inválido");
        aux.value="";
        return false;
    }

  
    };    