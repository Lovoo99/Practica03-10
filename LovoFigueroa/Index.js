const express = require('express');
const app = express();
const puerto = 3000;

app.get('/usuario' ,function(req, res){
    res.json[{
        primernombre: "Luis",
        segundonombre: "Eduardo",
        primerapellido: "Lovo",
        segundoapellido: "Figueroa",
        fechanacimiento: "1999-15-08",
        estadofamiliar: "soltero",
        residencia: "23 calle oriente, barrio san miguellito",
        profesion: "Auxiliar Administrativo",
        estatura: 1.81,
        peso: 165,
        colorpiel: "blanco",
        colorojos: "verde",
        colorcabello: "rubio",
        ultimosempleos: [{ 
            empresa: "Banco Central de Reserva",
            dependencia: "Area de Censos",
            direccion: "Calle Juan pablo segundo, San Salvador",
            cargo: "Supervirsor de Brigada2",
            desde: "2023-01-01",
            hasta: "2023-12-31"
        },{
            empresa: "La vianda",
            dependencia: "Area de ciberseguridad",
            direccion: "Trabajo a distancia",
            cargo: "Auxiliar Administrativo",
            desde: "2024-01-01",
            hasta: "Vigente"
        }]
        }];
    });

app.get('/genero' ,function(req,res){
    res.json[{
        
            id:1,
            genero: "Masculino"
        },{
            id: 2,
            genero: "Femenino"
        }

    ];       
    
});

app.get('/tipo_documento' ,function(req, res){
    res.json[{
        id: 1,
        tipo_documento: "DUI"
    },{
        id: 2,
        tipo_documento: "NIT"
    },{
        id: 3,
        tipo_documento: "ISSS"
    },{
        id: 4,
        tipo_documento: "PASAPORTE"
    }

    ];
});

app.get('/departamento' ,function(req, res){
    res.json([{
        id: 1,
        departamento: "Ahuachapan"
    },{
        id: 2,
        departamento: "Santa Ana"
    },{
        id: 3,
        departamento: "Sonsonate"
    },{
        id: 4,
        departamento: "La Libertad"
    },{
        id: 5,
        departamento: "San Salvador"
    },{
        id: 6,
        departamento: "chalatenango"
    },{
        id: 7,
        departamento: "ACuscátlan"
    },{
        id: 8,
        departamento: "Cabañas"
    },{
        id: 9,
        departamento: "La Paz"
    },{
        id: 10,
        departamento: "San Vicente"
    },{
        id: 11,
        departamento: "Usulutan"
    },{
        id: 12,
        departamento: "San Miguel"
    },{
        id: 13,
        departamento: "La Union"
    },{
        id: 14,
        departamento: "Morazan"
    }
    ]);
});


app.get('/municipio' ,function(req, res){
    res.json[{
        id: 1,
        municipio: "Ahuachapan norte"
    },{
        id: 2,
        municipio: "ahuachapan centro"
    },{
        id: 3,
        departamento: "ahuachapan sur"
    },{
        id: 4,
        departamento: "La Libertad costa"
    },{
        id: 5,
        departamento: "la libertad sur"
    },{
        id: 6,
        departamento: "san salvador norte"
    },{
        id: 7,
        departamento: "san salvador sur"
    },{
        id: 8,
        departamento: "san salvador centro"
    },{
        id: 9,
        departamento: "La Paz norte"
    },{
        id: 10,
        departamento: "San Vicente norte"
    },{
        id: 11,
        departamento: "Usulutan norte"
    },{
        id: 12,
        departamento: "San Miguel norte"
    },{
        id: 13,
        departamento: "La Union norte"
    },{
        id: 14,
        departamento: "Morazan norte"
    },{
   
        id: 15,
        departamento: "Morazan sur"
    },{
        id: 16,
        departamento: "Usulutan sur"
    },{
        id: 17,
        departamento: "San Miguel norte"
    },{
        id: 18,
        departamento: "La Union sur"
    },{
        id: 19,
        departamento: "san vicente sur"
    },{
        id: 20,
        departamento: "Morazan sur"
}];
});

app.get('/sumar', function(req,res){
    let resultado = parseFloat(req.query.campo1) + parseFloat(req.query.campo2);

    res.json({
        igual_a: resultado
    });
});

app.listen(puerto,function(req,res){
    console.log("servidor en ejecución en el puerto "+puerto);
})