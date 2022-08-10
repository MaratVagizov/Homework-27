let bank = [
    {
        name: "uztelecom",
        budget: 200000,
        tax: 12,
        expensesPerYear: [
            {
                title: "rent",
                total: 13000,
            },
            {
                title: "salaries",
                total: 85000,
            },
            {
                title: "furniture",
                total: 15000,
            },
        ],
    },
    {
        name: "artel",
        budget: 500000,
        tax: 12,
        expensesPerYear: [{
                title: "rent",
                total: 15000,
            },
            {
                title: "salaries",
                total: 150000,
            },
            {
                title: "furniture",
                total: 25000,
            },
        ],
    },
    {
        name: "gm",
        budget: 1000000,
        tax: 12,
        expensesPerYear: [{
                title: "rent",
                total: 30000,
            },
            {
                title: "salaries",
                total: 350000,
            },
            {
                title: "furniture",
                total: 90000,
            }
        ]
    }
]

let tax_with_names = []

for (let item of bank) {
    item.tax_sum = item.budget * item.tax / 100
    tax_with_names.push(item.tax_sum)

    item.expensesPerYearTotal = item.expensesPerYear.reduce((a,b) => {
        return a + b.total
    }, 0)

    item.remainder = item.budget - item.tax_sum - item.expensesPerYearTotal
}

let max = Math.max(...tax_with_names)
let min = Math.min(...tax_with_names)

max = bank.find(item => item.tax_sum === max)
min = bank.find(item => item.tax_sum === min)


console.log(bank)
console.log(min)
console.log(max)