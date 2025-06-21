function amoiunttocoin(amount,coin){
    const result = [];
    for (let i = 0; i < coin.length; i++) {
        while(amount >= coin[i]){
            amount -= coin[i];
            result.push(coin[i]);
        }
    }
}