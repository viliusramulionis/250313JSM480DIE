import { useContext } from "react";
import MainContext from "../context/MainContext";
import Alert from "../components/alert/Alert";

export default (props) => {
    const { context } = useContext(MainContext);

    return (
        <>
            <div className="container py-5">
                <h1 className="mb-5">{context.pageTitle}</h1>

                {/* Žinutės atvaizdavimas: */}
                <Alert />

                {props.children}
            </div>
        </>
    );
}