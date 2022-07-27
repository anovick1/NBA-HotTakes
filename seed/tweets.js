// const db = require('../db')
// const { User, Post, Comment } = require('../models')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const main = async () => {
//   var axios = require('axios')

//   var config = {
//     method: 'get',
//     url: 'https://api.twitter.com/2/users/16302242/tweets',
//     headers: {
//       Authorization:
//         'Bearer AAAAAAAAAAAAAAAAAAAAAJcsfQEAAAAAH%2Fi49Xk7IUQWoXD90jdunqKPQPE%3DHPC32TJ4pXgPmH4XtAQvzaUiaj1UbBYG9ie5RiaC78xZMnp1hd',
//       Cookie:
//         'guest_id=v1%3A165894965636468580; guest_id_ads=v1%3A165894965636468580; guest_id_marketing=v1%3A165894965636468580; personalization_id="v1_pdaBW/hS8uxnHZ7FvPHeHQ=="'
//     }
//   }

//   axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data))
//     })
//     .catch(function (error) {
//       console.log(error)
//     })
// }

// const run = async () => {
//   db.dropDatabase()
//   await main()
//   db.close()
// }

// run()
