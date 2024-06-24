const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
const path = require('path')
const configPath = path.join(__dirname, './config.env')
const databasePath = path.join(__dirname, './database.db')
if (existsSync(configPath)) require('dotenv').config({ path: configPath })
const DATABASE_URL =
  process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL
module.exports = {
  VERSION: require('./package.json').version,
  SESSION_ID: (process.env.SESSION_ID || ' 24_6_d37b_3832_24a6').trim(),
  DATABASE:
    DATABASE_URL === databasePath
      ? new Sequelize({
          dialect: 'sqlite',
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: 'postgres',
          ssl: true,
          protocol: 'postgres',
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  HANDLERS: (process.env.PREFIX || '^[/]').trim(),
  SUDO: process.env.SUDO || '2349060509982',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  BRANCH: 'master',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || '❤️,LyFE',
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE),
  LOG_MSG: toBool(process.env.LOG_MSG) || false,
  RMBG_KEY: process.env.RMBG_KEY || 'null',
  BAILEYS_LOG_LVL: process.env.BAILEYS_LOG_LVL || 'silent',
  LANG: (process.env.LANGUAG || 'en').toLowerCase(),
  WARN_LIMIT: process.env.WARN_LIMIT || 3,
  FORCE_LOGOUT: toBool(process.env.FORCE_LOGOUT),
  BRAINSHOP: process.env.BRAINSHOP || '159501,6pq8dPiYt7PdqHz3',
  DIS_BOT: process.env.DISABLE_BOT || 'null',
  ANTILINK_MSG: process.env.ANTILINK_MSG || '_Antilink Detected &mention kicked_',
  ANTISPAM_MSG: process.env.ANTISPAM_MSG || '_Antispam Detected &mention kicked_',
  ANTIWORDS_MSG: process.env.ANTIWORDS_MSG || '_AntiWord Detected &mention kicked_',
  ANTIWORDS: process.env.ANTIWORDS || 'word',
  MENTION: process.env.MENTION || '',
  SS_TOKEN: process.env.SS_TOKEN || '',
  MAX_UPLOAD: process.env.MAX_UPLOAD || 230,
  REJECT_CALL: toBool(process.env.REJECT_CALL),
  VPS: toBool(process.env.VPS),
  AUTO_STATUS_VIEW: (process.env.AUTO_STATUS_VIEW || 'false').trim(),
  SEND_READ: toBool(process.env.SEND_READ),
  KOYEB: toBool(process.env.KOYEB),
  KOYEB_NAME: (process.env.KOYEB_NAME || '').trim(),
  KOYEB_API: (process.env.KOYEB_API || '').trim(),
  AJOIN: toBool(process.env.AJOIN),
  GPT: (process.env.GPT || 'free').trim(),
  MODEL: (process.env.MODEL || 'gpt-3.5-turbo').trim(),
  APPROVE: (process.env.APPROVE || '').trim(),
  ANTI_DELETE: (process.env.ANTI_DELETE || 'null').trim(),
  PERSONAL_MESSAGE: process.env.PERSONAL_MESSAGE || 'null',
  DISABLE_START_MESSAGE: process.env.DISABLE_START_MESSAGE
    ? toBool(process.env.DISABLE_START_MESSAGE)
    : false,
  ANTI_BOT: (process.env.ANTI_BOT || 'off').trim(),
  ANTI_BOT_MESSAGE: process.env.ANTI_BOT_MESSAGE || '&mention removed',
  WARN_MESSAGE:
    process.env.WARN_MESSAGE ||
    '⚠️WARNING⚠️\n*User :* &mention\n*Warn :* &warn\n*Remaining :* &remaining',
  WARN_RESET_MESSAGE:
    process.env.WARN_RESET_MESSAGE || `WARN RESET\nUser : &mention\nRemaining : &remaining`,
  WARN_KICK_MESSAGE: process.env.WARN_KICK_MESSAGE || '&mention kicked',
  TRUECALLER: process.env.TRUECALLER,
  DELETE_TYPE: (process.env.DELETE_TYPE || '').trim(),
  LIST_TYPE: (process.env.LIST_TYPE || 'poll').trim(),
  BING_COOKIE: (process.env.BING_COOKIE || 'Imported_MUID=2E6FA74207ED6B5134AEB30906476A4D; MUID=2C5BCDE5EAF46F151478D9AAEB146E2E; MUIDB=2C5BCDE5EAF46F151478D9AAEB146E2E; _EDGE_V=1; SRCHD=AF=SHORUN; SRCHUID=V=2&GUID=1CCF6837B870480D8B15019DB536B801&dmnchg=1; EDGSRVCPERSIST=; _HPVN=CS=eyJQbiI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiUCJ9LCJTYyI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiSCJ9LCJReiI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiVCJ9LCJBcCI6dHJ1ZSwiTXV0ZSI6dHJ1ZSwiTGFkIjoiMjAyNC0wNC0wNFQwMDowMDowMFoiLCJJb3RkIjowLCJHd2IiOjAsIlRucyI6MCwiRGZ0IjpudWxsLCJNdnMiOjAsIkZsdCI6MCwiSW1wIjo1LCJUb2JuIjowfQ==; ABDEF=V=13&ABDV=13&MRNB=1713528539945&MRB=0; CUID=mRWwQRBPByrmyWBnjSsOENk0wPc=; EDGSRVC=lightschemeovr=displaytheme=edgeservices&EN=language=edgeservices; CSRFCookie=e5954fae-c90d-4c32-8265-569b56788267; ANON=A=122A23B49DF63AB6D062812DFFFFFFFF&E=1dcf&W=1; NAP=V=1.9&E=1d75&C=iIjY-_7vKwRiQ6O0XPDenkqemfDMcsu5PN5qd6Z-e8P9WFEaaSXm-Q&W=1; PPLState=1; WLS=C=47873488ab988337&N=Victor; MMCASM=ID=A5A13BE7A3544E74B55E777B5FCEFFE0; KievRPSSecAuth=FACCBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACOxgfywFXmkiQAS9BZs/M6T+SvzE0+hQH3u+ezzq5OFSoLp3RFwu6CsGREjnQ/0SZZvPRs37K/kovg4hYLHhoQ7Gp98dD44n6C4q3e5/+ouAqXMe5ftfZpaN5Bw7ewA93/Q4D8MZqdx1FXgym3CD5Uy4HxV3vgn8z67NyxeCpGZ8y3C/uGry0LjKv4X5NCtCbgdkqZUGGOqntcKq3LpiUwQ95ftnsWQy4doKc33/kwNmizFFL163DnSBQ16EhJPl24c0pZBJSF5LaJ0rTlah3O+0bs8cQzs6jF4uOP2zfDDS31FGhETNUHZ8dJuJHuvQ4UymPsDiKdH0uwauoW0ehMXT1deDSP0pnQjd0RV/p2HSVyprH2UzLCQ1QP2KwHAlc1lQDeHnBXV/A/8JDXgMOc9ArUoKXlOglkQWheUvoolJL1WCIGHJirx/amHxhfYYMKqv8gNJBGr3VItPeB8i2MTGQ9gUqY76S2Ozo0NZ//qeertHi025NaYYaNPY2sYCj8T/1tCLOLX9bQlRDOR8koH35OrMpEHiboGV58DZbDMhZjTp08X4I7ziQTAwUu4mKUr6N1AAVrWalqEjUEGlTyH8lGIMfL7SK+FbljdjPe0lZ7wyT4CwlLvk8CEYDsUbui7pBvGUvLWCSpGSjvvthatdd+x5nXxlml4ZG1EgfPaNZb5xMIfu5TYRHLcj3k7KJ6GP+ulIOiYnAlf2j9UESQUdS3E0BsKNSBvEwhg/YS85S2WxTa1iBy+qbFdxe91aY9FRVHWX7lrcsndY/6ZOSOZytQ2w3VW9yJwmkF3hD8hK7oGMjFn4V97f+/Fjlk+BocoC89biBMtxcDdjJc4/7MxTaoTl8A8pRmPaQ5/54uPOU2d4LbAY+xlzZfnX0juYB3xTJ3yA8yTl83AsN+Y3GzW7Bjjh74I8M4GNQhwQJcXM6QeudceBF1NXQBpHmAO8qs3iJ3dcL8w2N8Ih7onxx8ZoWlGHF40ACpMql8/eKgdEByuOF9srIJbaKt1d0iFF7UsQfrN/Bm6U0Bvo6Rmfj1GmxKdTF2252sPhVKhtmjVvzNTWzpvOAoRiVcr5+7wkG14vanJPgWrwp123oLk3AAeI3y8NMkTOqWDVJ2QzbXJvki4YcZehmTLssT0rp6F7shyeaPrHBgDyjY+F9HrTjTawf0YXQJvSYM7symmEVgh/gGWeh1Vw6Ub+Z7obwN10L3J5cvkPXVoB6vE5cBu8DddcLOQhuj75SZNNtUYBnJ6kbVU1gLmAEgpwOd+PfBhH0hUjOabcoHmCnh6R9p4fPCKlR+8dvflX+CMWU+MyfLgOXrQcNJ8oZDFx6sk/CsEYo50EvlXunuTILi/3keAoKpGIAKHDFaFMdCc/7QYZNYGgiiHOGlKZP2t7RjD+V6QJyOdWPYumwy8p+CEOmQnkTGfmSZNAMsH4JhUfLn2Lwn82igwPFzGlil5ukhQA3Eh05mniVi3D+pxB+3epnhYnMnY=; SRCHS=PC=U531; _SS=SID=3641C9F175D667A53EC8DD7A746D66D0&PC=U531&R=378&RB=378&GB=0&RG=0&RP=378; _EDGE_S=SID=196EACF32C3D60AE1098B8782D866156&ui=en-us&mkt=en-us; CortanaAppUID=843DAE812D99EC1DA1EF98F5F760FA34; USRLOC=HS=1&ELOC=LAT=9.062146186828613|LON=7.478549003601074|N=Abuja%2C%20Federal%20Capital%20Territory|ELT=1|&CLOC=LAT=9.0567|LON=7.4969|A=341846|TS=240624081650|SRC=I&BID=MjQwNjI0MDExNjQ1Xzk1ZjczNWFhZjY2NDk5N2FmMjZkMGY0YzUwOWIxZGU3N2QzMDQzYmE1OWY0NjU0ZGFjYmRkOTIyODlkOWVmODc=; SRCHUSR=DOB=20240327&T=1719046584000&POEX=W; _Rwho=u=d&ts=2024-06-22; ipv6=hit=1719050238010; _RwBf=r=0&ilt=0&ihpd=0&ispd=0&rc=378&rb=378&gb=0&rg=0&pc=378&mtu=0&rbb=0.0&g=0&cid=&clo=0&v=1&l=2024-06-22T07:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&ard=0001-01-01T00:00:00.0000000&rwdbt=0001-01-01T16:00:00.0000000-08:00&rwflt=2024-01-19T06:47:24.1763925-08:00&o=0&p=MSAAUTOENROLL&c=MR000M&t=6912&s=2024-01-19T14:44:42.2264923+00:00&ts=2024-06-22T08:57:06.5913554+00:00&rwred=0&wls=2&wlb=0&wle=0&ccp=2&lka=0&lkt=0&aad=0&TH=&mta=0&e=E17LjfhBooseFMOCqjlqQmlTE61ETyVXx2lNgo_ZrtKTlJgJU_mMloSSZF-bLZ0Y9Yww74nREDp7VX6ROiBQFA&cpt=0&A=122A23B49DF63AB6D062812DFFFFFFFF; EDGSRCHHPGUSR=CIBV=1.1779.0; EDGSRVCSCEN=shell=clientscopes=noheader-cspgrd-coauthor-chat-visibilitypm-devtoolsapi-udsedgeshop-wincopilot-udsinwin11-ntpquery-udsdlpconsent-udsfrontload-docvisibility-channelstable&chat=clientscopes=chat-noheader-udsedgeshop-channelstable-wincopilot-ntpquery-devtoolsapi-udsinwin11-udsdlpconsent-udsfrontload-cspgrd; _clck=vrx72v%7C2%7Cfmv%7C0%7C1607; _clsk=c70bx3%7C1719140453456%7C2%7C0%7Ck.clarity.ms%2Fcollect; _U=18YH0u-kdlyFJAO8XqZ7DrDGX96XwUmNuUR5tnHlbuRB3dP8YktG6KjwdNrLitvPXxvUQNWWVvdsUT-QwfSYbXrm5C6aoT85CoewZMk63M0LYZYLv0zuKfBzZZPQAOlvTOdAUcCvcEH16wMKAHQlwGVDFDbVAUdL07QZo4eC1SuNwlg3wM6PUlW60Nt3KP2igpWGGiJzrHhD9d3ntw6jMZZUhD_rgAY4FkfRRjA-qLV4; SRCHHPGUSR=SRCHLANG=en&DM=0&HV=1719217571&WTS=63851895490&IG=913524EB2E854BB4B958D079C3ADC6AF&PV=15.0.0&BRW=MS&BRH=MS&CW=300&CH=345&SCW=300&SCH=345&DPR=1.0&UTC=-420&CIBV=1.1779.0&EXLTT=12&PRVCW=300&PRVCH=345; GC=HUWkqChHH0aDiO98ji6oZk8aMDAdzBJxwSb26YFR5nQXxUy4gtXqiUXfnuqJMSYnDGWWciTVvPz_-KNggxS7Qw').trim(),
}
