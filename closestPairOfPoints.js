function calculateDistance(p1, p2) {
  const yDiff = p2[0] - p1[0];
    const xDiff = p2[1] - p1[1];
  return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
}
calculateDistance([0,0],[1,1])
const closestPairOfPoints = function (points) {
  // TODO: 여기에 코드를 작성합니다.
    const PL = points.length
    let minLength = calculateDistance(points[0], points[1])
    for (let i = 0; i < PL-1; i++){
        for (let j = i + 1; j < PL; j++){
            let newDistance = calculateDistance(points[i], points[j])
            console.log(i,j, newDistance)
            if (minLength > newDistance) {
                minLength = newDistance
            }
        }
    }
    console.log(minLength)
    return Math.round(minLength*100)
};
closestPairOfPoints ([[0, 100], [3, 4], [58, 34], [22, 35], [121, 132], [140, 153]])