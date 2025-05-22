db.cafesEspeciales.insertMany(
    [
{
    "tipo": "espresso",
    "ingredientes": ["chocolate", "canela"],
    "pesoGramos": 30,
    "intensidad": "alta",
    "precios": [
    { "tipo": "efectivo", "precio": 500 },
    { "tipo": "tarjeta", "precio": 550 }
    ],
    "contieneLeche": false,
    "tostador": {
    "localidad": "San Telmo",
    "nombre": "Tostadores del Sur",
    "cuit": "30-71588999-5"
    }
},
    {
    "tipo": "filtrado",
    "ingredientes": ["caramelo"],
    "pesoGramos": 250,
    "intensidad": "media",
    "precios": [
    { "tipo": "efectivo", "precio": 1200 },
    { "tipo": "tarjeta", "precio": 1300 }
    ],
    "contieneLeche": false,
    "tostador": {
    "localidad": "Palermo",
    "nombre": "Origen Café",
    "cuit": "30-70345671-2"
    }
},
{
    "tipo": "cold brew",
    "ingredientes": ["vainilla"],
    "pesoGramos": 200,
    "intensidad": "baja",
    "precios": [
    { "tipo": "efectivo", "precio": 1100 },
    { "tipo": "tarjeta", "precio": 1150 }
    ],
    "contieneLeche": true,
    "tostador": {
    "localidad": "San Telmo",
    "nombre": "Fractal Tostadores",
    "cuit": "30-70987654-1"
    }
},
{
    "tipo": "descafeinado",
    "ingredientes": ["chocolate"],
    "pesoGramos": 250,
    "intensidad": "media",
    "precios": [
    { "tipo": "efectivo", "precio": 1000 },
    { "tipo": "tarjeta", "precio": 1050 }
    ],
    "contieneLeche": false,
    "tostador": {
    "localidad": "Caballito",
    "nombre": "Café Lúmina",
    "cuit": "30-71234567-8"
    }
},
{
    "tipo": "latte",
    "ingredientes": ["caramelo", "vainilla"],
    "pesoGramos": 300,
    "intensidad": "media",
    "precios": [
    { "tipo": "efectivo", "precio": 1350 },
    { "tipo": "tarjeta", "precio": 1450 }
    ],
    "contieneLeche": true,
    "tostador": {
    "localidad": "Recoleta",
    "nombre": "Boreal Café",
    "cuit": "30-71889944-3"
    }
},
{
    "tipo": "americano",
    "ingredientes": ["chocolate"],
    "pesoGramos": 180,
    "intensidad": "media",
    "precios": [
    { "tipo": "efectivo", "precio": 950 },
    { "tipo": "tarjeta", "precio": 1000 }
    ],
    "contieneLeche": false,
    "tostador": {
    "localidad": "Almagro",
    "nombre": "Negro Café",
    "cuit": "30-70665432-9"
    }
},
{
    "tipo": "flat white",
    "ingredientes": ["vainilla"],
    "pesoGramos": 220,
    "intensidad": "alta",
    "precios": [
    { "tipo": "efectivo", "precio": 1400 },
    { "tipo": "tarjeta", "precio": 1500 }
    ],
    "contieneLeche": true,
    "tostador": {
    "localidad": "Puerto Madero",
    "nombre": "Distrito Café",
    "cuit": "30-70123456-7"
    }
},
{
    "tipo": "ristretto",
    "ingredientes": ["chocolate"],
    "pesoGramos": 20,
    "intensidad": "alta",
    "precios": [
    { "tipo": "efectivo", "precio": 600 },
    { "tipo": "tarjeta", "precio": 650 }
    ],
    "contieneLeche": false,
    "tostador": {
    "localidad": "Flores",
    "nombre": "Café Quantum",
    "cuit": "30-70991234-1"
    }
},
{
    "tipo": "mocha",
    "ingredientes": ["chocolate", "caramelo"],
    "pesoGramos": 280,
    "intensidad": "media",
    "precios": [
    { "tipo": "efectivo", "precio": 1450 },
    { "tipo": "tarjeta", "precio": 1550 }
    ],
    "contieneLeche": true,
    "tostador": {
    "localidad": "Barracas",
    "nombre": "El Grano Justo",
    "cuit": "30-70227888-4"
    }
},
{
    "tipo": "macchiato",
    "ingredientes": ["vainilla"],
    "pesoGramos": 40,
    "intensidad": "alta",
    "precios": [
    { "tipo": "efectivo", "precio": 700 },
    { "tipo": "tarjeta", "precio": 750 }
    ],
    "contieneLeche": true,
    "tostador": {
    "localidad": "Boedo",
    "nombre": "Café Nébula",
    "cuit": "30-71778899-0"
    }
}
]
    )
    db.cafesEspeciales.find().pretty()