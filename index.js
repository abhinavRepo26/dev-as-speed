
// export { default as Button } from './src/components/Button/Button';
// export { default as Dropdown } from './src/components/Dropdown/Dropdown';
// export { default as Modal } from './src/components/Modal/Modal';
// export { ThemeProvider ,useTheme} from './src/components/Theme/ThemeProvider';
import {  useTheme} from "./src/components/Theme/ThemeProvider";
import { SpeedProvider } from "./SpeedProvider";
import { useNetwork } from "./src/components/Network/NetworkProvider";

export {
    SpeedProvider,
    useTheme,
    useNetwork
}

