// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Notes:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// ! My solution

// ? classPoints = arr of #
// ? yourPoints = single #

function betterThanAverage(classPoints, yourPoints) {
    const classTotal = classPoints.reduce((accum, currentEl) => accum + currentEl)
    const average = (classTotal + yourPoints) / (classPoints.length + 1)
    return yourPoints > average
    }

// ** Alt solution

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce(function(sum, x){return sum + x},yourPoints)/(classPoints.length+1)
  }