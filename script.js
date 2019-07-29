var app = new Vue ({
  el: '#app',
  data: {
    cards: [
      {
        id: "coh",
        title: "Cash On Hand (USD)",
        headline: "$1,609,109.09",
        detailState: {"Collapsed": true},
        details: {
          headings: [
            "Account",
            "As Of",
            "Currency",
            "Amount",
          ],
          data: [
              {
              accountName: "RBC (CAD)",
              asOf: "7/25/2019",
              currency: "CAD",
              amount: "$1,387.91"
            },
            {
              accountName: "RBC GIC",
              asOf: "7/25/2019",
              currency: "USD",
              amount: "$150,000.00"
            },
            {
              accountName: "RBC (USD)",
              asOf: "7/25/2019",
              currency: "USD",
              amount: "$315,816.85"
            },
            {
              accountName: "ING (EUR)",
              asOf: "7/25/2019",
              currency: "EUR",
              amount: "€717.76"
            },
            {
              accountName: "ING (Depogaz)",
              asOf: "7/25/2019",
              currency: "RON",
              amount: "RON 69,604.90"
            },
            {
              accountName: "ING (Petrom OMV)",
              asOf: "7/25/2019",
              currency: "RON",
              amount: "RON 67,124.54"
            },
            {
              accountName: "ING (RON 1)",
              asOf: "7/25/2019",
              currency: "RON",
              amount: "RON 2,837,145.30"
            },
            {
              accountName: "ING (RON 2)",
              asOf: "7/25/2019",
              currency: "RON",
              amount: "RON 35,659.85"
            },
            {
              accountName: "ING (USD)",
              asOf: "7/25/2019",
              currency: "USD",
              amount: "$66,580.92"
            },
            {
              accountName: "Raiffeisen (RON)",
              asOf: "7/25/2019",
              currency: "RON",
              amount: "RON 19,289.84"
            },
            {
              accountName: "UniCredit (EUR)",
              asOf: "7/25/2019",
              currency: "EUR",
              amount: "€34,033.65"
            },
            {
              accountName: "UniCredit (RON 1)",
              asOf: "7/25/2019",
              currency: "RON",
              amount: "RON 1,203,675.39"
            },
            {
              accountName: "UniCredit (RON 2)",
              asOf: "7/25/2019",
              currency: "RON",
              amount: "RON 31,092.60"
            },
            {
              accountName: "UniCredit (USD)",
              asOf: "7/25/2019",
              currency: "USD",
              amount: "$158.67"
            },
          ]
        }
      },
      {
        id: "fundsin",
        title: "Receivables Expected Within 90 Days (USD)",
        headline: "$1,396,961.91",
        detailState: {"Collapsed": true},
        details:{
          headings: [
            "Date",
            "Client",
            "Amount (USD)",
          ],
          data: [
            {
              date: "7/24/2019",
              client: "Petrom OMV",
              amount: "$426,269.25",
            },
            {
              date: "7/31/2019",
              client: "Stratum Energy",
              amount: "$826,739.77",
            },
            {
              date: "8/21/2019",
              client: "Hunt Oil",
              amount: "$406.91",
            },
            {
              date: "9/1/2019",
              client: "Stratum Energy",
              amount: "$143,546.13",
            },
          ]
        }
      },
      {
        id: "fundsout",
        title: "Payables Due Within 90 Days (USD)",
        headline: "$452,351.00",
        detailState: {"Collapsed": true},
        details:{
          headings: [
            "Date",
            "Vendor",
            "Amount (USD)",
          ],
          data: [
            {
              date: "7/24/2019",
              client: "Romanian Supplier 1",
              amount: "$426,269.25",
            },
            {
              date: "7/31/2019",
              client: "Spicy a meat a ball",
              amount: "$826,739.77",
            },
            {
              date: "8/21/2019",
              client: "Your Mom For 1000 BJs",
              amount: "$406.91",
            },
            {
              date: "9/1/2019",
              client: "James' Bonus",
              amount: "$143,546.13",
            },
          ]
        }
      },
    ],
  },
  methods: {
    toggleDetails: function (card) {
      card.detailState.Collapsed = !card.detailState.Collapsed
    }
  }
})

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1/1/2019', '2/1/2019', '3/1/2019', '4/1/2019', '5/1/2019', '6/1/2019', '7/1/2019', '8/1/2019'],
        datasets: [{
            label: 'Cash (USD)',
            data: [134512, 351816, 513518, 2186516, 1425, 185951, 2321423, 1283471],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            
            borderColor: 'rgba(255, 99, 132, 1)',
          
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
              ticks: {
                minRotation: 75
              }
            }]
        }
    }
});