import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve comentários', () => {
        // Renderiza o post comment
        render(<PostComment />)

        //usa o change para alterar o text area e adicionar "Comentário 1"
        fireEvent.change(screen.getByTestId('textarea-comment-id'), {
            target: {
                value: 'Comentário 1'
            }
        })
        // usa o click para clicar no botão "comentar"
        fireEvent.click(screen.getByTestId('botao-teste-id'))

        // Adicionando segundo comentário
        fireEvent.change(screen.getByTestId('textarea-comment-id'), {
            target: {
                value: 'Comentário 2'
            }
        })

        // Clicando para adicionar o segundo comentário
        fireEvent.click(screen.getByTestId('botao-teste-id'))

        // Espera que exista 2 <li>
        expect(screen.getAllByTestId('comment-test-id')).toHaveLength(2)
    })
});