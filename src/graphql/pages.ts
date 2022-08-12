import { gql } from 'graphql-request'
import { FRAGMENT_ABOUT_SECTION_MODULE } from '../components/organisms/About/fragment'
import { FRAGMENT_ROCKETS_SECTION_MODULE } from '../components/organisms/Rockets/fragment'

const HOME_MODULES_FRAGMENT = gql`
  # First, we import all the base fragments
  

  # We proceed with the modules
  ${FRAGMENT_ABOUT_SECTION_MODULE}
  ${FRAGMENT_ROCKETS_SECTION_MODULE}

  # Home modules
  fragment HomeModulesFragment on HomeModulesDynamicZone {
    ... on ComponentModulesAboutSection {
      ...AboutModuleFragment
    }
    ... on ComponentModulesRocketSection {
      ...RocketsModuleFragment
    }
  }
`

export const HOME_QUERY = gql`
  query Homepage {
    home {
      data {
        attributes {
          Modules {
            ...HomeModulesFragment
          }
        }
      }
    }
  }

  ${HOME_MODULES_FRAGMENT}