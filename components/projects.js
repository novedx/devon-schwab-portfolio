// YouTube thumbnail helper — hqdefault always exists (letterboxed; object-cover crops bars)
const yt = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

// `featured: true` pieces show on the homepage. Everything else lives on /additional-works.
export const projects = [
  {
    title: 'Seth and Sabrina Carpenter Go Day Drinking',
    role: 'Editor',
    url: 'https://www.youtube.com/watch?v=GLq-fAxFUfQ',
    thumb: yt('GLq-fAxFUfQ'),
    featured: true,
  },
  {
    title: 'Backstage Pitch',
    role: 'Editor',
    url: 'https://youtu.be/b-ovnCo4DUw',
    thumb: yt('b-ovnCo4DUw'),
    featured: true,
  },
  {
    title: 'Larry David Joins the Late Night Writing Staff',
    role: 'Editor',
    url: 'https://www.youtube.com/watch?v=CW8z0jeCoJo',
    thumb: yt('CW8z0jeCoJo'),
    featured: true,
  },
  {
    title: 'How Do We Talk About Mass Shootings if They Always Happen?: Decade Edition',
    role: 'Post Production Lead',
    url: 'https://www.youtube.com/watch?v=dCWTFAIN-O0',
    thumb: yt('dCWTFAIN-O0'),
    featured: true,
  },
  {
    title: 'Seth and First Lady Michelle Obama Give College Freshmen Advice',
    role: 'Editor',
    url: 'https://www.youtube.com/watch?v=kCkVLg4aPIY',
    thumb: yt('kCkVLg4aPIY'),
    featured: true,
  },
  {
    title: 'Anne Hathaway: The Last Scene of the Romantic Comedy',
    role: 'Editor',
    url: 'https://youtu.be/diD68gEntPI',
    thumb: yt('diD68gEntPI'),
  },
  {
    title: 'Sarah News',
    role: 'Animator — Opening Graphics Package',
    url: 'https://youtu.be/dxgQ5FXqEps',
    thumb: yt('dxgQ5FXqEps'),
  },
  {
    title: 'Jon Snow Attends A Dinner Party',
    role: 'Editor',
    url: 'https://youtu.be/BabsgCQhpu4',
    thumb: yt('BabsgCQhpu4'),
  },
  // {
  //   title: 'White Savior',
  //   role: 'Editor',
  //   url: 'https://youtu.be/T_RTnuJvg6U',
  //   thumb: yt('T_RTnuJvg6U'),
  // },
  {
    title: 'SNL The Kids feat. Jim Carrey',
    role: 'Editor',
    url: 'https://youtu.be/f3R_elqYq-0',
    thumb: yt('f3R_elqYq-0'),
  },
  {
    title: 'Office Lightsaber feat. Andy Samberg',
    role: 'Editor',
    url: 'https://youtu.be/pJzutGCEr3g',
    thumb: yt('pJzutGCEr3g'),
  },
  {
    title: 'Seth and Rihanna Go Day Drinking',
    role: 'Editor',
    url: 'https://www.youtube.com/watch?v=X3n5Pk8fkLg',
    thumb: yt('X3n5Pk8fkLg'),
  },
];
