function current_date() {
     const today = new Date();
            const year = today.getFullYear();
            const month = today.getMonth() + 1;
            const day = today.getDate();
            let addZero;
            if (num>10){
                addZero = num;
            }else{
                addZero = '0' + num;
            }
            const format1 = `${addZero(month)}-${addZero(day)}-${year}`;
            const format2 = `${addZero(month)}/${addZero(day)}/${year}`;
            const format3 = `${addZero(day)}-${addZero(month)}-${year}`;
            const format4 = `${addZero(day)}/${addZero(month)}/${year}`;
            console.log(format1);
            console.log(format2);
            console.log(format3);
            console.log(format4);
}
