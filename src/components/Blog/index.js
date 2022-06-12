import React from 'react';
import './blog.scss';

const blogs = [
  {
    title: 'Ninja Terminator - Bullet Bill Shit Film Night 2 (11/02/2022)',
    content: () => {
      return <div>
        <p>I found this film on a random trip to eBay while looking for a weird present for my friend. I saw the replica movie poster and the name intrigued me, leading me to the mad-as-a-bag-of-cats trailer.</p>
        <p>The plot is deceptively simple, three ninjas betray the ninja empire and steal the Golden Ninja Warrior statue, granting them the power to make a part of their body invincible. The ninja empire attempts to get the entire statue back. The ninja empire gets one part of the statue back, the second is in posession of Baron who is in charge of an evil gang that does evil things because evil and the final piece is in posession of Harry... Harry the Ninja... who also posesses a moustache, green camo ninja clothes and a Garfield phone. This plot, despite being the main plot of the film, actually takes up a minority of the run time. A cut of the film on YouTube that only includes scenes relevant to this plot has a runtime of 36 minutes, including the opening sequence; the entire film has a runtime of 87 minutes.</p>
        <p>The remaining 59% of the film is taken up by Jaguar, a henchman of Harry the Ninja, beating the shit out of seemingly everyone and having a questionable sexual encounter with his ex after running her off the road. There's also at least four kidnappings that happen during these scenes and one race to disarm a bomb with a clock on it tied to a lady.</p>
        <p>What makes this film so special though is hard to describe. It has a dreamlike quality where you don't question the madness that's going on. One scene has two characters talking accross a table with neither of them offscreen. More often than not, when the camera zooms in, it misses the framing it was going for and has to awkwardly pan to the talking character. Tiger, Baron's henchman, wears a ludicrous blonde wig. Harry's wife yells "the crabs have escaped" after dropping the crabs she was trying to cook and Harry hits one with a throwing knife. Baron eats a slice of watermelon with a knife and fork. A child's toy robot delivers a message to Harry from the Ninja Empire before the Ninja Empire calls him anyway and Harry answers on his fucking Garfield phone.</p>
        <p>Ninja Terminator is an absolute joy to watch. It's ninja madness from start to finish and I'll be looking out for more films along this line for future weeks.</p>
        <p>Rating: Solid Gold Shit!!!</p>
      </div>
    }
  },
  {
    title: 'Dragon Wars: D-Wars - Bullet Bill Shit Film Night 1 (28/01/2022)',
    content: () => {
      return <div>
        <p>Dragon Wars: D-Wars is not, as you might suspect, a film about reptilian penises battling. If you're anything like me then you'll be dissapointed but stick around because the plot is almost as deep as the plot of your standard pornograph. There's a man and a woman, the reincarnations of a warrior and a princess who, 500 years ago, failed to get the Good Dragon into heaven and killed themselves before the Bad Dragon could get into heaven.</p>
        <p>The "Hero" is possibly one of the blankest slates of a main character I've ever seen. It's as if someone got out a roleplaying game character sheet and never bothered to fill it in. His name was definitely mentioned but I don't remember it. He works as a journalist and that's pretty much all we know about him. He has zero traits, seemingly zero friends, we never see where he lives, he is dull as dishwater but, somehow, seems to have an almost magical ability to woo those around him. He is fawned over by women and can use his press badge to get the hospital receptionist to tell him details about a patient. He reminds me of the Worm Man from Godzilla (1998), another dull man who somehow makes women shiver.</p>
        <p>On to the main event though, the dragons. In a refreshing twist the dragons are actually more like wyrms or Eastern style dragons rather than the chunky pointy kinds we have in the West. Think Gyarados more than Charizard. I have to admit the visuals for the Bad Dragon were actually pretty good, the visuals for the bazooka wielding dinosaurs... not so much.</p>
        <p>Yes, there are dinosaurs carrying bazookas, yes they're amazing. In a lot of places it goes a bit 90s children's action, especially the main vilain who looks a lot like TMNT's Shredder.</p>
        <p>This is the kind of film I would have watched over and over again when I was 8. Yes it's shit and the plot is whack and the acting is bad but it kept me entertained. There were enough fun bits between the exposition dumps.</p>
        <p>Rating: Hot Shit!</p>
      </div>
    }
  }
]

function BlogSidebarItem ({title}) {
  return <div className="blog-sidebar-item">
    <h1>{title}</h1>
  </div>
}

function BlogItem ({blog}) {
  return <div className="blog-item">
    <h1>{blog.title.toUpperCase()}</h1>
    {blog.content()}
    <div className="inner-border"/>
  </div>
}

function Blog () {
  return <div id="blog" style={{height: /^\/blog/.test(window.location.pathname) ? '100vh' : 0}}>
    <div id="blog-sidebar">
      <BlogSidebarItem title="blog item 1" />
      <BlogSidebarItem title="blog item 2" />
      <BlogSidebarItem title="blog item 3" />
    </div>
    <div id="blog-content">
      {
        blogs.map(blog => {
          return <BlogItem key={blog.title} blog={blog}/>
        })
      }
    </div>
    <div className="blog-bg" id="blog-bg-1"></div>
    <div className="blog-bg" id="blog-bg-2"></div>
  </div>
};

export default Blog;