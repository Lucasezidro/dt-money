import { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg';
import { Container } from './styles';  
import { Content } from './styles';

export function Header() {
    const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModal(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModal(false);
    }


    return (
        <Container>
            <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button" onClick={handleOpenNewTransactionModal}>
                Nova Transação
            </button>

            <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
                <h2>Cadatrar Transação</h2>
            </Modal>
            </Content>
        </Container>
    )
}