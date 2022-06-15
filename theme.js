import {extendTheme} from '@chakra-ui/react';
import { TextStyle as Text } from './styles/components/TextComponent';
import {ButtonStyle as Button} from './styles/components/ButtonComponent';

const colors = {
    primaryLight : 'rgb(13, 204, 211)',
    primaryDark : 'rgb(44, 44, 84)',
    secondaryLight : 'rgb(122, 231, 199)',
    secondaryDark : 'rgb(13, 66, 150)',
    tertiary : 'rgb(216, 30, 91)'
}

const components = {
    Text,
    Button
}

const theme = extendTheme({colors, components})
export default theme;

/*
const colors = {
    primaryLight : 'rgb(221, 239, 169)',
    primaryDark : 'rgb(33, 39, 56)',
    secondaryLight : 'rgb(255, 112, 138)',
    secondaryDark : 'rgb(184, 0, 34)',
    tertiary : 'rgb(251, 139, 36)'
}
*/