export const BRANDS = [
    {
        id: 1,
        name: "Peugeot",
        icon: "/img/peugeot.png"
    },
    {
        id: 2,
        name: "Renault",
        icon: "/img/renault.png"
    },
    {
        id: 3,
        name: "Volkswagen",
        icon: "/img/volkswagen.png"
    },
    {
        id: 4,
        name: "Toyota",
        icon: "/img/toyota.png"
    }
]

const YEAR_MAX = new Date().getFullYear();
export const YEARS = Array.from(Array(20), (value, index) => YEAR_MAX - index);

export const PLANS = [
    {
        id: 1,
        name: "Platinium",
        price: "1000"
    },
    {
        id: 2,
        name: "Gold",
        price: "750"
    },
    {
        id: 3,
        name: "Silver",
        price: "500"
    },
    {
        id: 4,
        name: "Bronze",
        price: "300"
    }
]