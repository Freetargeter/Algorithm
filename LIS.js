/**
LIS
문제
정수를 요소로 갖는 문자열을 입력받아 다음의 조건을 만족하는 LIS*의 길이를 리턴해야 합니다.

LIS: 배열의 연속되지 않는 부분 배열 중 모든 요소가 엄격하게 오름차순으로 정렬된 가장 긴 부분 배열(Longest Increasing Subsequence)
배열 [1, 2, 3]의 subseqeunce는 [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] 입니다.
엄격한 오름차순: 배열이 동일한 값을 가진 요소없이 오름차순으로 정렬되어 있는 경우를 말합니다.
입력
인자 1 : arr
number 타입을 요소로 갖는 배열
arr.length는 60,000 이하
arr[i]는 100,000 이하의 양의 정수
출력
number 타입을 리턴해야 합니다.
주의사항
LIS의 길이를 리턴해야 합니다.
LIS가 존재하지 않는 경우는 없습니다.
입출력 예시
let output = LIS([3, 2]);
console.log(output); // --> 1 (3 or 2)

output = LIS([3, 10, 2, 1, 20]);
console.log(output); // --> 3 (3, 10, 20)
Advanced
LIS를 계산하는 효율적인 알고리즘(O(N^2))이 존재합니다. 쉽지 않기 때문에 바로 레퍼런스 코드를 보고 이해하는 데 집중하시기 바랍니다.
subsequence는 문자열 또는 배열같이 순서가 있는 데이터에서 순서의 대소 관계가 유지되는 모든 부분 문자열 또는 부분 배열을 의미합니다. sequence가 순서 또는 서열을 의미하기 때문에 subsequence는 부분 서열이라고 부르기도 합니다. 반면 substring 또는 subarray는 연속된 형태의 부분 문자열 또는 부분 배열을 의미합니다. 문자열 'abcd'의 subsequence와 substring은 각각 아래와 같습니다.
substring: 'a', 'b', 'c', 'd', 'ab', 'bc', 'cd', 'abc', 'bcd', 'abcd'
subsequence: 'a', 'b', 'c', 'd', 'ab', 'ac', 'ad', 'bc', 'bd', 'cd', 'abc', 'abd', 'acd', 'bcd', 'abcd'
LIS의 길이 대신 LIS 자체를 리턴하는 함수를 구현해 보시기 바랍니다.*/
const LIS = function (arr) {
  //TODO: 여기에 코드를 작성합니다.
  // 함수 + for를 돌며 partArr을 만든다
  // if를 통해 연속하지 않으면 return 하여 회귀시킨다

  const AL = arr.length
  let result = [arr[0]]

    const getPartArr = (partArr, n) => {
      console.log(partArr)
    if(isAscending(partArr)) {
      if(result.length<partArr.length) result = partArr 
    } else return;

    for(let i=n; i<AL; i++){
      getPartArr(partArr.concat(arr[i]),i+1)
    }
  }
  getPartArr([],0)
  return result.length
};

const isAscending = (a) => {
  for(let i=0; i<a.length-1; i++){
    if(a[i]>=a[i+1]) return false
  }
  return true
}
LIS([3, 10, 2, 1, 20]);