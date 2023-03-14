import { useState, useEffect, useRef } from 'react';

export default function useBackground() {
    const position = useRef<number>(0);
    const color = useRef<number>(48);
    const [background, setBackground] = useState<string>(
        "linear-gradient(90deg,hsl(48, 50%, 65%),#00000000 70.71%), linear-gradient(0deg,hsl(306, 50%, 65%), #00000000 70.71%),linear-gradient(210deg,hsl(174, 50%, 65%), #00000000 70.71%)"
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            position.current = position.current < 360 ? position.current + 1 : 0;
            color.current = color.current < 360 ? color.current + 1 : 0;
            configureBackgroundColor(position.current, color.current);
        }, 20);
        return () => clearTimeout(timer);
    }, [background]);

    const configureBackgroundColor = (position: number, color: number) => {
        const newBackground = `linear-gradient(${(position + 90) % 360}deg,hsl(${color % 360
            }, 50%, 65%),#00000000 70.71%), linear-gradient(${position % 360}deg, hsl(${(color + 248) % 360
            }, 50%, 65%), #00000000 70.71%),linear-gradient(${(position + 210) % 360
            }deg, hsl(${(color + 126) % 360}, 50%, 65%), #00000000 70.71%)`;
        setBackground(() => newBackground);
    };

    return { background }
}