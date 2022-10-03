import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Homepage from '../../../components/Homepage'

describe('render Homepage', () => {
    test('displaying message if the user clicks the button', async () => {
        const {getByText} = render(<Homepage />)

        await userEvent.click(getByText('Click me'))

        expect(getByText('You are cool :D')).toBeInTheDocument()
    })

    test('displaying message if the user clicks the button', async () => {
        const {getByText} = render(<Homepage />)

        await userEvent.click(getByText('Click me'))

        expect(getByText('You are cool :D')).toBeInTheDocument()
    })
})