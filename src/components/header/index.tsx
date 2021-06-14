import logoImg from '../../assets/logo.svg';
import { Container } from './styles';  
import { Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionOnModal: () => void;
}

export function Header({ onOpenNewTransactionOnModal }: HeaderProps) {



    return (
        <Container>
            <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button" onClick={onOpenNewTransactionOnModal}>
                Nova Transação
            </button>
            </Content>
        </Container>
    )
}