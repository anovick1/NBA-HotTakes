const db = require('../db')
const { User, Post, Comment } = require('../models')
require('dotenv').config()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
var axios = require('axios')

const getTweets = async (id) => {
  try {
    const response = await axios.get(
      'https://api.twitter.com/2/users/' +
        id +
        '/tweets?max_results=5&exclude=retweets,replies',
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`
        }
      }
    )
    return response.data.data
  } catch (error) {
    console.log(error.response)
    return error.response
  }
}

const main = async () => {
  User.collection.drop()
  Post.collection.drop()
  Comment.collection.drop()
  const stephen = await new User({
    username: 'stephenasmith',
    name: 'Stephen A Smith',
    bio: 'The real Stephen A. Smith',
    pfp: 'https://pbs.twimg.com/profile_images/1404454966790529029/I8hVs97x_400x400.jpg',
    twitterUrl:
      'https://twitter.com/stephenasmith?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    twitterid: '16302242',
    tweets: await getTweets('16302242')
  })
  await stephen.save()
  const skip = await new User({
    username: 'RealSkipBayless',
    name: 'Skip Bayless',
    bio: 'Daily sports truth, hottest sports debate on TV, 9:30AM - 12:00 EST. Fox Sports 1, Maybe not what you want to hear, but need to hear.',
    pfp: 'https://pbs.twimg.com/profile_images/778012625858768897/HE2EmvNo_400x400.jpg',
    twitterUrl: 'https://twitter.com/RealSkipBayless',
    twitterid: '43139414',
    tweets: await getTweets('43139414')
  })
  await skip.save()
  const perk = await new User({
    username: 'KendrickPerkins',
    name: 'Kendrick Perkins',
    bio: 'I’m not for everybody and I ain’t trying to be!!! Carry on…',
    pfp: 'https://pbs.twimg.com/profile_images/1547601139243163648/ZYpwBLNS_400x400.jpg',
    twitterUrl: 'https://twitter.com/KendrickPerkins',
    twitterid: '1007506423',
    tweets: await getTweets('1007506423')
  })
  await perk.save()
  const nick = await new User({
    username: 'getnickwright',
    name: 'Nick Wright',
    bio: 'I am always right',
    pfp: 'https://pbs.twimg.com/profile_images/1526765867232645126/93BR_VmU_400x400.jpg',
    twitterUrl: 'https://twitter.com/getnickwright',
    twitterid: '93129160',
    tweets: await getTweets('93129160')
  })
  await nick.save()
  const jj = await new User({
    username: 'jj_redick',
    name: 'JJ Redick',
    bio: 'Dad. Husband. Retired NBA Player.  On TV sometimes. Interstellar stan. Wine. Golf. Co-host of @OldManandThree podcast.',
    pfp: 'https://pbs.twimg.com/profile_images/1392521402641694721/oVuCIUCD_400x400.jpg',
    twitterUrl: 'https://twitter.com/jj_redick',
    twitterid: '1232718849868304384',
    tweets: await getTweets('1232718849868304384')
  })
  await jj.save()
  const dray = await new User({
    username: 'Money23Green',
    name: 'Draymond Green',
    bio: 'Forward for the Golden State Warriors by way of Michigan State and Saginaw Michigan... Owner of Performance Inspired Nutrition',
    pfp: 'https://pbs.twimg.com/profile_images/724646772337872899/b2OtF-YK_400x400.jpg',
    twitterUrl: 'https://twitter.com/Money23Green',
    twitterid: '116485600',
    tweets: await getTweets('116485600')
  })
  await dray.save()
  const kd = await new User({
    username: 'KDTrey5',
    name: 'Kevin Durant',
    bio: 'IM ME, I DO ME, AND I CHILL.',
    pfp: 'https://pbs.twimg.com/profile_images/1422772132283514882/cQIYcqJk_400x400.jpg',
    twitterUrl: 'https://twitter.com/KDTrey5',
    twitterid: '35936474',
    tweets: await getTweets('35936474')
  })
  await kd.save()
  const jerry = await new User({
    username: 'TheLogo',
    name: 'Jerry West',
    bio: 'Jerome Alan West, commonly known as Jerry West, is an American basketball executive and former player. He played professionally for the Los Angeles Lakers of the National Basketball Association.',
    pfp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaex8wDY6Td5rFdg58DaNS_6TGM3Hf6O5cDb_S_mDAmO-v0fwz',
    tweets: ['o']
  })
  await jerry.save()
  const bob = await new User({
    username: 'BobCousy',
    name: 'Bob Cousy',
    bio: 'I had 29 assists in a game',
    pfp: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_34/2979876/190821-bob-cousy-cs-1156a.jpg',
    tweets: ['9']
  })
  await bob.save()

  const post1 = await new Post({
    user: nick._id,
    title: 'Top 50 players in the last 50 years',
    date: '7/24/2022',
    text: 'I am wright',
    image:
      'https://pbs.twimg.com/media/FWwXuatWIAIwtc2?format=jpg&name=900x900',
    video: 'https://www.youtube.com/embed/aQ_ryDmS5Jw',
    likes: '-33'
  })
  await post1.save()

  const post2 = await new Post({
    user: perk._id,
    title: '2023 MVP: AD',
    date: '7/22/2022',
    text: 'Carry the hell on...',
    image: 'https://i.ytimg.com/vi/-jf_eH0azTQ/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/-jf_eH0azTQ',
    likes: '27'
  })
  await post2.save()

  const post3 = await new Post({
    user: jj._id,
    title: 'Plumbers and Firemen',
    date: '4/20/2022',
    text: 'I would cook Bob Cousy in 1v1',
    image: 'https://brobible.com/wp-content/uploads/2022/04/jjredick.jpg?w=640',
    video: 'https://www.youtube.com/embed/H2DzEv5aUEg',
    likes: '116'
  })
  await post3.save()
  const post4 = await new Post({
    user: stephen._id,
    title: 'Kyrie Franchise Destroyer',
    date: '6/30/2022',
    text: 'Prove me wrong',
    image: 'https://i.ytimg.com/vi/FJXOPH5qPcU/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/FJXOPH5qPcU',
    likes: '40'
  })
  await post4.save()
  const post5 = await new Post({
    user: dray._id,
    title: '2017 Warriors vs 1996 Bulls',
    date: '7/2/2022',
    text: 'I can’t help but notice our 2017 team would’ve beaten these Bulls by a dub and these Jazz by 40 if they’re going to play these brands of basketball. ',
    image:
      'https://www.nbcsports.com/sites/rsnunited/files/archive/assets_media_gallery/chicago/2020/04/15/bullsdubs_landscape_chi.jpg',
    video: 'https://www.youtube.com/embed/bjeg8Sfm0rI',
    likes: '82',
    dislikes: '66'
  })
  await post5.save()
  const post6 = await new Post({
    user: skip._id,
    title: 'Updated top 10',
    date: '4/15/2022',
    text: 'Here is my updated top 10 list. No shot LeBum can climb higher than 9. Steph not top 10.',
    image:
      'https://pbs.twimg.com/media/FYeIsmWXEAE_kvv?format=jpg&name=900x900',
    video: 'https://www.youtube.com/embed/2gqoRRKd19g',
    likes: '17',
    dislikes: '-63'
  })
  await post6.save()

  const comments = [
    {
      post: post1._id,
      user: kd._id,
      date: '6/30/2022',
      text: 'Facts and steph was way better.',
      likes: '4'
    },
    {
      post: post1._id,
      user: skip._id,
      date: '6/30/2022',
      text: 'LeBron is crying for Kyrie to go to the Lakers. So soft.',
      likes: '23'
    },
    {
      post: post2._id,
      user: dray._id,
      date: '4/16/2022',
      text: 'Bron at 9???? Are you kidding? Where is steph?!??!? The old media.....',
      likes: '42'
    },
    {
      post: post3._id,
      user: jj._id,
      date: '7/22/2022',
      text: "You know, I don't hate this. If he can stay healthy AD and the Lakers are going to be scary. I just find it hard to believe that he will out produce Bron ",
      likes: '56'
    },
    {
      post: post4._id,
      user: perk._id,
      date: '7/25/2022',
      text: 'You are an absolute idiot',
      likes: '35'
    },
    {
      post: post4._id,
      user: kd._id,
      date: '7/25/2022',
      text: 'LEFRAUD AT 3?! ARE YOU KIDDING ME!!!! Now on Undisputed....',
      likes: '29'
    },
    {
      post: post5._id,
      user: bob._id,
      date: '5/19/2022',
      text: 'And we must have had the best firemen and plumbers on the planet at the time. And I was very proud to play with all of them.',
      likes: '57'
    },
    {
      post: post5._id,
      user: jerry._id,
      date: '7/22/2022',
      text: 'Tell me what your career looked like. What did he do that determined games? You averaged 12 points a game in the league.',
      likes: '62'
    },
    {
      post: post5._id,
      user: perk._id,
      date: '7/24/2022',
      text: 'Dang yall still mad about this? Bob dribbled with one hand!!!! JJ would smoke you guys. Carry the hell on...',
      likes: '88'
    },
    {
      post: post6._id,
      user: kd._id,
      date: '7/25/2022',
      text: 'I can’t tell you what the results would be, but I do know that steve kerr would’ve demanded that we put steve kerr in as many pick and rolls as possible',
      likes: '43'
    }
  ]

  await Comment.insertMany(comments)
}

const run = async () => {
  await main()
  db.close()
}

run()
