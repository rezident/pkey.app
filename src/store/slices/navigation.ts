import type { StateCreator } from 'zustand';

type NavigationScreen = 'WELCOME' | 'CREATE_VAULT' | 'VAULT';

export interface NavigationSlice {
    navigation: {
        screen: NavigationScreen;
        navigate: (screen: NavigationScreen) => void;
    };
}

export const createNavigationSlice: StateCreator<NavigationSlice> = (set) => {
    return {
        navigation: {
            screen: 'WELCOME',
            navigate: (screen: NavigationScreen) => {
                set(({ navigation }) => ({ navigation: { ...navigation, screen } }));
            },
        },
    };
};

export const getScreen = ({ navigation }: NavigationSlice) => navigation.screen;
export const getNavigate = ({ navigation }: NavigationSlice) => navigation.navigate;
