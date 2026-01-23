var twosum = function(nums,target){
    const map = new Map();

    for(let i=0; i < num.length; i++){
        const needed = target - num[i];

        if(map.has(needed)){
            return [map.get(needed),i];
        }
        map.set(num[i],i);
    }
};