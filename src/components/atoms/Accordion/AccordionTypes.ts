export interface AccordionType {
    children?: React.ReactNode;
    isOpen?: boolean;
    onChangeOpen?: (event: React.MouseEvent) => void;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    headerStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
} 