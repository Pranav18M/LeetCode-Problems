var minimumCost = function(source, target, original, changed, cost) {

    const INF = 1e9;
    let dist = Array.from({length:26},()=>Array(26).fill(INF));

    // cost to convert char to itself = 0
    for(let i=0;i<26;i++) dist[i][i]=0;

    // direct conversions
    for(let i=0;i<original.length;i++){
        let u = original[i].charCodeAt(0)-97;
        let v = changed[i].charCodeAt(0)-97;
        dist[u][v] = Math.min(dist[u][v], cost[i]);
    }

    // Floyd-Warshall
    for(let k=0;k<26;k++){
        for(let i=0;i<26;i++){
            for(let j=0;j<26;j++){
                dist[i][j] = Math.min(
                    dist[i][j],
                    dist[i][k] + dist[k][j]
                );
            }
        }
    }

    let ans = 0;

    for(let i=0;i<source.length;i++){
        let a = source[i].charCodeAt(0)-97;
        let b = target[i].charCodeAt(0)-97;

        if(dist[a][b] === INF) return -1;
        ans += dist[a][b];
    }

    return ans;
};
