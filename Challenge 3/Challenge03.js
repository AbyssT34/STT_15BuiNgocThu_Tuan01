const dolphins1 = {
    score1: 97,
    score2: 112,
    score3: 101
}
const koalas1 = {
        score1: 109,
        score2: 95,
        score3: 123
    }      

function average(score1, score2, score3) {
    return (score1 + score2 + score3) / 3
}

const averageOfDolphins = average(dolphins1.score1, dolphins1.score2, dolphins1.score3).toFixed(2)
const averageOfKoalas = average(koalas1.score1, koalas1.score2, koalas1.score3).toFixed(2)

//Task 1
console.log('Task 1')
console.log('Điểm số trung bình của Dolphins: ' + averageOfDolphins)
console.log('Điểm số trung bình của Koalas: ' + averageOfKoalas)

//Task 2
console.log('Task 2')
if (averageOfDolphins > averageOfKoalas)
    console.log('Dophins là đội chiến thắng')
else if (averageOfKoalas > averageOfDolphins)
    console.log('Koalas là đội chiến thắng')
else
    console.log('Hoà')

//Task 3 & 4
console.log('Task 3 & 4')

if (averageOfDolphins > averageOfKoalas && averageOfDolphins >= 100)
    console.log('Dophins là đội chiến thắng')
else if (averageOfKoalas > averageOfDolphins && averageOfKoalas >= 100)
    console.log('Koalas là đội chiến thắng')
else if (averageOfKoalas == averageOfDolphins && averageOfDolphins >= 100)
    console.log('Hoà')
else
    console.log("Không có team nào chiến thắng")