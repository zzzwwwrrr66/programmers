const input = [["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]]

const defaultYear = "1991-06-12 "
function tenPlus(time){
  const newDate = new Date(defaultYear+time)
  newDate.setMinutes(newDate.getMinutes() + 10);
  return newDate.getTime();
}
function date (time){
  const newDate = new Date(defaultYear+time);
  return newDate.getTime();
}
function solution(book_time) {
  book_time = book_time.sort((a, b) => new Date("1991-06-12 "+a[0]).getTime() - new Date("1991-06-12 "+b[0]).getTime());
  
  var answer = 0;

  while(book_time.length) {
    answer++
    let v = book_time.shift();
    for(let i = 0; i < book_time.length; i++) {
      const checkOut = tenPlus(v[1]);
      const checkIn = date(book_time[i][0])
      if(checkOut <= checkIn ) {
        v = book_time.splice(i, 1)[0];
      } else {
        continue;
      }
    }
  }
  return answer;
}
console.log(
solution(input)
  )