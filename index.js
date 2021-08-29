import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import 'intl';
import 'intl/locale-data/jsonp/en';

AppRegistry.registerComponent(appName, () => App);
