// mediator
class Channel {
  private participants: Participants = {};

  public addParticipant(user: User) {
    const name = user.getName();
    this.participants[name] = user;
  }
  
  // notify method
  public send(message: string, from: User, to: User | null) {
    if (to) {
      to.receive(message, from);
    } else {
      Object.keys(this.participants).forEach(name => {
        if (name !== from.getName()) {
          this.participants[name].receive(message, from);
        }
      });
    }
  }
}

// concrete colleague
class User { 
  private username: string;
  private channel: Channel; // Channel is the mediator

  constructor(username: string, channel: Channel) {
    this.username = username;
    this.channel = channel;
  }

  public send(message: string, to: User | null = null) {
    this.channel.send(message, this, to);
  }

  public receive(message: string, from: User) {
    console.log(from.getName() + ' to ' + this.getName() + ': ' + message);
  }
  
  public setChannel(channel: Channel) {
    this.channel = channel;
  }

  public getName() {
    return this.username;
  }
}

interface Participants {
  [name: string]: User
}

// main
const channel = new Channel(); // mediator object

// colleagues
const mentor1 = new User('Alexandra', channel);
const mentor2 = new User('Sergiu', channel); 
const intern1 = new User('Teo', channel); 
const intern2 = new User('Lucian', channel); 

// mediator holds all components that can interact with each other
channel.addParticipant(mentor1);
channel.addParticipant(mentor2);
channel.addParticipant(intern1);
channel.addParticipant(intern2);

// notify method
mentor1.send('Don\'t forget about today\'s workshop!');
mentor1.send('Did you manage to do your homework, Teodora?', intern1);
mentor1.send('Did you manage to do your homework, Lucian?', intern2);




