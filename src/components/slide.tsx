import { Link } from 'react-router-dom'

import colorScheme from '../references/color-scheme'

import SlideType from '../references/types/slide'

type SlidePropsType = {
    slide: SlideType,
    exampleLink?: string
}

export default (props: SlidePropsType) => {
  const dimensionLimit = {
    min: 300,
    max: 650
  }

  return (
    <div
      style = {{
        maxWidth: dimensionLimit.max,
        minWidth: dimensionLimit.min,
        padding: 20,
        width: '100%'
      }}
    >
      <div
        style = {{
          backgroundColor: colorScheme.innerBackground,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          boxShadow: '6px 6px 2px rgba(240, 240, 240, 0.025)',
          display: 'flex',
          flex: 1,
          flexDirection: 'column'
        }}
      >
        <div
          style = {{
            padding: 20
          }}
        >
          <h2
            style = {{
              color: colorScheme.title
            }}
          >
            {props.slide.title}
          </h2>

          {
            props.slide.description != undefined ?
              <p
                style = {{
                  color: colorScheme.description,
                  marginTop: 5
                }}
              >
                {props.slide.description}
              </p>
              :
              null
          }
        </div>

        <div
          style = {{
            backgroundColor: colorScheme.imageBackground,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            padding: 20
          }}
        >
          <img
            src = {props.slide.image}
            style = {{
              height: dimensionLimit.min - 40,
              objectFit: 'contain',
              width: '100%'
            }}
          />
        </div>
      </div>

      {
        props.exampleLink ?
          <>
            <a
              href = {props.exampleLink}
              rel = 'noopener noreferrer'
              target = '_blank'
              style = {{
                textDecorationLine: 'none'
              }}
            >
              <p
                style = {{
                  backgroundColor: 'forestgreen',
                  borderRadius: 5,
                  boxShadow: '6px 6px 2px rgba(240, 240, 240, 0.025)',
                  color: 'white',
                  fontWeight: 'bold',
                  marginTop: 20,
                  padding: 10,
                  textAlign: 'center'
                }}
              >
                Open Editable Example
              </p>
            </a>

            <Link
              to = '/'
              style = {{
                textDecorationLine: 'none'
              }}
            >
              <p
                style = {{
                  backgroundColor: 'gray',
                  borderRadius: 5,
                  boxShadow: '6px 6px 2px rgba(240, 240, 240, 0.025)',
                  color: 'white',
                  fontWeight: 'bold',
                  marginTop: 20,
                  padding: 10,
                  textAlign: 'center'
                }}
              >
                Go To Homepage
              </p>
            </Link>
          </>
          :
          null
      }
    </div>
  )
}