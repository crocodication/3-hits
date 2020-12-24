import React from 'react'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import Slide from './components/slide'
import colorScheme from './references/color-scheme'

import SlideType from './references/types/slide'

const content = {
  title: 'Pembuatan Definisi PropsType',
  author: 'rynvva',
  slides: [
    {
      id: 0,
      title: 'This is the title',
      description: 'This is the description',
      imageURL: 'https://tutsforweb.com/wp-content/uploads/2018/03/carbon.png'
    },
    {
      id: 1,
      title: 'This is the title (2)',
      description: 'This is the description (2)',
      imageURL: 'https://tutsforweb.com/wp-content/uploads/2018/03/carbon.png'
    },
    {
      id: 2,
      title: 'This is the title (3)',
      description: 'This is the description (3)',
      imageURL: 'https://tutsforweb.com/wp-content/uploads/2018/03/carbon.png'
    },
    {
      id: 3,
      title: 'This is the title (4)',
      description: 'This is the description (4)',
      imageURL: 'https://tutsforweb.com/wp-content/uploads/2018/03/carbon.png'
    },
    {
      id: 4,
      title: 'This is the title (5)',
      description: 'This is the description (5)',
      imageURL: 'https://tutsforweb.com/wp-content/uploads/2018/03/carbon.png'
    }
  ] as SlideType[]
}

export default () => {
  return (
    <div
      style = {{
        backgroundColor: colorScheme.background,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw'
      }}
    >
      <div
        style = {{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Carousel>
          {
            content.slides.map(slide => (
              <Slide
                key = {slide.id}
                slide = {slide}
              />
            ))
          }
        </Carousel>
      </div>

      <div
        style = {{
          backgroundColor: colorScheme.innerBackground,
          padding: 20
        }}
      >
        <h2
          style = {{
            color: colorScheme.title,
            fontFamily: 'verdana',
            margin: 0
          }}
        >
          {content.title}
        </h2>

        <div
          style = {{
            color: colorScheme.description,
            fontFamily: 'verdana',
            marginTop: 5
          }}
        >
          {'oleh: '}
          
          <a
            href = '/#'
            style = {{
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            {content.author}
          </a>
        </div>
      </div>
    </div>
  )
}