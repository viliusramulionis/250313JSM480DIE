import { useContext } from "react";
import MainContext from "../../context/MainContext";

export default () => {
    const { context } = useContext(MainContext);

    return context.message && (
        <div className={'alert alert-' + context.status}>
            {context.message}
        </div>
    );
}