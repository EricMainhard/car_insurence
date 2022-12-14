import useQuoter from "../hooks/useQuoter"

export const Error = () => {

    const {error} = useQuoter();

    return (
        <div className="bg-red-300 p-2">
            <p className="text-red-700 font-semibold text-center">{error}</p>
        </div>
    )
}