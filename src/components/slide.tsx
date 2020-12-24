import colorScheme from '../references/color-scheme'

import SlideType from '../references/types/slide'

type SlidePropsType = {
    slide: SlideType
}

export default (props: SlidePropsType) => {
    return (
      <div
        style = {{
          padding: 10
        }}
      >
        <div
          style = {{
            backgroundColor: colorScheme.innerBackground,
            borderRadius: 5,
            boxShadow: '6px 6px 2px rgba(240, 240, 240, 0.025)',
            display: 'flex',
            flexDirection: 'row',
            height: 400,
            width: 750
          }}
        >
          <div
            style = {{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
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
              {props.slide.title}
            </h2>
  
            {
              props.slide.description != undefined ?
                <p
                  style = {{
                    color: colorScheme.description,
                    fontFamily: 'verdana',
                    margin: 0,
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
              height: 360,
              padding: 20,
              width: 360
            }}
          >
            <img
              height = '100%'
              src = {props.slide.imageURL}
              style = {{
                objectFit: 'contain'
              }}
              width = '100%'
            />
          </div>
        </div>
      </div>
    )
}