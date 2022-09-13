const frutas = ["Banana", "Mamão", "Lichia", "Pêra", "Maçã"]
count = 0
console.log('Ranking das minhas frutas preferidas:')

for (i of frutas){
    count ++
    console.log(`${count} - ${i}`)
}
