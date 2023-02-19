const input = ["SOOOO","XXXOO","LOOOO","OXXXX","OOOOE"]
const input2 = ["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"]
let arr = []

function solution(maps) {
  maps = maps.map(v=>v.split(""));
  let start = [];
  let lever = [];
  let end = [];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const rLen = maps.length;
  const cLen = maps[0].length;
  // find [x, y] start, lever, end 
  maps.forEach((m, x)=>{
   m.forEach((n, y)=>{
    if(n === "S") start = [x, y];
    if(n === "L") lever = [x, y];
    if(n === "E") end = [x, y];
   });
  });
  const move = ([x, y], [x2, y2]) =>{
    const queue = [[x,y]];
    const dp = Array(rLen).fill(null).map(()=>Array(cLen).fill(Infinity));
    const visited = Array(rLen).fill(null).map(()=>Array(cLen).fill(false));
    dp[x][y] = 0;
    while(queue.length) {
      const [px, py] = queue.shift();
      if(visited[px][py]) continue;
      visited[px][py] = true;

      for(let i = 0; i < 4; i++) {
        const nx = px + dx[i];
        const ny = py + dy[i];
        if(
          nx < 0 || 
          nx >= rLen ||
          ny < 0 || 
          ny >= cLen ||
          maps[nx][ny] === "X"
          ) continue;
        dp[nx][ny] = Math.min(dp[nx][ny], dp[px][py] + 1);
        if (visited[nx][ny]) continue;
        queue.push([nx, ny]);
      }
    }
    return dp[x2][y2] === Infinity ? -1 : dp[x2][y2]
  }
  const first = move(start, lever); 
  if (first === -1) return -1;
  const second = move(lever, end);
  if (second === -1) return -1;
  return first + second;
}
console.log(
solution(input2), 
solution(input),
)