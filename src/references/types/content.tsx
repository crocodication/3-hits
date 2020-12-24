import SlideType from './slide'

type ContentType = {
    id: number,
    routeName: string,
    title: string,
    author: {
      name: string,
      link: string
    },
    slides: SlideType[],
    exampleLink: string
}

export default ContentType