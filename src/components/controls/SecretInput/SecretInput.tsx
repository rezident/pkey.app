import { EyeIcon, EyeOffIcon } from 'lucide-react';
import type { ComponentPropsWithoutRef, FC } from 'react';

import { Input } from '~/components/controls/Input/Input.tsx';
import { useToggle } from '~/hooks/useToggle.ts';

import styles from './SecretInput.module.css';

type Props = Omit<ComponentPropsWithoutRef<typeof Input>, 'type' | 'action' | 'controlClassName'>;

export const SecretInput: FC<Props> = (props) => {
    const [visible, toggleVisible] = useToggle();

    return (
        <Input
            {...props}
            controlClassName={styles.control}
            type={visible ? 'text' : 'password'}
            action={{
                icon: visible ? EyeOffIcon : EyeIcon,
                onClick: toggleVisible,
            }}
        />
    );
};
