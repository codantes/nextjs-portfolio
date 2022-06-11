import {extendTheme} from '@chakra-ui/react';
import { TextStyle as Text } from './styles/components/TextComponent';

const colors = {
    primaryLight : 'rgb(221, 239, 169)',
    primaryDark : 'rgb(33, 39, 56)',
    secondaryLight : 'rgb(255, 112, 138)',
    secondaryDark : 'rgb(184, 0, 34)',
    tertiary : 'rgb(251, 139, 36)'
}

const components = {
    Text
}

const theme = extendTheme({colors, components})
export default theme;