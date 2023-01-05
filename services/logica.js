//puntaje = cantidad de outputs correctos / cantidad de outputs = convertir a entero en escala 100 (ej rtdo 0.5 en entero sería 50) máx puntaje = 100

function countScore(asserts, outputs){
    return (asserts / outputs) * 100;
}