const Env = use('Env')

module.exports = {
  ally: {
    // Configuration for facebook
    facebook: {
      clientId: Env.get('FB_CLIENT_ID'),
      clientSecret: Env.get('FB_CLIENT_SECRET'),
      redirectUri: `${Env.get('APP_URL')}/facebook/authenticated`
    },

    // Configuration for github
    // github: {
    //   clientId: Env.get('GOOGLE_CLIENT_ID'),
    //   clientSecret: Env.get('GOOGLE_CLIENT_SECRET'),
    //   redirectUri: ${Env.get('APP_URL')}/authenticated/google''
    // }

  }
}
