export function calculateDifYears(year){
    let actualYear = new Date().getFullYear();
    return actualYear - year
}

export function calculateBrandPrice(brand){
    let brandIncrement;

    switch (brand) {
        case "1":
            brandIncrement = 1.3
            break;
        case "2":
            brandIncrement = 1.12
            break;
        case "3":
            brandIncrement = 1.2
            break;
        case "4":
            brandIncrement = 1.05
            break;
    }

    return brandIncrement
}

export function calculatePlan(plan){

    let planIncrement

    switch(plan){
        case "1":
        planIncrement = 1.5
        break;
        case "2":
        planIncrement = 1.3
        break;
        case "3":
        planIncrement = 1.05
        break;
        default:
        planIncrement = 1
        break;
    }

    return planIncrement;
}

export function formatCurrency(unformattedPrice){

    const options = { style: 'currency', currency: 'USD'};
    const numberFormat = new Intl.NumberFormat('en-US', options);

    let formattedPrice = numberFormat.format(unformattedPrice);

    return formattedPrice
}