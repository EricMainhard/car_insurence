import { Form } from './Form.jsx';
import { Result } from './Result.jsx';
import useQuoter from '../hooks/useQuoter.jsx';

export const AppInsurance = () => {

    const { result } = useQuoter();

    return(
        <>
            <header className="my-10 w-5/6 md:w-2/3 mx-auto">
                <h1 className="text-white text-center text-4xl font-black">
                    Car Insurance Quoter
                </h1>
            </header>
            <main className="w-5/6 bg-white md:w-2/3 lg:2/4 mx-auto shadow rounded-lg p-10 my-5">
                <Form/>
                {result ? <Result/> : null}
            </main>
        </>
    )
}