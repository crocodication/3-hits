import ContentType from './types/content'

import content1Picture1 from '../images/content-1/1.png'
import content1Picture2 from '../images/content-1/2.jpg'
import content1Picture3 from '../images/content-1/3.jpg'
import content1Picture4 from '../images/content-1/4.png'
import content1Picture5 from '../images/content-1/5.png'

const contents = [
    {
        id: 0,
        routeName: '/pembuatan-definisi-type-untuk-props-hooks',
        title: 'Pembuatan Definisi Type Untuk Props (Hooks)',
        author: {
          name: 'rynvva',
          link: 'https://t.me/rynvva'
        },
        slides: [
          {
            id: 0,
            title: 'Pendahuluan',
            description: 'Kita lihat ini skrip yang ada pada kita, kita mau pakai komponen "SampleTitle", tapi pakai props apa ya untuk mengisi teks?',
            image: content1Picture1
          },
          {
            id: 1,
            title: 'Hijrah',
            description: 'Kita ngga bisa mikir terus nyari - nyari nerawang props nya apa berulang kali, ini custom component baru ada satu, kalau uda bejibun gimana? Hijrah ke .tsx',
            image: content1Picture2
          },
          {
            id: 2,
            title: 'Definisikan Type',
            description: 'Kita definisikan type, didalamnya kita petakan kemungkinan propsnya SampleTitle itu apa beserta tipe datanya, setelahnya kita assign tipe data props dari SampleTitle dengan tipe data SampleTitlePropsType',
            image: content1Picture3
          },
          {
            id: 3,
            title: 'Magic',
            description: 'Ketika akan mengisi props SampleTitle sudah ada suggest auto-complete nya',
            image: content1Picture4
          },
          {
            id: 4,
            title: "And That's It...",
            description: 'Begitulah cara anda untuk bisa mendefinisikan type untuk props',
            image: content1Picture5
          }
        ],
        exampleLink: 'https://snack.expo.io/amIbTaYgh'
    }
] as ContentType[]

export default contents