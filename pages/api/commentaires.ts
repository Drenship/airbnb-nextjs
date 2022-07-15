// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  img: string
  name: string
  rating: string
  description: string
  date: string
}[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const commentaires = [
    {
      img: "https://pbs.twimg.com/profile_images/1518217670197448704/AThykk36_200x200.jpg",
      name: "Yacine K",
      rating: "5",
      description: "Juste un mot magnifique ! La piscine est encore plus belle en vraie ! Vraiment top ! Calme et tranquillité assurés… c’est vraiment la plus belle piscine du sud que j’ai pu testé ! Je reviendrais à bientôt",
      date: "août 2021",
    },
    {
      img: "https://pbs.twimg.com/profile_images/1540027700961845257/5b4MViX2_400x400.jpg",
      name: "Milhan M",
      rating: "4",
      description: "Cadre sublime 😍 Mathis super gentil merci de nous avoir accueillis, il nous a mis à l’aise et nous a proposé à plusieurs reprises si on voulait boire quelque chose ou manger une glace lol super gentil et très discret franchement top, je vous recommande ce lieu qui est identique à la description",
      date: "juin 2022",
    }
  ];

  res.status(200).json(commentaires)
}