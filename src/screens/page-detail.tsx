import React from 'react'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import Helmet from 'react-helmet'

import Slide from '../components/slide'
import colorScheme from '../references/color-scheme'

import ContentType from '../references/types/content'

type PropsType = {
  content: ContentType
}

export default (props: PropsType) => (
  <>
    <Helmet>
      <title>{`${require('../../package.json').name} | ${props.content.title}`}</title>
      <meta
        name = "description"
        content = {props.content.slides[0].description}
      />
    </Helmet>

    <div
      style = {{
        backgroundColor: colorScheme.background,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <div
        style = {{
          backgroundColor: colorScheme.innerBackground,
          padding: 20
        }}
      >
        <h2
          style = {{
            color: colorScheme.title
          }}
        >
          {props.content.title}
        </h2>

        <div
          style = {{
            color: colorScheme.description,
            marginTop: 5
          }}
        >
          {'oleh: '}
          
          <a
            href = {props.content.author.link}
            rel = 'noopener noreferrer'
            target = '_blank'
            style = {{
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            {props.content.author.name}
          </a>
        </div>
      </div>

      <div
        style = {{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1
        }}
      >
        <p
          style = {{
            color: 'gray',
            fontSize: 16,
            marginTop: 20,
            textAlign: 'center',
            textDecorationLine: 'underline'
          }}
        >
          Geser untuk navigasi ke slide yang lain
        </p>

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
              props.content.slides.map((slide, slideIndex) => (
                <Slide
                  key = {slide.id}
                  slide = {slide}
                  exampleLink = {slideIndex == props.content.slides.length - 1 ? props.content.exampleLink : undefined}
                />
              ))
            }
          </Carousel>
        </div>
      </div>
    </div>
  </>
)