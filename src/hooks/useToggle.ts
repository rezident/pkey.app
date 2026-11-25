import { useCallback, useState } from 'react';

export const useToggle = (initial: boolean = false) => {
    const [value, setValue] = useState<boolean>(initial);
    const toggle = useCallback(() => setValue((current) => !current), []);

    return [value, toggle] as const;
};
