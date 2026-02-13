import { PropDomains } from "../types/all-types"

import job from './../../public/cms-logo.png'
import job1 from './../../public/react-programmer.png'
import job3 from './../../public/graphic-design.png'

export const menuList = ['Home', 'Serviços', 'Sobre Nós', 'Contato']

export const domain0: PropDomains[] = [
  {
    domain: 'Node.js',
    icon: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-svg-download-png-3030179.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    domain: 'Express',
    icon: 'https://farbodshabani.github.io/portfolio/assets/images/icons/expressIcon.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    domain: 'Swagger',
    icon: 'https://svgstack.com/media/img/swagger-logo-xTUe014050.webp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    domain: 'JSON',
    icon: 'https://i0.wp.com/chewbii.com/wp-content/uploads/2015/11/json-logo.png?fit=650%2C650&ssl=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  }
]

export const domain1: PropDomains[] = [
  {
    domain: 'React',
    icon: 'https://www.golden-team.org/static/services/reactjs.webp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    domain: 'React Native',
    icon: 'https://www.golden-team.org/static/services/reactjs.webp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    domain: 'Typescript',
    icon: 'https://cdn-icons-png.flaticon.com/256/5968/5968381.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    domain: 'Javascript',
    icon: 'https://cdn.iconscout.com/icon/free/png-256/free-javascript-logo-icon-svg-download-png-2284965.png?f=webp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  }
]

export const domain2: PropDomains[] = [
  {
    domain: 'Figma',
    icon: 'https://cdn-icons-png.flaticon.com/256/5968/5968705.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod'
  },
  {
    domain: 'Adobe XD',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/500px-Adobe_XD_CC_icon.svg.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod'
  },
  {
    domain: 'Adobe Illustrator',
    icon: 'https://cdn-1.webcatalog.io/catalog/adobe-illustrator/adobe-illustrator-icon-filled-256.png?v=1769992297214',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod'
  }
]

export const domain3: PropDomains[] = [

  {
    domain: 'Adobe Illustrator',
    icon: 'https://cdn-1.webcatalog.io/catalog/adobe-illustrator/adobe-illustrator-icon-filled-256.png?v=1769992297214',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod'
  },
  {
    domain: 'Adobe Photoshop',
    icon: 'https://cdn-1.webcatalog.io/catalog/adobe-photoshop-express/adobe-photoshop-express-icon-filled-256.png?v=1770597316457',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod'
  },
  {
    domain: 'Corel Draw',
    icon: 'https://cdn-public.softwarereviews.com/production/favicons/offerings/2092/original/Download-CorelDRAW-Graphics-Suite-2023-v24.4.0.636.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod'
  }
]

export const sectorsCard = [
  {
    role:'CMS',
    job_img: job,
    domain: domain0,
    gradFrom:'#e4a346',
    gradTo:'#2d6f73'
  },
  {
    role:'Software Develpment',
    job_img: job1,
    domain: domain1,
    gradFrom:'#3f5a87',
    gradTo:'#ac445d'
  },
  {
    role:'Web Design',
    job_img: 'https://cdn3d.iconscout.com/3d/premium/thumb/designer-grafico-3d-icon-png-download-4849606.png',
    domain: domain2,
    gradFrom: '#942b3a',
    gradTo:'#662a46'
  },
  {
    role:'Graphic Design',
    job_img: job3,
    domain: domain3,
    gradFrom: '#942b3a',
    gradTo:'#662a46'
  },
]