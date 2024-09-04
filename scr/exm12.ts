function paraVetor<TipoDoTrem> (coisa:TipoDoTrem):TipoDoTrem[]{

    return[coisa];

}

const v1 = paraVetor("Fulano");
const v2 = paraVetor(true);
const v3 = paraVetor({x:1, y:2});


function paraTupla<TipoAluno,TipoNota, TipoSituacao>(
    a:TipoAluno,
    b:TipoNota,
    c:TipoSituacao
    
    ):[TipoAluno, TipoNota]{
        return[a,b];
    }

const a = paraTupla("Fulano", 12, false);
const b = paraTupla({matricula: "20237604", nome: "Fulano"}, [60,70,80], "matriculado");