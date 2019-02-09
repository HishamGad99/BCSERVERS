const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "#"


client.on('message', async msg => {
    if(msg.content.startsWith(prefix + 'bc')) {
      let roleW = msg.mentions.roles.first();
      let args2 = msg.content.split(" ").slice(2).join(" ");
       if(!msg.guild.members.get(msg.author.id).hasPermission('ADMINISTRATOR')) return msg.channel.send('Required Administrator Permission') 
       let role = msg.guild.roles.find(`name`, roleW.name);
       if(!role) return msg.reply(`Could't find \`${roleW.name}\` role.`).then( msgs => msgs.delete(3000)); 
       let nomsg = 0;
         msg.channel.send(`**- [ :mailbox_closed:  :: ${nomsg} ] ・عدد الرسائل المرسلة**`).then(msgs => {
         role.members.forEach(m =>{
        m.send(args2.replace('[user]', m).replace('[server]', m.guild.name).replace('[sender]', msg.author.username)).then( () =>{
          nomsg++;
                  if(!msgs) return;
                  msgs.edit(`**- [ :mailbox_closed:  :: ${nomsg} ] ・عدد الرسائل المرسلة**`);
        }).catch(e => {
          nomsg++;
                  if(!msgs) return;
          msgs.edit(`**- [ :mailbox_closed:  :: ${nomsg} ] ・عدد الرسائل المرسلة**`);
        });
        }); 
      });
      }});

//bc

client.on("message", message => {
    if (message.content.startsWith("#obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "#";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });








client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });




 

client.on('ready', function(){    
    var ms = 40000 ;    
    var setGame = ['AĆE Server','#bc','#obc'];    
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],`http://www.youtube.com`);    
}, ms);    
    
});





client.login(process.env.TOKEN);
