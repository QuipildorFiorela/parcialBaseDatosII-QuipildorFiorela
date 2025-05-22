//PARCIAL BDT FIORELA QUIPILDOR

//1 Crear el script .js con la creación de la base de datos y las colecciones.
use cafeteria
load("cafesEspeciales.js")

//2 Buscar cuántos cafés contienen chocolate entre sus ingredientes
db.cafesEspeciales.find({ingredientes: "chocolate"}).count()

//3 Buscar cuántos cafés son de tipo “cold brew” y contienen “vainilla”
db.cafesEspeciales.find({$and: [{tipo: "cold brew"}, {ingredientes: {$regex: /vainilla/i}}]}).count()

//4 Listar tipo y peso de los cafés que tienen una intensidad “media”.
db.cafesEspeciales.find({intensidad: "media"}, {tipo: 1, pesoGramos: 1, _id: 0})

//5 Obtener tipo, peso e intensidad de cafés con peso entre 200 y 260
db.cafesEspeciales.find({pesoGramos: {$gte: 200, $lte: 260}}, {tipo: 1, pesoGramos: 1, intensidad: 1, _id: 0})

//6 Mostrar cafés tostados en localidades que contengan “san”, ordenados por peso descendente
db.cafesEspeciales.find({"tostador.localidad": {$regex: /san/i}}).sort({pesoGramos: -1})

//7  Sumar el peso total por tipo de café
db.cafesEspeciales.aggregate([{$group: {_id: "$tipo", totalPeso: {$sum: "$pesoGramos"}}}])

//8  Agregar “whisky” a los ingredientes de cafés con intensidad “alta”
db.cafesEspeciales.updateMany({intensidad: "alta"}, {$push: {ingredientes: "whisky"}})

//9  Sumarle 10 al peso de cafés con peso entre 200 y 260
db.cafesEspeciales.updateMany({pesoGramos: {$gte: 200, $lte: 260}}, {$inc: {pesoGramos: 10}})

//10  Eliminar cafés con peso menor o igual a 210
db.cafesEspeciales.deleteMany({pesoGramos: {$lte: 210}})

